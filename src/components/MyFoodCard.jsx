import React from 'react';
import { Link } from 'react-router-dom';

const MyFoodCard = ({ food }) => {
    const { _id, name, category, price, photo } = food;
    return (
        <div className="card bg-base-100 shadow-xl hover:scale-105 transition-all">
            <figure>
                <img className="w-full h-52 object-cover"
                    src={photo}
                    alt="sports item" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                </h2>
                <p>Price: {price} BDT</p>
                <p>Category: {category}</p>
                {/* <p title={description}>{description.slice(0, 100)}...</p> */}
                <div className="card-actions">
                    <Link
                        to={`/update/${_id}`}
                        className='text-gray-500 transition-colors duration-200   hover:text-yellow-500 focus:outline-none'
                    >
                        <button className="btn bg-green-600 hover:bg-green-800 p-4 text-white font-bold">Update Now</button>
                    </Link>
                    
                </div>
            </div>
        </div>
    );
};

export default MyFoodCard;