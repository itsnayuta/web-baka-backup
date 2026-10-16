import mainHero from "@/public/images/main-hero.webp";
import heroHalo from "@/public/images/banner_round_bg.webp";
import bananaLeafLeft from "@/public/images/la-chuoi-1.webp";
import bananaLeafRight from "@/public/images/la-chuoi-2.webp";
import powderPlus from "@/public/images/bat-plus.webp";
import powderCacao from "@/public/images/bat-cacao.webp";
import shopee from "@/public/images/doitac-1-trimmed.webp";
import tiktok from "@/public/images/doitac-2-trimmed.webp";
import facebook from "@/public/images/doitac-3-trimmed.webp";
import featuresBackground from "@/public/images/features_bg.webp";
import featuresTopShape from "@/public/images/features_shape01.webp";
import featuresBottomShape from "@/public/images/features_shape02.webp";
import plusFrontLeft from "@/public/images/plus_1.webp";
import plusFrontRight from "@/public/images/plus_2.webp";
import plusFront from "@/public/images/plus_3.webp";
import cacaoFrontLeft from "@/public/images/cacao_1.webp";
import cacaoFront from "@/public/images/cacao_2.webp";
import cacaoFrontRight from "@/public/images/cacao_3.webp";
import formulaBackground from "@/public/images/formula_bg.webp";
import formulaTopShape from "@/public/images/formula_shape01.webp";
import formulaBottomShape from "@/public/images/formula_shape02.webp";
import testimonialTopShape from "@/public/images/testimonial_top_shape.webp";
import testimonialBottomShape from "@/public/images/testimonial_bottom_shape.webp";
import blogLine from "@/public/images/blog_line.webp";
import footerTopShape from "@/public/images/footer_bg_shape.webp";
import bakaLogo from "@/public/images/logo-trimmed.webp";
import plusProductCard from "@/public/images/the_sp_plus.webp";
import cacaoProductCard from "@/public/images/the_sp_cacao.webp";
import audienceLifestyle from "@/public/images/audience-lifestyle.webp";
import testReportOne from "@/public/images/kiemnghiem_1.webp";
import testReportTwo from "@/public/images/kiemnghiem_2.webp";
import testReportThree from "@/public/images/kiemnghiem_3.webp";
import certificateOne from "@/public/images/chungnhan_1.webp";
import certificateTwo from "@/public/images/chungnhan_2.webp";
import certificateThree from "@/public/images/chungnhan_3.webp";

export const brandAssets = {
  logo: bakaLogo,
} as const;

export const heroAssets = {
  product: mainHero,
  halo: heroHalo,
  leafLeft: bananaLeafLeft,
  leafRight: bananaLeafRight,
  powderLeft: powderPlus,
  ingredientRight: powderCacao,
} as const;

export const partnerAssets = { shopee, tiktok, facebook } as const;

export const sectionAssets = {
  features: {
    background: featuresBackground,
    topShape: featuresTopShape,
    bottomShape: featuresBottomShape,
  },
  productShowcase: {
    first: plusFrontLeft,
    second: plusFrontRight,
    third: plusFront,
    cacaoFirst: cacaoFrontLeft,
    cacaoSecond: cacaoFront,
    cacaoThird: cacaoFrontRight,
  },
  productCards: {
    plus: plusProductCard,
    cacao: cacaoProductCard,
  },
  formula: {
    background: formulaBackground,
    topShape: formulaTopShape,
    bottomShape: formulaBottomShape,
  },
  testimonials: {
    topShape: testimonialTopShape,
    bottomShape: testimonialBottomShape,
  },
  documents: {
    testReports: [testReportOne, testReportTwo, testReportThree],
    certificates: [certificateOne, certificateTwo, certificateThree],
  },
  knowledge: {
    divider: blogLine,
  },
  audience: {
    lifestyle: audienceLifestyle,
  },
  footer: {
    topShape: footerTopShape,
  },
} as const;
