import type { Metadata } from "next";
import { Oswald, Roboto } from "next/font/google";
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
  title: "BAKA | Tinh bột kháng từ chuối tiêu xanh Việt Nam",
  description: "BAKA phát triển sản phẩm tinh bột kháng từ chuối tiêu xanh Việt Nam, với hai lựa chọn TBKBAKA PLUS và TBKBAKA CACAO.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi">
      <body
        className={`${oswald.variable} ${roboto.variable}`}
        data-force-motion={process.env.NODE_ENV !== "production" ? "true" : undefined}
      >
        {children}
      </body>
    </html>
  );
}
