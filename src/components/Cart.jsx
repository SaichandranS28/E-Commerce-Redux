import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../Redux/cartSlice'

function Cart() {
  const dispatch = useDispatch()
  const {items, total} = useSelector((state)=> state.cart)
  const count = items.length
  let price_separator = (total).toLocaleString('en-IN')

  return (
    <div>
        <div className="max-w-4xl mx-auto mt-28">
            <div className="flex gap-12">
              <div className="w-[85%] pb-16">
                <h1 className='text-3xl font-semibold'>Shopping Cart 🛒 {`(${count})`}</h1>
                {
                  items.map((item)=>{
                    let price_separator = (item.price*80).toLocaleString('en-IN')

                    return <div className='mt-5 p-2 border shadow-md rounded-xl max-w-5xl'>
                      <div className="flex gap-5">
                        <img src={item.image} className='h-36' alt="" />
                        <div className="flex-row py-3">
                          <h1 className='line-clamp-1 font-semibold'>{item.title}</h1>
                          <p className='text-gray-400 mt-1'>color: {item.color}</p>
                          <p className='text-gray-400'>price: {price_separator}</p>
                          <p className='text-green-500 -mt-1'>In Stock</p>
                          <button onClick={()=> dispatch(removeFromCart(item))} className='mt- text-red-600'>Remove</button>
                        </div>
                      </div>
                    </div>
                  } )
                }
              </div>
              {
                count > 0 ? <div className="w-[15%] fixed right-44">
                <div className="w-80 border p-5 rounded-xl shadow-lg">
                  <h1 className='text-center font-bold text-lg border-b border-gray-200 pb-2'>Order Summary</h1>
                  <div className="mt-2 font-normal p-2 border-b pb-4">
                    <div className="px-3">
                      <div className="flex justify-between">
                        <h1>Price</h1>
                        <h1 className='text-start'>{price_separator}</h1>
                      </div>
                      <div className="flex justify-between">
                        <h1>Delivery</h1>
                        <h1 className='text- text-green-500 font-medium'>Free</h1>
                      </div>
                      <div className="flex justify-between">
                        <h1>Discount</h1>
                        <h1 className='text-red-600 font-medium'>27%</h1>
                      </div>
                    </div>
                  </div>
                  <div className="px-5 pt-3">
                    <div className="flex justify-between items-center">  
                      <h1 className='text-lg font-semibold'>Sub Total</h1>
                      <h1 className='text-2xl font-bold'>₹ {price_separator}</h1>
                    </div>
                  </div>
                </div>
              </div> : null
              }
              
            </div>
        </div>
    </div>
  )
}

export default Cart
