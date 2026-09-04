import Image from "next/image";
import { heroAssets } from "@/config/assets";

type ProductVisualProps = {
  variant?: "pair" | "plus" | "cacao";
  priority?: boolean;
  className?: string;
};

export function ProductVisual({ variant = "pair", priority = false, className = "" }: ProductVisualProps) {
  const alt = variant === "pair" ? "Bộ sản phẩm BAKA" : variant === "plus" ? "BAKA PLUS" : "BAKA CACAO";
  return (
    <div className={`product-visual product-visual--${variant} ${className}`.trim()}>
      <Image
        src={heroAssets.product}
        alt={alt}
        width={760}
        height={760}
        priority={priority}
        loading={priority ? "eager" : undefined}
        fetchPriority={priority ? "high" : undefined}
        quality={95}
        sizes={variant === "pair" ? "(max-width: 767px) 640px, 900px" : "(max-width: 767px) 640px, 900px"}
        style={{ objectFit: "contain" }}
      />
    </div>
  );
}
