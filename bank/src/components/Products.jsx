import React from 'react'
import { items } from './Items'
import { ProductItem } from './ProductItem'
import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <div className="frame">
          <div className="inner_frame flex flex-wrap text-center  gap-16 items-center justify-center">
        
           {items.map((value) => {
              return (
                <Link key={value.id} to ={`/products/${value.id}`}>
                <ProductItem src = {value.img} title = {value.title} price={value.price} />
                </Link>
              )
           })}
         </div>

    
        </div>  
  )
}

export default Products
