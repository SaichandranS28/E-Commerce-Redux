import axios from 'axios'
import React, { useEffect,useState } from 'react'
import Card from '../Card'

function Appliance() {
    let [appliance, setAppliance] = useState([])
    useEffect(()=>{
        axios.get('https://fakestoreapi.in/api/products/category?type=appliances').then((response)=>{
            setAppliance(response.data.products)
        })
    },[])
  return (
    <div>
      <div className='mt-5'>
      <div className="max-w-8xl mx-auto py-24">
        {
            appliance.length > 0 ? 
                <div className="flex flex-wrap gap-4 justify-center">
                {
                    appliance.map((product)=>{
                        return <Card key={product.id} id={product.id} img={product.image} title={product.title} price={product.price} discount={product.discount}/>
                    })
                }
                </div>
            : <h1 className='text-center mt-52'><span class="loader"></span></h1>
        }
        
      </div>
    </div>
    </div>
  )
}

export default Appliance
