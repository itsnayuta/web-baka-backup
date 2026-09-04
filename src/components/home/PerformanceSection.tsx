import Image from "next/image";
import type { CSSProperties } from "react";
import { heroAssets, sectionAssets } from "@/config/assets";
import { officialChannels } from "@/config/site";

const facts = [
  { value: "2024", title: "HÀNH TRÌNH BAKA", body: "Kết nối nông sản và công nghệ Việt" },
  { value: "02", title: "LỰA CHỌN SẢN PHẨM", body: "TBKBAKA PLUS và TBKBAKA CACAO" },
  { value: "25G", title: "QUY CÁCH TIỆN LỢI", body: "20 gói riêng trong mỗi hộp 500 g" },
];

export function PerformanceSection() {
  const sectionStyle = {
    "--performance-formula-background": `url("${sectionAssets.formula.background.src}")`,
    "--performance-formula-top-shape": `url("${sectionAssets.formula.topShape.src}")`,
    "--performance-formula-bottom-shape": `url("${sectionAssets.formula.bottomShape.src}")`,
  } as CSSProperties;
  return <>
    <section className="performance-video" aria-label="Câu chuyện BAKA" style={sectionStyle}>
      <Image className="performance-product" src={heroAssets.product} alt="" fill sizes="100vw" style={{ objectFit: "contain" }} data-parallax="28" aria-hidden="true" />
      <div className="performance-art" aria-hidden="true" />
      <a className="video-play" href={officialChannels.tiktok} target="_blank" rel="noreferrer" aria-label="Xem nội dung BAKA trên TikTok" data-reveal="zoom" data-reveal-delay="160"><i /></a>
    </section>
    <section className="fact-section" aria-label="Thông tin nhanh về BAKA">
      <div className="section-container fact-section__inner">
        {facts.map((fact, index) => {
          const match = fact.value.match(/^(\d+)(.*)$/);
          const value = match?.[1] ?? "0";
          const suffix = match?.[2] ?? "";
          return <article className="fact-item" data-reveal="fade-up" data-reveal-delay={index * 120} key={fact.title}>
            <strong data-counter={value} data-counter-digits={value.length} data-counter-suffix={suffix}>{fact.value}</strong><div><h2>{fact.title}</h2><p>{fact.body}</p></div>
          </article>;
        })}
      </div>
    </section>
  </>;
}
