import React from 'react'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { removeFromCart,incrementQty,decrementQty } from '../redux/slices/CartSlice';
import { useDispatch } from 'react-redux';
import toast ,{Toaster} from 'react-hot-toast'


const ItemCart = ({id,name,price,qty,img}) => {
  const dispatch = useDispatch();
  return (
    <div>
    <div className='flex gap-2 shadow-md rounded-lg p-2 mb-3 '>
      
      <MdDelete  onClick={()=>{
        dispatch(removeFromCart({id,name,img,price,qty}))
        toast(`${name} Removed!`)
      }}                                
      
      className='absolute right-7  text-gray-600 cursor-pointer'/>
        <img src={img} alt="" className='w-[50px] h-[50px] '/>

        <div className='leading-5'>
            <h2 className='font-bold text-gray-800'>{name}</h2>

            <div className='flex justify-between items-center'>
            <span className='font-bold text-green-500'>₹{price}</span>


            <div className='flex items-center  justify-center  gap-2 absolute   mt-8   right-10  '>
            <FaMinus   onClick={()=> qty > 1 ?
              dispatch(decrementQty({id})):(qty=0)
            }
            className='border-2 border-gray-600 text-gray-600  hover:text-white  hover:bg-green-500  hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer ' />
            <span>{qty}</span>
            
            <FaPlus  onClick={()=> qty >= 1 ?
              dispatch(incrementQty({id})):(qty=0)
            } 
            
            className='border-2 border-gray-600 text-gray-600  hover:text-white  hover:bg-green-500  hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer' />
            
            </div>

            </div>
        </div>

    
    </div>
    </div>
  )
}

export default ItemCart