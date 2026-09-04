import type { TargetAndTransition, Variants } from "framer-motion";

const premiumEase = [0.22, 1, 0.36, 1] as const;

export const heroEyebrow: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.58, delay: 0.1, ease: premiumEase } },
};

export const heroHeading: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.72, delay: 0.2, ease: premiumEase } },
};

export const heroCTA: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.34, ease: premiumEase } },
};

export const heroCTAHover: TargetAndTransition = {
  y: -2,
  boxShadow: "0 12px 24px rgba(241, 146, 32, 0.22)",
  transition: { duration: 0.25, ease: "easeOut" },
};

export const heroHalo: Variants = {
  hidden: { opacity: 0, scale: 0.97, x: "-50%", y: 26 },
  visible: { opacity: 1, scale: 1, x: "-50%", y: 0, transition: { duration: 0.85, delay: 0.42, ease: premiumEase } },
};

export const heroProduct: Variants = {
  hidden: { opacity: 0, y: 42, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.92, delay: 0.62, ease: premiumEase } },
};

export const heroLeafLeft: Variants = {
  hidden: { opacity: 0, x: -52, y: 18 },
  visible: { opacity: 1, x: 0, y: 0, transition: { duration: 1.2, delay: 0.76, ease: premiumEase } },
};

export const heroLeafRight: Variants = {
  hidden: { opacity: 0, x: 52, y: 18 },
  visible: { opacity: 1, x: 0, y: 0, transition: { duration: 1.2, delay: 0.86, ease: premiumEase } },
};

export const heroIngredientLeft: Variants = {
  hidden: { opacity: 0, x: -34, y: 24 },
  visible: { opacity: 1, x: 0, y: 0, transition: { duration: 1, delay: 0.92, ease: premiumEase } },
};

export const heroIngredientRight: Variants = {
  hidden: { opacity: 0, x: 34, y: 24 },
  visible: { opacity: 1, x: 0, y: 0, transition: { duration: 1, delay: 1.02, ease: premiumEase } },
};

export const heroProductFloat: TargetAndTransition = {
  y: [0, -11, 0],
  transition: { duration: 5.6, delay: 1.35, ease: "easeInOut", repeat: Infinity },
};

export const heroLeafLeftFloat: TargetAndTransition = {
  y: [0, -10, 0],
  rotate: [52, 57, 52],
  transition: { duration: 8.4, delay: 1.6, ease: "easeInOut", repeat: Infinity },
};

export const heroLeafRightFloat: TargetAndTransition = {
  y: [0, -9, 0],
  rotate: [-48, -43, -48],
  transition: { duration: 9.4, delay: 1.9, ease: "easeInOut", repeat: Infinity },
};

export const heroIngredientLeftFloat: TargetAndTransition = {
  y: [0, -8, 0],
  rotate: [-8, -6.5, -8],
  transition: { duration: 7.2, delay: 1.7, ease: "easeInOut", repeat: Infinity },
};

export const heroIngredientRightFloat: TargetAndTransition = {
  y: [0, -7, 0],
  rotate: [7, 9, 7],
  transition: { duration: 7.8, delay: 2, ease: "easeInOut", repeat: Infinity },
};
