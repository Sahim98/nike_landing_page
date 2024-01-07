import React from 'react'
import { bigShoe1, shoe4 } from '../assets/images'
import {BsPerson} from 'react-icons/bs'
import {AiOutlineBarChart} from 'react-icons/ai'
import {BiTimeFive} from 'react-icons/bi'

const SuperQuality = () => {
  return (
    <section id='about-us'>
      <div className='flex  w-[50%] h-auto shadow-lg items-start rounded-lg justify-between p-2 border-2'>
      <img src={bigShoe1} height={100} width={200} alt="bigshoe" className='pr-3' />
        <div className=''>
        <div className='flex justify-between'>
          <div className='bg-green-100 p-1 text-base h-10 mr-3 text-green-800 font-bold'> Health & fitness</div>
          <div className='mr-2'>$14.50 <span className='text-slate-gray text-sm line-through'>   $29.5</span></div>
        </div>
        <p className='mt-2 font-palanquin'>Investing in stock the  complete course!(13 H..)</p>
       <div className='items-center justify-between flex'>
       <div className='my-3 flex '> <img src={shoe4} alt="" className='rounded-xl overflow-hidden' height={20} width={20} /> <div className='ml-2 text-slate-gray'>Sahim Salem</div></div>


       </div>
        <div className=' border  text-slate-gray mt-1'></div>

        <div className='flex mt-2 items-center justify-between'>
         <div className='items-center flex'> <BsPerson className='text-blue-400'/>   <span className='text-slate-gray ml-1'>265.7k</span></div>
          <div className='flex items-center text-slate-gray'> <AiOutlineBarChart className='text-orange-600'/> <div className='ml-1'></div>22.1k</div>
          <div className='flex items-center text-slate-gray'> <BiTimeFive/> <div className='ml-1'>6 hrs</div></div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default SuperQuality