import "./Nav.css";
import imgAvatar from "../../assets/images/image-avatar.png";
import { IoCartOutline, IoClose } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import Cart from "../Cart/Cart";

const Nav = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showCart, setShowCart] = useState(false);

  return (
    <>
      <nav>
        <FiMenu
          className={isVisible === false ? "menu" : "closed-menu"}
          onClick={() => setIsVisible(true)}
        />
        <h1>Sneakers</h1>

        <IoCartOutline onClick={() => setShowCart(true)} />
        <img className="avatar" src={imgAvatar} alt="Image Avatar" />
      </nav>
      <ul className={isVisible ? `visible` : `menu-items`}>
        <IoClose className="close-icon" onClick={() => setIsVisible(false)} />
        <li>Collections</li>
        <li>Men</li>
        <li>Women</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className={showCart ? "show-cart" : "hide-cart"}>
        <Cart setShowCart={setShowCart} />
      </div>
    </>
  );
};

export default Nav;
