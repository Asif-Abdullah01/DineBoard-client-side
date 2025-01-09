import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import toast from 'react-hot-toast';

const Purchase = () => {

    const { id } = useParams();
    const [food, setFood] = useState({});
    const { user } = useContext(AuthContext)

    const [buyingDate, setBuyingDate] = useState("");



    useEffect(() => {

        const fetchAllFoods = async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/foods/purchase/${id}`);
            setFood(data)
        }

        fetchAllFoods();

        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleString();
        setBuyingDate(formattedDate);
    }, [])

    console.log(food);


    const { _id, name, price ,quantity,addBy,photo,category,foodOrigin,description} = food || {};

    const handlePurchase = async e => {
        e.preventDefault();
        const orderedQuantity = e.target.quantity.value;
        const userEmail = e.target.email.value;
        // console.log(addBy.email);
        // console.log(userEmail);
        if(parseInt(quantity)=== 0){
            toast.error('Item is not available')
            return;
        }
        else if(orderedQuantity>quantity){
            toast.error('The ordered quantity exceeds the available stock')
            return;
        }
        else if(orderedQuantity<0){
            toast.error('Invalid Quantity given!')
            return;
        }
        else if(addBy.email===userEmail){
            toast.error('You can not order your own added foods')
            return;
        }
        const purchasedFood = {
            name,
            photo,
            category,
            email:userEmail,
            price,
            quantity,
            foodOrigin,
            description,
            foodId: _id,
            buyingDate: new Date(buyingDate)
        }

        try{
            //make a post request with axios
          const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/add-order`,purchasedFood);
      
        //   form.reset(); //reset form
      
          //show test and navigate
          toast.success('Order placed successfully!');
        //   console.log(data);
        //   navigate('/my-orders')
        }
        catch(err){
          // console.log(err);
          toast.error(err?.response?.data); //message from server side
        }

    }

    return (
        <div>
            <form onSubmit={handlePurchase}>

                <div className='md:flex mb-6'>
                    <div className="form-control w-full">
                        <label className="label ">
                            <span className="label-text">Food Name</span>
                        </label>
                        <label className="input-group">
                            <input readOnly value={name} type="text" name='name' placeholder="Food Name" className="input input-bordered w-full" />
                        </label>
                    </div>


                </div>



                <div className='md:flex mb-6'>

                    <div className="form-control md:w-1/2">
                        <label className="label ">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input readOnly value={price} type="text" name='price' placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label ">
                            <span className="label-text">Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="number" name='quantity' placeholder="Quantity" className="input input-bordered w-full" required/>
                        </label>
                    </div>




                </div>


                <div className='md:flex mb-6'>
                    <div className="form-control w-full">
                        <label className="label ">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group">
                            <input readOnly value={user?.displayName} type="text" name='supplier' placeholder="Supplier Name" className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>

                <div className='md:flex mb-6'>
                    <div className="form-control w-full">
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
                            <span className="label-text">Buying Date</span>
                        </label>
                        <input
                            type="text"
                            id="buyingDate"
                            value={buyingDate}
                            readOnly
                            className="bg-yellow-200 p-2 rounded-md" // Optional styling for readonly field
                        />
                    </div>


                </div>



                <input className='btn btn-block bg-amber-600 text-lg' type="submit" value="Purchase" />

            </form>
        </div>
    );
};

export default Purchase;