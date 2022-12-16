import { Logo } from "../../components/logo"
import { MainRegister } from "./style"
import { Link } from "react-router-dom"
import { Inputs } from "../../components/inputs"
import { Buttons } from "../../components/buttons"
import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchemaRegister } from "../../lib/yup"
import { iUserRegister } from "../../interface"

export const Register = () => {
    const { myRegister } = useContext(UserContext)
    
    const {
        register,
        handleSubmit,
        formState:{ errors }
    }= useForm<iUserRegister>({
        resolver: yupResolver(formSchemaRegister)
    })

    return (
      <MainRegister>
        <Logo/>
        <div>
            <form noValidate onSubmit={handleSubmit(myRegister)}>
                <div>
                    <h2>Cadastro</h2>
                    <Link to={"/"}>Retornar para o login</Link>
                </div>
                <div>
                    <label htmlFor="name">Nome</label>
                    <Inputs placeholder="Digite seu nome" type="text" id="name" register={register}/>
                    <span aria-errormessage="error">{errors.name?.message}</span>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <Inputs placeholder="Digite seu email" type="email" id="email" register={register}/>
                    <span aria-errormessage="error">{errors.email?.message}</span>
                </div>
                <Inputs placeholder="Senha" type="password" id="password" register={register}/>
                <span aria-errormessage="error">{errors.password?.message}</span>
                <Inputs placeholder="Confirmar senha" type="password" id="confirmPassword" register={register}/>
                <span aria-errormessage="error">{errors.confirmPassword?.message}</span>
                <Buttons type="submit">Cadastrar</Buttons>
            </form>
        </div>
      </MainRegister>
    )
}
  