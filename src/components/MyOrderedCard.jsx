import axios from 'axios';
import React from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';


const MyOrderedCard = ({food,fetchAllFoods}) => {
    const { _id, name, category, price, photo,buyingDate } = food;
    const dateFromDB = new Date(buyingDate);
    const formattedDate = dateFromDB.toISOString().split('T')[0];

    const handleDelete = async id => {
        try {
            const {data} = await axios.delete(`${import.meta.env.VITE_API_URL}/my-food/${id}`);
            console.log(data)
            toast.success('Order Removed Successfully')
      
            //refresh ui
            fetchAllFoods()
          } catch (err) {
            toast.error(err.message)
          }
    }

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
                <p>Cost: {price}</p>
                <p>Category: {category}</p>
                <p>Buying Date: {formattedDate}</p>
                {/* <p title={description}>{description.slice(0, 100)}...</p> */}
                <div className="card-actions">

                    <button onClick={() => handleDelete(_id)} className="btn bg-red-600 hover:bg-red-800 p-4 text-white font-bold">Delete</button>

                </div>
            </div>
        </div>
    );
};

export default MyOrderedCard;





