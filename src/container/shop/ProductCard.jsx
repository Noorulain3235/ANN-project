import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function ProductCard({ product }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      className="bg-[#0c0d10] p-3 "
    >
      <div className="relative aspect-square  overflow-hidden">
        <Link to={`/product/${product.slug}`}>
          <img src={product.image} alt={product.title} className="w-full h-full object-cover 
          transform hover:scale-105 transition" />
        </Link>
        {product.compareAt && (
          <div className="absolute top-3 left-3 bg-green-600 text-white text-xs px-2 py-1 "
          >-{Math.round(((product.compareAt - product.price)/product.compareAt)*100)}%</div>
        )}
        {product.outOfStock && (
          <div className="absolute top-3 left-3 bg-orange-600 text-white text-xs px-2 py-1">
            OUT OF STOCK</div>
        )}
        <button className="absolute top-3 right-3 bg-[#11131580] p-1 rounded-full">♡</button>
      </div>
      <h3 className="mt-3 text-sm font-semibold">{product.title}</h3>
      <div className="text-xs text-gray-300">
        {product.compareAt ? (
          <>
            <span className="line-through text-gray-500 mr-2">${product.compareAt.toFixed(2)}</span>
            <span className="text-white">${product.price.toFixed(2)}</span>
          </>
        ) : (
          <span className="text-white">${product.price.toFixed(2)}</span>
        )}
      </div>
    </motion.div>
  )
}