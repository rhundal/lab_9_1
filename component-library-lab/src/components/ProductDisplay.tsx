import React from "react";

import { type ProductDisplayProps } from "../types";

export const ProductDisplay: React.FC<ProductDisplayProps> = (props) => {
  const displayStyles = {
    border: "1px solid white",
    padding: "15px",
  };

  return (
    <div
      style={displayStyles}
      className="rounded-lg shadow-xl text-center mb-15"
    >
      <div className="mb-5">
        <img
          src={props.product.imageUrl}
          className="w-full h-[20vh] aspect-[3/4] object-cover rounded-xl"
        />
      </div>
      <div className="font-bold text-md mb-5">{props.product.name}</div>
      <div className="font-bold text-lg text-blue-600 mb-5">
        ${props.product.price}{" "}
      </div>

      {props.showDescription && (
        <div className="font-normal text-md mb-5">
          {props.product.description}
        </div>
      )}
      {props.showStockStatus && (
        <div className="text-green-600 mb-5">
          {props.product.inStock ? "In Stock" : "Out of Stock"}
        </div>
      )}
      <div>
        <button
          type="submit"
          className="bg-blue-600 font-medium py-2 px-4 text-white rounded-md w-full"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};
