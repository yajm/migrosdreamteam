export interface ProductInfo {
  name: string;
  regulated_description: string;
  categoryCode: string;
  image: {
    original: string;
  };
  kcal?: number;
  price?: number;
}
