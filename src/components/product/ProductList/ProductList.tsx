import { Flex } from "@radix-ui/themes";
import { useMemo, useState, useEffect } from "react";
import { PRODUCT_ADD_TO_CART_EVENT_NAME } from "../../../const";
import { useEventEmitter } from "../../../context/EventEmitterContext";
import { ProductService, Product } from "../../../service/ProductService";
import { ProductCard } from "../ProductCard/ProductCard";

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

  return (
    <Flex direction="column" gap={"2"}>
      {products.map((item) => (
        <ProductCard
          key={item.id}
          productName={item.name}
          image={item.image}
          manufacturer={item.manufacturer}
          extra={"Доп поля (пункт 1 из постановки)"}
          onAddToCart={() => handleAddToCart(item)}
        />
      ))}
    </Flex>
  );
};
