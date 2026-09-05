import Image, { type StaticImageData } from "next/image";
import { partnerAssets } from "@/config/assets";
import { officialChannels } from "@/config/site";

type OfficialChannel = {
  name: string;
  label: string;
  description: string;
  action: string;
  href: string;
  logo: StaticImageData;
  tone: string;
};

const channels: OfficialChannel[] = [
  {
    name: "SHOPEE MALL",
    label: "GIAN HÀNG BAKA CHÍNH HÃNG",
    description:
      "Xem các sản phẩm BAKA, giá bán và ưu đãi đang được áp dụng tại gian hàng chính thức.",
    action: "MỞ GIAN HÀNG",
    href: officialChannels.shopee,
    logo: partnerAssets.shopee,
    tone: "shopee",
  },
  {
    name: "TIKTOK",
    label: "KÊNH VIDEO CHÍNH THỨC",
    description:
      "Theo dõi nội dung ngắn, hướng dẫn sử dụng và những cập nhật mới nhất từ BAKA.",
    action: "XEM KÊNH TIKTOK",
    href: officialChannels.tiktok,
    logo: partnerAssets.tiktok,
    tone: "tiktok",
  },
  {
    name: "FACEBOOK",
    label: "TRANG THÔNG TIN CHÍNH THỨC",
    description:
      "Cập nhật thông tin thương hiệu, kiến thức hữu ích và kết nối trực tiếp với BAKA.",
    action: "MỞ TRANG FACEBOOK",
    href: officialChannels.facebook,
    logo: partnerAssets.facebook,
    tone: "facebook",
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export function PackagesSection() {
  return (
    <section className="packages-section" id="packages">
      <div className="section-container packages-section__inner">
        <header className="section-heading packages-heading" data-reveal="up">
          <p>.. KẾT NỐI CÙNG BAKA ..</p>
          <h2>KÊNH CHÍNH THỨC CỦA BAKA</h2>
          <span>
            Mua sản phẩm hoặc theo dõi BAKA tại các kênh chính thức dưới đây.
            Ba kênh đều được hiển thị đồng cấp để bạn lựa chọn thuận tiện.
          </span>
        </header>

        <div className="official-channels-list">
          {channels.map((channel, index) => (
            <article
              className={`official-channel-row official-channel-row--${channel.tone}`}
              data-reveal="up"
              data-reveal-delay={String(index * 90)}
              key={channel.name}
            >
              <span className="official-channel-row__number" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="official-channel-row__logo">
                <Image
                  src={channel.logo}
                  alt={`Logo ${channel.name}`}
                  sizes="(max-width: 767px) 220px, 240px"
                />
              </div>

              <div className="official-channel-row__identity">
                <span className="official-channel-status">
                  <i aria-hidden="true" /> KÊNH CHÍNH THỨC
                </span>
                <h3>{channel.name}</h3>
                <h4>{channel.label}</h4>
              </div>

              <p className="official-channel-row__description">
                {channel.description}
              </p>

              <a
                className="official-channel-row__button"
                href={channel.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`${channel.action} (mở trong thẻ mới)`}
              >
                {channel.action}
                <ArrowIcon />
              </a>
            </article>
          ))}
        </div>

        <p className="official-channels-note" data-reveal="up">
          Website BAKA không thanh toán trực tiếp. Giá, ưu đãi, vận chuyển và
          đổi trả được áp dụng theo chính sách của từng nền tảng.
        </p>
      </div>
    </section>
  );
}
