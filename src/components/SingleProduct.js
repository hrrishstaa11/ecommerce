import React from "react";
import Ratings from "./Ratings";
import { CartState } from "../context/Context";
const SingleProduct = ({ product }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <div className=" mt-3 ">
      <div class="p-6 max-w-sm bg-white rounded-lg   shadow-md dark:bg-gray-800 dark:border-gray-700">
        <img src={product.image} alt="image" className=" w-[100%]" />
        <body>
          <h2 className=" font-bold">{product.name}</h2>
          <span className="font-bold">&#8377;{product.price}</span>
          {product.fastDelivery ? (
            <div>Fast delevary</div>
          ) : (
            <div>Four days delevary</div>
          )}
          <div className="ml-[-14px]">
            <Ratings rating={product.ratings}></Ratings>
          </div>
          {cart.some((p) => p.id === product.id) ? (
            <button
              onClick={() => {
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: product,
                });
              }}
              className="bg-red border-red mt-3 hover:mt-1 mb-1"
            >
              Remove from cart
            </button>
          ) : (
            <button
              onClick={() => {
                dispatch({
                  type: "AAD_TO_CART",
                  payload: product,
                });
              }}
              disabled={!product.inStock}
              className="bg-blue border-blue text-white mt-3 self-end hover:mt-1 mb-1"
            >
              {product.inStock ? "Add to cart" : "Out Of Stock"}
            </button>
          )}
        </body>
      </div>
    </div>
  );
};

export default SingleProduct;
