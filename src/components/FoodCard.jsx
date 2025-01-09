import React from 'react';
import { Link } from 'react-router-dom';

const FoodCard = ({ food }) => {
    const { name, category, _id, quantity, price, photo, foodOrigin, description } = food || {};
    return (

        <div className='w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md hover:scale-[1.05] transition-all'>
            <div>
                <img className='w-full h-48 object-cover rounded-t-xl' src={photo} alt="" />
            </div>
            <div className='flex items-center justify-between'>

            <h1 className='mt-2 text-lg font-semibold text-gray-800 '>
                    {name}
                </h1>

                <span className='px-3 py-1 text-[10px] text-slate-950  uppercase bg-yellow-200 rounded-full '>
                    {category}
                </span>
            </div>

            <div>


                <p className='mt-2 text-sm text-gray-600 '>
                    {description.substring(0, 70)}...
                </p>

                <div className='flex justify-between'>
                <p className='mt-2 text-sm font-bold text-gray-600 '>
                    Price: ${price}
                </p>
                <p className='mt-2 text-sm font-bold text-gray-600 '>
                FoodOrigin: ${foodOrigin}
                </p>
                    
                </div>

                <p className='mt-2 text-sm font-bold text-gray-600 '>Quantity: {quantity}</p>
            </div>
            <div className='py-2'>
            <Link
                to={`/foods/${_id}`}
            ><button className='btn btn-warning'>View Details</button></Link>
            </div>
        </div>
        //
    );
};

export default FoodCard;

