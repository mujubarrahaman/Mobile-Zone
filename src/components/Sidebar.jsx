import React from 'react'
import productsData from "../product.json"
import { useContext } from 'react'
import { productContainer } from '../App'




const Sidebar = () => {
    const { brands, priceRange, setPriceRange, selectedBrands, setSelectedBrands, selectedRam, setSelectedRam, selectedStorage, setSelectedStorage } = useContext(productContainer)

    const ramOptions = [...new Set(productsData.map((p) => p.ram))].sort((a, b) => a - b);
    const storageOptions = [...new Set(productsData.map((p) => p.storage))].sort((a, b) => a - b);

    const minPrice = Math.min(...productsData.map((p) => (p.price)));
    const maxPrice = Math.max(...productsData.map((p) => (p.price)));
    return (
        <div className='w-64  p-4 h-screen sticky top-0 overflow-y-auto shadow-inner ' style={{background:"#9F80B4"}}>
            <h2 className='text-xl font-semibold   mb-6' style={{color:"#46275A"}}>Filters</h2>

            {/* Brand Filters */}
            <div className='mb-6'>
                <h3 className=' font-semibold mb-3' style={{color:"#613A7A"}}>Brands</h3>

                {brands.map((brand) => (
                    <label className='flex items-center mb-2 cursor-pointer'>
                        <input
                            type="checkbox" className='mr-2 accent-blue-600'
                            value={selectedBrands.includes(brand)}
                            onChange={() => setSelectedBrands(selectedBrands.includes(brand) ? selectedBrands.filter((b) => b !== brand) : [...selectedBrands, brand])} />
                        {brand.charAt(0).toUpperCase() + brand.slice(1)}
                    </label>
                ))}



            </div>
            {/* Price Range */}
            <div className='mb-6'>
                <h3 className=' font-semibold mb-3' style={{color:"#613A7A"}}>Price Range</h3>

                <input
                    type="range"
                    min={minPrice}
                    max={maxPrice}
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([minPrice, parseInt(e.target.value)])}
                    className='w-full accent-blue-950' />
                <div className='flex justify-between text-sm mt-2'>
                    <span>₹ {priceRange[0]}</span>
                    <span>₹ {priceRange[1]}</span>
                </div>
            </div>


            {/* Ram */}

            <div className='mb-6'>
                <h3 className='text-blue-600 font-semibold mb-3' style={{color:"#613A7A"}}>RAM</h3>

                <select
                    value={selectedRam}
                    onChange={(e) => setSelectedRam(e.target.value ? parseInt(e.target.value) : null)}
                    className='w-full border border-blue-950 rounded focus:outline-none focus:ring-2 focus:ring-blue-950 p-2 '>
                    <option value="">All</option>
                    {ramOptions.map((ram) => (
                        <option key={ram} value={ram}>{ram} GB</option>
                    ))}
                </select>
            </div>

            {/* Storage */}

            <div className='mb-6'>
                <h3 className='text-blue-500 font-semibold mb-3' style={{color:"#613A7A"}}>Storage</h3>
                <select
                    value={selectedStorage}
                    onChange={(e) => setSelectedStorage(e.target.value ? parseInt(e.target.value) : null)}
                    className='w-full border border-blue-950 rounded focus:outline-none focus:ring-2 focus:ring-blue-950 p-2 '>
                    <option value="">All</option>
                    {storageOptions.map((storage) => (
                        <option key={storage} value={storage}>{storage} GB</option>
                    ))}
                </select>
            </div>

          
        </div>
    )
}

export default Sidebar