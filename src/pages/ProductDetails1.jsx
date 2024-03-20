import React, { useContext } from 'react'

import { useParams } from 'react-router-dom'

import { CartContext } from '../contexts/CartContext'
import { ProductContext1 } from '../contexts/ProductContext1'


const ProductDetails1 = () => {
  //product id from url
  const { id } = useParams()

  const { products } = useContext(ProductContext1)
  const { addToCart } = useContext(CartContext)

  //get the single product based on id
  const product = products.find((item) => {
    return item.id === parseInt(id)
  })
  // console.log(product)

  if (!product) {
    return (
      <section
        className='flex h-screen justify-center items-center '>
        Loading....
      </section>
    )
  }

  const { title, price, description, image } = product

  return (

    <section className='pt-[170px]  lg:pb-12 lg:py-32 h-screen flex items-center'>
      <div className="conatiner mx-auto">
        <div className='flex flex-col lg:flex-row items-center mb-8 lg:mb-0'>
          <div className='flex flex-1 justify-center items-center mb-4 lg:mb-0'>
            <img className='max-w-[100px] lg:max-w-[280px]' src={image} alt={title} />
          </div>
          <div className='flex-1 text-center mx-4 lg:-ml-5 lg:mx-3 lg:text-left'>
            <h1 className=' lg:text-[26px] text-[22px] font-medium lg:mb-2 max-w-[450px] mx-auto lg:mx-0'>{title}</h1>
            <div className='text-xl text-red-500 font-medium lg:mb-6 '> $ {price}</div>
            <p className='lg:mb-7 mb-3'>{description}</p>
             <button className='bg-gray-800 text-white py-2 px-6 rounded-sm ' 
             onClick={() => addToCart(product,product.id)}>Add To Cart
              </button>
            </div>
        </div>
      </div>
    </section>

    // <section className='pt-32 pb-12 lg:py-32 h-screen flex items-center'>
    //   <div className='container mx-auto '>
    //     <div className='flex flex-col lg:flex-row items-center'>
    //       <div className='flex flex-1 justify-center items-center mb-8 lg:mb-0'>
    //         <img className='max-w-[200px] lg:max-w-sm' src={image} alt={title} />
    //       </div>
    //       <div className='flex-1 text-center lg:text-left'>
    //         <h1 className='text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0'>{title}</h1>
    //         <div className='text-xl text-red-500 font-medium mb-6 '> $ {price}</div>
    //         <p className='mb-8'>{description}</p>
    //         <button className='bg-gray-800 text-white py-4 px-8 rounded-sm ' onClick={addToCart}>Add To Cart </button>
    //       </div>
    //     </div>
    //   </div>

    // </section>

  )
}

export default ProductDetails1
