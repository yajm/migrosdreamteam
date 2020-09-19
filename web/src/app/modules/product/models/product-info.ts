export interface ProductInfo {
  name: string;
  regulated_description: string;
  image: {
    original: string;
  };
  price: {
    item: {
      price: number;
    };
  };
  nutrition_facts: {
    standard: {
      nutrients: { quantity_alternate_unit: string; code: 'PIM_NUT_ENERGIE' }[];
    };
  };
}
