type NavigationItem = {
  label: string;
  href: string;
  children?: readonly string[];
};

export const siteConfig: {
  name: string;
  tagline: string;
  navigation: readonly NavigationItem[];
} = {
  name: "BAKA",
  tagline: "Dinh dưỡng cho hệ vi sinh",
  navigation: [
    { label: "Trang chủ", href: "#home" },
    { label: "Về BAKA", href: "#about" },
    { label: "Sản phẩm", href: "#products", children: ["BAKA PLUS", "BAKA CACAO"] },
    { label: "Tinh bột kháng", href: "#resistant-starch" },
    { label: "Kiến thức", href: "#knowledge" },
    { label: "Liên hệ", href: "#contact" },
  ],
};

export const officialChannels = {
  products: "https://beacons.ai/tinhbotkhangtbkbaka",
  shopee: "https://shopee.vn/baka.tinhbotkhang",
  tiktok: "https://www.tiktok.com/@baka.tinhbotkhang",
  facebook: "https://www.facebook.com/tinhbotkhang.tbkbaka",
} as const;

export const companyInfo = {
  legalName: "CÔNG TY CỔ PHẦN BAKA GROUP",
  internationalName: "BAKA GROUP JOINT STOCK COMPANY",
  taxCode: "4700293260",
  website: "https://baka.com.vn",
  hotline: "0963 080 606",
  hotlineHref: "tel:0963080606",
  email: "congtycophanbakagroup@gmail.com",
  emailHref: "mailto:congtycophanbakagroup@gmail.com",
  representativeOffice: "BTLK L15-05, Khu A, KĐT Dương Nội, Phường Hà Đông, Hà Nội",
} as const;
