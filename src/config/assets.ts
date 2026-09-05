import mainHero from "@/public/images/main-hero.png";
import heroHalo from "@/public/images/banner_round_bg.png";
import bananaLeafLeft from "@/public/images/la-chuoi-1.png";
import bananaLeafRight from "@/public/images/la-chuoi-2.png";
import powderPlus from "@/public/images/bat-plus.png";
import powderCacao from "@/public/images/bat-cacao.png";
import shopee from "@/public/images/doitac-1-trimmed.png";
import tiktok from "@/public/images/doitac-2-trimmed.png";
import facebook from "@/public/images/doitac-3-trimmed.png";
import featuresBackground from "@/public/images/features_bg.jpg";
import featuresTopShape from "@/public/images/features_shape01.png";
import featuresBottomShape from "@/public/images/features_shape02.png";
import plusFrontLeft from "@/public/images/plus_1.png";
import plusFrontRight from "@/public/images/plus_2.png";
import plusFront from "@/public/images/plus_3.png";
import cacaoFrontLeft from "@/public/images/cacao_1.png";
import cacaoFront from "@/public/images/cacao_2.png";
import cacaoFrontRight from "@/public/images/cacao_3.png";
import formulaBackground from "@/public/images/formula_bg.jpg";
import formulaTopShape from "@/public/images/formula_shape01.png";
import formulaBottomShape from "@/public/images/formula_shape02.png";
import testimonialTopShape from "@/public/images/testimonial_top_shape.png";
import testimonialBottomShape from "@/public/images/testimonial_bottom_shape.png";
import blogLine from "@/public/images/blog_line.png";
import footerTopShape from "@/public/images/footer_bg_shape.png";
import bakaLogo from "@/public/images/logo-trimmed.png";
import plusProductCard from "@/public/images/the_sp_plus.png";
import cacaoProductCard from "@/public/images/the_sp_cacao.png";
import audienceLifestyle from "@/public/images/audience-lifestyle.png";
import testReportOne from "@/public/images/kiemnghiem_1.png";
import testReportTwo from "@/public/images/kiemnghiem_2.png";
import testReportThree from "@/public/images/kiemnghiem_3.png";
import certificateOne from "@/public/images/chungnhan_1.png";
import certificateTwo from "@/public/images/chungnhan_2.png";
import certificateThree from "@/public/images/chungnhan_3.png";

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
