import search from "../../imgs/pesquisa.svg";
import exit from "../../imgs/sair.svg";
import cart from "../../imgs/compras.svg";
import { Header } from "./header";
import { DivDashBoard } from "./style";
import { useContext, useState } from "react";
import { Modal } from "../../components/modal";
import { UserContext } from "../../contexts/UserContext";
import { iProducts } from "../../interface";
import { Buttons } from "../../components/buttons";

export const DashBoard = () => {
  const { products } = useContext(UserContext);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <DivDashBoard>
      <Header>
        <div>
          <h1>Burguer</h1>
          <h2>Kenzie</h2>
        </div>
        <div>
          <div>
            <input type="text" placeholder="Digitar Pesquisa" />
            <img src={search} alt="Pesquisa" />
          </div>
          <img onClick={()=>setModalVisible(true)} src={cart} alt="Carrinho de compras" />
          <img src={exit} alt="Sair" />
        </div>
      </Header>
      <div>
        <ul>
          {products.map((elem:iProducts)=> <li key={elem.id}>
              <img src={elem.img} alt={elem.name} />
              <div>
                <h3>{elem.name}</h3>
                <span>{elem.category}</span>     
                <span>{elem.price.toFixed(2)}</span>
                <Buttons type="button">Adicionar</Buttons>      
              </div>
          </li>)}
        </ul>
      </div>
      {/* {modalVisible ? <Modal onClose={() => setModalVisible(false)} /> : null} */}
    </DivDashBoard>
    // {modalVisible ? <Modal onClose={() => setModalVisible(false)} /> : null}
  );
};
