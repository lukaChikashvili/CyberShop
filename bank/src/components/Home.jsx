import React from 'react'
import { Info, ShoppingCart} from 'lucide-react'
import { useNavigate } from 'react-router-dom'



const Home = () => {

    let navigate = useNavigate();

     // navigate to product page
     const showProducts = () => {
       navigate('/products');
     } 

  return (
    <div className="frame">
          <div className="inner_frame flex flex-col gap-8 items-center justify-center">
              <h1 className="text-8xl text-white font-bold">CyberShop</h1>
              <p className="text-white text-xl">
                 Discover the Future of Fashion and Tech
              </p>

              <p className="text-[#FFEB00] ">
                 Shop Smarter. Shop Faster. Shop the Future.
              </p>

          <div className="flex items-center gap-8">
              <button className="futuristic_button flex items-center gap-4" onClick={showProducts}><ShoppingCart />Start buying</button>
              <button className="futuristic_button flex items-center gap-4"><Info />About us</button>
              </div>
         </div>

    
        </div>    
  )
}

export default Home
