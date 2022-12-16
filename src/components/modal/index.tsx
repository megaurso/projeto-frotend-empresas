import { Buttons } from "../buttons"


export const Modal = () =>{
    return(
        <div>
            <header>
                <h1>Carrinho de compras</h1>
                <Buttons type="button">X</Buttons>
            </header>
            <div>
                <h2>Sua sacola está vazia</h2>
                <p>Adicione itens</p>
            </div>
        </div>
    )
}