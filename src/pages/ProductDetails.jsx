// ProductDetails.js
import React from 'react';
import { useProductContext } from '../contexts/ProductContext';

function ProductDetails() {
  const { selectedProduct } = useProductContext();
  const { addToCart } = useProductContext();

  const handleAddToCart = () => {
    if (selectedProduct) {
      addToCart(selectedProduct);   
    }
  };

  if (!selectedProduct) {
    return <div>No product selected</div>;
  }

  return (
    <>
     

      <section className='pt-32 pb-12 lg:py-32 h-screen flex items-center'>
   
        <div className='container mx-auto '>
          <div className='flex flex-col lg:flex-row items-center  '>
          
          <div className='flex flex-1 justify-center items-center mb-2 lg:mb-0'>
          <img className='max-w-[200px] lg:max-w-sm' src={selectedProduct.image} alt={selectedProduct.title} />
          </div>

          <div className='flex-1 text-center lg:text-left'>
          <h1 className='text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0'>{selectedProduct.title}</h1>
          <div className='text-xl text-red-500 font-medium mb-6 '> $ {selectedProduct.price}</div>
          <p className='mb-8'>{selectedProduct.description}</p>
          {/* <button className='bg-gray-800 text-white py-4 px-8 rounded-sm ' onClick={handleAddToCart}>Add To Cart </button> */}
          </div>
        </div>
        </div>
      
      </section>
    </>
  );
}

export default ProductDetails;
