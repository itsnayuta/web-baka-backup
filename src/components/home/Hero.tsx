"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { motion, MotionConfig } from "framer-motion";
import { ProductVisual } from "@/components/products/ProductVisual";
import { heroAssets } from "@/config/assets";
import { officialChannels } from "@/config/site";
import {
  heroCTA,
  heroCTAHover,
  heroEyebrow,
  heroHalo,
  heroHeading,
  heroIngredientLeft,
  heroIngredientLeftFloat,
  heroIngredientRight,
  heroIngredientRightFloat,
  heroLeafLeft,
  heroLeafLeftFloat,
  heroLeafRight,
  heroLeafRightFloat,
  heroProduct,
  heroProductFloat,
} from "@/lib/motion/hero";

export function Hero() {
  const heroStyle = {
    "--hero-halo-image": `url("${heroAssets.halo.src}")`,
  } as CSSProperties;

  return (
    <MotionConfig reducedMotion={process.env.NODE_ENV === "production" ? "user" : "never"}>
    <section className="hero" id="home" style={heroStyle} data-force-motion={process.env.NODE_ENV !== "production" ? "true" : undefined}>
      <div className="hero-container">
        <div className="hero-content">
          <motion.p className="hero-eyebrow" initial="hidden" animate="visible" variants={heroEyebrow}>
            .. TINH BỘT KHÁNG BAKA ..
          </motion.p>
          <motion.h1 initial="hidden" animate="visible" variants={heroHeading}>
            <span className="heading-desktop">CHỦ ĐỘNG NUÔI DƯỠNG<br />HỆ VI SINH ĐƯỜNG RUỘT</span>
            <span className="heading-mobile">CHỦ ĐỘNG NUÔI<br />DƯỠNG HỆ VI SINH<br />ĐƯỜNG RUỘT</span>
          </motion.h1>
          <motion.a className="hero-cta" href={officialChannels.products} target="_blank" rel="noreferrer" initial="hidden" animate="visible" variants={heroCTA} whileHover={heroCTAHover}>
            KHÁM PHÁ NGAY
          </motion.a>
        </div>

        <div className="hero-visual">
          <motion.div className="hero-halo" aria-hidden="true" initial="hidden" animate="visible" variants={heroHalo} />
          <motion.div className="product-pair" initial="hidden" animate="visible" variants={heroProduct}>
            <motion.div className="hero-product-float" animate={heroProductFloat}>
              <ProductVisual variant="pair" priority />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div className="hero-real-leaf hero-real-leaf--left" aria-hidden="true" initial="hidden" animate="visible" variants={heroLeafLeft}>
        <motion.div className="hero-float-shell" animate={heroLeafLeftFloat}>
          <Image src={heroAssets.leafLeft} alt="" fill quality={90} sizes="420px" style={{ objectFit: "contain" }} />
        </motion.div>
      </motion.div>
      <motion.div className="hero-real-leaf hero-real-leaf--right" aria-hidden="true" initial="hidden" animate="visible" variants={heroLeafRight}>
        <motion.div className="hero-float-shell" animate={heroLeafRightFloat}>
          <Image src={heroAssets.leafRight} alt="" fill quality={90} sizes="420px" style={{ objectFit: "contain" }} />
        </motion.div>
      </motion.div>
      <motion.div className="hero-ingredient hero-ingredient--left" aria-hidden="true" initial="hidden" animate="visible" variants={heroIngredientLeft}>
        <motion.div className="hero-float-shell" animate={heroIngredientLeftFloat}>
          <Image src={heroAssets.powderLeft} alt="" fill quality={95} sizes="320px" style={{ objectFit: "contain" }} />
        </motion.div>
      </motion.div>
      <motion.div className="hero-ingredient hero-ingredient--right" aria-hidden="true" initial="hidden" animate="visible" variants={heroIngredientRight}>
        <motion.div className="hero-float-shell" animate={heroIngredientRightFloat}>
          <Image src={heroAssets.ingredientRight} alt="" fill quality={95} sizes="320px" style={{ objectFit: "contain" }} />
        </motion.div>
      </motion.div>
    </section>
    </MotionConfig>
  );
}
