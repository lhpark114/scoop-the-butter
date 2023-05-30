import React, { useState } from 'react';
import { addNewProduct } from '../api/firebase';
import { uploadImage } from '../api/uploader';
import Button from '../components/ui/Button';

export default function NewProduct() {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();
  const [isUploading, setIsUploading] = useState(false);
  const [success, setSuccess] = useState();

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
    setIsUploading(true);
    uploadImage(file) //
      .then((url) => {
        console.log(url);
        addNewProduct(product, url) //
          .then(() => {
            setSuccess('Successfully Added');
            setTimeout(() => {
              setSuccess(null);
            }, 4000);
          });
      })
      .finally(() => setIsUploading(false));
  };

  return (
    <section className = 'w-full text-center'>
      <h2 className='text-2xl font-bold my-4'>Add New Products</h2>
      {success && <p className='my-2'>{success}</p>}
      {file && <img className='w-96 mx-auto mb-2' src={URL.createObjectURL(file)} alt='local file' />}
      <form className='flex flex-col px-12' onSubmit={handleSubmit}>
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
          placeholder='$ Price (Number only)'
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
        <Button
          text={isUploading ? 'Uploading...' : 'Click to add New products'}
          disabled={isUploading}></Button>
      </form>
    </section>
  );
}
