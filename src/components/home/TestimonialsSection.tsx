"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useReducer, type CSSProperties, type KeyboardEvent } from "react";
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

const slideCount = documents.length;
const trackDocuments = [...documents, ...documents, ...documents];
type TrackState = { position: number; queued: number; phase: "idle" | "moving" | "reset" };
type TrackAction = { type: "move"; steps: number } | { type: "finish" | "ready" };

function startQueuedMove(state: TrackState): TrackState {
  if (!state.queued) return { ...state, phase: "idle" };
  const direction = Math.sign(state.queued);
  return { position: state.position + direction, queued: state.queued - direction, phase: "moving" };
}

function trackReducer(state: TrackState, action: TrackAction): TrackState {
  if (action.type === "move") {
    const next = { ...state, queued: state.queued + action.steps };
    return state.phase === "idle" ? startQueuedMove(next) : next;
  }
  if (action.type === "ready") return state.phase === "reset" ? startQueuedMove(state) : state;
  if (state.phase !== "moving") return state;

  // Rebase onto an identical copy only after the visible transition finishes.
  const position = ((state.position % slideCount) + slideCount) % slideCount + slideCount;
  if (position !== state.position) return { ...state, position, phase: "reset" };
  return startQueuedMove(state);
}

export function TestimonialsSection() {
  const [track, dispatch] = useReducer(trackReducer, { position: slideCount + 1, queued: 0, phase: "idle" });
  const activeIndex = track.position % slideCount;
  const activeDocument = documents[activeIndex];
  useEffect(() => {
    if (track.phase === "reset") {
      let secondFrame = 0;
      const firstFrame = requestAnimationFrame(() => {
        secondFrame = requestAnimationFrame(() => dispatch({ type: "ready" }));
      });
      return () => { cancelAnimationFrame(firstFrame); cancelAnimationFrame(secondFrame); };
    }
    if (track.phase === "moving") {
      // Also settle when reduced motion or an interrupted render skips transitionend.
      const timer = window.setTimeout(() => dispatch({ type: "finish" }), 850);
      return () => window.clearTimeout(timer);
    }
  }, [track.phase, track.position]);
  const sectionStyle = {
    "--testimonial-top-shape": `url("${sectionAssets.testimonials.topShape.src}")`,
    "--testimonial-bottom-shape": `url("${sectionAssets.testimonials.bottomShape.src}")`,
  } as CSSProperties;

  const showPrevious = () => {
    dispatch({ type: "move", steps: -1 });
  };

  const showNext = () => {
    dispatch({ type: "move", steps: 1 });
  };

  const selectDocument = (index: number) => {
    const target = (track.position + track.queued + slideCount * 10) % slideCount;
    let steps = index - target;
    if (steps > slideCount / 2) steps -= slideCount;
    if (steps < -slideCount / 2) steps += slideCount;
    dispatch({ type: "move", steps });
  };

  const handleKeyboard = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") event.preventDefault();
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
            <div
              className="document-carousel__track"
              data-reset={track.phase === "reset" ? "true" : undefined}
              style={{ "--track-position": track.position } as CSSProperties}
              onTransitionEnd={(event) => {
                if (event.target === event.currentTarget && event.propertyName === "transform") dispatch({ type: "finish" });
              }}
            >
            {trackDocuments.map((document, index) => {
              const isActive = index === track.position;
              const isVisible = Math.abs(index - track.position) <= 1;

              return (
                <button
                  className={`document-slide${isActive ? " document-slide--active" : ""}`}
                  type="button"
                  onClick={() => selectDocument(index % slideCount)}
                  aria-label={isActive ? `${document.title}, đang hiển thị` : `Hiển thị ${document.title}`}
                  aria-hidden={!isVisible}
                  tabIndex={isVisible && !isActive ? 0 : -1}
                  key={index}
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
              onClick={() => selectDocument(index)}
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
