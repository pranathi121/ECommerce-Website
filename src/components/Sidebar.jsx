import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BsPlus, BsEyeFill, BsBag, BsDash } from 'react-icons/bs';
import { IoMdArrowForward, IoMdClose, IoMdRemove, IoMdAdd } from 'react-icons/io';
import { FiTrash2 } from 'react-icons/fi';

import CartItem from '../components/CartItem'
import { CartContext } from '../contexts/CartContext';
import { SidebarContext } from '../contexts/SidebarContext';

const Sidebar = () => {
  const { isOpen, handleClose, cost, setCost } = useContext(SidebarContext)
  const { cartItems, clearCart, itemAmount } = useContext(CartContext)
  //  console.log(useContext (CartContext));

  useEffect(() => {
    const cost = cartItems.reduce((total, currentItem) => {
      // accumulator + currentItem.quantity * currentItem.price;

      return total + currentItem.quantity * currentItem.price;
      // {`$ ${parseFloat(item.price * item.quantity).toFixed(2)}`}
    }, 0);
    setCost(parseFloat(cost).toFixed(2))
  }, [cartItems])

  return (
    <div className={`${isOpen ? 'right-0' : '-right-full'}
      w-full h-full bg-white fixed top-0 
      shadow-2xl md:w-[480px] xl:max-w-[420px] 
       transition-all duration-300 z-20 px-4 
       lg:px-[35px] `}
    >
      <div className='flex  items-center justify-between py-6 border-b'>
        <div className='uppercase text-sm font-semibold'>
          Shopping bag ({itemAmount}){' '}
        </div>
        <div
          onClick={handleClose}
          className='cursor-pointer w-8 h-8 flex justify-center items-center'>
          <IoMdArrowForward size={20} />
        </div>
      </div> {/* header of sidebar */}


      {/* conent of Sidebar */}
      <div className='flex flex-col gap-y-2 p-3 h-[350px] overflow-y-auto overflow-x-hidden '>
        {cartItems.map((item) => {
          return <CartItem item={item} key={item.id} />
        })}
      </div>
      <div className=' flex flex-col gap-y-3 py-4 mt-4'>
        <div className='flex w-full justify-between items-center'>
          {/* siebar bottom */}
          <div className='uppercase font-semibold '>
            {/* total */}
            <div>
              <span className='mr-2'>Total:</span> $ {cost}
            </div>
          </div>
          {/* clear cart icon */}
          <div className='cursor-pointer py-4 bg-red-500  text-white w-9 rounded-md h-9 flex justify-center items-center text-xl'

            onClick={clearCart}>
            <FiTrash2 />
          </div>
        </div>
        <Link to={`/checkout`}>
          <div
            className='bg-zinc-800 text-white flex p-2 justify-center items-center w-full font-normal '>
            Checkout</div>
        </Link>

      </div>

    </div>
  )
}

export default Sidebar
