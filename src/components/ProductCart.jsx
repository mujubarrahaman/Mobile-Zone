import React, { useContext } from 'react'
import { productContainer } from '../App'
import productsData from "../product.json"


const ProductCart = ({product}) => {

  const {filterProducts , addToCart } = useContext(productContainer)
  return (
    <div className=' shadow p-4 hover:shadow-xl transition-all duration-200' style={{background:"#AB92BB"}}>

      <img src={product.image} alt={product.name} className='w-full h-48 object-contain mb-4' />
      <h3 className='mb-2 text-lg font-semibold ' style={{color:"#46275A"}}>{product.name.charAt(0).toUpperCase()+product.name.slice(1)}</h3>
      <p className='text-gray-500 mb-1 '  style={{color:"#613A7A"}}>{product.brand.charAt(0).toUpperCase()+product.brand.slice(1)} | {product.color} </p>
      <p className='text-gray-500 mb-1 '  style={{color:"#613A7A"}}>{product.ram} GB RAM | {product.storage} GB</p>
      <p className='text-gray-500 mb-4 '  style={{color:"#613A7A"}}>{product.display} Display</p>
      <div className='flex justify-between items-center'>
        <div>
          <p className='text-xl font-bold text-blue-800' style={{color:"#46275A"}}> ₹ {product.price} </p>
          <p className='text-sm text-gray-400 line-through' style={{color:"#46275A"}}>₹ {product.mrp} </p>
        </div>
        <button className='bg-violet-900 text-white px-4 py-2 hover:bg-violet-950 cursor-pointer' onClick={()=>addToCart(product)}>Add to Cart</button>
      </div>


    </div>
  )
}

export default ProductCart