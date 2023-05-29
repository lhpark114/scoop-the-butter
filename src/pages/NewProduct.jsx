import React, { useState } from 'react';
import CurrencyInput from 'react-currency-input-field';
import { writeUserData } from '../api/firebase';
import Button from '../components/ui/Button';

export default function NewProduct() {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if(name === 'file') {
      setFile(files && files[0]);
      return;
    }
    setProduct((product) => ({ ...product, [name]:value}));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h1>New Products Enroll</h1>
      <section>
        {file && <img src={URL.createObjectURL(file)} alt='local file' />}
        <form onSubmit={handleSubmit}>
          <input
            className='new__image'
            type='file'
            accept='image/*'
            id='newImage'
            placeholder='Choose Image'
            required
            onChange={(e) => handleInputChange(e)}
          />
          <input
            className='new__name'
            type='text'
            id='newName'
            placeholder='Product Name'
            value={product.title ?? ''}
            onChange={(e) => handleInputChange(e)}
          />
          <CurrencyInput
            id='newPrice'
            className='new__price'
            placeholder='$ Price (put number only)'
            prefix='$'
            decimalsLimit={2}
            value={product.price ?? ''}
            onValueChange={(value, name) => console.log(value, name)}
          />
          <input
            className='new__category'
            type='text'
            id='newCategory'
            placeholder='Category'
            value={product.category ?? ''}
            onChange={(e) => handleInputChange(e)}
          />
          <input
            className='new__description'
            type='text'
            id='newDescription'
            placeholder='Description'
            value={product.description ?? ''}
            onChange={(e) => handleInputChange(e)}
          />
          <input
            className='new__size'
            type='text'
            id='newSize'
            placeholder='Size(please put , between sizes)'
            value={product.size ?? ''}
            onChange={(e) => handleInputChange(e)}
          />
        </form>
        <Button>{'Click to add New products'}</Button>
      </section>
    </>
  );
}
