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
import { CartContext } from "../../contexts/CartContext";
import { Link } from "react-router-dom";


export const DashBoard = () => {
  const { products } = useContext(UserContext);
  const { handleProduct,counterCart } =useContext(CartContext);

  const [modalVisible, setModalVisible] = useState(false);
  const [filterListCart, setFilterListCart] = useState([])

  const removeLocalStorage = ()=> {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USER");
  }
 
  // const renderFilter(){
  //   const foodName = products.filter(({name,category}:)=>
  //     name.toLowerCase().includes(filterListCart) ||
  //     category.toLowerCase().includes(filterListCart)
  //   )

  //   setFilterListCart(foodName)
  // }

  return (
    <>
      <DivDashBoard>
        <Header>
          <div>
            <h1>Burguer</h1>
            <h2>Kenzie</h2>
          </div>
          <div>
            <div>
              <input /* onChange={() => renderFilter()}*/ type="text" placeholder="Digitar Pesquisa" />
              <img src={search} alt="Pesquisa" />
            </div>
            <section>
              <img
                onClick={() => setModalVisible(true)}
                src={cart}
                alt="Carrinho de compras"
                />
                <span>{counterCart}</span>
            </section>
            <Link onClick={removeLocalStorage} to={"/"}><img src={exit} alt="Sair" /></Link>
            
          </div>
        </Header>
        <div>
          <ul>
            {products.map((elem: iProducts) => (
              <li key={elem.id}>
                <img src={elem.img} alt={elem.name} />
                <div>
                  <h3>{elem.name}</h3>
                  <span>{elem.category}</span>
                  <span>R$: {elem.price.toFixed(2)}</span>
                  <Buttons onClick={()=>{handleProduct(elem)}} type="submit">
                    Adicionar
                  </Buttons>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </DivDashBoard>
      {modalVisible ? (
        <Modal id="modal" onClose={() => setModalVisible(false)} />
      ) : null}
    </>
  );
};
