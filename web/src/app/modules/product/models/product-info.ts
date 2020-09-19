export interface ProductInfo {
  id: string;
  name: string;
  regulated_description: string;
  categoryCode: string;
  image: {
    original: string;
  };
  kcal?: number;
  price?: number;
}
