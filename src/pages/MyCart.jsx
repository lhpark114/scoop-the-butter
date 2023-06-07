import React from 'react';
import Button from '../components/ui/Button';
import { BsFillCircleFill } from 'react-icons/bs';
import { FaEquals } from 'react-icons/fa';
import PriceCard from '../components/PriceCard';
import CartItem from '../components/CartItem';
import useCart from '../hooks/useCart';

const SHIPPING = 3.0;
export default function MyCart() {
  const {
    cartQuery: { isLoading, data: products },
  } = useCart();

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
                <CartItem key={product.id} product={product} />
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
