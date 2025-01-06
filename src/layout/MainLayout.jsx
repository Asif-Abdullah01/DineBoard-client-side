import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../components/Footer';


const MainLayout = () => {
    return (
        <>
         <ToastContainer />
        <Navbar></Navbar>
        <div className='max-w-[1400px] mx-auto'>
            <Outlet></Outlet>
        </div>
        <Footer></Footer>

        </>
    );
};

export default MainLayout;