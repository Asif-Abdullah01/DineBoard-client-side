import React, { useContext, useEffect, useState } from 'react';
import AuthContext from './../context/AuthContext';
import axios from 'axios';
import MyFoodCard from '../components/MyFoodCard';
import { Helmet } from 'react-helmet';

const MyAddedFoods = () => {

    const { user } = useContext(AuthContext)

    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetchAllFoods();
    }, [user])

    const fetchAllFoods = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/food/${user?.email}`,{withCredentials:true});
        setFoods(data)
    }


    // console.log(foods);

    return (
        <div>
            <Helmet>
                <title>DineBoard | My Foods</title>
            </Helmet>
            <h2 className="text-3xl font-bold text-center my-2">My Foods({foods.length})</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-8'>
                {
                    foods.map(food => <MyFoodCard key={food._id} food={food}></MyFoodCard>)
                }
            </div>
        </div>
    );
};

export default MyAddedFoods;