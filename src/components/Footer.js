import React from 'react'
import './Home.css'

const Footer = () => {
  return (
    <div className='back flex h-80 py-5 justify-center'>
      <div className=' w-80 mr-80  '>
        <h1 className='text-white mb-3 text-2xl '>About</h1>
        <p className='text-zinc-400 mb-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error beatae numquam architecto impedit consequuntur?</p>
        <button className=' text-white shadow-orange-600   bg-orange-700 rounded-3xl  px-4 py-1   '> Read more</button>
      </div>
      <div className='  relative right-72 '>
      <h1 class=" text-white mb-3 text-xl">Quick Menu</h1>
         <ul class="list-unstyled">
         <li className=' cursor-pointer pb-2'><a className='text-gray-400 no-underline hover:text-white hover:no-underline'  href="#">About</a></li>
         <li className=' cursor-pointer pb-2'><a className='text-gray-400 hover:text-white hover:no-underline'  href="#">Services</a></li>
         <li className=' cursor-pointer pb-2'><a className='text-gray-400 hover:text-white hover:no-underline'  href="#">Approach</a></li>
         <li className=' cursor-pointer pb-2'><a className='text-gray-400 hover:text-white hover:no-underline'  href="#">Sustainability</a></li>
         <li className=' cursor-pointer pb-2'><a className='text-gray-400 hover:text-white hover:no-underline'  href="#">News</a></li>
         <li className=' cursor-pointer pb-2'><a className='text-gray-400 hover:text-white hover:no-underline'  href="#">Careers</a></li>
         </ul>
      </div>
      <div className=''>
      <h1 class=" text-white mb-3 text-xl">Ministries</h1>
         <ul class="list-unstyled">
         <li className=' cursor-pointer pb-2' ><a className='text-gray-400 hover:text-white hover:no-underline' href="#">Children</a></li>
         <li className=' cursor-pointer pb-2' ><a className='text-gray-400 hover:text-white hover:no-underline' href="#">Women</a></li>
         <li className=' cursor-pointer pb-2' ><a className='text-gray-400 hover:text-white hover:no-underline' href="#">Bible Study</a></li>
         <li className=' cursor-pointer pb-2' ><a className='text-gray-400 hover:text-white hover:no-underline' href="#">Church</a></li>
         <li className=' cursor-pointer pb-2' ><a className='text-gray-400 hover:text-white hover:no-underline' href="#">Missionaries</a></li>
         </ul>
      </div>
      <div className=' ml-9 mt-1'>
        <h1 className='text-white px-2'>Social Icons</h1>
        <div className=''>
        <span className="icon-facebook relative top-2 w-8  px-2 ic  "></span>
        <span className="icon-twitter relative top-2 px-2 ic"></span>
        <span className="icon-instagram px-2 relative top-2 ic"></span>
        </div>
        
       
      </div>
    </div>
  )
}

export default Footer
