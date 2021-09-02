import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({toggle}) => {
    return (
        <nav className='flex justify-between items-center h-10 bg-white text-green-500  font-serif text-xl pt-5' role='navigation'>
            <Link to='/' className='pl-2'>
            XYZ SOL
            </Link>
            <div className="px-4 cursor-pointer md:hidden" onClick={toggle} >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>
            <div className =" font-sans md:block hidden ">
               <Link className='px-3 py-2 mx-2  rounded text-gray-800 items-center justify-center hover:bg-green-500 hover:text-white border-b-2 border-green-500 ' to ='/'>Your Journey</Link>
               <Link className='px-3 py-2 mx-2  rounded text-gray-800 items-center justify-center hover:bg-green-500 hover:text-white border-b-2 border-green-500 ' to ='/'>Transform</Link>
               <Link className='px-3 py-2 mx-2 rounded text-gray-800 items-center justify-center hover:bg-green-500 hover:text-white border-b-2 border-green-500 ' to ='/'>Services</Link>
               <Link className='px-3 py-2 mx-2 rounded text-gray-800 items-center justify-center hover:bg-green-500 hover:text-white border-b-2 border-green-500 ' to ='/'>Tools</Link>
               <Link className='px-3 py-2 mx-2 rounded text-gray-800 items-center justify-center hover:bg-green-500 hover:text-white border-b-2 border-green-500 ' to ='/'>Login</Link>
           
                   
            </div>
        </nav>
    )
}

export default Navbar;
