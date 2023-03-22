import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ShoppingCartContext from '../context/ShoppingCartContext';

const Navbar = () => {
    const { cart } = useContext(ShoppingCartContext);
    const navigate = useNavigate();
    return (
        <nav className="flex flex-col lg:flex-row flex-wrap items-center justify-center md:justify-between px-4 py-3 bg-black lg:sticky top-0 z-50 shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]">
        <div className="w-auto flex flex-row justify-center items-center lg:w-auto lg:static lg:justify-center text-white">
            <img className="w-[35px] h-[35px] mr-1" src="../src/assets/star-icon.png" />
            <h3 className='text-lg'>Hot Star Hunan Grill</h3>
        </div>
        <div className='right-side flex flex-col lg:flex-row justify-center justify-items-center gap-y-4 lg:gap-y-0'>
            <ul className='nav-links flex flex-row justify-center items-center lg:mr-4 mt-4 lg:mt-0'>
                <li className="nav-item flex flex-row justify-center justify-items-center">
                    <Link className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75' to={"/"}>
                        Home
                    </Link>
                </li>
                {/* <li className="nav-item flex flex-row justify-center justify-items-center">
                    <Link className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75' to={{ pathname: "/", hash: "#about" }} >
                            About
                    </Link>
                </li>
                <li className="nav-item flex flex-row justify-center justify-items-center">
                    <Link className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75' to={"/#reviews"}>
                        Reviews
                    </Link>
                </li>
                <li className="nav-item flex flex-row justify-center justify-items-center">
                    <Link className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75' to={"/#contact"}>
                        Contact
                    </Link>
                </li> */}
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
            </ul>
            {/* <div className='text-white flex flex-col gap-y-4 sm:gap-0 sm:flex-row justify-center justify-items-center'>
                <button className="text-sm px-3 py-2 mx-1 text-700 font-bold bg-red-600 hover:bg-red-700 transition-colors duration-75" onClick={() => navigate('/menu')}>Order Now</button>
            </div> */}
        </div>
        </nav>
    )
}


export default Navbar