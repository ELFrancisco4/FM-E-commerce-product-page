import { RiDeleteBin6Line } from "react-icons/ri";
import { useCart } from "../../context/CartContext";
import "./Cart.css";
// eslint-disable-next-line react/prop-types
const CartItem = ({ itemName, quantity, thumbnail, price }) => {
  const { removeFromCart } = useCart();
  return (
    <div className="cart-item">
      <div className="cart-item-content">
        <img src={thumbnail} alt="Sneaker" />
        <div>
          <h4>{itemName}</h4>
          <span>
            <p>
              ${price} x {quantity}{" "}
            </p>
            <p className="total-cost">${price * quantity}</p>
          </span>
        </div>
        <RiDeleteBin6Line onClick={() => removeFromCart()} />
      </div>
      <button className="checkout-button">
        Checkout
      </button>
    </div>
  );
};

export default CartItem;
