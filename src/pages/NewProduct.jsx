import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CurrencyInput from 'react-currency-input-field';
import { writeUserData } from '../api/firebase';
import Button from '../components/ui/Button';

export default function NewProduct() {
  const [newImage, setNewImage] = useState(null);
  const [newName, setNewName] = useState(null);
  const [newPrice, setNewPrice] = useState(null);
  const [newCategory, setNewCategory] = useState(null);
  const [newDescription, setNewDescription] = useState(null);
  const [newSize, setNewSize] = useState(null);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === 'newImage') {
      setNewImage(value);
    }
    if (id === 'newName') {
      setNewName(value);
    }
    if (id === 'newPrice') {
      setNewPrice(value);
    }
    if (id === 'newCategory') {
      setNewCategory(value);
    }
    if (id === 'newDescription') {
      setNewDescription(value);
    }
    if (id === 'newSize') {
      setNewSize(value);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    writeUserData(obj);
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
            value={newImage}
            onChange={(e) => handleInputChange(e)}
          />
          <input
            className='new__name'
            type='text'
            id='newName'
            placeholder='Product Name'
            value={newName}
            onChange={(e) => handleInputChange(e)}
          />
          <CurrencyInput
            id='newPrice'
            className='new__price'
            placeholder='$ Price (put number only)'
            prefix='$'
            decimalsLimit={2}
            value={newPrice}
            onValueChange={(value, name) => console.log(value, name)}
          />
          <input
            className='new__category'
            type='text'
            id='newCategory'
            placeholder='Category'
            value={newCategory}
            onChange={(e) => handleInputChange(e)}
          />
          <input
            className='new__description'
            type='text'
            id='newDescription'
            placeholder='Description'
            value={newDescription}
            onChange={(e) => handleInputChange(e)}
          />
          <input
            className='new__size'
            type='text'
            id='newSize'
            placeholder='Size(please put , between sizes)'
            value={newSize}
            onChange={(e) => handleInputChange(e)}
          />
        </form>
        <Button>{'Click to add New products'}</Button>
      </section>
    </>
  );
}
