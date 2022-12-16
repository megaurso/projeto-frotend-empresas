import { createContext, useContext, useState,} from "react";
import { iChildren } from "../interface";
import { UserContext } from "./UserContext";

interface iCartContext{
  teste:string,
  setTeste:React.Dispatch<React.SetStateAction<string>>
}

export const CartContext = createContext<iCartContext>({} as iCartContext);

export const CartProvider = ({ children }: iChildren) => {

const [ teste , setTeste] = useState("")
  
  return (
    <CartContext.Provider value={{teste,setTeste}}>{children}</CartContext.Provider>
  );
};
