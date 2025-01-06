import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const MainLayout = () => {
    return (
        <>
        <Navbar></Navbar>
        <div className='max-w-[1400px] mx-auto'>
            <Outlet></Outlet>
        </div>

        </>
    );
};

export default MainLayout;