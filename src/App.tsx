import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"
import { OrderListContextProvider } from "./contexts/OrderListContext"

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <OrderListContextProvider>
          <Router />
        </OrderListContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
