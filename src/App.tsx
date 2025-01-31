import { Flex } from "@radix-ui/themes";
import "./App.css";
import { Cart } from "./components/cart/Cart/Cart";
import { ProductDialog } from "./components/dialog/ProductDialog";
import { ProductList } from "./components/product/ProductList/ProductList";

function App() {
  return (
    <>
      <Flex direction="column" align="center" gap={"6"}>
        <Cart />
        <ProductList />
      </Flex>
      <ProductDialog />
    </>
  );
}

export default App;
