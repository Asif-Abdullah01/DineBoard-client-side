import React from 'react';
import logo from '../assets/logo.jpg';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-yellow-100 text-base-content px-6 py-10 text-center flex flex-col items-center gap-4">
            {/* Logo */}
            <img src={logo} alt="DineBoard Logo" className="w-24 h-24 rounded-xl mb-2" />

            {/* Contact Info */}
            <div className="text-md text-gray-700">
                <p>📞 +880 1606-074577</p>
                <p>📍 123 Gulshan Avenue, Dhaka, Bangladesh</p>
            </div>

            {/* Social Media */}
            <div className="flex gap-6 mt-3 text-xl text-gray-700">
                <a href="https://www.facebook.com/asifabdullah01/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                    <FaFacebookF />
                </a>
                <a href="https://www.instagram.com/asif_abdullah01/#" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
                    <FaInstagram />
                </a>
                <a href="https://www.youtube.com/@HidayahMedia01" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">
                    <FaYoutube />
                </a>
            </div>

            {/* Copyright */}
            <p className="text-sm text-gray-600 mt-4">
                © {new Date().getFullYear()} DineBoard Ltd. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
