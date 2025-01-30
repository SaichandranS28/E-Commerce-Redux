import React from 'react'
import logo from '../assets/Logo.png'
import { Link, Links } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FaCartShopping } from "react-icons/fa6";

function Navbar() {
  const {items} = useSelector((state)=> state.cart)
  const itemsLength = items.length
  return (
    <div>
      <div className="w-full border-b bg-white border-gray-200 fixed top-0 z-50">
        <div className="max-w-7xl px-6 sm:px-5 md:px-10 mx-auto flex justify-between items-center py-2">
            <Link to='/'><img src={logo} className='h-10 cursor-pointer' alt="" /></Link>
            <div className="flex items-center gap-8">
                {/* <Link to='/' className='text-lg font-semibold'>Home</Link> */}
                <Link to='/cart'><div className="cursor-pointer relative">
                  <FaCartShopping className='text-3xl'/>
                  <div className="absolute -top-2 -right-1 border-2 bg-white flex justify-center items-center p-2 w-5 h-5 rounded-full">
                    <p className='text-black font-semibold'>{itemsLength}</p>
                  </div>
                </div></Link>
                {/* <Link to='/cart' className='text-lg font-semibold'>Cart - {itemsLength}</Link> */}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
