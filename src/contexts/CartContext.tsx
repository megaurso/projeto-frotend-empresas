import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { iChildren, iProducts } from "../interface";

export interface iCartContext {
  objectProduct: [] | iProducts[];
  setObjectProduct: React.Dispatch<React.SetStateAction<iProducts[]>>;
  handleProduct: (elem: iProducts) => void;
  handleProductRemove: (elem: iProducts) => void;
  total: number;
  removeAll: () => void;
  removeProduct: (item: number) => void;
  counterCart: number;
}

export const CartContext = createContext<iCartContext>({} as iCartContext);

export const CartProvider = ({ children }: iChildren) => {
  const [objectProduct, setObjectProduct] = useState<iProducts[]>(
    [] as iProducts[]
  );
  const [counterCart, setCounterCart] = useState(0);

  const increaseCart = () => {
    setCounterCart(counterCart + 1);
  };

  const decreaseAll = () => {
    setCounterCart(0);
  };

  const decreaseCart = () => {
    setCounterCart(counterCart - 1);
  };

  const total = objectProduct.reduce(
    (acc, actual) => acc + actual.price * actual.counter,
    0
  );

  const handleProduct = (elem: iProducts) => {
    const findItem = objectProduct.find((item) => item.id === elem.id);
    if (findItem) {
      const newArray = objectProduct.map((item) => {
        if (item.id === elem.id) {
          item.counter += 1;
          return item;
        } else {
          return item;
        }
      });
      setObjectProduct(newArray);
    } else {
      increaseCart();
      elem.counter = 1;
      setObjectProduct([elem, ...objectProduct]);
    }
  };

  const handleProductRemove = (elem: iProducts) => {
    const findItem = objectProduct.find((item) => item.id === elem.id);
    if (findItem && elem.counter > 1) {
      const newArray = objectProduct.map((item) => {
        if (item.id === elem.id) {
          item.counter -= 1;
          return item;
        } else {
          return item;
        }
      });
      setObjectProduct(newArray);
    }
  };

  const removeAll = () => {
    setObjectProduct([]);
    decreaseAll();
    toast.success("Todos os itens removidos da lista de compras");
  };

  const removeProduct = (id: number) => {
    const newList = objectProduct.filter((lis) => lis.id !== id);
    decreaseCart();
    setObjectProduct(newList);
    toast.success("Produto removido");
  };

  return (
    <CartContext.Provider
      value={{
        objectProduct,
        setObjectProduct,
        handleProduct,
        total,
        removeAll,
        removeProduct,
        counterCart,
        handleProductRemove,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
