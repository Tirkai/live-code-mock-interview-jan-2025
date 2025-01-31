import { Box, Card, Text } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { useEventEmitter } from "../../../context/EventEmitterContext";
import { PRODUCT_ADD_TO_CART_EVENT_NAME } from "../../../const";

export const Cart: React.FC = () => {
  const [count, setCount] = useState(0);
  const eventEmitter = useEventEmitter();

  useEffect(() => {
    eventEmitter.on(PRODUCT_ADD_TO_CART_EVENT_NAME, () => {
      setCount((value) => value + 1);
    });
  }, [eventEmitter]);

  return (
    <Box width={"700px"}>
      <Card>
        <Text as="div" size="4" color="gray">
          Товаров в корзине: {count}
        </Text>
      </Card>
    </Box>
  );
};
