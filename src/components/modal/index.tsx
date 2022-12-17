import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Buttons } from "../buttons"
import { DivModal } from "./style";
import trash from "../../imgs/lixeira.svg";
import { UlItens } from "./styleUl";

interface iClick{
    onClose: any,
    id: string,
}

export const Modal = ({id = "modal", onClose}:iClick) =>{

    const { objectProduct }= useContext(CartContext)
    
    return(
        <DivModal>
            <div>
                <header>
                    <h1>Carrinho de compras</h1>
                    <Buttons onClick={onClose} type="button">X</Buttons>
                </header>
                {objectProduct.length == 0 ?(
                    <div>
                        <h2>Sua sacola está vazia</h2>
                        <p>Adicione itens</p>
                    </div>
                ):(
                    <UlItens>
                    {objectProduct.map((list)=>{
                        return(
                            <li key={list.id}>
                                <div>
                                    <img src={list.img} alt={list.name} />
                                    <div>
                                        <h3>{list.name}</h3>
                                        <div>
                                            <button>-</button>
                                            <span>1</span>
                                            <button>+</button>
                                        </div>
                                    </div>
                                    <img className="trash" src={trash} alt="Excluir" />
                                </div>
                            </li>
                        )
                    })}
                    <div className="value">
                        <span>Total</span>
                        <span>R$: 500</span>
                    </div>
                    <button>Remover todos</button>
                    </UlItens>
                )
                }
            </div>
        </DivModal>
    )
}