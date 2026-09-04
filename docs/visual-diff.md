# Homepage visual difference log

## Reference audit

- Desktop 1440: content viewport 1425px, 1320px containers, condensed headings, green/orange accents, torn section edges, and 10,542px total page height.
- Mobile 390: 360px content width, independently stacked layouts, fixed mobile header, and 17,820px total page height.
- The complete reference was inspected top-to-bottom before and during implementation.

## Section status

- HEADER — MATCHED
- HERO — ACCEPTABLE DIFFERENCE: BAKA copy and original product placeholders replace Suxnix assets.
- BRAND STRIP — ACCEPTABLE DIFFERENCE: geometry matched; marks use BAKA-safe text.
- FEATURES — ACCEPTABLE DIFFERENCE: geometry matched; artwork is original CSS.
- PRODUCT SHOWCASE — ACCEPTABLE DIFFERENCE: geometry matched; only PLUS/CACAO are used.
- PRODUCT LIST — ACCEPTABLE DIFFERENCE: carousel geometry and behavior matched; prices remain unset.
- STATS / VIDEO — ACCEPTABLE DIFFERENCE: geometry and modal behavior matched; no fabricated metrics or video.
- INGREDIENTS — ACCEPTABLE DIFFERENCE: geometry matched; unverified claims were not copied.
- FORMULA — ACCEPTABLE DIFFERENCE: geometry matched; content is BAKA-safe.
- PACKAGES — ACCEPTABLE DIFFERENCE: card geometry matched; price/promotion fields show `TODO_PRODUCT_DATA`.
- TESTIMONIALS — ACCEPTABLE DIFFERENCE: section geometry matched; honest empty state replaces fake reviews.
- NEWS — ACCEPTABLE DIFFERENCE: layout matched; neutral draft topics replace copied articles.
- FAQ — MATCHED: accordion dimensions and open/close behavior verified.
- FOOTER — ACCEPTABLE DIFFERENCE: composition matched; missing business details show `TODO_SITE_CONTACT`.

## Final audit

- [x] Reference and localhost rendered at 1440 × 1000.
- [x] Reference and localhost rendered at 390 × 1000.
- [x] Desktop total height: reference/local 10,542px.
- [x] Mobile total height: reference/local 17,820px.
- [x] No horizontal overflow at 1440px or 390px.
- [x] Mobile menu, product carousel, video modal, and FAQ interaction verified.
- [x] Console contains no application errors or warnings.
- [x] Network contains no failed requests or broken assets.
- [x] Production build and TypeScript validation passed.

## Asset status after Phase 0

- Real BAKA hero, banana-leaf, PLUS powder, and CACAO powder assets are now present in `src/public/images`.
- They are registered centrally in `src/config/assets.ts` for Phase 2 integration.
- Existing placeholders remain visible until the Header/Hero implementation phase; no Suxnix proprietary imagery is used.
