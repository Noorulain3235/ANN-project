import React from 'react'
import { useParams, Link } from 'react-router-dom'
import products from './products'


export default function ProductDetail(){
  const { slug } = useParams()
  const product = products.find(p=> p.slug === slug)
  if(!product) return (
    <div className="p-10 text-white">Product not found.
     <Link to="/">Back to shop</Link></div>
  )

  return (
    <div className="container mx-auto px-6 py-12 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <img src={product.image} alt={product.title} className="w-full h-[500px] object-cover rounded" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-white">{product.title}</h1>
          <div className="text-gray-300 mt-2">${product.price.toFixed(2)}</div>
          <div className="mt-4 text-gray-300">Brand: {product.brand}</div>
          <div className="mt-4">Rating: {'★'.repeat(product.rating)}</div>

          <div className="mt-6">
            <label className="text-sm text-gray-300">Quantity</label>
            <div className="mt-2">
              <button className="px-4 py-2 bg-white text-black rounded">Add to cart</button>
            </div>
          </div>

          <div className="mt-6"><Link to="/" className="text-sm text-gray-400">Back to Shop</Link></div>
        </div>
      </div>
    </div>
  )
}