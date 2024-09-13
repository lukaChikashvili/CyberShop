import React from 'react'
import { items } from './Items'
import { ProductItem } from './ProductItem'

const Products = () => {
  return (
    <div className="frame">
          <div className="inner_frame flex  gap-8 items-center justify-center">
        
           {items.map((value) => {
              return (
                <ProductItem src = {value.img} title = {value.title} price={value.price} />
              )
           })}
         </div>

    
        </div>  
  )
}

export default Products
