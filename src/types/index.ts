export interface BaseProduct {
  id: string;
  name: string;
  manufacturer: string;
  image: string;
  type: string;
  weight: number;
}

export type Product = BaseProduct;

export type ProductResponse = {
  products: Product[];
};
