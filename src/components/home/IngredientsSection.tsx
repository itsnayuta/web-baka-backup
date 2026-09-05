import Image from "next/image";
import { heroAssets, sectionAssets } from "@/config/assets";

const audiences = [
  {
    title: "NGƯỜI QUAN TÂM TIÊU HÓA",
    body: "Dành cho người trưởng thành chủ động tìm hiểu vai trò của tinh bột kháng trong chế độ dinh dưỡng hằng ngày.",
    icon: "digestive",
  },
  {
    title: "NGƯỜI CHÚ TRỌNG HỆ VI SINH",
    body: "Phù hợp với người đang quan tâm chất xơ, probiotic và mối liên hệ giữa dinh dưỡng với hệ vi sinh đường ruột.",
    icon: "microbiome",
  },
  {
    title: "NGƯỜI ƯU TIÊN SỰ TIỆN LỢI",
    body: "Dạng gói 25 g thuận tiện cho người muốn bổ sung một nguồn tinh bột kháng vào chế độ ăn đa dạng.",
    icon: "routine",
  },
  {
    title: "NGƯỜI THEO ĐUỔI LỐI SỐNG KHỎE",
    body: "Một lựa chọn cho người trưởng thành muốn xây dựng thói quen dinh dưỡng chủ động, đều đặn và phù hợp mỗi ngày.",
    icon: "wellbeing",
  },
] as const;

function AudienceIcon({ name }: { name: (typeof audiences)[number]["icon"] }) {
  if (name === "digestive") return <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M18 7v9c0 4.8 2.1 7.3 6.2 7.3 4.8 0 7.8 2.8 7.8 7.5 0 6.1-4.4 10.2-10.4 10.2C14 41 9 35.7 9 28.2c0-5.1 2.1-9.4 6.2-12.8"/><path d="M25.5 7v8.5c0 2.4 1.2 3.6 3.7 3.6 5.8 0 9.8 4.7 9.8 11.3"/><path d="M16.5 30.5c1.8 2.5 4 3.7 6.6 3.7 2.2 0 3.8-.8 4.9-2.5"/></svg>;
  if (name === "microbiome") return <svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="5"/><circle cx="12" cy="15" r="4"/><circle cx="37" cy="13" r="3"/><circle cx="38" cy="34" r="4"/><circle cx="13" cy="36" r="3"/><path d="m15.5 17 5 4M28 21l6.5-5.5M28.5 27l6 4.5M20 28l-5 5.5"/></svg>;
  if (name === "routine") return <svg viewBox="0 0 48 48" aria-hidden="true"><rect x="9" y="11" width="30" height="29" rx="5"/><path d="M16 7v8M32 7v8M9 20h30M16 27h5M27 27h5M16 34h5"/></svg>;
  return <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M24 40S8 31.1 8 19.3C8 13.9 11.8 10 16.7 10c3.1 0 5.8 1.7 7.3 4.3 1.5-2.6 4.2-4.3 7.3-4.3 4.9 0 8.7 3.9 8.7 9.3C40 31.1 24 40 24 40Z"/><path d="M17 25h5l2-5 3.2 9 2-4H34"/></svg>;
}

export function IngredientsSection() {
  return <section className="audience-section" id="ingredient">
    <div className="section-container audience-section__inner">
      <header className="section-heading audience-heading" data-reveal="fade-up">
        <p>.. ĐỒNG HÀNH CÙNG BAKA ..</p>
        <h2>PHÙ HỢP VỚI AI?</h2>
        <span>BAKA hướng đến người trưởng thành chủ động quan tâm đến dinh dưỡng, tinh bột kháng và hệ vi sinh đường ruột.</span>
      </header>
      <div className="audience-layout">
        <figure className="audience-visual" data-reveal="fade-left" data-reveal-delay="120">
          <Image className="audience-lifestyle" src={sectionAssets.audience.lifestyle} alt="Những người trưởng thành duy trì thói quen dinh dưỡng lành mạnh" fill quality={92} sizes="(max-width: 767px) 100vw, 560px" />
          <div className="audience-visual__shade" />
          <figcaption><strong>DINH DƯỠNG CHỦ ĐỘNG</strong><span>Một lựa chọn thuận tiện cho nhịp sống mỗi ngày.</span></figcaption>
          <div className="audience-product"><Image src={sectionAssets.productShowcase.third} alt="Hộp Tinh Bột Kháng TBKBAKA PLUS" quality={95} sizes="(max-width: 767px) 180px, 280px" /></div>
        </figure>
        <div className="audience-copy">
          <div className="audience-grid">{audiences.map((audience,index)=><article className={`audience-card audience-card--${index+1}`} data-reveal="fade-up" data-reveal-delay={180 + index * 90} key={audience.title}>
            <div className="audience-card__icon"><AudienceIcon name={audience.icon} /><span>{String(index + 1).padStart(2, "0")}</span></div>
            <div><h3>{audience.title}</h3><p>{audience.body}</p></div>
          </article>)}</div>
          <p className="audience-note" data-reveal="fade-up" data-reveal-delay="520">Đối tượng sử dụng chính thức và hướng dẫn cụ thể được thực hiện theo thông tin trên nhãn sản phẩm.</p>
        </div>
      </div>
    </div>
    <Image className="page-leaf page-leaf--audience-left" src={heroAssets.leafRight} alt="" width={320} height={320} quality={90} aria-hidden="true" />
    <Image className="page-leaf page-leaf--audience-right" src={heroAssets.leafLeft} alt="" width={320} height={320} quality={90} aria-hidden="true" />
  </section>;
}
