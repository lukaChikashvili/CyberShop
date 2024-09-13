import React from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Items';
import { DollarSign } from 'lucide-react';
import ReactStars from 'react-stars'

const ProductDetail = () => {
   
    const { id } = useParams();

    const product = items.find(item => item.id === parseInt(id));


  return (
    <>
    <div className='flex items-center justify-center gap-12 min-h-screen '>
       <img src = {product.img} className='w-2/5 img hover:opacity-100 ' />
       <div className='flex flex-col gap-6 '>
       <h2 className='text-5xl text-white font-bold'>{product.title}</h2>
       <p className='' style={{width: '600px'}}>
          {product.desc}
       </p>
       <h2 className='text-5xl text-white flex items-center gap-4 '>{product.price}<DollarSign size={50} /></h2>
       <button className='futuristic_button duration-500 ease hover:bg-white hover:text-black'>add to cart</button>
       </div>
    </div>

    <div className='h-screen p-4 m-16 '>
        <div className='flex items-center gap-8'>
        <h2>{product.reviews} reviews</h2>
        <ReactStars size={30} color1='#fff' />
        </div>
        <div className=' h-0.5 absolute left-0 bg-white' style={{width: '736px'}}></div>
        <div className='w-2/5 h-0.5 absolute right-0 bottom-12 bg-white'></div>
        <div className=' h-0.5 absolute left-96  -rotate-45 -bottom-10 bg-white' style={{width: '248px', marginLeft: '315px'}}></div>
    </div>
    </>
  )
}

export default ProductDetail
