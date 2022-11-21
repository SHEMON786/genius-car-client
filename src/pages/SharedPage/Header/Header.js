import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.svg'
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                alert('Log Out Successful');
                return;
            })
            .catch(err => {
                console.error(err);
            })
    }

    const menuItems = <>
        <li className='font-semibold text-xl'><NavLink to='/' className='bg-white text-black btn btn-ghost normal-case'>Home</NavLink></li>
        <div>
            {
                user?.uid ?
                    <div className='flex mr-5'>
                        <li className='font-semibold text-xl'><NavLink to='/orders' className='bg-white text-black btn btn-ghost normal-case'>Orders</NavLink></li>
                        <li className='font-semibold text-xl  border-4 rounded-xl'><NavLink onClick={handleLogOut} className='bg-white text-black btn btn-ghost normal-case'>Log Out</NavLink></li>
                    </div>
                    :
                    <li className='font-semibold text-xl'><NavLink to='/login' className='bg-white text-black btn btn-ghost normal-case'>Login</NavLink></li>
            }
        </div>
    </>

    return (
        <div className="navbar h-20 mb-12 pt-16 bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="normal-case text-xl">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <NavLink className="btn btn-outline text-red-500 normal-case text-lg font-semibold">Appointment</NavLink>
            </div>
        </div>
    );
};

export default Header;