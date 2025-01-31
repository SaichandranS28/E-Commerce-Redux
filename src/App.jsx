import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Cart from './components/Cart'
import Home from './components/Home'
import Details from './components/Details'
import Navbar from './components/Navbar'
import Laptop from './components/categories/Laptop'
import Audio from './components/categories/Audio'
import Appliance from './components/categories/Appliance'
import Tv from './components/categories/Tv'
import Mobile from './components/categories/Mobile'
import Gaming from './components/categories/Gaming'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/tv" element={<Tv />} />
        <Route path="/audio" element={<Audio />} />
        <Route path="/laptop" element={<Laptop />} />
        <Route path="/mobile" element={<Mobile />} />
        <Route path="/gaming" element={<Gaming />} />
        <Route path="/appliance" element={<Appliance />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/product/:id' element={<Details />} />
        <Route path='*' element={<h1>404 Not Found</h1>} />
      </Routes>
    </div>
  )
}

export default App
