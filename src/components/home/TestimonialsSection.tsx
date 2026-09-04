import type { CSSProperties } from "react";
import { sectionAssets } from "@/config/assets";

export function TestimonialsSection() {
  const sectionStyle = {
    "--testimonial-top-shape": `url("${sectionAssets.testimonials.topShape.src}")`,
    "--testimonial-bottom-shape": `url("${sectionAssets.testimonials.bottomShape.src}")`,
  } as CSSProperties;

  return (
    <section className="testimonials-section" aria-label="Cam kết thông tin BAKA" style={sectionStyle}>
      <div className="testimonial-art" aria-hidden="true"><i /><i /><i /></div>
      <div className="section-container testimonials-section__inner">
        <div className="testimonial-empty" data-reveal="zoom" data-reveal-delay="120">
          <div className="testimonial-quote" aria-hidden="true">“</div>
          <h2>THÔNG TIN ĐƯỢC TRÌNH BÀY MINH BẠCH</h2>
          <p>BAKA chỉ công bố nội dung có cơ sở từ hồ sơ và bao bì sản phẩm; không tự bổ sung công dụng, chứng nhận hay phản hồi khách hàng chưa được xác minh.</p>
          <div className="testimonial-avatar" aria-hidden="true">BAKA</div>
          <strong>CHỦ ĐỘNG · THẬN TRỌNG · CÓ CƠ SỞ</strong>
        </div>
      </div>
    </section>
  );
}
