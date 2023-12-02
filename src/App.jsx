import "./App.css";
import ProductPage from "./components/Home/ProductPage";
import Nav from "./components/Nav/Nav";
import { CartProvider } from "./context/CartContext";

const App = () => {
  return (
    <CartProvider>
      <Nav />
      <ProductPage />
    </CartProvider>
  );
};

export default App;
