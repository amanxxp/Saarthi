import React from 'react'
import Image from '../assets/Designer.svg'
import { Link } from 'react-router-dom';

const NavC = () => {
  return (
    <div className=" flex justify-center items-center">
    <div className="top-1 left-3 w-[1335px] h-20 justify-between items-center inline-flex">
    <div className="h-20 justify-between items-center gap-[87px] flex">

      <img className="flex-1 h-20 w-20 rounded-full border-black" src={Image} />
      <div className="flex-1 h-[33px] justify-between items-start gap-[30px] flex">
        <div className="w-[113px] h-[33px] text-black text-xl font-normal font-['Inter']"><Link to="/">Explore</Link></div>
        <div className="w-[113px] h-[33px] text-black text-xl font-normal font-['Inter']"><Link to="/jobs">Jo</Link></div>
        <div className="w-[142px] h-[33px] text-black text-xl font-normal font-['Inter']"><Link to="/health">Health</Link></div>
        <div className="w-[150px] h-[33px] text-black text-xl font-normal font-['Inter']"><Link to="/policies">Policies</Link></div>
        <div className="w-[150px] h-[33px] text-black text-xl font-normal font-['Inter']"><Link to="/community">Community</Link></div>
      </div>
    </div>

    <div className=" flex-1 w-[253px] justify-end items-end gap-[20px]  flex">
     
   
      
      
    </div>
  </div>
  </div>
  )
}

export default NavC