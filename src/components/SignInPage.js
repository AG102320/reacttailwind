import React from 'react';
import { Link } from 'react-router-dom';

export function SignInPage(props) {
  return (
    
    
      <div className= "bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
      <h3 className="font-bold text-2xl text-gray-700 text-center" >Welcome Back</h3>
   
        <form className="flex flex-col justify-center sm:py-12 "  >
            
            
          <div className="mb-6 pt-3 rounded bg-gray-200">
            
            <div className="flex">
            <Link> <i class="fas fa-user ml-3 text-xl"></i></Link>
              <label 
              className="block text-gray-700 text-base font-bold mb-2 ml-3"
              htmlFor="email"
              >Email</label>
              </div>
              <input type="email" name="email" id="email" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-green-500 transition duration-500 px-3 pb-1"
                required
              />
            
          </div>
        
          <div className="mb-6 pt-3 rounded bg-gray-200">
            
              <div className="flex">
            <Link><i class="fas fa-unlock-alt ml-3 text-xl"></i></Link>
              <label 
              className="block text-gray-700 text-sm font-bold mb-2 ml-3"
              htmlFor="password"
              >
                Password
              </label>
              </div>
              <input 
                type="password"
                name="password"
                id="password"
                
                className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-green-500 transition duration-500 px-3 pb-1"
                required
              />
          </div>
          <div className="flex justify-end">
                    <a href="#" className="text-sm text-purple-600 hover:text-purple-700 hover:underline mb-6">Forgot your password?</a>
                </div>
          
          <button className="bg-green-500 hover:bg-green-600 text-gray-200 font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200" type="submit">Sign In</button>
          
        </form>
      </div>
  )
}