import axios from 'axios';
import React, { useEffect, useState } from 'react';
import FoodCard from '../components/FoodCard';

const AllFoods = () => {
    const [foods, setFoods] = useState([]);
    const [search, setSearch] = useState('');


    useEffect(()=> {

        const fetchAllFoods = async () => {
            const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/foods`);
            setFoods(data)
        }

        fetchAllFoods();
    },[])

    // console.log(foods);

    return (
        <div>
            <h2 className='text-center font-bold text-4xl my-4'>DineBoard</h2>
            <div className="flex items-center justify-center p-4">
                <div className="flex w-full max-w-lg overflow-hidden border rounded-lg focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
                    <input
                        className="w-full px-4 py-2 text-gray-700 placeholder-gray-500 bg-white border-none outline-none focus:ring-0 focus:placeholder-transparent"
                        type="text"
                        name="search"
                        onChange={(e) => setSearch(e.target.value)}
                        value={search}
                        placeholder="Enter Job Title"
                        aria-label="Enter Job Title"
                    />
                    <button className="px-6 py-2 text-sm font-medium text-white uppercase transition-colors duration-300 transform bg-yellow-600 hover:bg-yellow-500 focus:bg-yellow-700 focus:outline-none">
                        Search
                    </button>
                </div>
            </div>

            <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {
            foods.map(food => <FoodCard key={food._id} food={food}></FoodCard>)
          }
        </div>

        </div>
    );
};

export default AllFoods;