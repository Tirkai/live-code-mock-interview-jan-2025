import { Button, Dialog, Flex, Text } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { useEventEmitter } from "../../context/EventEmitterContext";
import { Product } from "../../service/ProductService";
import { PRODUCT_ADD_TO_CART_EVENT_NAME } from "../../const";

export const ProductDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [productName, setProductName] = useState("");
  const eventEmitter = useEventEmitter();

  useEffect(() => {
    eventEmitter.on(PRODUCT_ADD_TO_CART_EVENT_NAME, (payload) => {
      const product = payload as Product;
      setProductName(product.name);
      setIsOpen(true);
    });
  }, [eventEmitter]);

  return (
    <Dialog.Root open={isOpen}>
      <Dialog.Content aria-describedby="none">
        <Dialog.Title>Товар добавлен в вашу корзину</Dialog.Title>
        <Flex direction="column" gap={"3"} align="start">
          <Text size="4">{productName}</Text>
          <Button onClick={() => setIsOpen(false)}>Ок</Button>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
};
