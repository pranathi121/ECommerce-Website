import axios from 'axios';
import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
{/* <Route path='/' element={<Products1 />} />
        <Route path='/product/:id' element={<ProductDetails1 />} />
        import Products1 from './pages/Products1';
import ProductDetails1 from './pages/ProductDetails1'; */}

const Homes = () => {
    const [products,setProducts] = useState([]);
    const navigate = useNavigate();

    const api = 'https://fakestoreapi.com/products';

  useEffect(() => {
    axios.get(api).then((prod) => {
      setProducts(prod.data);
    });
  }, []);

    console.log(products)

  return (
    <>
    <div className='grid grid-cols-4'>
            {products.map((product,index)=>{
                return(
                    <>
                   
                    <div>
                    {/* <Header /> */}
                    <div className='border-2 ml-2 mt-2 mr-2' key={index} onClick={()=>navigate('/prod',{state:product})}>
                        <div className='grid justify-center items-center'><img src={product.image} alt="image" className='h-32 w-32 p-2'/></div>
                        <div className='font font-extralight p-2 text-center'>{product.category}</div>
                        <div className='p-2 font-medium text-center'>{product.title}</div>
                        <div className='p-2 font-light text-center'>${product.price}</div>
                     </div>   
                     </div>
                     </>
                )
            })}
    </div>
    </>
  )
}

export default Homes
