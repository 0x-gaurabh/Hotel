import React from 'react'
import "./Home.css";
import video from '../assets/video.mp4';
import image1 from '../assets/room2.jpg'

const About = () => {
  return (
    <>
            <div className="about">
          <div className="about-content absolute flex flex-col items-center   bottom-60 left-2/4 ">
          <p className="text-sm font-semibold pb-5 ">SUITES HOTEL & RESORT</p>
           <h1 className="text-6xl font-bold font-serif">About Us</h1>
           </div>  
         </div>
      <div className='flex justify-center items-center mt-20 mb-20  pl-24 pr-48 '>
         <div className=' flex justify-center items-center '> 
          <video className=' w-4/6 h-3/4'   autoPlay loop src={video}></video>
         <img src={image1} className='  w-56 h-40 relative  border-4 border-white top-24 right-52 ' alt="" />
         </div>
         <div>
         <h1 className='font-sans text-4xl text-left '>About Us</h1>
         <hr className=' relative  mt-1 w-24 pine'></hr>
         <p className=' font-light  mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum libero sit deleniti ratione vel voluptatum modi fugiat incidunt? Corporis dolorum quasi voluptate ab, laboriosam harum unde vero nostrum natus eligendi.</p>
          <p className='text-xl text-red-600 mt-6 font-semibold'>Watch Video </p>
         </div>
      </div>
    </>
  )
}

export default About
