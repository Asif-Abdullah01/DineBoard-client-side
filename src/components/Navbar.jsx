import { useContext } from 'react';
import logo from '../assets/logo.jpg'
import { Link, NavLink } from 'react-router-dom'
import AuthContext from '../context/AuthContext';
import { toast } from 'react-toastify';
import ThemeToggle from './ThemeToggle';


const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext);

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                toast.success('signed out successfully');
            })
            .catch(err => {
                toast.error('Failed to sign out', err);
            })
    }
    return (
        <div className='navbar py-4 bg-yellow-100 shadow-sm container lg:px-16 mx-auto sticky top-0 z-50'>
            <div className='flex-1'>
                <Link to='/' className='flex gap-2 items-center'>
                    <img className='w-auto h-16 rounded-xl' src={logo} alt='' />
                    <span className='font-bold text-xl text-black'>DineBoard</span>
                </Link>
            </div>
            <div className='flex-none'>
                <ul className='menu md:menu-horizontal px-1 space-y-1 md:space-y-0'>
                    <li className="mr-2"> <ThemeToggle /> </li>
                    <li>
                        <NavLink className={'font-bold text-black'} to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink className={'font-bold text-black'} to='/foods'>All Foods</NavLink>
                    </li>
                    <li>
                        <NavLink className={'font-bold text-black'} to='/gallery'>Gallery</NavLink>
                    </li>

                    {
                        user ? <><button onClick={handleSignOut} className="py-2 px-3 bg-yellow-400 rounded-lg font-bold text-black">Logout</button></> : <>
                            <Link to={'/login'}>
                                <button className="py-2 px-3 bg-yellow-400 rounded-lg font-bold text-black">Login</button>
                            </Link>
                        </>
                    }
                </ul>

                {user && (
                    <div className='dropdown dropdown-end z-50'>
                        <div
                            tabIndex={0}
                            role='button'
                            className='btn btn-ghost btn-circle avatar'
                        >
                            <div className='w-10 rounded-full'>
                                <img
                                    referrerPolicy='no-referrer'
                                    alt='User Profile Photo'
                                  src={user?.photoURL}
                                />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
                        >
                            <li>
                                <Link className='font-bold' to='/my-added-foods'>My Foods</Link>
                            </li>
                            <li>
                                <Link to='/add-food' className='justify-between font-bold'>
                                    Add Food
                                </Link>
                            </li>

                            <li>
                                <Link className='font-bold' to='/my-orders'>My Orders</Link>
                            </li>

                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar
