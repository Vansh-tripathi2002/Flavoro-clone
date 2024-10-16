import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { PropagateLoader } from 'react-spinners';
import { useState } from 'react';

const Success = () => {
  const[loading,setLoading]= useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
    },3000);
  },[])
  const navigate= useNavigate();
  return (
    <div className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
      {
        loading ?<PropagateLoader  color="#36d7b7"/>: 
        
        <div>
        <h1 className='font-bold text-3xl mb-4 text-center'>Order Placed Successfully</h1>
        <button  onClick={()=>{
          navigate('/')
        }}
        className='bg-green-400 font-bold px-3 text-white py-2 rounded-lg lg:w-[18vw] w-[15vw] mt-5 '>Return to home</button>
      </div>
      }
      
    </div>
  )
}

export default Success