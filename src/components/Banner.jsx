import React from 'react';
import image from '../assets/foods.jpg'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div
            className="hero min-h-[500px]"
            style={{
                backgroundImage: `url(${image})`,
            }}>
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-3xl">
            <h1 className="mb-5 text-5xl font-bold max-w-sm mx-auto">Discover the Art of Fine Dining</h1>
                    <p className="mb-5 font-semibold">
                    Experience the perfect blend of delicious flavors and exceptional ambiance. Explore our menu, reserve a table, and indulge in culinary delights crafted just for you.
                    </p>
                    <Link to={'/foods'}>
                    <button className="btn btn-warning">Browse All Foods</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;