import { Product } from "../types";

export type ProductResponse = {
  products: Product[];
};

export class ProductService {
  getProducts = async () => {
    const response = await fetch("http://localhost:5173/products.json");

    return (await response.json()) as ProductResponse;
  };
}
