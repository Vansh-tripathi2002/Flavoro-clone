
import React, { useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import ItemCart from './ItemCart';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const Navigate = useNavigate();
  const [activeCart, setActiveCart] = useState(false);

  const cartItems = useSelector((state) => state.cart.cart);

  const totalItems = cartItems.reduce((totalQty,item) =>totalQty + item.qty , 0 );
 
   const price= cartItems.reduce((total,item) =>total + item.price*item.qty , 0 );

  return (
    <div>
      <div className={`fixed right-0 top-0 lg:w-[20vw] w-full bg-white h-full p-5 mb-3 ${activeCart ? "translate-x-0" : "translate-x-full"} transition-transform duration-500 z-50`}>
        <div className='flex justify-between items-center my-3'>
          <span className='text-xl font-bold text-gray-800'>My Order</span>
          <RxCross2
            onClick={() => setActiveCart(!activeCart)}
            className='border-2 border-gray-600 text-gray-600 font-bold p-1 text-xl rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer'
          />
        </div>
       { cartItems.length > 0 ? cartItems.map((food)=>{
          return  <ItemCart key={food.id} id={food.id} name={food.name} price={food.price} img={food.img} qty={food.qty}/>
        }): <h2 className='font-bold text-center text-xl'>Your Cart  is Empty</h2>   }
        
        <div className='absolute bottom-0'>
          <h3 className='font-semibold text-gray-800'>Items: {totalItems}</h3>
          <h3 className='font-semibold text-gray-800'>Total Amount:{price} </h3>
          <hr className='lg:w-[18vw] w-[90vw] my-2' />
          <button onClick={()=>{
            Navigate('/success');
          }}
          className='bg-green-500 font-bold px-3 text-white py-2 rounded-lg lg:w-[18vw] w-[90vw] mb-5'>Checkout</button>
        </div>
      </div>

      <FaShoppingCart
        onClick={() => setActiveCart(!activeCart)}
        className= {`rounded-full  bg-white shadow-md text-5xl p-3 fixed bottom-4 right-4 cursor-pointer  ${totalItems > 0  && "animate-bounce delay-500  transition-all " } `}
      />
    </div>
  );
}

export default Cart;



