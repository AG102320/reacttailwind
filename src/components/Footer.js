import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => {
    return (
      <div className="bg-green-500 text-gray-800 fixed w-full bottom-0 p-2 text-xs flex flex-col justify-center items-center">

     
      <div className="w-1/6 my-3 flex justify-between text-lg">
      <Link><i class="icon-foter fab fa-twitter  "></i></Link>
      <Link><i class="icon-foter fab fa-facebook "></i></Link>
      <Link><i class="icon-foter fab fa-instagram "></i></Link>
      <Link><i class="icon-foter fab fa fa-linkedin"></i></Link>
      </div>
      <div className="text-sm">
        <p className="copyryt"> Copyright &copy; XYZ</p>
      </div>
      </div> 
  );
};
export default Footer