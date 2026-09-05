"use client";

import Image, { type StaticImageData } from "next/image";
import { useState, type CSSProperties, type KeyboardEvent } from "react";
import { sectionAssets } from "@/config/assets";

type DocumentItem = {
  image: StaticImageData;
  category: string;
  title: string;
};

const documents: DocumentItem[] = [
  {
    image: sectionAssets.documents.testReports[0],
    category: "HỒ SƠ KIỂM NGHIỆM",
    title: "Chứng nhận hệ thống ISO 22000:2018",
  },
  {
    image: sectionAssets.documents.testReports[1],
    category: "HỒ SƠ KIỂM NGHIỆM",
    title: "Phiếu kết quả kiểm nghiệm tinh bột kháng",
  },
  {
    image: sectionAssets.documents.testReports[2],
    category: "HỒ SƠ KIỂM NGHIỆM",
    title: "Chứng nhận chiếu xạ sản phẩm",
  },
  {
    image: sectionAssets.documents.certificates[0],
    category: "CHỨNG NHẬN SẢN PHẨM",
    title: "Sản phẩm nông nghiệp tiêu biểu tỉnh Thái Nguyên",
  },
  {
    image: sectionAssets.documents.certificates[1],
    category: "CHỨNG NHẬN SẢN PHẨM",
    title: "Chứng nhận OCOP 3 sao",
  },
  {
    image: sectionAssets.documents.certificates[2],
    category: "CHỨNG NHẬN SẢN PHẨM",
    title: "Sản phẩm công nghiệp nông thôn tiêu biểu cấp tỉnh",
  },
];

function ArrowIcon({ direction }: { direction: "previous" | "next" }) {
  return (
    <svg viewBox="0 0 62 24" aria-hidden="true">
      <path d={direction === "previous" ? "M60 12H3M13 2 3 12l10 10" : "M2 12h57M49 2l10 10-10 10"} />
    </svg>
  );
}

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(1);
  const activeDocument = documents[activeIndex];
  const sectionStyle = {
    "--testimonial-top-shape": `url("${sectionAssets.testimonials.topShape.src}")`,
    "--testimonial-bottom-shape": `url("${sectionAssets.testimonials.bottomShape.src}")`,
  } as CSSProperties;

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + documents.length) % documents.length);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % documents.length);
  };

  const handleKeyboard = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") showPrevious();
    if (event.key === "ArrowRight") showNext();
  };

  return (
    <section
      className="testimonials-section document-gallery-section"
      aria-label="Kiểm nghiệm và chứng nhận của BAKA"
      style={sectionStyle}
    >
      <div className="testimonial-art" aria-hidden="true"><i /><i /><i /></div>

      <div className="section-container document-gallery">
        <header className="document-gallery__heading">
          <p>.. HỒ SƠ MINH BẠCH ..</p>
          <h2>KIỂM NGHIỆM &amp; CHỨNG NHẬN</h2>
          <span>
            Các tài liệu được BAKA cung cấp, trình bày nguyên bản để thuận tiện
            theo dõi và đối chiếu thông tin.
          </span>
        </header>

        <div
          className="document-carousel"
          role="region"
          aria-roledescription="carousel"
          aria-label="Bộ hồ sơ BAKA"
          tabIndex={0}
          onKeyDown={handleKeyboard}
        >
          <button
            className="document-carousel__arrow document-carousel__arrow--previous"
            type="button"
            onClick={showPrevious}
            aria-label="Xem tài liệu trước"
          >
            <ArrowIcon direction="previous" />
          </button>

          <div className="document-carousel__stage">
            {([-1, 0, 1] as const).map((offset) => {
              const index = (activeIndex + offset + documents.length) % documents.length;
              const document = documents[index];
              const position = offset === -1 ? "previous" : offset === 1 ? "next" : "active";
              const isActive = position === "active";

              return (
                <button
                  className={`document-slide document-slide--${position}`}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={isActive ? `${document.title}, đang hiển thị` : `Hiển thị ${document.title}`}
                  tabIndex={isActive ? -1 : 0}
                  key={document.image.src}
                >
                  <span className="document-slide__frame">
                    <Image
                      src={document.image}
                      alt={document.title}
                      fill
                      loading="eager"
                      sizes="(max-width: 767px) 270px, 350px"
                    />
                  </span>
                </button>
              );
            })}
          </div>

          <button
            className="document-carousel__arrow document-carousel__arrow--next"
            type="button"
            onClick={showNext}
            aria-label="Xem tài liệu tiếp theo"
          >
            <ArrowIcon direction="next" />
          </button>
        </div>

        <div className="document-gallery__caption" aria-live="polite">
          <div>
            <span>{activeDocument.category}</span>
            <h3>{activeDocument.title}</h3>
          </div>
          <a href={activeDocument.image.src} target="_blank" rel="noreferrer">
            XEM ẢNH ĐẦY ĐỦ
          </a>
        </div>

        <div className="document-gallery__dots" aria-label="Chọn tài liệu">
          {documents.map((document, index) => (
            <button
              className={index === activeIndex ? "is-active" : ""}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Tài liệu ${index + 1}: ${document.title}`}
              aria-current={index === activeIndex ? "true" : undefined}
              key={document.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
