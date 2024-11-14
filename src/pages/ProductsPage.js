import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import Product from '../components/Product'
import axios from 'axios'




export default function ProductsPage({products}) {
  
    

  
    return (
    <div>
      <Nav />

      {/* products list */}
      <div className='container py-4 d-flex flex-wrap gap-4 '>
        {products.map(product => <Product key={product.id} product={product} /> )}

      </div>

      
    </div>
  )
}
