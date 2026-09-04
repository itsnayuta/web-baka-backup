import { BAKA_CACAO, BAKA_PLUS, type Product } from "@/data/products";
import Image, { type StaticImageData } from "next/image";
import { heroAssets, sectionAssets } from "@/config/assets";
import { officialChannels } from "@/config/site";

const rows: Array<{ product: Product; image: StaticImageData; className: string; kicker: string; body: string }> = [
  { product: BAKA_PLUS, image: sectionAssets.productShowcase.first, className: "showcase-row--one", kicker: "TINH BỘT KHÁNG TBKBAKA PLUS · 500 G · 20 GÓI × 25 G", body: "TBKBAKA PLUS có tinh bột kháng từ chuối xanh, đỗ xanh, protein thực vật, khoáng chất và các thành phần dinh dưỡng khác. Lựa chọn nguyên bản này linh hoạt, dễ kết hợp cùng sữa chua, yến mạch hoặc món ăn phù hợp." },
  { product: BAKA_CACAO, image: sectionAssets.productShowcase.cacaoThird, className: "showcase-row--two showcase-row--reverse", kicker: "TINH BỘT KHÁNG TBKBAKA CACAO · 500 G · 20 GÓI × 25 G", body: "TBKBAKA CACAO phát triển trên cùng nền tảng tinh bột kháng, kết hợp đỗ xanh, cacao, protein thực vật và các thành phần dinh dưỡng khác. Vị cacao mang đến một lựa chọn cảm quan khác cho nhịp dùng hằng ngày." },
];

export function ProductShowcase() {
  return <section className="product-showcase" id="products">
    <div className="section-container product-showcase__inner">
      {rows.map((row, index) => <article className={`showcase-row ${row.className}`} key={`${row.product.id}-${row.className}`}>
        <div className="showcase-thumb" data-reveal={index % 2 ? "fade-right" : "fade-left"} data-reveal-delay="100"><div className="showcase-shape" aria-hidden="true" /><Image className="showcase-product-asset" src={row.image} alt={`Hộp ${row.product.name}`} fill quality={95} sizes="(max-width: 767px) 640px, 900px" style={{ objectFit: "contain" }} /></div>
        <div className="showcase-content" data-reveal={index % 2 ? "fade-left" : "fade-right"} data-reveal-delay="220">
          <h2><a href={officialChannels.products} target="_blank" rel="noreferrer">{row.product.shortName === "PLUS" ? "BAKA PLUS" : "BAKA CACAO"}</a></h2><h3>{row.kicker}</h3><p>{row.body}</p>
          <div className="showcase-bottom"><a className="green-button" href={officialChannels.products} target="_blank" rel="noreferrer">KHÁM PHÁ</a></div>
        </div>
      </article>)}
    </div>
    <Image className="showcase-leaf showcase-leaf--left" src={heroAssets.leafLeft} alt="" width={220} height={320} quality={90} data-parallax="34" aria-hidden="true" />
    <Image className="showcase-leaf showcase-leaf--right" src={heroAssets.leafRight} alt="" width={220} height={320} quality={90} data-parallax="-30" aria-hidden="true" />
  </section>;
}
