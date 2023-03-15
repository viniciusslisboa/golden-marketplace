import { Layout } from "./components/Layout"
import GlobalStyles from './styles/global'
import { MenuContext, MenuProvider } from "./context/MenuContext"

function App() {

  return (
    <MenuProvider>
      <MenuContext.Consumer>
        {({ isMenuOpen, handleToggleMenuOpen }) => (
          <>
            <GlobalStyles isMenuOpen={isMenuOpen} />
            <Layout />
          </>
        )}
      </MenuContext.Consumer>
    </MenuProvider>
  )
}

export default App
