import React from "react"
import ReactDOM from "react-dom"

import App from "./App"

import "./index.css"
import { CartProvider } from "./providers/CartProvider"

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
