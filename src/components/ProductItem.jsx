import React, { useContext } from 'react'
import { ShopeContext } from '../context/ShopeContext'
import { Link } from 'react-router-dom';

 export const ProductItem = ({id,image,name,price}) => {

    const {currency} = useContext(ShopeContext);

  return (
    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
        <div className='overflow-hidden'>
            <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt="" />
            </div> 
            <p className='pt-3 pb-1 text-sm'>{name}</p>
            <p className='text-sm font-medium'>{currency}{price}</p>
    </Link>
  
  )
}

export default ProductItem
