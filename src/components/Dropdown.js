import React from 'react'
import {Link} from 'react-router-dom'

const Dropdown = ({isOpen, toggle}) => {
    return (
        <div
         className= {
            isOpen 
            ? "grid grid-rows-4 pt-3 text-center items-center bg-white":'hidden'
        }
        onClick={toggle}>
            
            <Link className='p-4 hover:bg-green-500' to ='/'>Your Journey</Link>
               <Link className='p-4 p-4 hover:bg-green-500' to ='/'>Transform</Link>
               <Link className='p-4 hover:bg-green-500' to ='/'>Services</Link>
               <Link className='p-4 hover:bg-green-500' to ='/'>Tools</Link>
               <Link className='p-4 hover:bg-green-500' to ='/'>Login</Link>
        </div>
    )
}

export default Dropdown