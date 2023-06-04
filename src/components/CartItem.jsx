import React from 'react';
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from 'react-icons/ai';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { addOrUpdateToCart, removeFromCart } from '../api/firebase';

export default function CartItem({
  product,
  product: { id, new__image, new__name, new__price, new__size, quantity },
  uid,
}) {
  const handleDecrease = () => {
    if (quantity < 2);
    return;
    addOrUpdateToCart(uid, { ...product, quantity: quantity - 1 });
  };
  const handleIncrease = () =>
    addOrUpdateToCart(uid, { ...product, quantity: quantity + 1 });

  const handleDelete = () => removeFromCart(uid, id);

  return (
    <li>
      <img
        className='w-full px-4 basis-7/12'
        src={new__image}
        alt={new__name}></img>
      <div className='w-full basis-5/12 flex flex-col p-4'>
        <p className='text-3xl font-bold py-2'>{new__name}</p>
        <p className='text-3xl font-bold py-2'>{new__size}</p>
        <div className='text-2xl font-bold py-2 border-b border-gray-400'>
          <AiOutlineMinusSquare onClick={handleDecrease} />
          <span>{quantity}</span>
          <AiOutlinePlusSquare onClick={handleIncrease} />
          <RiDeleteBin5Fill onClick={handleDelete} />
        </div>
      </div>
    </li>
  );
}
