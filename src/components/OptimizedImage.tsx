"use client";

import Image, { type ImageProps } from "next/image";

type OptimizedImageProps = Omit<ImageProps, "src" | "alt"> & {
  src: string;
  alt: string;
  className?: string;
};

export function OptimizedImage({ src, alt, sizes = "100vw", fill = true, ...props }: OptimizedImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      sizes={sizes}
      fill={fill}
      {...props}
    />
  );
}
