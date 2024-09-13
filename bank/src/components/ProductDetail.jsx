import React from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Items';

const ProductDetail = () => {
   
    const { id } = useParams();

    const product = items.find(item => item.id === parseInt(id));


  return (
    <div>
       <img src = {product.img} className='w-1/2 img ' />
       <h2>{product.title}</h2>
       <h2>{product.price}</h2>
    </div>
  )
}

export default ProductDetail
