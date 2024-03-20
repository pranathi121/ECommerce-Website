import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BsPlus, BsEyeFill, BsBag, BsDash } from 'react-icons/bs';
import { IoMdArrowForward, IoMdClose, IoMdRemove, IoMdAdd } from 'react-icons/io';
import { FiTrash2 } from 'react-icons/fi';
import { CartContext } from '../contexts/CartContext';


const CartItem = ({ item }) => {
    //destructure item
    const { id, title, image, price, quantity } = item;
    const {cartItems,addToCart,removeFromCart,clearCart, increaseQuantity,
        decreaseQuantity,cost,itemAmount,setItemAmount} = useContext(CartContext);

      

    return (
        <div>
            <div className='flex gap-x-4 px-4 lg:px-6 border-b w-full font-light text-gray-500  '>
                <div className=' w-full min-h-[150px] flex items-center gap-x-4'>
                    <Link to={`/product/${id}`} >
                        <img className='max-w-[66px]' src={item.image} alt={item.title} />
                    </Link>
                    <div className=' w-full flex flex-col'>
                        <div className='flex justify-between items-center mb-2 '>
                            {/* title and remove icon */}
                            <div className='text-sm uppercase font-medium  text-gray-800 hover:underline'>
                                {item.title}
                            </div>
                            <div>
                                < IoMdClose
                                    className='cursor-pointer text-gray-700 hover:text-red-500 transition'
                                    onClick={() => removeFromCart(item.id)}
                                /></div>
                        </div>
                        <div className=' flex gap-x-2 h-[36px] text-sm items-center'>
                            {/* quantity */}
                            <div className='flex flex-1 max-w-[100px] h-full shadow-sm border text-gray-800 items-center font-medium '>
                                {/* minus icon  */}
                                <div onClick={() => decreaseQuantity(item.id)}
                                    className='flex-1 h-full flex justify-center items-center cursor-pointer'>
                                    <IoMdRemove /> </div>
                                {/* amount */}
                                <div
                                    className='h-full flex jusitfy-center items-center px-2'>
                                    {item.quantity}
                                </div>
                                <div onClick={() => increaseQuantity(item.id)}
                                    className='flex-1 h-full flex justify-center items-center cursor-pointer'>
                                    <IoMdAdd />
                                </div>
                            </div>
                            {/* item price */}
                            <div className='flex flex-1 items-center justify-around'>
                                $ {item.price}
                            </div>
                            {/* final price */}
                            <div
                                className='flex flex-1 justify-end items-center text-gray-800 font-medium '>
                                {`$ ${parseFloat(item.price * item.quantity).toFixed(2)}`}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem
