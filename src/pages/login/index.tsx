import { Link } from "react-router-dom"
import { MainLoginContainer } from "./loginContainer"
import { Inputs } from "../../components/inputs"
import { Buttons } from "../../components/buttons"
import { Logo } from "../../components/logo"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchemaLogin } from "../../lib/yup"
import { iUserLogin } from "../../interface"
import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"


export const Login = () => {

    const { createUserSession }= useContext(UserContext)

    const {
        register,
        handleSubmit,
        formState:{ errors }
    }= useForm<iUserLogin>({
        resolver: yupResolver(formSchemaLogin)
    })

  return (
    <MainLoginContainer>
        <Logo/>
        <section>
            <form noValidate onSubmit={handleSubmit(createUserSession)}>
                <h3>Login</h3>
                <div>
                    <label htmlFor="email">Email</label>
                    <Inputs placeholder="Digite seu Email" id="email" type="text" register={register}/>
                    <span aria-errormessage="error">{errors.email?.message}</span>
                </div>
                <div>
                    <label htmlFor="password">Senha</label>
                    <Inputs placeholder="Digite sua senha" id="password" type="password" register={register}/>
                    <span aria-errormessage="error">{errors.password?.message}</span>
                </div>
                <Buttons type="submit">Logar</Buttons>
            </form>
            <p>Crie sua conta para saborear muitas delícias e matar sua fome!</p>
            <Link to={"/register"}>Cadastrar</Link>
        </section>
    </MainLoginContainer>
  )
}
