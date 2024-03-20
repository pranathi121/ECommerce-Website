import React ,{useContext} from 'react'
import {Link} from 'react-router-dom'
import { ProductContext1 } from '../contexts/ProductContext1'
import Product  from '../components/Product'


const Discover = () => {
    const { products } = useContext(ProductContext1)
   
    const otherProducts = products.filter((item) => {
      return (
        item.category !== "men's clothing" &&
        item.category !== "women's clothing"
      );
    });
    console.log(otherProducts)

  return (
    <div>
          <section className='py-16'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px] max-w-sm mx-auto md:max-w-none  md:mx-0  '>
            { otherProducts.map((prod) => {
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

export default Discover
