import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const showDetail = () => {
    navigate(`/product/${product.id}`);
  };
  return (
    <div className="hnm__product" onClick={showDetail}>
      <img src={product?.img} alt={product?.title} />
      <div className="Row">
        <div className="badge">{product?.choice ? "Concious Choice" : ""}</div>
        <div className="badge badge__reversal">
          {product?.new ? "신제품" : ""}
        </div>
      </div>
      <div>{product?.title}</div>
      <div>{product?.price}</div>
    </div>
  );
};

export default ProductCard;
