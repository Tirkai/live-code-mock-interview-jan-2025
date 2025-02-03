import { Flex } from "@radix-ui/themes";
import { useMemo, useState, useEffect } from "react";
import { PRODUCT_ADD_TO_CART_EVENT_NAME } from "../../../const";
import { useEventEmitter } from "../../../context/EventEmitterContext";
import { ProductService } from "../../../service/ProductService";
import { ProductCard } from "../ProductCard/ProductCard";
import { Product } from "../../../types";

export const ProductList = () => {
  const productService = useMemo(() => new ProductService(), []);

  const eventEmitter = useEventEmitter();

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    productService.getProducts().then((result) => setProducts(result.products));
  }, [eventEmitter, productService]);

  const handleAddToCart = (product: Product) => {
    eventEmitter.emit(PRODUCT_ADD_TO_CART_EVENT_NAME, product);
  };

  const getProductExtra = (product: Product) => {
    if (product.type === "Grocery") {
      return `Калории: ${product.calories}`;
    }

    if (product.type === "Medicine") {
      return `Рецертурный: ${product.isRequrePrescription ? "Да" : "Нет"}`;
    }

    if (product.type === "Clothes") {
      return `Размер: ${product.size}`;
    }
  };

  return (
    <Flex direction="column" gap={"2"}>
      {products.map((item) => (
        <ProductCard
          key={item.id}
          productName={item.name}
          image={item.image}
          manufacturer={item.manufacturer}
          extra={getProductExtra(item)}
          onAddToCart={() => handleAddToCart(item)}
        />
      ))}
    </Flex>
  );
};
