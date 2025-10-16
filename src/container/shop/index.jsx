import React, { useMemo, useState } from 'react'
import productsData from './products'
import ProductCard from './ProductCard'
import { motion, AnimatePresence } from 'framer-motion'

const unique = (arr, key) => [...new Set(arr.flatMap(x => Array.isArray(x[key])? x[key] : [x[key]]))]

export default function Shop() {
  const [category, setCategory] = useState('All')
  const [color, setColor] = useState(null)
  const [size, setSize] = useState(null)
  const [brand, setBrand] = useState(null)
  const [maxPrice, setMaxPrice] = useState(30)
  const [rating, setRating] = useState(0)

  const categories = useMemo(()=>['All', ...new Set(productsData.map(p=>p.category))], [])
  const colors = useMemo(()=>unique(productsData, 'colors'), [])
  const sizes = useMemo(()=>unique(productsData, 'sizes'), [])
  const brands = useMemo(()=>['All', ...new Set(productsData.map(p=>p.brand))], [])

  const filtered = productsData.filter(p=>{
    if(category !== 'All' && p.category !== category) return false
    if(color && !p.colors.includes(color)) return false
    if(size && !p.sizes.includes(size)) return false
    if(brand && brand !== 'All' && p.brand !== brand) return false
    if(p.price > maxPrice) return false
    if(rating && p.rating < rating) return false
    return true
  })

  return (
    <div className="container  mx-auto px-6 py-20 md:py-28 shop-container">
      <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 text-center">Shop</h1>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: products */}
        <div className="lg:col-span-8">
          <div className="mb-4 text-sm text-gray-300">Showing 1–{filtered.length} of {productsData.length} results</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <AnimatePresence>
              {filtered.map(p=> (
                <ProductCard key={p.id} product={p} />
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Right: sidebar */}
        <aside className="lg:col-span-4">
          <div className="sticky top-20">
            <div className="bg-gray-900 p-5 ">
              <h3 className="text-white md:text-2xl text-xl font-bold mb-3">Cart</h3>
              <div className="text-gray-400 mb-4">No products in the cart.</div>
              <hr className="border-gray-800 my-4" />

              <div className="mb-4">
                <h4 className="text-gray-300 text-xl font-bold md:text-2xl mb-2">Categories</h4>
                <div className="flex flex-col gap-2">
                  {categories.map(cat=> (
                    <button key={cat} onClick={()=>setCategory(cat)} className={`text-left text-sm ${category===cat?'text-white':'text-gray-400'}`}>{cat}</button>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-gray-300 mb-2">Color</h4>
                <div className="flex gap-2 items-center">
                  {colors.map(c=> (
                    <button key={c} onClick={()=> setColor(color===c?null:c)} className={`w-6 h-6 rounded-full border ${color===c? 'ring-2 ring-white':''} `} style={{background: c}} title={c}></button>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-gray-300 mb-2">Size</h4>
                <div className="flex gap-2 flex-wrap">
                  {sizes.map(s=> (
                    <button key={s} onClick={()=> setSize(size===s?null:s)} className={`px-3 py-1 text-sm rounded ${size===s? 'bg-white text-black':'border text-gray-300'}`}>{s}</button>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-gray-300 mb-2">Brand</h4>
                <select value={brand||'All'} onChange={(e)=> setBrand(e.target.value)} className="w-full bg-transparent border p-2 text-sm text-gray-300">
                  {brands.map(b=> <option key={b} value={b}>{b}</option>)}
                </select>
              </div>

              <div className="mb-4">
                <h4 className="text-gray-300 mb-2">Price</h4>
                <input type="range" min="0" max="30" value={maxPrice} onChange={(e)=> setMaxPrice(Number(e.target.value))} />
                <div className="text-sm text-gray-400 mt-1">Price: 0 - {maxPrice}</div>
              </div>

              <div className="mb-4">
                <h4 className="text-gray-300 mb-2">Rating</h4>
                <div className="flex flex-col gap-2 items-start">
                  {[5,4,3,2,1].map(st => (
                    <label key={st} className="flex  items-center gap-1 text-gray-300">
                      <input type="radio" name="rating" onChange={()=> setRating(st)} 
                      checked={rating===st} />
                      <span className="text-sm">{'★'.repeat(st)}</span>
                    </label>
                  ))}
                  <button className="ml-2 text-xs text-gray-400" onClick={()=> setRating(0)}>Clear</button>
                </div>
              </div>

            </div>

            {/* small footer links block inside sidebar similar to screenshot */}
            <div className="mt-6 text-sm text-gray-400">
              <div className="mb-2">Newsletter Signup</div>
              <div className="mb-2">Socials: Facebook, Twitter, Dribble</div>
              <div className="mb-2">Menu: Home, About, Services, Shop</div>
            </div>

          </div>
        </aside>
      </div>
    </div>
  )
}