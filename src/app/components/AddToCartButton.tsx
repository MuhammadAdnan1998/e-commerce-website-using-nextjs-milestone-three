import React from "react";

interface AddToCartButtonProps {
  onClick: () => void;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
    
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
