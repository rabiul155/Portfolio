import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';



const Navbar = () => {
    const menuItem =
        <>
            <li><HashLink smooth to='#Home' className=' hover:text-orange-500 '>Home</HashLink></li>
            <li><HashLink smooth to='#skill' className=' hover:text-orange-500'>Skill</HashLink></li>
            <li><HashLink smooth to='#project' className=' hover:text-orange-500'>Projects</HashLink></li>
            <li><Link to='/about' className=' hover:text-orange-500' >About</Link></li>
        </>

    return (
        <div>
            <div className="navbar bg-base-200 font-bold px-4 md:px-20">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn py-2 btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5  w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                menuItem
                            }

                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-3xl font-bold text-secondary p-0 ">Portfolio</Link>
                </div>

                <div className="navbar-end">
                    <div className="hidden lg:flex justify-end">
                        <ul className="menu menu-horizontal px-1 text-[18px]">
                            {
                                menuItem
                            }
                        </ul>
                    </div>
                    <HashLink smooth to='#contuctMe' className="btn ml-4 btn-primary btn-sm">Contuct Me</HashLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;