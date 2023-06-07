import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Button from '../components/ui/Button';
import useCart from '../hooks/useCart';

export default function ProductDetail(product) {
  const [success, setSuccess] = useState();
  const { addOrUpdateItem } = useCart();
  const {
    state: {
      product: {
        id,
        new__image,
        new__name,
        new__category,
        new__price,
        new__description,
        new__size,
      },
    },
  } = useLocation();
  const [selected, setSelected] = useState(new__size && new__size[0]);
  const handleSelect = (e) => setSelected(e.target.value);

  const handleClick = (e) => {
    const product = {
      id,
      new__image,
      new__name,
      new__price,
      new__size: selected,
      quantity: 1,
    };
    addOrUpdateItem.mutate(product, {
      onSuccess: () => {
        setSuccess('Item successfully added to your cart');
        setTimeout(() => setSuccess(null), 3000);
      },
    });
  };
  return (
    <>
      <p className='mx-12 mt-4 text-gray-700'>{new__category}</p>

      <section className='flex flex-col md:flex-row p-4'>
        <img
          className='w-full px-4 basis-7/12'
          src={new__image}
          alt={new__name}></img>
        <div className='w-full basis-5/12 flex flex-col p-4'>
          <h2 className='text-3xl font-bold py-2'>{new__name}</h2>
          <p className='text-2xl font-bold py-2 border-b border-gray-400'>
            {new__price}
          </p>
          <p className='py-4 text-lg'>{new__description}</p>
          <div className='flex items-center'>
            <label className='text-brand font-bold' htmlFor='select'>
              Options:{' '}
            </label>
            <select
              id='select'
              className='p-2 m-4 flex-1 border-2 border-dashed border-brand outline-none'
              onChange={handleSelect}
              value={selected}>
              {new__size &&
                new__size.map((size, index) => (
                  <option key={index}>{size}</option>
                ))}
            </select>
          </div>
          {success && <p className='my-2'>{success}</p>}
          <Button text='Add Cart' onClick={handleClick}>
            Add Cart
          </Button>
        </div>
      </section>
    </>
  );
}
