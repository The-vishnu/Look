import React, { useState } from 'react';
import NavbarTabs from './NavbarTabs';
import { Search, User, ShoppingBag, X, } from "lucide-react";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className='z-10 bg-white top-0 left-0 w-full h-16 sticky shadow-md flex items-center justify-center font-serif text-gray-800'>
      <div className='flex items-center justify-between w-10/12 max-w-7xl'>

        {/* Brand */}
        <div className='text-2xl font-bold cursor-pointer'>
          Look-It
        </div>

        {/* Tabs */}
        <div className='hidden md:flex'>
          <NavbarTabs/>
        </div>

        {/* Icons */}
        <div className='flex flex-row items-center gap-5'>

          {/* Search Icon / Input */}
          <div className='relative'>
            {showSearch ? (
              <div className='flex items-center gap-2'>
                <input 
                  type="text" 
                  placeholder='Search...' 
                  className='border border-gray-300 rounded-md px-2 py-1 outline-none transition w-60'
                  autoFocus
                />
                <X className='cursor-pointer hover:text-gray-600 transition' size={20} onClick={() => setShowSearch(false)} />
              </div>
            ) : (
              <Search 
                size={20} 
                className='cursor-pointer hover:text-gray-600 transition' 
                onClick={() => setShowSearch(true)}
              />
            )}
          </div>

          <ShoppingBag className='cursor-pointer hover:text-gray-600 transition' size={20}/>
          <User className='cursor-pointer hover:text-gray-600 transition' size={20}/>
        </div>

      </div>
    </div>
  )
}

export default Navbar;
