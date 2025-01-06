import React from 'react';
import error from '../assets/error.jpg'
import { Link } from 'react-router-dom';

const ErrorElement = () => {
    return (
        <div className='py-12'>
            <h2 className="text-5xl text-center">404 NOT FOUND!</h2>
            <p className="text-2xl text-center">Please provide a valid link</p>

            <div className='flex justify-center'>
            <img src={error} alt="" />
            </div>

            <div className='flex justify-center'>
            <Link to={'/'}>
            <button className='btn btn-error'>Back To Home Page</button>
            </Link>
            </div>

        </div>
    );
};

export default ErrorElement;




