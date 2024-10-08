import { createContext, useContext, } from "react";

const CartContext = createContext([
  {
    // username: "swayamrup",
    // cart:[],
    // addToCart: (product) => {
    //  console.log(this.username);
     
     
    // },
    // removeFromCsrt: (product) => {},
  },
]);

// directly return useCartContext hook to avoid need of useContext & then pass
// CartContext every time .
// to use the CartContext you only need to to use useCartContext hook.
const useCartContext = () => {
  return useContext(CartContext);
};

 
// to provide values to nested component we have to UserProvider.
export const CartProvider = CartContext.Provider;
export { useCartContext };
