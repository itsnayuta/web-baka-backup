import type { Metadata } from "next";
import { Oswald, Roboto } from "next/font/google";
import { companyInfo } from "@/config/site";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin", "vietnamese"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const roboto = Roboto({
  subsets: ["latin", "vietnamese"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(companyInfo.website),
  title: "BAKA | Tinh bột kháng từ chuối tiêu xanh Việt Nam",
  description:
    "BAKA phát triển sản phẩm ứng dụng nghiên cứu khoa học vào nông sản Việt, tiên phong với tinh bột kháng từ chuối tiêu xanh. Lựa chọn chủ động nuôi dưỡng hệ vi sinh đường ruột.",
  keywords: [
    "tinh bột kháng",
    "BAKA",
    "tinh bột kháng baka",
    "chuối tiêu xanh",
    "hệ vi sinh đường ruột",
    "chất xơ",
    "dinh dưỡng đường ruột",
    "TBKBAKA PLUS",
    "TBKBAKA CACAO",
  ],
  authors: [{ name: companyInfo.legalName }],
  openGraph: {
    title: "BAKA | Chủ động nuôi dưỡng hệ vi sinh đường ruột",
    description:
      "Tinh bột kháng từ chuối tiêu xanh Việt Nam. Nghiên cứu và chuyển giao từ Viện Nghiên cứu Phát triển Dược và Mỹ phẩm.",
    url: companyInfo.website,
    siteName: "BAKA",
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BAKA | Tinh bột kháng từ chuối tiêu xanh Việt Nam",
    description: "Chủ động nuôi dưỡng hệ vi sinh đường ruột mỗi ngày.",
  },
  alternates: {
    canonical: companyInfo.website,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi">
      <body
        className={`${oswald.variable} ${roboto.variable}`}
        data-force-motion="true"
      >
        {children}
      </body>
    </html>
  );
}
