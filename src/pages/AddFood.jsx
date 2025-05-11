import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { Helmet } from 'react-helmet';

const AddFood = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleAddFood = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const category = form.category.value;
    const quantity = form.quantity.value;
    const price = form.price.value;
    const email = form.email.value;
    const supplierName = form.supplier.value;
    const photo = form.photo.value;
    const foodOrigin = form.origin.value;
    const description = form.description.value;

    const newFood = {
      name,
      category,
      quantity,
      price,
      addBy: { email, supplierName },
      photo,
      foodOrigin,
      description,
      order: 0,
    };

    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/add-food`,
        { ...newFood, email },
        { withCredentials: true }
      );
      form.reset();
      toast.success('Food added successfully!');
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className='bg-gradient-to-b from-yellow-50 to-lime-100 p-8 md:p-12 rounded-xl shadow-xl'>
      <Helmet>
        <title>DineBoard | Add Food</title>
      </Helmet>
      <h2 className='text-4xl font-bold text-center text-amber-700 mb-8'>Add a New Food Item</h2>
      <form onSubmit={handleAddFood} className='space-y-6'>
        <div className='md:flex gap-6'>
          <div className='w-full'>
            <label className='block text-gray-700 mb-1'>Food Name</label>
            <input type='text' name='name' placeholder='Food Name' className='input input-bordered w-full' />
          </div>
          <div className='w-full'>
            <label className='block text-gray-700 mb-1'>Category</label>
            <input type='text' name='category' placeholder='Category' className='input input-bordered w-full' />
          </div>
        </div>

        <div className='md:flex gap-6'>
          <div className='w-full'>
            <label className='block text-gray-700 mb-1'>Quantity</label>
            <input type='number' name='quantity' placeholder='Available quantity' className='input input-bordered w-full' />
          </div>
          <div className='w-full'>
            <label className='block text-gray-700 mb-1'>Price</label>
            <input type='text' name='price' placeholder='Price' className='input input-bordered w-full' />
          </div>
        </div>

        <div className='md:flex gap-6'>
          <div className='w-full'>
            <label className='block text-gray-700 mb-1'>Supplier Name</label>
            <input type='text' readOnly value={user?.displayName} name='supplier' className='input input-bordered w-full bg-gray-100' />
          </div>
          <div className='w-full'>
            <label className='block text-gray-700 mb-1'>Email</label>
            <input type='email' readOnly value={user?.email} name='email' className='input input-bordered w-full bg-gray-100' />
          </div>
        </div>

        <div className='md:flex gap-6'>
          <div className='w-full'>
            <label className='block text-gray-700 mb-1'>Photo URL</label>
            <input type='text' name='photo' placeholder='Photo URL' className='input input-bordered w-full' />
          </div>
          <div className='w-full'>
            <label className='block text-gray-700 mb-1'>Food Origin</label>
            <input type='text' name='origin' placeholder='Country of origin' className='input input-bordered w-full' />
          </div>
        </div>

        <div>
          <label className='block text-gray-700 mb-1'>Description</label>
          <textarea
            name='description'
            rows='4'
            placeholder='Enter food description...'
            className='textarea textarea-bordered w-full resize-none'
          ></textarea>
        </div>

        <input type='submit' value='Add Item' className='btn btn-warning btn-block text-white text-lg' />
      </form>
    </div>
  );
};

export default AddFood;
