"use client";

import { useState } from "react";
import type { CSSProperties } from "react";
import { sectionAssets } from "@/config/assets";

const articles = [
  ["Kiến thức nền tảng", "TINH BỘT KHÁNG LÀ GÌ? KHÁC TINH BỘT THÔNG THƯỜNG NHƯ THẾ NÀO?"],
  ["Hệ vi sinh", "TINH BỘT KHÁNG VÀ HỆ VI SINH ĐƯỜNG RUỘT CÓ LIÊN QUAN GÌ?"],
  ["Dinh dưỡng", "TINH BỘT KHÁNG CÓ PHẢI CHẤT XƠ KHÔNG?"],
] as const;

const faqs = [
  ["TINH BỘT KHÁNG LÀ GÌ?", "Tinh bột kháng là loại tinh bột không được tiêu hóa hoàn toàn ở ruột non. Một phần đi đến đại tràng và có thể trở thành cơ chất cho quá trình lên men của hệ vi sinh đường ruột."],
  ["PLUS VÀ CACAO KHÁC NHAU THẾ NÀO?", "PLUS hướng đến hương vị nguyên bản, linh hoạt khi kết hợp cùng món ăn. CACAO dùng cùng nền tảng tinh bột kháng nhưng bổ sung cacao để tạo trải nghiệm vị khác."],
  ["NÊN CHỌN SẢN PHẨM NÀO?", "Chọn PLUS nếu bạn ưu tiên sự linh hoạt và dễ kết hợp thực phẩm; chọn CACAO nếu bạn thích hương cacao. Không nên lựa chọn dựa trên việc tự quy sản phẩm cho một bệnh lý."],
  ["SỬ DỤNG SẢN PHẨM THẾ NÀO?", "Sử dụng đúng hướng dẫn được ghi trên bao bì và không tự ý tăng lượng sử dụng. Khi mới dùng, nên theo dõi phản ứng cơ thể, duy trì chế độ ăn đa dạng, uống đủ nước và vận động phù hợp."],
  ["SẢN PHẨM CÓ PHẢI LÀ THUỐC KHÔNG?", "Không. Thực phẩm này không phải là thuốc và không có tác dụng thay thế thuốc chữa bệnh. Người đang dùng thuốc, mang thai hoặc cho con bú nên trao đổi với người có chuyên môn trước khi sử dụng."],
] as const;

export function KnowledgeSection() {
  const [open, setOpen] = useState(0);
  const sectionStyle = {
    "--knowledge-divider": `url("${sectionAssets.knowledge.divider.src}")`,
  } as CSSProperties;
  return (
    <section className="knowledge-section" id="knowledge" style={sectionStyle}>
      <div className="section-container knowledge-section__inner">
        <div className="news-column">
          <div className="section-heading knowledge-heading" data-reveal="fade-up"><p>.. KIẾN THỨC BAKA ..</p><h2>BÀI VIẾT MỚI</h2></div>
          <div className="news-list">
            {articles.map(([category, title], index) => <article className={`news-item news-item--${index + 1}`} data-reveal="fade-left" data-reveal-delay={120 + index * 110} key={title}>
              <div className="news-thumb" aria-hidden="true"><i /><i /><i /></div>
              <div className="news-copy"><div className="news-meta"><span>{category}</span><span>BAKA</span></div><h3>{title}</h3><div className="news-status">KIẾN THỨC ĐƯỢC TRÌNH BÀY CÓ NGUỒN</div></div>
            </article>)}
          </div>
        </div>
        <div className="faq-column">
          <div className="section-heading knowledge-heading" data-reveal="fade-up" data-reveal-delay="100"><p>.. CÂU HỎI THƯỜNG GẶP ..</p><h2>GIẢI ĐÁP VỀ BAKA</h2></div>
          <div className="faq-list">
            {faqs.map(([question, answer], index) => <div className={`faq-item${open === index ? " is-open" : ""}`} data-reveal="fade-right" data-reveal-delay={140 + index * 75} key={question}>
              <button type="button" onClick={() => setOpen(open === index ? -1 : index)} aria-expanded={open === index}>
                <span>{String(index + 1).padStart(2, "0")}.</span><strong>{question}</strong><i aria-hidden="true">⌃</i>
              </button>
              <div className="faq-answer" hidden={open !== index}><p>{answer}</p></div>
            </div>)}
          </div>
        </div>
      </div>
    </section>
  );
}
