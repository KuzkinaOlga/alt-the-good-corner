import Layout from '@/components/Layout';
import { Category } from '@/types';
import axios from 'axios';

import { FormEvent, useState, useEffect } from 'react';

const NewAd = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    axios
      .get<Category[]>(`http://localhost:4000/categories`)
      .then((res) => setCategories(res.data))
      .catch(console.error);
  }, []);

  console.log(categories);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const formJSON: any = Object.fromEntries(formData.entries());
    formJSON.price = parseFloat(formJSON.price);
    axios
      .post(`http://localhost:4000/ads`, formJSON)
      .then(() => {
        alert('Merci!!');
      })
      .catch(console.error);
  };
  return (
    <Layout title="Creation d'un annonce">
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Titre : </label>
        <input
          className='text-field'
          type='text'
          name='title'
          id='name'
          required
        />
        <br />
        <br />
        <label htmlFor='picture'>Image : </label>
        <input
          className='text-field'
          type='text'
          name='picture'
          id='picture'
          required
        />
        <br />
        <br />
        <label htmlFor='location'>Localisation : </label>
        <input
          className='text-field'
          type='text'
          name='location'
          id='location'
          required
        />
        <br />
        <br />
        <label htmlFor='owner'>Auteur : </label>
        <input
          className='text-field'
          type='text'
          name='owner'
          id='owner'
          required
        />
        <br />
        <br />
        <label htmlFor='description'>Description : </label>
        <textarea
          className='text-field'
          name='description'
          id='description'
          required
        ></textarea>
        <br />
        <br />
        <label htmlFor='price'>Prix : </label>
        <input
          className='text-field'
          type='number'
          name='price'
          id='price'
          min={0}
          required
        />
        <br />
        <br />
        <label htmlFor='category'>Categorie : </label>
        <select name='category' id='category'>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        <br />
        <br />
        <button className='button'>Submit</button>
      </form>
    </Layout>
  );
};
export default NewAd;
