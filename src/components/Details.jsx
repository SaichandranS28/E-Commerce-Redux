import axios from 'axios'
import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { MdCurrencyRupee } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/cartSlice';

function Details() {
    let {id} = useParams()
    let [product,setProduct] = useState([])
    let price_separator = (product.price*80).toLocaleString('en-IN')
    let original_price = Math.floor(((product.price*80)/(1-(product.discount/100)))).toLocaleString('en-IN')
    const dispatch = useDispatch()
    
    useEffect(()=>{
        axios.get(`https://fakestoreapi.in/api/products/${id}`).then((response)=>{
            setProduct(response.data.product)
        })
    }, [])

    const handleAddCart = () => {
        dispatch(addToCart(product))
    }

  return (
    <div className='mt-20'>
        {
            product.length === 0 

            ?
                <h1 className='text-center mt-52'><span class="loader"></span></h1>         
            : 
                <div className="">
                    <div className="max-w-7xl mx-auto px-8 py-5 mt-5 shadow-xl flex items-center gap-5">
                        <div className="w-1/2">
                            <img src={product.image} className='h-[500px] object-contain' alt="" />
                        </div>
                        <div className="w-1/2">
                            <h1 className='text-xl font-semibold'>{product.title}</h1>
                            <div className="flex items-center gap-2 mt-3 mb-3">
                                <div className="flex items-center gap-2">
                                    {
                                        product.discount > 0 
                                        ?
                                            <p className='text-2xl text-gray-500 line-through'>{original_price}</p>
                                        : 
                                            null
                                    }
                                    <div className="flex items-center">
                                        <MdCurrencyRupee className='text-green-600 text-3xl'/>
                                        <p className='text-3xl font-semibold'>{price_separator} /-</p>
                                    </div>
                                </div>
                                {
                                    product.discount > 0 
                                    ? 
                                        <div className="flex items-center gap-1">
                                            <div className="bg-red-500 w-10 h-10 rounded-full flex items-center justify-center">
                                                <p className='text-white text-2xl font-semibold'>{product.discount}%</p>
                                            </div>  
                                            <p className='font-semibold text-xl'>off</p>
                                        </div>
                                    :
                                        null
                                }
                            </div>
                            <div className="">
                                <h1 className='text-lg font-semibold'>Category : {product.category}</h1>
                                <h1 className='text-lg font-semibold'>Brand : {product.brand}</h1>
                                <h1 className='text-lg font-semibold'>Colour : {product.color}</h1>
                                <h1 className='text-lg font-semibold'>Model : {product.model}</h1>
                            </div>
                            <h1 className='font-semibold mt-3 text-lg mb-1'>About this product:</h1>
                            <h1 className='text-sm text-gray-700 text-justify'>{product.description}</h1>
                            <div className="flex items-center gap-4">
                                <button className='mt-4 px-8 py-3 bg-[#fcfcfc] border font-semibold'>Buy now</button>
                                <button onClick={handleAddCart} className='mt-4 px-8 py-3 bg-black text-white font-semibold'>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
        }
    </div>
  )
}

export default Details
