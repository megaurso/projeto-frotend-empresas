import  { createContext, useEffect, useState } from 'react'
import { iChildren, iProducts, iUserContextProps, iUserLogin, iUserRegister } from '../interface'
import { api } from '../services/api'
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const UserContext = createContext({} as iUserContextProps)


export const UserProvider = ({children}: iChildren) => {
  const [usersOn, setUsersOn] = useState<string | undefined>(localStorage.getItem("@TOKEN") || undefined)
  const [products, setProducts] = useState<iProducts[]>([]);

  
  const navigate = useNavigate();

  const myRegister = async (data: iUserRegister)=> {
    delete data.confirmPassword
    try {
      await api.post("/users", data)
      toast.success("Conta criada com sucesso!");
      navigate("/");
    } catch (error) {
      toast.error("Email ja existe use outro email");
      console.log(error)
    }
  }

  const getApiProducts = async () => {
    const token = localStorage.getItem("@TOKEN");
    if(token){
      const response = await api.get("/products", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        setProducts(response.data);
    }
  };
  
  const myLogin = async (data: iUserLogin) =>{
    try {
    const response = await api.post("/login",data)
    const { accessToken, user} = response.data;
    setUsersOn(accessToken)
    window.localStorage.clear();
    window.localStorage.setItem("@TOKEN", accessToken);
    window.localStorage.setItem("@USER", JSON.stringify(user));
    toast.success("Login efetuado com sucesso!");
    getApiProducts()
    navigate("/dashboard")
    
    } catch (error) {
      toast.error("Algo deu errado tente novamente!");
      console.log(error)
    }
  }

  useEffect(()=>{
    getApiProducts()
  },[])

  return (
    <UserContext.Provider value={{ myRegister, myLogin, usersOn, products}}>
        {children}
    </UserContext.Provider>
  )
}
