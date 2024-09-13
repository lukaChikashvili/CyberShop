import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Products from "./components/Products"



function App() {


  return (
    <>
    <Routes>
       <Route path="/" element = {<Home />} />
       <Route path="/products" element = {<Products />} />
    </Routes>

    </>
  )
}

export default App
