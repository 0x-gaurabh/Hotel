import React from 'react'
import "./Home.css";
import image from '../assets/event.jpg'
import image1 from '../assets/event1.jpg'
import image2 from '../assets/event2.jpg'
import image3 from '../assets/event3.jpg'
import image4 from '../assets/event4.jpg'
import image5 from '../assets/event5.jpg'
const Event = () => {
  return (
    <>
        <div className="head">
        <div className="head-content absolute flex flex-col items-center   bottom-60 left-2/4 ">
          <p className="text-sm font-semibold pb-5 ">READ OURS</p>
          <h1 className="text-6xl font-bold font-serif">Blogs & Event</h1>
        </div>
      </div>
      <div className=" mt-14 ">
        <div className=" flex m-9 justify-center">
            <div className="  flex justify-center w-80 flex-col mr-5">
              <img className="h-52 hover:scale-105 transition ease-in-out  duration-500  " src={image}  />
              <h2 className="text-black text-left font-semibold text-xl pt-3">Lorem Ipsum Dolor Sit Amet.</h2>
              <p className='text-black text-left font-light' >Dec 20th 2024-By <span className='text-red-600 text-center  font-semibold'> Admin</span> </p>
              <p className="text-black text-left pt-5 font-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates ut ea asperiores vitae magnam officia similique. Error eum aliquam distinctio?</p>
            </div>
            <div className=" flex justify-center w-80 flex-col  mr-5 ">
              <img className="h-52 hover:scale-105 transition ease-in-out delay-200 duration-500 " src={image1}  />
              <h2 className="text-black text-left font-semibold pt-3">Lorem Ipsum Dolor Sit Amet.</h2>
              <p className='text-black text-left font-light' >Dec 20th 2024-By <span className='text-red-600 text-center  font-semibold'> Admin</span> </p>
              <p className="text-black text-left pt-5 font-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum unde sapiente blanditiis consequuntur vel modi velit quas voluptatibus similique totam.</p>
            </div>
            <div className=" flex justify-center w-80 flex-col  mr-5 ">
              <img className="h-52 hover:scale-105 transition ease-in-out delay-200 duration-500 " src={image2}  />
              <h2 className="text-black text-left font-semibold pt-3">Lorem Ipsum Dolor Sit Amet.</h2>
              <p className='text-black text-left font-light' >Dec 20th 2024-By <span className='text-red-600 text-center  font-semibold'> Admin</span> </p>
              <p className="text-black text-left pt-5 font-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum unde sapiente blanditiis consequuntur vel modi velit quas voluptatibus similique totam.</p>
            </div>
        </div>
        <div className=" flex m-9 justify-center">
            <div className="  flex justify-center w-80 flex-col mr-5">
              <img className="h-52 hover:scale-105 transition ease-in-out  duration-500  " src={image3}  />
              <h2 className="text-black text-left font-semibold text-xl pt-3">Lorem Ipsum Dolor Sit Amet.</h2>
              <p className='text-black text-left font-light' >Dec 20th 2024-By <span className='text-red-600 text-center  font-semibold'> Admin</span> </p>
              <p className="text-black text-left pt-5 font-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates ut ea asperiores vitae magnam officia similique. Error eum aliquam distinctio?</p>
            </div>
            <div className=" flex justify-center w-80 flex-col  mr-5 ">
              <img className="h-52 hover:scale-105 transition ease-in-out delay-200 duration-500 " src={image4}  />
              <h2 className="text-black text-left font-semibold pt-3">Lorem Ipsum Dolor Sit Amet.</h2>
              <p className='text-black text-left font-light' >Dec 20th 2024-By <span className='text-red-600 text-center  font-semibold'> Admin</span> </p>
              <p className="text-black text-left pt-5 font-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum unde sapiente blanditiis consequuntur vel modi velit quas voluptatibus similique totam.</p>
            </div>
            <div className=" flex justify-center w-80 flex-col  mr-5 ">
              <img className="h-52 hover:scale-105 transition ease-in-out delay-200 duration-500 " src={image5}  />
              <h2 className="text-black text-left font-semibold pt-3">Lorem Ipsum Dolor Sit Amet.</h2>
              <p className='text-black text-left font-light' >Dec 20th 2024-By <span className='text-red-600 text-center  font-semibold'> Admin</span> </p>
              <p className="text-black text-left pt-5 font-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum unde sapiente blanditiis consequuntur vel modi velit quas voluptatibus similique totam.</p>
            </div>
        </div>
      
      </div>
      </>
  )
}

export default Event
