import "./Nav.css";
import imgAvatar from "../../assets/images/image-avatar.png";
import { IoCartOutline, IoClose } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import Cart from "../Cart/Cart";
import { useCart } from "../../context/CartContext";
import CartItem from "../Cart/CartItem";

const Nav = () => {
  const [isVisible, setIsVisible] = useState(false);

  const { cart, showCart, setShowCart } = useCart();
  return (
    <div className="product-page-container">
      <nav>
        <FiMenu
          className={isVisible === false ? "menu" : "closed-menu"}
          onClick={() => setIsVisible(true)}
        />
        <h1>Sneakers</h1>
        <ul className={isVisible ? `visible` : `menu-items`}>
          <IoClose className="close-icon" onClick={() => setIsVisible(false)} />
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <IoCartOutline onClick={() => setShowCart(true)} />
        <img className="avatar" src={imgAvatar} alt="Image Avatar" />
      </nav>

      <div className={showCart ? "show-cart" : "hide-cart"}>
        <Cart>
          {cart.length > 0
            ? cart.map((item) => {
                return (
                  <CartItem
                    itemName={item.itemName}
                    price={item.price}
                    quantity={item.quantity}
                    thumbnail={item.thumbnail}
                    key={item.length}
                  />
                );
              })
            : null}
        </Cart>
      </div>
    </div>
  );
};

export default Nav;
