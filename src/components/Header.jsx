


import React, { useContext,useState,useEffect } from 'react';
import { BsPlus, BsEyeFill, BsBag, BsDash } from 'react-icons/bs';
import { IoMdArrowForward, IoMdClose, IoMdRemove, IoMdAdd } from 'react-icons/io';
import { FiTrash2 } from 'react-icons/fi';
import Logo from '../assets/logo.svg';
import WHero from '../img/woman_hero.png';
import BGHero from '../img/bg_hero.svg';


import { SidebarContext} from '../contexts/SidebarContext'
import { CartContext} from '../contexts/CartContext'


const Header = () => {
  
  const { isOPen,setIsOpen } = useContext(SidebarContext)
  const { itemAmount,setItemAmount} = useContext(CartContext);


  const [isActive,setActive] = useState(false)

  useEffect(() => {
      window.addEventListener('scroll', () => {
        window.scrollY > 60 ? setActive(true) : setActive(false);
      })
    },[])


  return (
    <header className={`${isActive ? 'bg-white py-4 shadow-md  ' : 'bg-none py-6'} fixed w-full z-10 transition-all`}>
    <div className='container mx-auto px-4 flex items-center justify-between h-full' >
     <div><img className='w-[37px]' src={Logo} /></div>
  
    <div
     onClick={() => setIsOpen(!isOPen)} 
     className='cursor-pointer flex relative max-w-[50px]'>
      <BsBag size={18} />
      <div 
      className='bg-red-500 absolute -right-2 -bottom-2 text-[11px]
       w-[17px] h-[17px] text-white rounded-full flex justify-center 
       items-center '>
        {itemAmount}
        </div>
    </div>
  </div>
  </header>
  )
}

export default Header
















//       import React, { useState } from 'react'
// import { BsBag } from 'react-icons/bs'
// import { IoMdArrowForward } from 'react-icons/io'

// const Header = () => {
//   const [bagOpen, setBagOpen] = useState(false)
//   const [addedProducts, setAddedProducts] = useState([])


//   const handleOpen = () => {
//     setBagOpen(true)
//   }
//   const handleClose = () => {
//     setBagOpen(false)
//   }



//   return (
//     <>
//      <div>

//           <div className={`${isActive ? 'bg-white py-6 shadow-md  ' : 'bg-none py-10'} fixed w-full z-10 transition-all`}>

//           {/* HEADER */}

//           <div className=' mx-9 flex items-center justify-between h-full'>


//             <img className='w-[37px]' src={Logo} />

//             <div onClick={handleOpen} className='cursor-pointer flex relative max-w-[50px]'>
//               <BsBag size={18} />
//               <div className='bg-red-500 absolute -right-2 -bottom-2 text-[11px] w-[17px] h-[17px] text-white rounded-full flex justify-center items-center '>{itemAmount}</div>
//             </div>
//           </div> {/* HEADER */}

//         </div>{/* header scroll overlay */}
//         </div>


//     </>
//   )
// }

// export default Header