import React, { createContext, useReducer,useContext } from 'react'
import { faker } from '@faker-js/faker';
import { cartReducer } from './Reducers';
import {productReducer} from './Reducers'
const Cart = createContext()
const Context = ({children}) => {


  faker.seed(99);
  const products = [...Array(20)].map(() => ({
    id:faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.abstract(),
    inStock: faker.datatype.boolean(),
    fastDelivery: faker.datatype.boolean(),
    ratings: Math.random()
  }));

  const  [state,dispatch] =useReducer(cartReducer,{
    products:products,
    cart:[],
  })

  const [productState,productDispatch]=useReducer(productReducer,{
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
  });
  return (
    <Cart.Provider value={{state,dispatch,productState,productDispatch}}>
        {children}
    </Cart.Provider>
  )
}

export default Context

export const CartState = ()=>{
  return useContext(Cart)
}

