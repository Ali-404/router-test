import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductsPage from './pages/ProductsPage'
import ProductVoirPlus from './pages/ProductVoirPlus'
import axios from 'axios'

export default function App() {


  const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then(res => {

            setProducts(res.data)

        }).catch(e => {
            console.log("Ily'a un erreur !")
            console.error(e)
        })
    }, [])
  
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<ProductsPage products={products} />} />
          <Route path='/product/:id' element={<ProductVoirPlus products={products} />} />
      </Routes>
    </BrowserRouter>
  )
}
