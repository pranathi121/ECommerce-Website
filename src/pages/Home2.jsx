import React, { useContext } from 'react'
//importing product context to use
import { ProductContext1 } from '../contexts/ProductContext1'
import Hero from '../components/Hero';

import Product from '../components/Product'


const Home2 = () => {
  //get products from product context
  const { products } = useContext(ProductContext1)
  //console.log(products)

  const filteredProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" ||
      item.category === "women's clothing"
    );
  });
  //console.log(filteredProducts)
  return (

    <div>
      <Hero />
      <section className='py-16'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px] max-w-sm mx-auto md:max-w-none  md:mx-0  '>
            { filteredProducts.map((prod) => {
                return (
                  <Product prod={prod} key={prod.id} />
                )
            })}
          </div>
        </div>
      </section >
    </div>
  )
}


export default Home2
