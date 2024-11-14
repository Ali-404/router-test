import React from 'react'
import { Link } from 'react-router-dom'

export default function Product({product}) {




  return (
    <div className="card d-flex flex-column align-items-center" style={{width: "18rem"}}>
        
        <img src={product.image} className="card-img-top object-fit-contain" style={{width: "200px", height:"200px"}} alt="..." />
        
        <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <a className="btn btn-outline-primary" data-bs-toggle="collapse" href={"#" + product.id}  role="button"  aria-controls={product.id}>
                Description
            </a>
                
            <div className="collapse py-2" id={product.id}>
                <div className="card card-body">
                    {product.description}
                </div>
            </div>
        </div>

        <span className='text-primary'>{product.price} Dhs</span>
        <Link  to={`/product/${product.id}`} className="btn btn-primary w-100">Voir Plus</Link>
    </div>
  )
}
