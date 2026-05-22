(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/analytics.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "initAnalytics",
    ()=>initAnalytics,
    "trackEvent",
    ()=>trackEvent,
    "trackPageView",
    ()=>trackPageView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const gaId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_GA_ID;
const plausibleDomain = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
function injectScript(src, attrs = {}) {
    if (typeof document === "undefined") return;
    if (document.querySelector(`script[src="${src}"]`)) return;
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    Object.entries(attrs).forEach(([key, value])=>script.setAttribute(key, value));
    document.head.appendChild(script);
}
function initAnalytics() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if (gaId) {
        injectScript(`https://www.googletagmanager.com/gtag/js?id=${gaId}`);
        window.dataLayer = window.dataLayer || [];
        window.gtag = window.gtag || function gtag(...args) {
            window.dataLayer?.push(args);
        };
        window.gtag("js", new Date());
        window.gtag("config", gaId, {
            send_page_view: false
        });
    }
    if (plausibleDomain) {
        injectScript("https://plausible.io/js/script.js", {
            "data-domain": plausibleDomain,
            defer: "true"
        });
    }
}
function trackEvent(event, payload = {}) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if (window.gtag) {
        window.gtag("event", event, payload);
    }
    if (window.plausible) {
        window.plausible(event, {
            props: payload
        });
    }
}
function trackPageView(path, title) {
    if (window.gtag && gaId) {
        window.gtag("config", gaId, {
            page_path: path,
            page_title: title
        });
    }
    if (window.plausible) {
        window.plausible("pageview", {
            props: {
                path,
                title
            }
        });
    }
    trackEvent("page_view", {
        path,
        title
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/context/InquiryContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InquiryProvider",
    ()=>InquiryProvider,
    "useInquiry",
    ()=>useInquiry
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$analytics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/analytics.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
const defaultFormData = {
    name: "",
    email: "",
    phone: "",
    destination: "",
    groupSize: "",
    dates: "",
    message: ""
};
const InquiryContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function InquiryProvider({ children }) {
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultFormData);
    const [formErrors, setFormErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const openModal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "InquiryProvider.useCallback[openModal]": (preFillDestination)=>{
            setFormData({
                "InquiryProvider.useCallback[openModal]": (prev)=>({
                        ...prev,
                        destination: preFillDestination || prev.destination
                    })
            }["InquiryProvider.useCallback[openModal]"]);
            setFormErrors({});
            setIsOpen(true);
            document.body.style.overflow = "hidden";
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$analytics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackEvent"])("inquiry_open", {
                destination: preFillDestination || formData.destination || "custom"
            });
        }
    }["InquiryProvider.useCallback[openModal]"], [
        formData.destination
    ]);
    const closeModal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "InquiryProvider.useCallback[closeModal]": ()=>{
            setIsOpen(false);
            document.body.style.overflow = "";
        }
    }["InquiryProvider.useCallback[closeModal]"], []);
    const updateField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "InquiryProvider.useCallback[updateField]": (field, value)=>{
            setFormData({
                "InquiryProvider.useCallback[updateField]": (prev)=>({
                        ...prev,
                        [field]: value
                    })
            }["InquiryProvider.useCallback[updateField]"]);
            setFormErrors({
                "InquiryProvider.useCallback[updateField]": (prev)=>({
                        ...prev,
                        [field]: undefined
                    })
            }["InquiryProvider.useCallback[updateField]"]);
        }
    }["InquiryProvider.useCallback[updateField]"], []);
    const resetForm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "InquiryProvider.useCallback[resetForm]": ()=>{
            setFormData(defaultFormData);
            setFormErrors({});
        }
    }["InquiryProvider.useCallback[resetForm]"], []);
    const submitForm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "InquiryProvider.useCallback[submitForm]": ()=>{
            const { name, email, phone, destination, groupSize, dates, message } = formData;
            const nextErrors = {};
            if (!name.trim()) nextErrors.name = "Please enter your name.";
            if (!phone.trim()) nextErrors.phone = "Please enter a WhatsApp or phone number.";
            if (!destination.trim()) nextErrors.destination = "Please choose or type a destination.";
            if (email.trim() && !/^\S+@\S+\.\S+$/.test(email.trim())) {
                nextErrors.email = "Please enter a valid email address.";
            }
            if (Object.keys(nextErrors).length > 0) {
                setFormErrors(nextErrors);
                return;
            }
            const text = encodeURIComponent(`Hello Travel Kings!\n\nI'm interested in planning a trip.\n\n*Name:* ${name}\n*Email:* ${email || "Not provided"}\n*Phone:* ${phone}\n*Package:* ${destination}\n*Group Size:* ${groupSize || "Not provided"}\n*Travel Dates:* ${dates || "Not provided"}\n*Message:* ${message || "No additional message"}`);
            const whatsappNumber = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919400678245";
            const url = `https://wa.me/${whatsappNumber}?text=${text}`;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$analytics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackEvent"])("inquiry_submit", {
                destination,
                groupSize,
                hasDates: Boolean(dates)
            });
            window.open(url, "_blank");
            closeModal();
            resetForm();
        }
    }["InquiryProvider.useCallback[submitForm]"], [
        formData,
        closeModal,
        resetForm
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InquiryContext.Provider, {
        value: {
            formData,
            formErrors,
            isOpen,
            openModal,
            closeModal,
            updateField,
            resetForm,
            submitForm
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/context/InquiryContext.tsx",
        lineNumber: 104,
        columnNumber: 5
    }, this);
}
_s(InquiryProvider, "6e1EAIk/mx53++DCLOGgRDuuy20=");
_c = InquiryProvider;
function useInquiry() {
    _s1();
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(InquiryContext);
    if (!ctx) throw new Error("useInquiry must be used within InquiryProvider");
    return ctx;
}
_s1(useInquiry, "/dMy7t63NXD4eYACoT93CePwGrg=");
var _c;
__turbopack_context__.k.register(_c, "InquiryProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0fys86n._.js.map