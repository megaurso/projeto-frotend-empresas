import { createContext, useState } from "react";
import { iChildren, iProducts } from "../interface";


export interface iCartContext {
  objectProduct: [] | iProducts[] 
  setObjectProduct: React.Dispatch<React.SetStateAction<iProducts[]>>
  handleProduct: (elem: iProducts) => void
}

export const CartContext = createContext<iCartContext>({} as iCartContext);


export const CartProvider = ({ children }: iChildren) => {
  
  const [objectProduct, setObjectProduct] = useState<iProducts[]>([] as iProducts[]);
  
  const handleProduct = (elem: iProducts) => {
    setObjectProduct([elem ,...objectProduct])
  };


  return (
    <CartContext.Provider
      value={{ objectProduct, setObjectProduct , handleProduct }}
    >
      {children}
    </CartContext.Provider>
  );
};
