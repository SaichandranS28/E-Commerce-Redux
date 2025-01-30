import React from 'react'
import { MdCurrencyRupee } from "react-icons/md";
import { Link } from 'react-router-dom';


function Card({key,id,img,title,price,discount}) {
  
  let price_separator = (price*80).toLocaleString('en-IN')
  return (
    <div>
    <div className="w-64 cursor-pointer">
        <Link to={`/product/${id}`}>
            <div className="w-64 p-2 border rounded-xl shadow-md">
                <img src={img} className='h-52 mx-auto object-contain transition-all ease-in-out delay-150 hover:scale-105' alt="" />
            </div>
        </Link>
        <div className="p-2">
            <p className='truncate font-semibold'>{title}</p>
            <div className="flex items-center gap-2">
                <div className="flex items-center">
                    <MdCurrencyRupee className='text-green-600 text-xl'/>
                    <p className='text-lg font-semibold'>{price_separator} /-</p>
                </div>
                {
                    discount > 0 ? 
                    <div className="flex items-center gap-1">
                        <div className="bg-red-500 w-6 h-6 rounded-full flex items-center justify-center">
                            <p className='text-white text-xs font-semibold'>{discount}%</p>
                        </div>  
                        <p className='font-semibold'>off</p>
                    </div>
                        : ""
                }
                
            </div>
        </div>
    </div>
    </div>
  )
}

export default Card
