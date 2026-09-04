import Image from "next/image";
import type { CSSProperties } from "react";
import { heroAssets, sectionAssets } from "@/config/assets";

const benefits = [
  { icon: "leaf", title: "CHUỐI XANH VIỆT NAM", body: "Tinh bột kháng có nguồn gốc từ chuối tiêu xanh Việt Nam." },
  { icon: "formula", title: "NỀN TẢNG KHOA HỌC", body: "Công nghệ được nghiên cứu và chuyển giao từ viện chuyên môn." },
  { icon: "measure", title: "QUY CÁCH TIỆN LỢI", body: "Mỗi hộp 500 g gồm 20 gói riêng biệt, mỗi gói 25 g." },
  { icon: "shield", title: "HAI LỰA CHỌN", body: "PLUS nguyên bản linh hoạt và CACAO với trải nghiệm vị cacao." },
] as const;

function BenefitIcon({ name }: { name: string }) {
  if (name === "formula") return <svg viewBox="0 0 52 52" aria-hidden="true"><path d="M19 5h14M22 5v14L10 41c-2 4 0 6 5 6h22c5 0 7-2 5-6L30 19V5M16 34h20M20 27h12"/></svg>;
  if (name === "shield") return <svg viewBox="0 0 52 52" aria-hidden="true"><path d="M26 5 43 11v13c0 12-7 19-17 23C16 43 9 36 9 24V11l17-6Z"/><path d="m18 26 5 5 11-12"/></svg>;
  if (name === "leaf") return <svg viewBox="0 0 52 52" aria-hidden="true"><path d="M44 8C25 8 12 15 9 30c-2 8 4 14 12 12 15-3 22-16 23-34Z"/><path d="M13 39c8-9 15-15 26-25"/></svg>;
  return <svg viewBox="0 0 52 52" aria-hidden="true"><path d="M8 17h36v21H8zM14 12v10M38 12v10M16 30h20M20 26v8M32 26v8"/><path d="M4 17h44"/></svg>;
}

export function BenefitsSection() {
  const sectionStyle = {
    "--features-background": `url("${sectionAssets.features.background.src}")`,
    "--features-top-shape": `url("${sectionAssets.features.topShape.src}")`,
    "--features-bottom-shape": `url("${sectionAssets.features.bottomShape.src}")`,
  } as CSSProperties;

  return (
    <section className="benefits-section" id="about" style={sectionStyle}>
      <div className="section-container benefits-section__inner">
        <div className="benefits-list">
          {benefits.map((benefit, index) => (
            <article className="benefit-item" data-reveal="fade-up" data-reveal-delay={200 + index * 100} key={benefit.title}>
              <div className="benefit-icon"><BenefitIcon name={benefit.icon} /></div>
              <h2>{benefit.title}</h2>
              <p>{benefit.body}</p>
            </article>
          ))}
        </div>
        <div className="benefits-visual" data-reveal="roll-in" data-reveal-delay="300">
          <div className="benefits-bowl benefits-bowl--asset"><Image src={heroAssets.powderLeft} alt="Bát bột BAKA PLUS" fill quality={95} sizes="(max-width: 767px) 640px, 750px" style={{ objectFit: "contain" }} /></div>
        </div>
      </div>
    </section>
  );
}
