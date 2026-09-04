"use client";

import { useEffect, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { BAKA_CACAO, BAKA_PLUS, type Product } from "@/data/products";
import { heroAssets, sectionAssets } from "@/config/assets";
import { officialChannels } from "@/config/site";

const cards: Array<{ product: Product; image: StaticImageData; tone: string }> = [
  { product: BAKA_PLUS, image: sectionAssets.productCards.plus, tone: "green" },
  { product: BAKA_CACAO, image: sectionAssets.productCards.cacao, tone: "cacao" },
];

export function ProductCards() {
  const [active, setActive] = useState(0);
  const move = (step: number) => setActive((active + step + cards.length) % cards.length);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    if (!media.matches) return;
    const interval = window.setInterval(() => setActive((current) => (current + 1) % cards.length), 5000);
    return () => window.clearInterval(interval);
  }, []);

  return <section className="product-cards" aria-label="Sản phẩm BAKA">
    <div className="product-cards__viewport">
      <div className="product-cards__track" style={{ "--card-index": active } as React.CSSProperties}>
        {cards.map((card, index) => <article className="product-card-slide" data-reveal="fade-up" data-reveal-delay={160 + index * 140} key={`${card.product.id}-${index}`}>
          <div className="product-card">
            <div className={`product-card__thumb product-card__thumb--${card.tone}`}>
              <Image className="product-card__image" src={card.image} alt={`Thẻ giới thiệu ${card.product.name}`} fill quality={95} sizes="270px" style={{ objectFit: "contain" }} />
            </div>
            <div className="product-card__content">
              <h2><a href={officialChannels.products} target="_blank" rel="noreferrer">{card.product.shortName === "PLUS" ? "BAKA PLUS" : "BAKA CACAO"}</a></h2>
              <span className="product-card__price">ĐANG CẬP NHẬT</span>
              <div className="product-card__rating">500 G · 20 GÓI × 25 G</div>
              <div className="product-card__bottom"><a className="orange-small-button" href={officialChannels.products} target="_blank" rel="noreferrer">XEM NGAY</a></div>
            </div>
          </div>
        </article>)}
      </div>
    </div>
    <button className="cards-arrow cards-arrow--prev" onClick={() => move(-1)} aria-label="Sản phẩm trước">‹</button>
    <button className="cards-arrow cards-arrow--next" onClick={() => move(1)} aria-label="Sản phẩm tiếp theo">›</button>
    <div className="cards-dots">{cards.map((_,i)=><button className={i===active?"active":""} onClick={()=>setActive(i)} aria-label={`Đến sản phẩm ${i+1}`} key={i}/>)}</div>
    <Image className="page-leaf page-leaf--cards-left" src={heroAssets.leafLeft} alt="" width={320} height={320} quality={90} aria-hidden="true" />
    <Image className="page-leaf page-leaf--cards-right" src={heroAssets.leafRight} alt="" width={320} height={320} quality={90} aria-hidden="true" />
  </section>;
}
