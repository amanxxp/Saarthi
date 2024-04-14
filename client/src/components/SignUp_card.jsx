import React from 'react'
import { Link } from 'react-router-dom'

const SignUp_card = () => {
  return (
    <div className="rounded-lg">    
    <div className="container flex flex-col mx-auto bg-white rounded-lg pt-5 my-0">
      <div className="flex justify-center w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5 draggable">
        <div className="flex items-center justify-center w-full lg:p-12">
          <div className="flex items-center xl:p-10">
            <div className="flex flex-col w-full h-full pb-6 text-center bg-white rounded-3xl">
              <h3 className="mb-3 text-4xl font-extrabold text-dark-grey-900">Sign Up</h3>
              <p className="mb-4 text-grey-700">Enter your name and register</p>
              
           
               
               
                <hr className="h-0 border-b border-solid border-grey-500 mb-5" />
         
                <label htmlFor="name" className="mb-2 text-sm text-start text-grey-900">Name*</label>
                <input id="email" type="email" placeholder="Name" className="flex items-center border-[1px] border-black w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 focus:border-blue-500 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"/>
                <label htmlFor="email" className="mb-2 text-sm text-start text-grey-900">Email*</label>
                <input id="email" type="email" placeholder="mail@loopple.com" className="flex items-center border-[1px] border-black w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 focus:border-blue-500 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"/>
                <label htmlFor="username" className="mb-2 text-sm text-start text-grey-900">Username*</label>
                <input id="email" type="email" placeholder="Username" className="flex items-center border-[1px] border-black w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 focus:border-blue-500 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"/>
                <label htmlFor="password" className="mb-2 text-sm text-start text-grey-900">Password*</label>
                <input id="password" type="password" placeholder="Enter a password" className="flex items-center w-full border-[1px] border-black px-5 py-4 mb-5 mr-2 text-sm font-medium outline-none focus:bg-grey-400 focus:border-blue-500 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"/>
                <div className="flex flex-row justify-between mb-8">
                  <label className="relative inline-flex items-center mr-3 cursor-pointer select-none">
                    <input type="checkbox" checked value="" className="sr-only peer"/>
                    <div
                      className="w-5 h-5 bg-white border-2 rounded-sm border-grey-500 peer peer-checked:border-0 peer-checked:bg-purple-blue-500">
                      <img className="" src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/icons/check.png" alt="tick"/>
                    </div>
                   
                  </label>
                  <a href="javascript:void(0)" className="mr-4 text-sm font-medium text-purple-blue-500"><Link to="/">Already registered?</Link></a>
                </div>
              

                <button className="w-full bg-blue-500 px-6 py-5 mb-5 text-sm font-bold leading-none text-white transition duration-300 md:w-96 rounded-2xl hover:bg-purple-blue-600 focus:ring-4 focus:ring-purple-blue-100 bg-purple-blue-500">Register</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp_card