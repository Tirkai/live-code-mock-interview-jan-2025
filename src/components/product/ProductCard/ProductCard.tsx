import { Avatar, Box, Button, Card, Flex, Text } from "@radix-ui/themes";

interface ProductCardProps {
  image: string;
  productName: string;
  manufacturer: string;
  extra?: React.ReactNode;
  onAddToCart: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  image,
  manufacturer,
  productName,
  extra,
  onAddToCart,
}) => {
  return (
    <Box width={"700px"}>
      <Card>
        <Flex gap="3" direction="column">
          <Flex gap="3">
            <Avatar src={image} size="6" fallback="img" radius="small" />
            <Box>
              <Text as="div" size="4" weight="bold">
                {productName}
              </Text>
              <Text as="div" size="4" color="gray">
                Производитель: {manufacturer}
              </Text>
              {extra}
            </Box>
          </Flex>
          <Box>
            <Button onClick={onAddToCart}>Заказать</Button>
          </Box>
        </Flex>
      </Card>
    </Box>
  );
};
