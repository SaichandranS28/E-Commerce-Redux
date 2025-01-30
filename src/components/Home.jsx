import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Card'

function Home() {
    let [products,setProducts] = useState([])

    useEffect(()=>{
        axios.get('https://fakestoreapi.in/api/products?limit=150').then((response)=>{
            setProducts(response.data.products)
        })
    }, [])
    console.log(products)

  return (
    <div className='mt-5'>
      <div className="max-w-8xl mx-auto py-24">
        {
            products.length > 0 ? 
                <div className="flex flex-wrap gap-4 justify-center">
                {
                    products.map((product)=>{
                        return <Card key={product.id} id={product.id} img={product.image} title={product.title} price={product.price} discount={product.discount}/>
                    })
                }
                </div>
            : <h1 className='text-center mt-52'><span class="loader"></span></h1>
        }
        
      </div>
    </div>
  )
}

export default Home
