import React from 'react'
import { products } from '../constants'
import PopularProductCard from '../components/PopularProductCard'
const PopularProducts = () => {
  return (
    <section id='products'>
      <div className='flex flex-col justify-start'>
        <h2 className='text-4xl font-palanquin font-bold '>Our <span className='text-coral-red'>Popular</span> Products</h2>
       <p className='font-montserrat text-slate-gray mt-4 lg:max-w-lg'>  Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value</p>
      </div>

      <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-1 mt-4'>
        {products.map((product)=> <PopularProductCard key ={product.name} {...product}/>)}
      </div>
    </section>
  )
}

export default PopularProducts