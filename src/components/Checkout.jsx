import React, { useContext } from 'react'
import { CartContext } from '../contexts/CartContext';
import { SidebarContext } from '../contexts/SidebarContext';

import { IoMdClose, IoMdAdd, IoMdRemove } from 'react-icons/io'


const Checkout = ({ prod }) => {

    const { id, image, category, title, price } = prod;
    const { removeFromCart, decreaseQuantity, increaseQuantity } = useContext(CartContext)
    const { cost } = useContext(SidebarContext)
    const {clearCart} = useContext(CartContext)

    //console.log(prod.title)
    return (
    <>

        <div className='container mx-auto '>
            {/* <div>image</div>
              <div>title</div> {prod.title}
             <div>price</div> */}

            <div className=' w-full min-h-[150px] flex items-center gap-x-4'>
                <div>
                    <img className='max-w-[66px]' src={prod.image} alt={prod.title} />
                </div>
                <div className=' w-full flex flex-col'>
                    <div className='flex  items-center mb-2 justify-between'>
                        {/* title and remove icon */}
                        <div className='text-sm uppercase font-medium  text-gray-800 hover:underline'>
                            {prod.title}
                        </div>
                        <div>
                            < IoMdClose
                                className='cursor-pointer ml-16 text-gray-700 hover:text-red-500 transition'
                                onClick={() => removeFromCart(prod.id)}
                            />
                        </div>
                    </div>
                    <div className=' flex gap-x-32 h-[36px] text-sm items-center'>
                        {/* quantity */}
                        <div className='flex flex-1 max-w-[100px] h-full shadow-sm border text-gray-800 items-center font-medium '>
                            {/* minus icon  */}
                            <div onClick={() => decreaseQuantity(prod.id)}
                                className='flex-1 h-full flex justify-center items-center cursor-pointer'>
                                <IoMdRemove /> </div>
                            {/* amount */}
                            <div
                                className='h-full flex jusitfy-center items-center px-2'>
                                {prod.quantity}
                            </div>
                            <div onClick={() => increaseQuantity(prod.id)}
                                className='flex-1 h-full flex justify-center items-center cursor-pointer'>
                                <IoMdAdd />
                            </div>
                        </div>
                        {/* item price */}
                        <div className='flex justify-between gap-x-16'>
                            <div className=' items-center '>
                                $ {prod.price}
                            </div>
                            {/* final price */}
                            <div
                                className=' text-gray-800 font-medium '>
                                {`$ ${parseFloat(prod.price * prod.quantity).toFixed(2)}`}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        
        </div>
     
        </>
    )
}

export default Checkout
