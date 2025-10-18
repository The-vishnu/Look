import React from 'react'
import NavbarTabs from './NavbarTabs'
import { Search, User, ShoppingBag } from "lucide-react";


const Navbar = () => {
  return (
    <>
      <div className='sticky items-center w-full h-16 justify-center font-serif p-4 text-gray-800 '>
        <div className='flex itme-center justify-center'>
            <div className='flex flex-row w-[950px] items-center justify-between '>
            <div className=''>
                Look-It
            </div>
            <NavbarTabs/>
            <div className='flex flex-row gap-5'>
                <span className=''><Search size={20}/></span>
                <span><ShoppingBag size={20}/></span>
                <span><User size={20}/></span>
            </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
