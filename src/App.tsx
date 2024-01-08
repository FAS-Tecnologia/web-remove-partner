import { BrowserRouter } from "react-router-dom"

import { QueryClientProvider } from "@tanstack/react-query"

import { Router } from "./routes"

import { ThemeProvider } from "styled-components"

import { queryClient } from "./lib/react-query"

import { defaultTheme } from "./styles/themes/default"
import GlobalStyle from './styles/global';

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      </QueryClientProvider> 
    </ThemeProvider>
  )
}

export {App}
