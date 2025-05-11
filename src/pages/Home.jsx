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

            {/* Banner Section */}
            <div className="mb-8">
                <Banner />
            </div>

            {/* Card Section Start */}
            {
                foods.length !== 0 && (
                    <div className='text-center my-8'>
                        <h2 className='text-3xl text-yellow-800 font-bold'>Most Demanded Items</h2>
                        <p className='text-yellow-700 text-base mt-2'>We provide best food with proper hygiene</p>
                    </div>
                )
            }

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-0 mb-8">
                {foods.map((food) => (
                    <div
                        key={food._id}
                        className="w-full max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 mx-auto"
                    >
                        <img
                            src={food.photo}
                            alt={food.name}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4 space-y-2">
                            <div className="flex justify-between items-center">
                                <h2 className="text-lg font-semibold text-gray-800">{food.name}</h2>
                                <span className="text-xs font-medium bg-yellow-200 text-gray-800 px-3 py-1 rounded-full uppercase">
                                    {food.category}
                                </span>
                            </div>
                            <div className="flex justify-between text-sm text-gray-700 font-semibold">
                                <p>{food.price} BDT</p>
                                <p>
                                    Sold {" "}
                                    <span className="bg-yellow-400 px-2 rounded-md text-gray-900">
                                        {food.order}
                                    </span>
                                </p>
                            </div>
                            <p className="text-sm text-gray-600">
                                <span className="font-medium">Originates from</span> {food.foodOrigin}
                            </p>
                            <div className="pt-3">
                                <Link to={`/foods/${food._id}`}>
                                    <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-2 px-4 rounded-lg transition">
                                        View Details
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* View All Button */}
            <div className='flex justify-center mb-12'>
                <Link to={'/foods'}>
                    <button className="border border-yellow-600 text-yellow-700 hover:bg-yellow-200 font-semibold py-2 px-4 rounded transition duration-300">
                        All Items
                    </button>
                </Link>
            </div>


            {/* Card Section End */}

            <div className="my-12">
                <WhyUs />
            </div>

            <div className="my-12">
                <BrandPartners />
            </div>


            <div className="bg-gradient-to-r from-yellow-200 via-[#f7f4edb1] to-yellow-100 py-12 px-4 sm:px-6 lg:px-8 rounded-lg shadow-md mx-auto mt-16 text-center">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4">
                    Stay in the Loop!
                </h2>
                <p className="text-gray-600 mb-6 text-sm sm:text-base">
                    Subscribe to our newsletter for the latest updates, special discounts, and exclusive food deals. No spam, we promise!
                </p>
                <form className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <input
                        type="email"
                        required
                        placeholder="Enter your email"
                        className="w-full sm:w-2/3 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                    />
                    <button
                        type="submit"
                        className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition"
                    >
                        Subscribe
                    </button>
                </form>
            </div>

        </div>
    );
};

export default Home;
