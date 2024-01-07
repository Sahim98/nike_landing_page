import React from 'react'
import {headerLogo} from '../assets/images'
import {navLinks} from '../constants/index'
import { hamburger } from '../assets/icons'

const Nav = () => {
  return (
    <header className='px-4 py-8 w-full absolute z-10'>
     <nav className='flex items-center justify-between'> 
     <img src={headerLogo} height={30} width={130} alt="Logo"/>
      <ul className='max-lg:hidden flex gap-16 justify-center items-center'>
      {navLinks.map((item)=>(<li key={item.label}>
        {<a href={item.href} className='flex font-mono px-4 hover:text-blue-400' >{item.label}</a>}
      </li>))}
      </ul>
      <div>
        <img src={hamburger} 
        alt="hamburger" 
        width={25}
        height={25}
        className='hidden max-lg:block'
        />
      </div>
     </nav>
   
    </header>
  )
}

export default Nav