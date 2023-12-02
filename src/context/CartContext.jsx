// CartContext.js
import { createContext, useState, useContext } from "react";
import thumbnail from "../assets/images/image-product-1-thumbnail.jpg";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
  const [quantity, setQuantity] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState([]);

  const addToCart = () => {
    let cartArr = [...cart];
    console.log(Array.isArray(cartArr));

    let item = {
      itemName: "Fall Limited Edition Sneakers",
      price: 125,
      thumbnail,
      quantity,
    };

    const itemIndex = cartArr.findIndex((c) => c.itemName === item.itemName);

    if (itemIndex === -1) {
      // Item not in cart, add new item
      setCart([...cartArr, item]);
    } else {
      // Item already in cart, update quantity
      const updatedCart = cartArr.map((c, index) =>
        index === itemIndex ? { ...c, quantity: quantity } : c
      );
      setCart(updatedCart);
    }
  };

  const removeFromCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        showCart,
        setShowCart,
        setCart,
        quantity,
        setQuantity,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
