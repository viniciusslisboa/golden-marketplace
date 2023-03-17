import { Layout } from "./components/Layout"
import GlobalStyles from './styles/global'
import { MenuContext, MenuProvider } from "./context/MenuContext"
import { CartContext, CartProvider } from "./context/CartContext"

function App() {
  return (
    <MenuProvider>
      <MenuContext.Consumer>
        {({ isMenuOpen }) => (
          <CartProvider>
            <CartContext.Consumer>
              {({ isCartOpen }) => (
                <>
                  <GlobalStyles isMenuOpen={isMenuOpen} isCartOpen={isCartOpen} />
                  <Layout />
                </>
              )}
            </CartContext.Consumer>
          </CartProvider>
        )}
      </MenuContext.Consumer>
    </MenuProvider>
  )
}

export default App
