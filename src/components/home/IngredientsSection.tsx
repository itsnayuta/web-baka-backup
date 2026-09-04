import Image from "next/image";
import { heroAssets, sectionAssets } from "@/config/assets";

const ingredients = [
  ["TINH BỘT KHÁNG", "Có nguồn gốc từ chuối tiêu xanh Việt Nam."],
  ["ĐỖ XANH", "Một thành phần được công bố trong cả hai lựa chọn BAKA."],
  ["PROTEIN THỰC VẬT", "Thành phần dinh dưỡng có trong thông tin sản phẩm."],
  ["CACAO", "Tạo nên trải nghiệm hương vị riêng của TBKBAKA CACAO."],
];

export function IngredientsSection() {
  return <section className="ingredients-section" id="ingredient">
    <div className="section-container ingredients-section__inner">
      <div className="ingredients-product" data-reveal="fade-left" data-reveal-delay="120"><div className="ingredients-shape"/><Image className="ingredients-product-asset" src={sectionAssets.productShowcase.third} alt="Hộp BAKA PLUS" fill quality={95} sizes="(max-width: 767px) 640px, 900px" style={{ objectFit: "contain" }} /></div>
      <div className="ingredients-copy">
        <div className="section-heading ingredients-heading" data-reveal="fade-up"><p>.. KHÁM PHÁ BAKA ..</p><h2>THÀNH PHẦN NỔI BẬT</h2></div>
        <div className="ingredient-grid">{ingredients.map(([title,body],index)=><article className="ingredient-item" data-reveal="fade-up" data-reveal-delay={200 + index * 100} key={title}>
          <div className={`ingredient-art ingredient-art--${index+1}`}><span/><i/></div><div><h3>{title}</h3><p>{body}</p></div>
        </article>)}</div>
      </div>
    </div>
    <Image className="page-leaf page-leaf--ingredients-left" src={heroAssets.leafRight} alt="" width={320} height={320} quality={90} aria-hidden="true" />
    <Image className="page-leaf page-leaf--ingredients-right" src={heroAssets.leafLeft} alt="" width={320} height={320} quality={90} aria-hidden="true" />
  </section>;
}
