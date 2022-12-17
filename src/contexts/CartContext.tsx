import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { iChildren, iProducts } from "../interface";

export interface iCartContext {
  objectProduct: [] | iProducts[]
  setObjectProduct: React.Dispatch<React.SetStateAction<iProducts[]>>
  handleProduct: (elem: iProducts) => void
  total: number
  removeAll: () => void
  removeProduct: (item: number) => void
  increase: () => void
  decrease: () => void
  counter: number
  counterCart:number
}

export const CartContext = createContext<iCartContext>({} as iCartContext);

export const CartProvider = ({ children }: iChildren) => {
  const [objectProduct, setObjectProduct] = useState<iProducts[]>(
    [] as iProducts[]
  );
  const [counter, setCounter] = useState(1);
  const [counterCart, setCounterCart] = useState(0)

  const increaseCart = () =>{
    setCounterCart(counterCart+1)
  }

  const decreaseAll = () =>{
    setCounterCart(0)
  }

  const decreaseCart = () =>{
    setCounterCart(counterCart - 1)
  }

  const increase = () => {
    setCounter(counter + 1);
  };

  const decrease = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  const handleProduct = (elem: iProducts) => {
    const findItem = objectProduct.find((item) => item.id === elem.id);
    if (findItem) {
      toast.error("Item ja existe no carrinho");
      return;
    }

    increaseCart()
    setObjectProduct([elem, ...objectProduct]);
  };

  const removeAll = () => {
    setObjectProduct([]);
    decreaseAll()
    toast.success("Todos os itens removidos da lista de compras");
  };

  const removeProduct = (id: number) => {
    const newList = objectProduct.filter((lis) => lis.id !== id);
    decreaseCart()
    setObjectProduct(newList);
    toast.success("Produto removido");
  };

  const total = objectProduct.reduce((acc, actual) => acc + actual.price, 0);

  return (
    <CartContext.Provider
      value={{
        objectProduct,
        setObjectProduct,
        handleProduct,
        total,
        removeAll,
        removeProduct,
        increase,
        decrease,
        counter,
        counterCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
