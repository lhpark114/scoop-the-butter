import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProductCard({
  product,
  product: { id, new__image, new__name, new__category, new__price },
}) 
  
{
  const navigate = useNavigate();
  return (
    <li onClick={() =>{navigate(`/products/${id}`, { state: { product } });}}
    className='rounded-lg shadow-md overflow-hidden cursor-pointer transition-all hover:scale-105'>
      <img className='w-full' src={new__image} alt={new__name} />
      <div className='mt-2 px-2 text-lg flex justify-between items-center'>
        <h3 className='truncate'>{new__name}</h3>
        <p>{`${new__price}`}</p>
      </div>
      <p className='mb-2 px-2 text-gray-600'>{new__category}</p>
    </li>
  );
}
