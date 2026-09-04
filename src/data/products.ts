export type Product = {
  id: "BAKA_PLUS" | "BAKA_CACAO";
  name: string;
  shortName: string;
  image: string | null;
};

export const BAKA_PLUS: Product = {
  id: "BAKA_PLUS",
  name: "TINH BỘT KHÁNG TBKBAKA PLUS",
  shortName: "PLUS",
  image: null,
};

export const BAKA_CACAO: Product = {
  id: "BAKA_CACAO",
  name: "TINH BỘT KHÁNG TBKBAKA CACAO",
  shortName: "CACAO",
  image: null,
};

export const products = [BAKA_PLUS, BAKA_CACAO] as const;
