import Image from "next/image";
import { partnerAssets } from "@/config/assets";

const marks = [
  { name: "Shopee Mall", image: partnerAssets.shopee },
  { name: "TikTok", image: partnerAssets.tiktok },
  { name: "Facebook", image: partnerAssets.facebook },
] as const;

export function BrandStrip() {
  return (
    <section className="brand-strip" id="partners" aria-labelledby="brand-strip-title">
      <div className="section-container brand-strip__inner">
        <div className="brand-strip__title"><p id="brand-strip-title">KÊNH CHÍNH THỨC <br className="brand-strip__mobile-break" /> CỦA BAKA</p></div>
        <div className="brand-strip__marks" aria-label="Kênh chính thức của BAKA">
          {marks.map((mark, index) => <span className={`brand-mark brand-mark--${index + 1}`} key={mark.name}><Image src={mark.image} alt={mark.name} width={150} height={48} quality={95} style={{ objectFit: "contain" }} /></span>)}
        </div>
      </div>
    </section>
  );
}
