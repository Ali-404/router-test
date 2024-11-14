import React from 'react'
import Nav from '../components/Nav'
import { Link, useParams } from 'react-router-dom'
import Product from '../components/Product'

export default function ProductVoirPlus({products}) {

    const {id} = useParams()

    const product = products.find(p => p.id === Number(id))


    if (!product) return <span>loading ...</span>


  return (
    <div className='d-flex align-items-center flex-column gap-4'>
      <Nav />
      <img src={product.image} className="card-img-top object-fit-contain" style={{width: "200px", height:"200px"}} alt="..." />
        
        <h5 className="card-title">{product.title}</h5>
        
        <div className="card card-body">
            {product.description}
        </div>

        <h1 >{product.price} Dhs</h1>

        <div className='d-flex gap-2'>
            <span>{product.rating.rate}⭐</span>
            <span>{product.rating.count}👁</span>
        </div>

        <Link to={"/"} className='btn btn-outline-primary'>Retour au produits</Link>
    </div>
  )
}
