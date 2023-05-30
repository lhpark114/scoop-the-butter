import React, { useState } from 'react';
import { uploadImage } from '../api/uploader';
import Button from '../components/ui/Button';

export default function NewProduct() {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();

  const handleInputChange = (e) => {
    const { className, value, files } = e.target;

    if (className === 'new__image') {
      setFile(files && files[0]);
      return;
    }
    setProduct((product) => ({ ...product, [className]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    uploadImage(file).then((url) => {
      console.log(url);
    });
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
            onChange={handleInputChange}
          />
          <input
            className='new__name'
            type='text'
            id='newName'
            placeholder='Product Name'
            value={product.new__name ?? ''}
            required
            onChange={handleInputChange}
          />
          <input
            id='newPrice'
            type='number'
            className='new__price'
            placeholder='$ Price (put number only)'
            value={product.new__price ?? ''}
            required
            onChange={handleInputChange}
          />
          <input
            className='new__category'
            type='text'
            id='newCategory'
            placeholder='Category'
            value={product.new__category ?? ''}
            required
            onChange={handleInputChange}
          />
          <input
            className='new__description'
            type='text'
            id='newDescription'
            placeholder='Description'
            value={product.new__description ?? ''}
            required
            onChange={handleInputChange}
          />
          <input
            className='new__size'
            type='text'
            id='newSize'
            placeholder='Size(please put , between sizes)'
            value={product.new__size ?? ''}
            required
            onChange={handleInputChange}
          />
          <Button text={'Click to add New products'}></Button>
        </form>
      </section>
    </>
  );
}
