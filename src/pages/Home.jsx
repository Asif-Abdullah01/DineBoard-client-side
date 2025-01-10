import React from 'react';
import Banner from '../components/Banner';
import WhyUs from '../components/WhyUs';
import BrandPartners from '../components/BrandPartners';
import { Link, useLoaderData } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Home = () => {
    const foods = useLoaderData();

    return (

        <div>
            <Helmet>
                <title>DineBoard</title>
            </Helmet>
            <Banner></Banner>

            {/* card section start */}

            {
                foods.length != 0 && <div className='text-center pt-4'>
                    <h2 className='text-3xl text-yellow-800 font-bold'>Most Demanded Items</h2>
                    <p className='text-yellow-700 text-base mt-2'>We provide best food with proper hygiene</p>
                </div>
            }

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-8'>
                {
                    foods.map(food =>

                        <div key={food._id} className='w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md hover:scale-[1.05] transition-all'>
                            <div>
                                <img className='w-full h-48 object-cover rounded-t-xl' src={food.photo} alt="" />
                            </div>
                            <div className='flex items-center justify-between'>

                                <h1 className='mt-2 text-lg font-semibold text-gray-800 '>
                                    {food.name}
                                </h1>

                                <span className='px-3 py-1 text-[10px] text-slate-950  uppercase bg-yellow-200 rounded-full '>
                                    {food.category}
                                </span>
                            </div>

                            <div>



                                <div className='flex justify-between'>
                                    <p className='mt-2 text-sm font-bold text-gray-600 '>
                                        Price: {food.price} BDT.
                                    </p>
                                    <p className='mt-2 text-sm font-bold text-gray-600 '>
                                        Purchased: <span className='px-1 bg-yellow-400 rounded-lg'>{food.order}</span> Times
                                    </p>




                                </div>

                                <p className='mt-2 text-sm font-bold text-gray-600 '>
                                    Food origin: {food.foodOrigin}
                                </p>
                            </div>
                            <div className='py-2'>
                                <Link
                                    to={`/foods/${food._id}`}
                                ><button className='btn btn-warning'>View Details</button></Link>
                            </div>
                        </div>
                    )
                }


            </div>

            <div className='flex justify-center py-4'>
                <Link to={'/foods'}>
                    <button className="btn btn-warning">All Foods</button>
                </Link>
            </div>

            {/* card section end */}

            <WhyUs></WhyUs>
            <BrandPartners></BrandPartners>


        </div>
    );
};

export default Home;