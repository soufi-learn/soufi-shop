import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import "../styles/navbar.css";

// CONTEXT
import { shopContext } from '../context/shopContext';


const Navbar = () => {
    const { filteredCartItems } = useContext(shopContext);

    return (
        <header className='flex items-center justify-between px-8 py-2 mt-4 mb-6 transition-all bg-blue-300 rounded-full shadow-md main-header bg-gradient-to-b from-blue-400 to-blue-600'>
            <nav className='main-nav'>
                <ul className='flex gap-3 md:gap-5 lg:gap-8'>
                    <li>
                        <NavLink to="/" className='block p-2 text-white transition-all nav-link hover:scale-110'>Shop</NavLink>
                    </li>

                    <li>
                        <NavLink to="about" className='block p-2 text-white transition-all nav-link hover:scale-110'>About Us</NavLink>
                    </li>

                    <li>
                        <NavLink to="login" className='block p-2 text-white transition-all nav-link hover:scale-110'>Login</NavLink>
                    </li>

                </ul >
            </nav >

            <NavLink to="cart" className='mr-3 text-white nav-link'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth='2' className="feather feather-shopping-cart"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>

                {/* number badge */}
                <span className='nav-badge'>{filteredCartItems.length}</span>
            </NavLink>
        </header >
    );
}

export default Navbar;
