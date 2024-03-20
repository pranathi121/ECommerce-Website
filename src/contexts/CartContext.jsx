import React, { useState, useEffect, createContext, Children } from 'react'

export const CartContext = createContext();

const CartProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState([]);
    const [itemAmount, setItemAmount] = useState(0);//cart symbol qunantity
    const [cost, setCost] = useState(0);//total cost

    const addToCart = (prod, id) => {
        const newItem = { ...prod, quantity: 1 }
        //check if the item is laready in the cart
        const cart = cartItems.find((item)=>{
            return item.id == id ;
        })
        if(cart){
            const newCart = [...cartItems].map(item => {
               if(item.id === id){
                    return  {...item,quantity : cart.quantity+1};
                }
                else{
                    return item;
                }
            })
            setCartItems(newCart)
        }else{
            setCartItems([...cartItems, newItem])
        }
    }
   
    const removeFromCart = (id) => {
        const newCart = cartItems.filter(item => {
          return item.id !== id;
        })
        setCartItems(newCart);
      }
    
      //delete icon button in sidebar
      const clearCart = () => {
        setCartItems([]);
      }
    
      const increaseQuantity = (id) => {
        const item = cartItems.find((item) => item.id === id)
        addToCart(item, id)
        // console.log(item);
        // console.log(`item ${id} amount increased`)
      }
      const decreaseQuantity = (id) => {
        const cartItem = cartItems.find((item) => item.id === id);
        if (cartItem) {
          const newCart = cartItems.map((item) => {
            if (item.id === id) {
              return { ...item, quantity: item.quantity - 1 };
            } else {
              return item;
            }
          });
          setCartItems(newCart);
        }
    
        if (cartItem.quantity <= 1) {
          removeFromCart(id);
        }
      };
      
      useEffect(() => {
        if (cartItems) {
          const quantity = cartItems.reduce((total, currentItem) => {
            return total + currentItem.quantity;
          }, 0);
          setItemAmount(quantity)
        }
      }, [cartItems])
     
  //  console.log(cartItems)
    

    return (
        <CartContext.Provider
         value={{ cartItems,
                  setCartItems,
                  addToCart,
                  removeFromCart,
                  clearCart, 
                  increaseQuantity,
                  decreaseQuantity,
                  itemAmount,
                  setItemAmount,
                  clearCart,
                  }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider