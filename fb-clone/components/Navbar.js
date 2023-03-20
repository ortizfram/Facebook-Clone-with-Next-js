import React from 'react';
import {AiOutlineSearch} from 'react-icons/ai';
import {BsFacebook} from 'react-icons/bs';


const Navbar = () => {
  return (
    <div className='py-2 px-4 bg-white shadow-md flex justify-between items-center top-0 sticky z-50'>
      <div className='flex items-center gap-2'>
        <BsFacebook className='text-primary text-[40px]' />

        <div className='relative hidden sm:block'>
            <AiOutlineSearch className='absolute text-[20px] top-[10px] left-[10px] text-gray-500' />
            <input 
                type="text"
                className='bg-[#F0F2F5] p-2 rounded-full pl-9 outline-none placeholder:text-gray-500'
                placeholder='Search Facebook'     />
        </div>

      </div>
    </div>
  )
}

export default Navbar
