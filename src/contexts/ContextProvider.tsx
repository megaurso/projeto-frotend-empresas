import { iChildren } from "../interface"
import { CartProvider } from "./CartContext"
import { UserProvider } from "./UserContext"


export const ContextProvider = ({children}:iChildren) => {
  return (
    <UserProvider>
        <CartProvider>{children}</CartProvider>
    </UserProvider>
  )
}
