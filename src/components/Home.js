import React ,{useEffect}from "react";
import { CartState } from "../context/Context";
import SingleProduct from "./SingleProduct";
import Filters from "./Filters";
const Home = () => {
  const {
    state: { products },
    productState: { sort, byStock, byFastDelivery, byRating, searchQuery },
  } = CartState();
 useEffect(()=>{
  console.log("cahngerd")
 },[searchQuery])
  const transformProducts = ()=>{
    let sortedProducts = products;
    if(sort ){
      console.log(sort)
      if (sort) {
        sortedProducts = sortedProducts.sort((a, b) =>
          sort === "lowToHigh" ? a.price - b.price : b.price - a.price
        );
      }
  
      if (byStock) {
      
        sortedProducts = sortedProducts.filter((prod) => prod.inStock);
      }
  
      if (byFastDelivery) {
        sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
      }
  
      if (byRating) {
        sortedProducts = sortedProducts.filter(
          (prod) => prod.ratings >= byRating
        );
      }
  
      if (searchQuery) {
        sortedProducts = sortedProducts.filter((prod) =>
          prod.name.toLowerCase().includes(searchQuery)
        );
      }
    }
    sortedProducts = sortedProducts.filter((prod) =>
    prod.name.toLowerCase().includes(searchQuery)
  );
    return sortedProducts;
  }


  return (
    <div className="w-[100vw] mt-[10vh] bg-secondary flex flex-row ">
      <Filters/>
      <div className=" productContainer mt-[12vh] lg:mt-0  lg:ml-64   center">
        {transformProducts().map((item) => {
          return <SingleProduct product={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Home;
