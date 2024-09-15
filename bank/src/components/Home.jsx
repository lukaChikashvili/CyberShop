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
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-white font-bold">CyberShop</h1>
              <p className="text-white sm:text-lg md:text-xl lg:text-2xl text-center">
                 Discover the Future of Fashion and Tech
              </p>

              <p className="text-[#FFEB00] text-sm sm:text-base md:text-lg lg:text-xl ">
                 Shop Smarter. Shop Faster. Shop the Future.
              </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 items-center justify-center">
              <button className="futuristic_button  flex items-center justify-center gap-2 sm:gap-4  text-sm sm:text-base" onClick={showProducts}><ShoppingCart />Start buying</button>
              <button className="futuristic_button flex items-center justify-center gap-2 sm:gap-4 text-sm sm:text-base"><Info />About us</button>
              </div>
         </div>

    
        </div>    
  )
}

export default Home
