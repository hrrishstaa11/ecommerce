import React, { useState } from "react";
import "../App.css";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartState } from "../context/Context";
import { AiFillDelete } from "react-icons/ai";
const Header = () => {
  const {
    state: { cart },
    dispatch,
    productDispatch,
  } = CartState();

  const {
    state: { products },
    productState: { sort, byStock, byFastDelivery, byRating, searchQuery },
  } = CartState();
  const [dropdown, setDropdown] = useState();

  return (
    <div className="  bg-primary py-5 px-5 h-[25vh]  lg:h-[10vh] mt-[-10vh] flex justify-end lg:justify-evenly w-[100vw]  fixed p-0">
      <ul class=" lg:flex  items-start lg:justify-evenly">
        <li class="mr-6">
          <div className="w-[100%] flex justify-end lg:justify-start">
            <Link
              to="/"
              className=" mt-[-10px] text-white font-bold  hover:text-dark w-fit text-[25px]"
            >
              Shoping cart
            </Link>
          </div>
        </li>
        <li class="mr-6">
          <input
            type="text"
            className="  mt-[10px] lg:mt-[0px] h-8 w-[50vw] lg:w-[30vw] px-5 bg-secoondary rounded-[8px] focus:outline-none "
            placeholder="Serch a product"
            onChange={(e) => {
              productDispatch({
                type: "FILTER_BY_SEARCH",
                payload: e.target.value,
              });
            }}
          />
        </li>

        <li className="mr-6">
          <div className="w-[100%] flex justify-end lg:justify-start">
            <div class=" mt-[10px]  lg:mt-[0px] relative inline-block text-left">
              <div>
                <button
                  type="button"
                  class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                  onClick={() => {
                    setDropdown(!dropdown);
                  }}
                >
                  <FaShoppingCart className=" mt-[2px] " />
                  <div className="w-3"></div>
                  {cart.length}

                  <svg
                    class="-mr-1 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              {dropdown && (
                <div
                  class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabindex="-1"
                >
                  {cart.map((item) => {
                    return (
                      <div className="px-3 py-2 flex justify-around">
                        <span>
                          {item.name} <span> {item.price}</span>
                        </span>
                        <AiFillDelete
                          className=" mt-1 ml-3 self-center"
                          onClick={() => {
                            dispatch({
                              type: "REMOVE_FROM_CART",
                              payload: item,
                            });
                          }}
                        />
                      </div>
                    );
                  })}
                  <Link to="/cart">
                    <button className="w-[90%] my-2 mx-3 bg-green border-green shadow-black"
                      onClick={()=>{
                        setDropdown(!dropdown);
                      }}
                    >
                      Go To Cart
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Header;
//Hrishikesh@11