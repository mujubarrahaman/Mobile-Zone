import React, { useContext } from 'react'
import { productContainer } from '../App'

const Navbar = () => {


  const {search,setSearch,cartItems, setIsCartOpen} = useContext(productContainer);

  // const totalItems = cartItems.reduce((sum,item)=> sum + item.quantity,0)
  const totalItems = cartItems.length
  return (
    <nav className=' p-4 shadow-md z-20' style={{background: "#46275A"}}> 

      <div className='flex justify-between items-center max-w-7xl mx-auto '>
        <h1 className='text-white text-2xl font-bold'>MOBILE ZONE</h1>
        <input 
        type="text" 
        value={search}
        onChange={(e)=> setSearch(e.target.value)}
        placeholder='🔍Search for smartphone, brands, colors..'  className='p-3 text-base rounded-md bg-white w-1/2 focus:outline-none'/>
      <button onClick={()=> setIsCartOpen((prev)=> !prev)} className='relative text-white text-3xl'>
        🛒
        {totalItems>0 && <span className='absolute text-sm -top-2.5 right-0.5 bg-red-500 px-2 py-1 rounded-full'>{totalItems}</span>}
        </button>
        {/* <p className='text-white'>Contact </p> */}
      </div>

    </nav>
  )
}

export default Navbar