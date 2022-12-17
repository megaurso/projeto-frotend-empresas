import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Buttons } from "../buttons";
import { DivModal } from "./style";
import trash from "../../imgs/lixeira.svg";
import { UlItens } from "./styleUl";

interface iClick {
  onClose: any;
  id: string;
}

export const Modal = ({ id = "modal", onClose }: iClick) => {
  const {
    objectProduct,
    total,
    removeAll,
    removeProduct,
    increase,
    decrease,
    counter,
  } = useContext(CartContext);

  return (
    <DivModal>
      <div>
        <header>
          <h1>Carrinho de compras</h1>
          <Buttons onClick={onClose} type="button">
            X
          </Buttons>
        </header>
        {objectProduct.length == 0 ? (
          <div>
            <h2>Sua sacola está vazia</h2>
            <p>Adicione itens</p>
          </div>
        ) : (
          <UlItens>
            {objectProduct.map((list) => {
              return (
                <li key={list.id}>
                  <div>
                    <img src={list.img} alt={list.name} />
                    <div>
                      <h3>{list.name}</h3>
                      <div>
                        <Buttons onClick={decrease} type="button">
                          -
                        </Buttons>
                        <span>{counter}</span>
                        <Buttons onClick={increase} type="button">
                          +
                        </Buttons>
                      </div>
                    </div>
                    <img
                      onClick={() => removeProduct(list.id)}
                      className="trash"
                      src={trash}
                      alt="Excluir"
                    />
                  </div>
                </li>
              );
            })}
            <div className="value">
              <span>Total</span>
              <span>R$: {total.toFixed(2)}</span>
            </div>
            <Buttons onClick={() => removeAll()} type="button">
              Remover todos
            </Buttons>
          </UlItens>
        )}
      </div>
    </DivModal>
  );
};
