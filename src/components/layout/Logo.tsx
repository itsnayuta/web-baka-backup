import Image from "next/image";
import { brandAssets } from "@/config/assets";
import { siteConfig } from "@/config/site";

export function Logo() {
  return (
    <span className="brand-logo" aria-label={siteConfig.name}>
      <Image
        className="brand-logo__image"
        src={brandAssets.logo}
        alt=""
        fill
        sizes="160px"
        quality={100}
        style={{ objectFit: "contain" }}
      />
    </span>
  );
}
