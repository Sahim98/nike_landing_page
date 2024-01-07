import React, { useState } from 'react'
import Button from '../components/Button'
import {arrowRight} from '../assets/icons'
import {shoes, statistics} from '../constants'
import { bigShoe1 } from '../assets/images'
import ShoeCard from '../constants/ShoeCard'
const Hero = () => {
   const [bigShoeImg, setbigShoeImg] = useState(bigShoe1)

  return (
    <section id="home" 
  className='gap-10 w-full border-2 p-2 flex lg:flex-row flex-col justify-center min-h-screen'>
    <div className='items-start justify-center lg:w-2/5 relative w-full p-12 lg:mt-10 mt-4'>
    <p className=' font-montserrat text-coral-red mb-2'>Our Summer Collection</p>
  <h1 className='font-palanquin lg:text-6xl mt-5 text-5xl font-bold leading-1'>
    <span className='lg:bg-white lg:whitespace-nowrap pr-10 z-10 '>The New Arrival</span>
    <br />
    <span className='text-red-500 inline-block mt-3 leading-5'>Nike </span> Shoes</h1>
   <p className='text-gray-400 mt-3 mb-8 text-lg sm:max-w-sm'>
    Discover Stylish Nike arrivals, quality comfort,
    and innovation for your active life.
   </p>
   <Button label = 'Shop Now' iconURL = {arrowRight}/>
   <div className='flex justify-start items-start gap-20 
   mt-7 mb-2  w-full'>
    {
      statistics.map((i)=> (
        <div key={i.label}>
          <p className='text-3xl font-bold '>{i.value}</p>
          <p className='leading-7 text-slate-400'>{i.label}</p>
        </div>
      ))
    }
   </div>

    </div>

<div className='flex  justify-center items-center bg-primary lg:mt-15 w-full'>
  <img className='relative z-10 ' src={bigShoeImg} width={350} height={300} alt="shoe collection" />
 
 <div className='flex gap-2 absolute -bottom-[5%]'>
  {
    shoes.map((shoe) => 
    <div key={shoe} >
    <ShoeCard imageURL ={shoe} bigShoeImg = {bigShoeImg} changeImg = {(shoe)=>{setbigShoeImg(shoe) }} />
    </div>
    )
  }
 </div>

</div>
    </section>
  )
}

export default Hero