import React from 'react';

const Navbar = () => {
    return (
        <nav className="relative flex flex-col md:flex-row flex-wrap items-center justify-center md:justify-between px-4 py-3 bg-black">
        <div className="w-auto flex flex-row justify-center items-center lg:w-auto lg:static lg:justify-center text-white">
            <img className="w-[35px] h-[35px] mr-1" src="../src/assets/star-icon.png" />
            <h3 className='text-lg'>Hot Star Hunan Grill</h3>
        </div>
        <div className='right-side flex flex-col md:flex-row justify-center justify-items-center gap-y-4 md:gap-y-0'>
            <ul className='nav-links flex flex-row justify-center items-center md:mr-4 mt-4 md:mt-0'>
                <li className="nav-item flex flex-row justify-center justify-items-center">
                    <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    href="/"
                    >
                    Home
                    </a>
                </li>
                <li className="nav-item flex flex-row justify-center justify-items-center">
                    <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    href="/blog"
                    >
                    Blog
                    </a>
                </li>
                <li className="nav-item flex flex-row justify-center justify-items-center">
                    <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    href="/about"
                    >
                    About
                    </a>
                </li>
                <li className="nav-item flex flex-row justify-center justify-items-center">
                    <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    href="/contact"
                    >
                    Contact
                    </a>
                </li>
            </ul>
            <div className='text-white flex flex-col gap-y-4 sm:gap-0 sm:flex-row justify-center justify-items-center'>
                <button className="w-auto text-sm px-3 py-2 mx-1 border-2">Login</button>
                <button className="text-sm px-3 py-2 mx-1 border-2 bg-white text-black no-underline">Register</button>
                <button className="text-sm px-3 py-2 mx-1 text-700 font-bold bg-red-600 hover:bg-red-700 transition-colors duration-75">Order Now</button>
            </div>
        </div>
        </nav>
    )
}


export default Navbar