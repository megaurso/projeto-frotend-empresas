import { CartProvider } from './CartContext'
import { UserProvider } from './UserContext'

export const ContextProvider = ({children}) => {
  return (
    <UserProvider>
        <CartProvider>{children}</CartProvider>
    </UserProvider>
  )
}
