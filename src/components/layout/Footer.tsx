import { Logo } from "@/components/layout/Logo";
import Image from "next/image";
import type { CSSProperties } from "react";
import { heroAssets, sectionAssets } from "@/config/assets";
import { companyInfo, officialChannels } from "@/config/site";

const aboutLinks = [
  ["Về BAKA", "#about"],
  ["TBKBAKA PLUS", "#products"],
  ["TBKBAKA CACAO", "#products"],
  ["Kênh chính thức", "#packages"],
  ["Liên hệ", "#contact"],
] as const;
const supportLinks = [
  ["Tinh bột kháng", "#resistant-starch"],
  ["Kiến thức", "#knowledge"],
  ["Câu hỏi thường gặp", "#knowledge"],
  ["Shopee chính hãng", officialChannels.shopee],
  ["TikTok BAKA", officialChannels.tiktok],
] as const;

export function Footer() {
  const galleryAssets = [
    sectionAssets.productShowcase.first,
    heroAssets.product,
    sectionAssets.productShowcase.second,
    heroAssets.powderLeft,
    heroAssets.ingredientRight,
  ];
  const footerStyle = {
    "--footer-top-shape": `url("${sectionAssets.footer.topShape.src}")`,
  } as CSSProperties;
  return (
    <footer className="site-footer" id="contact" style={footerStyle}>
      <div className="footer-gallery" aria-label="Thư viện hình ảnh BAKA">
        <div className="section-container footer-gallery__inner">
          {galleryAssets.map((asset, index) => <div className={`footer-tile footer-tile--${index + 1}`} data-reveal="fade-up" data-reveal-delay={index * 90} key={asset.src}><Image src={asset} alt="" fill quality={90} sizes="(max-width: 767px) 320px, 420px" style={{ objectFit: "contain" }} aria-hidden="true" /></div>)}
        </div>
      </div>
      <div className="footer-main">
        <div className="section-container footer-main__inner">
          <div className="footer-widgets">
            <div className="footer-widget footer-widget--brand" data-reveal="fade-up">
              <div className="footer-logo"><Logo /></div>
              <p>BAKA phát triển sản phẩm ứng dụng nghiên cứu khoa học vào nông sản Việt, tiên phong với tinh bột kháng từ chuối tiêu xanh.</p>
              <div className="footer-socials" aria-label="Kênh chính thức của BAKA"><a href={officialChannels.facebook} target="_blank" rel="noreferrer" aria-label="Facebook BAKA">f</a><a href={officialChannels.tiktok} target="_blank" rel="noreferrer" aria-label="TikTok BAKA">♪</a><a href={officialChannels.shopee} target="_blank" rel="noreferrer" aria-label="Shopee BAKA">S</a></div>
            </div>
            <div className="footer-widget footer-widget--about" data-reveal="fade-up" data-reveal-delay="100"><h2>VỀ BAKA</h2><ul>{aboutLinks.map(([label, href]) => <li key={label}><a href={href}>{label}</a></li>)}</ul></div>
            <div className="footer-widget footer-widget--support" data-reveal="fade-up" data-reveal-delay="200"><h2>HỖ TRỢ</h2><ul>{supportLinks.map(([label, href]) => <li key={label}><a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>{label}</a></li>)}</ul></div>
            <div className="footer-widget footer-widget--contact" data-reveal="fade-up" data-reveal-delay="300"><h2>LIÊN HỆ</h2><p><a href={companyInfo.hotlineHref}>Hotline: {companyInfo.hotline}</a><br /><a href={companyInfo.emailHref}>{companyInfo.email}</a><br />{companyInfo.representativeOffice}</p><div className="footer-contact-note">BỘ PHẬN CHĂM SÓC KHÁCH HÀNG</div></div>
          </div>
        </div>
        <i className="footer-leaf footer-leaf--one" aria-hidden="true" /><i className="footer-leaf footer-leaf--two" aria-hidden="true" />
      </div>
      <div className="footer-disclaimer"><div className="section-container"><strong>Thực phẩm này không phải là thuốc và không có tác dụng thay thế thuốc chữa bệnh.</strong></div></div>
      <div className="footer-copyright"><div className="section-container footer-copyright__inner"><p>© BAKA Group · MST {companyInfo.taxCode}</p><div>{companyInfo.legalName}</div></div></div>
    </footer>
  );
}
