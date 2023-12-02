import { IoClose } from "react-icons/io5";
import "./Cart.css";
import { useCart } from "../../context/CartContext";

// eslint-disable-next-line react/prop-types
const Cart = ({ children }) => { // Destructure children from props
  const { setShowCart } = useCart();
  return (
    <div className="cart-container">
      <header>
        <h3>Cart</h3> <IoClose onClick={() => setShowCart(false)} />
      </header>
      <div className="cart-body">
        {children || <p>Your Cart is empty</p>}
      </div>
    </div>
  );
};

export default Cart;
