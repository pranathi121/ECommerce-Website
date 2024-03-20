import React from 'react'
import { useLocation } from 'react-router-dom'

const prod = () => {
    const location = useLocation();

    const {title,description,price,category,image} = location.state;



  return (
    <div>
        
        <div><img src={image} alt="image" className='h-[700px] w-[700px] p-2'/></div>
        <div>{category}</div>
        <div>{title}</div>
        <div>${price}</div>
        <div>{description}</div>
    </div>
  )
}

export default prod
