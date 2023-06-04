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
export default function MyCart(product) {
  const { uid } = useAuthContext();
  const { isLoading, data: products } = useQuery(['carts'], () => getCart(uid));
  if (isLoading) return <p>Loading...</p>;

  const totalPrice = (product) => {
    products &&
      products.reduce(
        (prev, current) => prev + parseInt(current.price) * current.quantity,
        0
      );
  };
  const hasProducts = products && products.length > 0;

  const handleOrder = (e) => {
    console.log('Ordered');
  };

  return (
    <section>
      <h2 className='mx-12 mt-4 text-gray-700'>My Cart</h2>
      {!hasProducts && <p>Nothing in the Cart</p>}
      {hasProducts && (
        <>
          <ul>
            {products &&
              products.map((product) => (
                <CartItem key={product.id} product={product} uid={uid} />
              ))}
          </ul>
          <div>
            <PriceCard text='Total Price' price={totalPrice} />
            <BsFillCircleFill />
            <PriceCard text='Shipping Fee' price={SHIPPING} />
            <FaEquals />
            <PriceCard text='Total Price' price={totalPrice + SHIPPING} />
            <Button onClick={handleOrder}>Order</Button>
          </div>
        </>
      )}
    </section>
  );
}
