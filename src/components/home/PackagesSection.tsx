import { ProductVisual } from "@/components/products/ProductVisual";
import { officialChannels } from "@/config/site";

const channels = [
  { name: "SHOPEE", subtitle: "GIAN HÀNG BAKA CHÍNH HÃNG", featured: true, label: "★ KÊNH MUA HÀNG ƯU TIÊN ★", href: officialChannels.shopee, visual: "pair", action: "MỞ SHOPEE" },
  { name: "TIKTOK", subtitle: "KÊNH NỘI DUNG CHÍNH THỨC", featured: false, label: null, href: officialChannels.tiktok, visual: "cacao", action: "MỞ TIKTOK" },
  { name: "FACEBOOK", subtitle: "KẾT NỐI CÙNG BAKA", featured: false, label: null, href: officialChannels.facebook, visual: "plus", action: "MỞ FACEBOOK" },
] as const;

export function PackagesSection() {
  return (
    <section className="packages-section" id="packages">
      <div className="section-container packages-section__inner">
        <div className="section-heading packages-heading" data-reveal="fade-up">
          <p>.. KẾT NỐI CÙNG BAKA ..</p>
          <h2>MUA TẠI KÊNH CHÍNH THỨC</h2>
        </div>
        <div className="packages-grid">
          {channels.map((item, index) => (
            <article className={`package-column${item.featured ? " package-column--featured" : ""}`} data-reveal="fade-up" data-reveal-delay={120 + index * 130} key={item.name}>
              {item.label && <div className="package-ribbon">{item.label}</div>}
              <div className="package-card">
                <div className="package-card__head">
                  <h3>{item.name}</h3>
                  <p>{item.subtitle}</p>
                </div>
                <div className="package-products package-products--channel" aria-label="Sản phẩm BAKA">
                  <ProductVisual variant={item.visual} />
                </div>
                <div className="package-card__data">
                  <strong>CHÍNH THỨC</strong>
                  <p>GIÁ VÀ ƯU ĐÃI: ĐANG CẬP NHẬT</p>
                  <span>Giao dịch, vận chuyển và đổi trả theo chính sách của nền tảng</span>
                </div>
                <a className="package-button" href={item.href} target="_blank" rel="noreferrer">{item.action}</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
