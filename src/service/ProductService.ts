import { Product } from "../types";

export type ProductResponse = {
  products: Product[];
};

export class ProductService {
  getProducts = async () => {
    const response = await fetch("/products.json");

    return (await response.json()) as ProductResponse;
  };
}
