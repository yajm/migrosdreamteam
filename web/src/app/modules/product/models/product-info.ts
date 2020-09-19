export interface ProductInfo {
  name: string;
  regulated_description: string;
  image: {
    original: string;
  };
  kcal?: number;
  price?: number;
}
