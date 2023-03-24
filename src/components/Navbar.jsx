import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartContext from '../context/ShoppingCartContext';
import MobileDrawer from './MobileDrawer';

const Navbar = () => {
    const { cart } = useContext(ShoppingCartContext);
    return (
        <nav className="flex flex-row justify-between px-4 py-3 bg-black lg:sticky top-0 z-50 shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]">
        <div className="w-auto flex flex-row justify-center items-center lg:w-auto lg:static lg:justify-center text-white">
            <img className="w-[35px] h-[35px] mr-1" src="../src/assets/star-icon.png" />
            <h3 className='text-lg'>Hot Star Hunan Grill</h3>
        </div>
        <div className='right-side hidden md:flex flex-col md:flex-row justify-center items-center gap-y-4 md:gap-y-0'>
            <ul className='nav-links flex flex-row justify-center items-center md:mr-4 mt-4 md:mt-0'>
                <li className="nav-item flex flex-row justify-center justify-items-center">
                    <Link className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75' to={"/"}>
                        Home
                    </Link>
                </li>
                <li className="nav-item flex flex-row justify-center justify-items-center">
                    <Link className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75' to={"/menu"}>
                        Menu
                    </Link>
                </li>
                <li className="nav-item flex flex-row justify-center justify-items-center">
                    <Link className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75' to={"/cart"}>
                        Cart ({cart.length})
                    </Link>
                </li>
                <li className="nav-item flex flex-row justify-center justify-items-center">
                    <Link className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75' to={"/order-search"}>
                        Find an Order
                    </Link>
                </li>
            </ul>
        </div>
        <MobileDrawer cart={cart} />
        </nav>
    )
}


export default Navbar