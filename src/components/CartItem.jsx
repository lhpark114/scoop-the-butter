import React from 'react';
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from 'react-icons/ai';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import useCart from '../hooks/useCart';

const ICON_CLASS =
  'transition-all cursor-pointer hover:text-brand hover:scale-105 mx-1';
export default function CartItem({
  product,
  product: { id, new__image, new__name, new__price, new__size, quantity },
}) {
  const { addOrUpdateItem, removeItem } = useCart();
  const handleDecrease = () => {
    if (quantity < 2) return;
    addOrUpdateItem.mutate({ ...product, quantity: quantity - 1 });
  };
  const handleIncrease = () =>
    addOrUpdateItem.mutate({ ...product, quantity: quantity + 1 });

  const handleDelete = () => removeItem.mutate(id);

  return (
    <li className='flex justify-between my-2 items-center'>
      <img
        className='w-24 md:w-48 rounded-lg'
        src={new__image}
        alt={new__name}></img>
      <div className='flex-1 flex justify-between ml-4'>
        <div className='basis-3/5'>
          <p className='text-lg font-bold'>{new__name}</p>
          <p className='text-xl font-bold text-brand'>{new__size}</p>
          <p className='text-xl font-bold'>${new__price}</p>
        </div>
        <div className='text-2xl flex items-center font-bold py-2 border-b border-gray-400'>
          <AiOutlineMinusSquare
            className={ICON_CLASS}
            onClick={handleDecrease}
          />
          <span>{quantity}</span>
          <AiOutlinePlusSquare
            className={ICON_CLASS}
            onClick={handleIncrease}
          />
          <RiDeleteBin5Fill className={ICON_CLASS} onClick={handleDelete} />
        </div>
      </div>
    </li>
  );
}
