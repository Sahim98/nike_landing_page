import React from 'react'
import { star } from '../assets/icons'

const PopularProductCard = ({imgURL,name,price}) => {
  return (
    <div className='flex flex-col'>
       <img src={imgURL} height={100} width={150} alt={name} />
       <div className='flex gap-4 justify-start items-center mt-3'>
        <img src={star} alt="" height={10} width={20} />

        <p className='text-xl font-montserrat leading-normal text-slate-gray'>(4.5)</p>
       </div>
       <div className='font-semibold my-2 leading-normal font-palanquin text-lg'>{name}</div>
       <p className='font-semibold text-coral-red font-montserrat text-lg leading-normal'>{price}</p>
    </div>
  )
}

export default PopularProductCard