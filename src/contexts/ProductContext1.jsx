import React ,{createContext,useState,useEffect} from 'react'
import axios from 'axios';

//creating productcontext1 and exporting to use for other components 
export const ProductContext1=createContext();
 
//product provider - passes the data   
const ProductProvider = ({children}) => {
    const [products, setProducts] = useState([]);
 
    //fetch products
    const api = 'https://fakestoreapi.com/products';
    useEffect(() => {
        axios.get(api).then((prod) => {
          setProducts(prod.data);
         // console.log(prod.data);
        });
       
      }, []);
    return (
    
    <ProductContext1.Provider value={{products}}>
        {children}
    </ProductContext1.Provider>
  )
}

export default ProductProvider;




//another way for fecthing products 
    //   useEffect(() => {
    //     const fetchProducts = async () =>
    //     {
    //         const response = await fetch('https://fakestoreapi.com/products')
    //         const data = await response.json();
    //         setProducts(data)
    //     }
    //     fetchProducts();
    //   }, []);
