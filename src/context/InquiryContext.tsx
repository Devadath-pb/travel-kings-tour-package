"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { trackEvent } from "../lib/analytics";

export type FormData = {
  name: string;
  email: string;
  phone: string;
  destination: string;
  groupSize: string;
  dates: string;
  message: string;
};

type InquiryContextType = {
  formData: FormData;
  formErrors: Partial<Record<keyof FormData, string>>;
  isOpen: boolean;
  openModal: (preFillDestination?: string) => void;
  closeModal: () => void;
  updateField: (field: keyof FormData, value: string) => void;
  resetForm: () => void;
  submitForm: () => void;
};

const defaultFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  destination: "",
  groupSize: "",
  dates: "",
  message: "",
};

const InquiryContext = createContext<InquiryContextType | null>(null);

export function InquiryProvider({ children }: { children: ReactNode }) {
  const [formData, setFormData] = useState<FormData>(defaultFormData);
  const [formErrors, setFormErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback((preFillDestination?: string) => {
    const destination = preFillDestination ?? formData.destination ?? "custom";

    setFormData((prev) => ({
      ...prev,
      destination: preFillDestination ?? prev.destination,
    }));
    setFormErrors({});
    setIsOpen(true);

    trackEvent("inquiry_open", {
      destination,
    });
  }, [formData.destination]);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const updateField = useCallback((field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setFormErrors((prev) => ({ ...prev, [field]: undefined }));
  }, []);

  const resetForm = useCallback(() => {
    setFormData(defaultFormData);
    setFormErrors({});
  }, []);

  const submitForm = useCallback(() => {
    const { name, email, phone, destination, groupSize, dates, message } = formData;
    const nextErrors: Partial<Record<keyof FormData, string>> = {};

    if (!name.trim()) nextErrors.name = "Please enter your name.";
    if (!phone.trim()) nextErrors.phone = "Please enter a WhatsApp or phone number.";
    if (!destination.trim()) nextErrors.destination = "Please choose or type a destination.";
    if (!groupSize.trim()) nextErrors.groupSize = "Please enter your group size.";
    if (!dates.trim()) nextErrors.dates = "Please enter your travel dates.";
    if (email.trim() && !/^\S+@\S+\.\S+$/.test(email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (Object.keys(nextErrors).length > 0) {
      setFormErrors(nextErrors);
      return;
    }

    const text = encodeURIComponent(
      `Hello Travel Kings!\n\nI'm interested in planning a trip.\n\n*Name:* ${name}\n*Email:* ${email || "Not provided"}\n*Phone:* ${phone}\n*Package:* ${destination}\n*Group Size:* ${groupSize || "Not provided"}\n*Travel Dates:* ${dates || "Not provided"}\n*Message:* ${message || "No additional message"}`
    );
    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919400678245";
    const url = `https://wa.me/${whatsappNumber}?text=${text}`;
    trackEvent("inquiry_submit", {
      destination,
      groupSize,
      hasDates: Boolean(dates),
    });
    window.open(url, "_blank");
    closeModal();
    resetForm();
  }, [formData, closeModal, resetForm]);

  return (
    <InquiryContext.Provider
      value={{ formData, formErrors, isOpen, openModal, closeModal, updateField, resetForm, submitForm }}
    >
      {children}
    </InquiryContext.Provider>
  );
}

export function useInquiry() {
  const ctx = useContext(InquiryContext);
  if (!ctx) throw new Error("useInquiry must be used within InquiryProvider");
  return ctx;
}
