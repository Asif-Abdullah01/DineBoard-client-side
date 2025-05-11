import React from 'react';
import { Link } from 'react-router-dom';

const FoodCard = ({ food }) => {
    const { name, category, _id, quantity, price, photo, foodOrigin, description } = food || {};

    return (
        <div className='w-full max-w-sm bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden'>
            {/* Image */}
            <img
                className='w-full h-48 object-cover'
                src={photo}
                alt={name}
            />

            {/* Content */}
            <div className='p-4'>
                {/* Name + Category */}
                <div className='flex justify-between items-center mb-2'>
                    <h2 className='text-xl font-semibold text-gray-800'>{name}</h2>
                    <span className='bg-yellow-200 text-xs font-semibold text-gray-800 px-2 py-1 rounded-full'>
                        {category}
                    </span>
                </div>

                {/* Description */}
                <p className='text-sm text-gray-600 mb-3'>
                    {description.length > 80 ? `${description.substring(0, 80)}...` : description}
                </p>

                {/* Info Grid */}
                <div className='text-sm text-gray-700 space-y-1 mb-4'>
                    <p><span className="font-medium">originates from </span> {foodOrigin}</p>
                    <p className='font-bold'> {quantity} item(s)<span className="font-medium"> available</span></p> 
                    <p className='font-semibold'> <span className='bg-yellow-400 p-1 rounded-md'>{price}</span> BDT Only</p>
                </div>

                {/* Button */}
                <Link to={`/foods/${_id}`}>
                    <button className='w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 rounded-md transition-all duration-200'>
                        View Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default FoodCard;
