import Modal from "react-modal";
import "./ProductModal.css";
import { IoClose } from "react-icons/io5";

import ImageSlider from "../ImageSlider/ImageSlider";

Modal.setAppElement("#root"); // Suppresses modal-related console warnings.

// eslint-disable-next-line react/prop-types
const ProductModal = ({ isOpen, onRequestClose, productImages }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="ProductModal"
      overlayClassName="Overlay"
    >
      <div className="product-modal-content">
        <div className="product-image-slider-div">
          <ImageSlider images={productImages} />
        </div>

        <div className="product-modal-images">
          {productImages.map((img, index) => {
            return <img className="product-modal-images-image" src={img} alt="Sneakers" key={index} />;
          })}
        </div>
      </div>
    </Modal>
  );
};

export default ProductModal;
