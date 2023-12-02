import "./ProductPage.css"; // Import the CSS file you just created image
import ImageSlider from "../ImageSlider/ImageSlider";
import img1 from "../../assets/images/image-product-1.jpg";
import img2 from "../../assets/images/image-product-2.jpg";
import img3 from "../../assets/images/image-product-3.jpg";
import img4 from "../../assets/images/image-product-4.jpg";
import { useCart } from "../../context/CartContext";
import { IoCart } from "react-icons/io5";
import ProductModal from "../SelectProduct/ProductModal";
import { useState } from "react";
export const productImages = [img1, img2, img3, img4];
const ProductPage = () => {
  const { quantity, setQuantity, addToCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="container">
      <ImageSlider onClick={() => setIsOpen(true)} images={productImages} />
      <div className="product-info">
        <h3>SNEAKER COMPANY</h3>
        <div className="product-name">Fall Limited Edition Sneakers</div>
        <p className="product-description">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they will withstand everything
          the weather can offer.
        </p>
        <div className="price-section">
          <div className="current-price">$125.00</div>
          <div className="discount">50%</div>
          <div className="original-price">$250.00</div>
        </div>
        <div className="add-to-cart-section">
          <div className="quantity-selector">
            <span
              onClick={() => (quantity > 0 ? setQuantity(quantity - 1) : null)}
            >
              -
            </span>
            <div>{quantity}</div>
            <span onClick={() => setQuantity(quantity + 1)}>+</span>
          </div>
          <button onClick={() => addToCart()} className="add-to-cart-button">
            <IoCart /> Add to cart
          </button>
        </div>
      </div>
      <ProductModal
        isOpen={isOpen}
        productImages={productImages}
        onRequestClose={() => setIsOpen(false)}
      />
    </div>
  );
};

export default ProductPage;
