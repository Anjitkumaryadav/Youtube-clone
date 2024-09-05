import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../../public/logo.jpg";
import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa";
import { RiVideoAddLine } from "react-icons/ri";
import { CiBellOn } from "react-icons/ci";
import profile from "../../public/profile2.jpg";
import Avatar from 'react-avatar';



function Navbar() {
  return (
    <div className='flex justify-between fixed top-0 w-[100%] bg-white px-6 py-2'>
        <div className=' space-x-4 flex items-center'>
            <RxHamburgerMenu className='text-xl cursor-pointer'/>
            <img src={logo} alt="" className='w-28'/>
        </div>
        <div className='flex w-[35%] items-center '>
            <div className='w-[100%] px-3 py-2 border rounded-l-full'><input type="text" placeholder='Search' className='outline-none'/></div>
            <button className='px-4 py-2 border rounded-r-full'><CiSearch size={'24px'}/></button>
            <FaMicrophone size={'38px'} className='ml-3 border rounded-full p-2 cursor-pointer hover:bg-gray-200 duration-200'/>

        </div>
        <div className='flex space-x-5 items-center '>
            <RiVideoAddLine className='text-2xl '/>
            <CiBellOn className='text-2xl '/>
            <Avatar src={profile} size='32' round={true} />
        </div>
    </div>
  )
}

export default Navbar