import React, { useState, useEffect } from "react";
import { CartState } from "../context/Context";
import Ratings from "./Ratings";
import { AiFillDelete } from "react-icons/ai";
const Cart = () => {
  const [total, SetTotal] = useState(0);
  const {
    state: { cart },
    dispatch,
  } = CartState();

  useEffect(() => {
    SetTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  });
  return (
    <div className=" flex mt-[70px] lg:mt-[10vh]">
      <div className=" flex-2 productContainer  mt-[15vh] lg:mt-[0vh] w-[75vw] h-fit m-2">
        {cart.map((prod) => {
          return (
            <div
              key={prod.id}
              className="w-[50vw] mt-[0vh] lg:mt-[0px]  lg:w-[60vw] mb-3 border-b-1  py-4 px-4  flex-col lg:flex  lg:flex-row  bg-white shadow-2xl rounded-[8px]"
            >
              <img
                src={prod.image}
                alt=""
                className=" h-[70px] w-[70px] rounded-[6px]"
              />
              <span className=" text-primary font-bold mt-[10px] lg:mt-[0px] lg:ml-3 flex flex-col">
                {prod.name} <span>&#8377;{prod.price}</span>
              </span>
              <div className="mt-[20px] lg:ml-[50px]">
                <Ratings rating={prod.ratings} />
              </div>
              <select
                name=""
                id=""
                className="h-[35px] w-[125px] bg-white ml-[10px]  lg:ml-[50px] mt-[20px] rounded-[4px] pr-[10px] pl-[10px] shadow-xl shadow-primary shadow-inner"
                value={prod.qty}
              >
                {[...Array(prod.inStock).keys()].map((x) => (
                  <option key={x + 1}>{x + 1}</option>
                ))}
              </select>

              <AiFillDelete
                className="mt-[15px] lg:mt-1 ml-[10px] lg:ml-5 self-center"
                onClick={() => {
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: prod,
                  });
                }}
              />
            </div>
          );
        })}
      </div>
      <div className="flex-1 w-[32v]  lg:mt-2 mt-[30vw] lg:w-[24vw] bg-primary h-[100vh] inline-block mt-2">
        <h1 className=" text-[20px] lg:text-[30px] mt-[20vh] lg:mt-[10px] m-4 ml-6">Subtotal ({cart.length}) items</h1>
        <span className="ml-6 text-[13px] lg:text-15  font-bold text-white">Total: &#8377;{total}</span>
      </div>
    </div>
  );
};

export default Cart;
