import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const FoodDetails = () => {
    const { id } = useParams();
    const [food, setFood] = useState({});

    useEffect(() => {

        const fetchAllFoods = async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/foods/${id}`);
            setFood(data)
        }

        fetchAllFoods();
    }, [])

    console.log(food);


    const { name, category, _id, quantity, price, photo, foodOrigin, description, order } = food || {};

    return (
        <div className='flex flex-col justify-center items-center p-8 rounded-sm bg-yellow-100 w-9/12 mx-auto space-y-4'>

            <img
                className="w-[90%] h-40 md:w-[70%] md:h-80 lg:h-96 object-cover rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
                src={photo}
                alt="Delicious Food"
            />
            <h2 className='md:text-2xl font-bold'>{name}</h2>

            <div className='flex gap-4 items-center'>
                <p className='md:text-xl'>Category: {category}</p>
                <p className='md:text-xl px-4 py-2 bg-yellow-400 rounded-xl'>Cost: {price}</p>
            </div>

            <p className='text-center w-full lg:w-10/12'>{description}</p>
            <p className='font-bold text-center'>Available Quantity: {quantity}</p>
            <div className='flex gap-2'>
                <p className='font-bold border-2 p-2 border-orange-900'>Purchased: <span className='border-2 px-2 rounded-lg border-orange-800'>{order}</span>   |   Food Origin: {foodOrigin}</p>

            </div>

            <Link to={`/foods/purchase/${id}`}>
                <button className='btn btn-warning'>Click To Purchase</button>
            </Link>



        </div>
    );
};

export default FoodDetails;