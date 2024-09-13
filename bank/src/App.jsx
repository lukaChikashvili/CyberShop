import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Products from "./components/Products"
import ProductDetail from "./components/ProductDetail"



function App() {


  return (
    <>
    <Routes>
       <Route path="/" element = {<Home />} />
       <Route path="/products" element = {<Products />} />
       <Route path="/products/:id" element = {<ProductDetail />} />
    </Routes>

    </>
  )
}

export default App
