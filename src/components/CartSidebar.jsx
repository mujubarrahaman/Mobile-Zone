import React, { useContext } from 'react'
import { productContainer } from '../App'

const CartSidebar = () => {
  const { cartItems, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart } = useContext(productContainer)

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);


  return (
    <div className={`fixed top-0 right-0 w-70 h-full  shadow-xl z-20 transform transition-transform duration-300 ${isCartOpen ? "translate-x-0" : "translate-x-full"}` } style={{background:"#B7A3C4"}}>
      <div className='p-4 h-full flex flex-col items-center justify-between'>
       
        <div className=' h-110 overflow-y-auto'>
        <div className='flex justify-between items-center mb-4'>
        
         <h2 className='text-xl font-bold ' style={{color:"#46275A"}}>Your Cart</h2>
          <button className='text-gray-600 hover:text-gray-800 text-2xl cursor-pointer' onClick={() => setIsCartOpen(false)}>x</button>
        
         </div>

        {cartItems.length === 0 ? (<p className='text-gray-600 text-center mt-10 '>Your Cart is empty !!</p>) :
          (<div className='border-t pt-4'>
            {cartItems.map((item) => (
              <div key={item.id} className=' flex mb-4 '>
                <img className='w-16  h-16 object-contain mr-4' src={item.image} />
                <div className='flex-1' >
                  <h3 className='text-sm font-semibold'>{item.name}</h3>
                  <p className='text-xs text-gray-500'>₹{item.price} x {item.quantity}</p>

                  <div className='flex items-center mt-1'>
                    <button onClick={
                      () => updateQuantity(item.id, item.quantity - 1)
                    } className='px-2 py-1 bg-gray-200 rounded'>-</button>
                    <span className='mx-2'>{item.quantity}</span>
                    <button onClick={
                      () => updateQuantity(item.id, item.quantity + 1)
                    } className='px-2 py-1 bg-gray-200 rounded'>+</button>

                    <button onClick={() => removeFromCart(item.id)} className='ml-4 text-red-600 shadow-2xl w-full rounded h-7 shadow-xl font-semibold bg-red-100 hover:bg-red-600 hover:text-white'>Remove</button>
                  </div>

                </div>

              </div>
            ))}
          </div>)
        }
        </div>
        <div className='border-t pt-4'>
          <p className='text-lg font-semibold' >Total: ₹ {totalPrice.toFixed(2)}</p>
          <button className='w-full text-white  py-2 px-3.5 rounded-lg bg-violet-900 transition mt-4 hover:bg-violet-950' disabled={cartItems.length===0}>Process to Checkout</button>
        </div>


      </div>
    </div>
  )
}

export default CartSidebar