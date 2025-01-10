import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const UpdateFood = () => {
    const navigate = useNavigate();
    const food = useLoaderData();
    const {user} = useContext(AuthContext);

    const {_id,name,category,quantity,price,addBy,photo,foodOrigin,description,order} = food || {};

    const handleUpdateFood = async e => {
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

        const foodData = {
            name,
            category,
            quantity,
            price,
            addBy: { email, supplierName },
            photo,
            foodOrigin,
            description,
        }

        if(user?.email !== email){
            toast.error('You do not have access to update dish')
        }

        

        try {
            
            const {data} = await axios.put(`${import.meta.env.VITE_API_URL}/foods/${_id}`, foodData);

            toast.success('Food Data updated successfully!');
            // navigate('/my-added-foods')
        }
        catch (err) {
            toast.error(err.message);
        }

    }

    return (
        <div className='bg-[#F4F3F0] p-24'>
            <h2 className='text-3xl font-extrabold'>Update the Food</h2>
            <form onSubmit={handleUpdateFood}>

                <div className='md:flex mb-6'>
                    <div className="form-control md:w-1/2">
                        <label className="label ">
                            <span className="label-text">Food Name</span>
                        </label>
                        <label className="input-group">
                            <input defaultValue={name} type="text" name='name' placeholder="Food Name" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2 md:md:ml-4">
                        <label className="label ">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <input defaultValue={category} type="text" name='category' placeholder="Category" className="input input-bordered w-full" />
                        </label>
                    </div>


                </div>



                <div className='md:flex mb-6'>

                    <div className="form-control md:w-1/2">
                        <label className="label ">
                            <span className="label-text">Quantity</span>
                        </label>
                        <label className="input-group">
                            <input defaultValue={quantity} type="text" name='quantity' placeholder="Available quantity" className="input input-bordered w-full" />
                        </label>
                    </div>



                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label ">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input defaultValue={price} type="text" name='price' placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>


                <h2 className='ml-1 font-bold'>Add By:</h2>
                <div className='md:flex mb-6'>

                    <div className="form-control md:w-1/2">
                        <label className="label ">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group">
                            <input readOnly value={user?.displayName} type="text" name='supplier' placeholder="Supplier Name" className="input input-bordered w-full" />
                        </label>
                    </div>


                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label ">
                            <span className="label-text">Email</span>
                        </label>
                        <label className="input-group">
                            <input readOnly value={user?.email} type="email" name='email' placeholder="Email" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>




                <div className='md:flex mb-6'>
                    <div className="form-control w-full">
                        <label className="label ">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input defaultValue={photo} type="text" name='photo' placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-full md:ml-4">
                        <label className="label ">
                            <span className="label-text">Food Origin</span>
                        </label>
                        <label className="input-group">
                            <input defaultValue={foodOrigin} type="text" name='origin' placeholder="Food Origin (Country)" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className='flex flex-col gap-2 my-4'>
                    <label className='text-gray-700 ' htmlFor='description'>
                        Description
                    </label>
                    <textarea
                        defaultValue={description}
                        className='resize-none block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                        name='description'
                        id='description'
                    ></textarea>
                </div>


                <input className='btn btn-block bg-amber-600 text-lg' type="submit" value="Save" />

            </form>
        </div>
    );
};

export default UpdateFood;