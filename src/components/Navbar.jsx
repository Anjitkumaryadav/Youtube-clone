import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../../public/logo.jpg";
import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa";
import { RiVideoAddLine } from "react-icons/ri";



function Navbar() {
  return (
    <div className='flex justify-between px-6 py-2'>
        <div className='border border-black space-x-4 flex items-center'>
            <RxHamburgerMenu className='text-xl cursor-pointer'/>
            <img src={logo} alt="" className='w-28'/>
        </div>
        <div className='flex w-[35%]  border border-black'>
            <div className='w-[100%] px-3 py-2 border rounded-l-full'><input type="text" placeholder='Search' className='outline-none'/></div>
            <button className='px-4 py-2 border rounded-r-full'><CiSearch size={'24px'}/></button>
            <FaMicrophone size={'38px'} className='ml-3 border rounded-full p-2 cursor-pointer hover:bg-gray-200 duration-200'/>

        </div>
        <div className='border border-black'>
            <RiVideoAddLine />
            bellicons 
            profiles
            logo
        </div>
    </div>
  )
}

export default Navbar