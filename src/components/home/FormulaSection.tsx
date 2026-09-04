import Image from "next/image";
import type { CSSProperties } from "react";
import { heroAssets, sectionAssets } from "@/config/assets";

const formulaPoints = [
  "Nguồn tinh bột kháng từ chuối tiêu xanh Việt Nam",
  "Công nghệ được nghiên cứu và chuyển giao từ viện chuyên môn",
  "Kết nối nông nghiệp, nghiên cứu, sản xuất và kiểm soát chất lượng",
  "Hai lựa chọn sản phẩm: TBKBAKA PLUS và TBKBAKA CACAO",
  "Quy cách 500 g: 20 gói riêng, mỗi gói 25 g",
  "Sử dụng đúng hướng dẫn trên bao bì, không tự ý tăng lượng dùng",
  "Thông tin khoa học được trình bày thận trọng, không thay thế tư vấn y tế",
];

export function FormulaSection() {
  const sectionStyle = {
    "--formula-background": `url("${sectionAssets.formula.background.src}")`,
    "--formula-top-shape": `url("${sectionAssets.formula.topShape.src}")`,
    "--formula-bottom-shape": `url("${sectionAssets.formula.bottomShape.src}")`,
  } as CSSProperties;

  return <section className="formula-section" id="resistant-starch" style={sectionStyle}>
    <div className="section-container formula-section__inner">
      <div className="formula-copy"><div className="section-heading formula-heading" data-reveal="fade-right"><p>.. TỪ NÔNG SẢN ĐẾN ỨNG DỤNG ..</p><h2>NỀN TẢNG TẠO NÊN BAKA</h2></div>
        <ul>{formulaPoints.map((point, index)=><li data-reveal="fade-up" data-reveal-delay={100 + index * 65} key={point}><span>✓</span>{point}</li>)}</ul><a className="orange-outline-button" href="#knowledge" data-reveal="fade-up" data-reveal-delay="560">TÌM HIỂU THÊM</a>
      </div>
      <div className="formula-visual" data-reveal="zoom" data-reveal-delay="220"><div className="formula-orbit formula-orbit--asset"><span/><Image src={heroAssets.ingredientRight} alt="Bát bột BAKA CACAO" fill quality={95} sizes="(max-width: 767px) 480px, 640px" style={{ objectFit: "contain" }} /></div></div>
    </div>
  </section>;
}
