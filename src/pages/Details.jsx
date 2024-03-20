import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import axios from 'axios'; //npm i axios
import { useNavigate } from 'react-router-dom';
import { BsPlus, BsEyeFill, BsBag, BsDash } from 'react-icons/bs';
import { IoMdArrowForward, IoMdClose, IoMdRemove, IoMdAdd } from 'react-icons/io';
import { FiTrash2 } from 'react-icons/fi';
import Logo from '../assets/logo.svg';
import WHero from '../img/woman_hero.png';
import BGHero from '../img/bg_hero.svg';


function Home() {
  const [products, setProducts] = useState([]);//product items
  const [bagOpen, setBagOpen] = useState(false);//sidebar
  const [cartItems, setCartItems] = useState([]);
  const [itemAmount, setItemAmount] = useState(0);//cart symbol qunantity
  const [isActive, setActive] = useState(false); //for header scroll overlay 
  const [cost, setCost] = useState(0);//total cost
  const navigate = useNavigate();

  const api = 'https://fakestoreapi.com/products';

  useEffect(() => {
    axios.get(api).then((prod) => {
      setProducts(prod.data);
    });
  }, []);


  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setActive(true) : setActive(false);
    })
  })

  //only men's and women's clothing
  const filteredProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" ||
      item.category === "women's clothing"
    );
  });

  //sidebar open cart symbol
  const handleOpen = () => {
    setBagOpen(true);
  };
  //side bar close arrowforeward 
  const handleClose = () => {
    setBagOpen(false);
  };

  //add to cart plus icon
  const handleAddCart = (product) => {
    // Check if the product is already in the cart
    const index = cartItems.findIndex((item) => item.id === product.id);
    if (index === -1) {
      // If the product is not in the cart, add it
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    } else {
      // If the product is already in the cart, update the quantity
      const updatedCartItems = [...cartItems];
      updatedCartItems[index].quantity++;
      setCartItems(updatedCartItems);
    }
  };

  // const handleRemoveItem = (productId) => {
  //   const updatedCartItems = cartItems.filter((item) => item.id !== productId);
  //   setCartItems(updatedCartItems);
  // };

  //remove particular product from cart close icon
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
    handleAddCart(item, id)
    // console.log(item);
    // console.log(`item ${id} amount increased`)
  }

  //quantity of each item 
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

  // count of items in cart
  useEffect(() => {
    if (cartItems) {
      const quantity = cartItems.reduce((total, currentItem) => {
        return total + currentItem.quantity;
      }, 0);
      setItemAmount(quantity)
    }
  }, [cartItems])

  //total amount of items in cart
  useEffect(() => {
    const cost = cartItems.reduce((total, currentItem) => {

      // accumulator + currentItem.quantity * currentItem.price;

      return total + currentItem.quantity * currentItem.price;
      // {`$ ${parseFloat(item.price * item.quantity).toFixed(2)}`}
    }, 0);
    setCost(parseFloat(cost).toFixed(2))
  }, [cartItems])


  return (
    <>
      <div>

        {/* header scroll overlay */}
        <div className={`${isActive ? 'bg-white py-6 shadow-md  ' : 'bg-none py-10'} fixed w-full z-10 transition-all`}>

          {/* HEADER */}

          <div className=' mx-9 flex items-center justify-between h-full'>


            <img className='w-[37px]' src={Logo} />

            <div onClick={handleOpen} className='cursor-pointer flex relative max-w-[50px]'>
              <BsBag size={18} />
              <div className='bg-red-500 absolute -right-2 -bottom-2 text-[11px] w-[17px] h-[17px] text-white rounded-full flex justify-center items-center '>{itemAmount}</div>
            </div>
          </div> {/* HEADER */}

        </div>{/* header scroll overlay */}

        <section className=' h-[800px] py-20 bg-no-repeat '
          // style={{ backgroundImage: `url(${BackgroundImage})` }}
          style={{
            backgroundImage: `url(${BGHero})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className='container mx-auto flex justify-around h-full'>
            {/* text */}
            <div className='ml-4 flex flex-col justify-center'>
              {/* title */}
              <div className='flex items-center font-semibold '>
                <div className=' w-10 h-[2px] bg-red-500 mr-3'> </div>
                New Trend

              </div>

              <h1 className='text-[60px] leading-[1.1] font-light mb-4' >AUTUMN SALE STYLIST <br />
                <span className='font-medium'>WOMEN'S</span>
              </h1>
              <div onClick={() => navigate('/')}
                className='font-medium cursor-pointer uppercase self-start  text-md  pt-3 border-b border-gray-800'>
                Discover More
              </div>
            </div>

            <div className='hidden lg:block'>
              <img src={WHero} alt='' />
            </div>
          </div>
        </section>




        {/* sidebar */}
        <div
          className={
            bagOpen
              ? 'w-full h-full bg-white fixed top-0 shadow-2xl md:w-[480px] xl:max-w-[420px] right-0 transition-all duration-300 z-20 px-4 lg:px-[35px]'
              : 'w-full bg-white fixed top-0 h-full shadow-2xl md:w-[400px]  xl:max-w-[350px]  transition-all duration-300 z-20 px-4 lg:px-[35px] -right-full'
          }
        >
          {/* header of sidebar */}
          <div className='flex  items-center justify-between py-6 border-b'>
            <div className='uppercase text-sm font-semibold'>
              Shopping bag ({cartItems.length}){' '}
            </div>
            <div
              onClick={handleClose}
              className='cursor-pointer w-8 h-8 flex justify-center items-center'>
              <IoMdArrowForward size={20} />
            </div>
          </div> {/* header of sidebar */}


          {/* content in sidebar */}
          <div>
            {/* bg-pink-300 flex flex-col gap-y-2 
            h-[520px] lg:h-[640px] overflow-y-auto 
            overflow-x-hidden border-b */}
            {cartItems.length > 0 && (
              <div className='flex flex-col gap-y-2 p-3 h-[350px] overflow-y-auto overflow-x-hidden '>
                {cartItems.map((item, index) => (
                  <div key={index} className='flex gap-x-4 px-4 lg:px-6 border-b w-full font-light text-gray-500  '>
                    <div className=' w-full min-h-[150px] flex items-center gap-x-4'>
                      <img className='max-w-[66px]' onClick={() => navigate(`/product`)} src={item.image} alt='' />
                      <div className=' w-full flex flex-col'>
                        <div className='flex justify-between items-center mb-2 '>
                          {/* title and remove icon */}
                          <div className='text-sm uppercase font-medium  text-gray-800 hover:underline'
                            onClick={() => navigate(`/product`)}>
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
                ))}
              </div>

            )}
          </div>
          {/* footer of sidebar */}
          <div className=' flex flex-col gap-y-3 py-4 mt-4'>
            <div className='flex w-full justify-between items-center'>
              {/* siebar bottom */}
              <div className='uppercase font-semibold '>
                {/* total */}
                <div>
                  <span className='mr-2'>Total:</span> $ {cost}
                </div>
              </div>
              {/* clewar cart icon */}
              <div className='cursor-pointer py-4 bg-red-500  text-white w-9 rounded-md h-9 flex justify-center items-center text-xl'
                onClick={clearCart}>
                <FiTrash2 />
              </div>
            </div>
            <div  onClick={() => navigate('/')}
            className='bg-gray-200 flex p-2 justify-center items-center text-gray-800 w-full font-medium ' >
              View Cart</div>
            <div onClick={() => navigate('/')} 
            className='bg-gray-700 text-white flex p-2 justify-center items-center w-full font-normal '>
              Checkout</div>
          </div>
        </div>
        {/* sidebar*/}


        {/* PRODUCTS */}
        <div className='py-16'>
          <div className='container mx-auto'>
            <div>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-2 lg:mx-3 '>
                {filteredProducts.map((item, index) => {
                  return (
                    <div key={index}>
                      <div className='border border-[#e4e4e4] h-[300px]  mb-4 relative overflow-hidden group transition'>
                        <div className='w-full h-full flex justify-center items-center '>
                          {/*image*/}
                          <div className='w-[200px] mx-auto flex justify-center items-center'>
                            <img
                              className='max-h-[160px] group-hover:scale-110 transition duration-300'
                              src={item.image}
                              alt=''
                            />
                          </div>
                        </div>
                        {/*button*/}
                        <div className='absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300'>
                          <button onClick={() => handleAddCart(item)}>
                            <div
                              className='flex bg-red-500 justify-center items-center text-white w-12 h-12'>
                              <BsPlus className='text-3xl' />
                            </div>
                          </button>
                          <BsEyeFill onClick={() => navigate(`/product`)} />
                        </div>
                      </div>
                      {/*category & title & price*/}
                      <div>
                        <div className='text-sm capitalize text-gray-500 mb-1'>
                          {item.category}
                        </div>

                        <h2
                          className='font-semibold mb-1'
                          onClick={() => navigate(`/product`)}>
                          {item.title}
                        </h2>

                        <div className='font-semibold'>${item.price}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        {/* footer */}
        <div className='bg-zinc-800 py-7 '>
          <div className="container mx-auto">
            <p className='text-white text-center'>Copyright &copy; ECommerce Shop 2022. All rights reserved </p>
          </div>
        </div>

      </div>
    </>
  );
}

export default Home;
