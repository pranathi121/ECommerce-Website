import React from 'react'

import { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'
import { SidebarContext } from '../contexts/SidebarContext'
import { FiTrash2 } from 'react-icons/fi'

import Checkout from '../components/Checkout'


const CheckoutPage = () => {
    const { cartItems } = useContext(CartContext)
    const { cost } = useContext(SidebarContext)
    const { clearCart } = useContext(CartContext)


    console.log(cartItems);
    return (
        <div>
            <section className='py-16'>
                <div className='container mx-auto'>
                    {cartItems.map((prod) => {
                        return (
                            <Checkout prod={prod} key={prod.id} />
                            // <div>
                            //     {prod.category}
                            // </div>
                        )
                    })}

                    <div className='flex w-full justify-between items-center'>
                        {/* siebar bottom */}
                        <div className='uppercase font-semibold '>
                            {/* total */}
                            <div>
                                <span className='mr-2'>Total:</span> $ {cost}
                            </div>
                        </div>
                        {/* clear cart icon */}
                        <div className='cursor-pointer py-4 bg-gray-500  text-white w-9 rounded-md h-9 flex justify-center items-center text-xl'

                            onClick={clearCart}>
                            <FiTrash2 />
                        </div>
                    </div>
                    {/* <button className=' flex items-center py-3 px-4 text-white font-medium justify-center bg-red-500 uppercase'>buy now</button> */}
                    <div className="flex justify-center items-center mt-8">
                        <button className='py-3 px-4 rounded-md text-white font-medium bg-red-500 uppercase'>buy now</button>
                    </div>
              
                </div>
            </section>
        </div>
    )
}

export default CheckoutPage
