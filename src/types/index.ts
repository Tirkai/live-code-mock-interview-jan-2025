export interface BaseProduct {
  id: string;
  name: string;
  manufacturer: string;
  image: string;
  type: string;
  weight: number;
}

export interface GroceryProduct extends BaseProduct {
  type: "Grocery";
  calories: number;
}

export interface MedicineProduct extends BaseProduct {
  type: "Medicine";
  isRequrePrescription: boolean;
}

export interface ClothesProduct extends BaseProduct {
  type: "Clothes";
  size: string;
}

export type Product = GroceryProduct | MedicineProduct | ClothesProduct;

export type ProductResponse = {
  products: Product[];
};
