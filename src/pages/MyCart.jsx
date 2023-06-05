import React from 'react';
import Button from '../components/ui/Button';
import { getCart } from '../api/firebase';
import { useQuery } from '@tanstack/react-query';
import { useAuthContext } from '../context/AuthContext';
import { BsFillCircleFill } from 'react-icons/bs';
import { FaEquals } from 'react-icons/fa';
import PriceCard from '../components/PriceCard';
import CartItem from '../components/CartItem';

const SHIPPING = 3.0;
export default function MyCart() {
  const { uid } = useAuthContext();
  const { isLoading, data: products } = useQuery(['carts'], () => getCart(uid));
  if (isLoading) return <p>Loading...</p>;

  const totalPrice =
    products &&
    products.reduce(
      (prev, current) => prev + parseInt(current.new__price) * current.quantity,
      0
    );
  const hasProducts = products && products.length > 0;

  const handleOrder = (e) => {
    console.log('Ordered');
  };

  return (
    <section className='p-8 flex flex-col'>
      <p className='text-2xl text-center font-bold pb-4 border-b border-gray-300'>
        My Cart
      </p>
      {!hasProducts && <p>Nothing in the Cart</p>}
      {hasProducts && (
        <>
          <ul className='border-b border-gray-300 mb-8 p-4 px-8'>
            {products &&
              products.map((product) => (
                <CartItem key={product.id} product={product} uid={uid} />
              ))}
          </ul>
          <div className='flex justify-between items-center mb-4 p-2 md:px-8 lg: px-16'>
            <PriceCard text='Total Price' price={totalPrice} />
            <BsFillCircleFill className='shrink-0' />
            <PriceCard text='Shipping Fee' price={SHIPPING} />
            <FaEquals className='shrink-0' />
            <PriceCard text='Total Price' price={totalPrice + SHIPPING} />
            <Button text='Order' onClick={handleOrder} />
          </div>
        </>
      )}
    </section>
  );
}
