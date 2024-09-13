import React from 'react'
import shoe from '../assets/shoe.png';
import shoe2 from '../assets/shoe2.png';
import { ProductItem } from './ProductItem';


const Products = () => {
  return (
    <div className="frame">
          <div className="inner_frame flex  gap-8 items-center justify-center">
        
            <ProductItem src={shoe} title = "cybershoe" price = "21.10" />
         </div>

    
        </div>  
  )
}

export default Products
