import React from 'react';

export default function ProductCard({
  product: { id, new__image, new__name, new__category, new__price },
}) {
  return (
    <li>
      <img src={new__image} alt={new__name} />
      <div>
        <h3>{new__name}</h3>
        <p>{`${new__price}`}</p>
      </div>
      <p>{new__category}</p>
    </li>
  );
}
