import React from 'react'
import './Home.css'
import image from '../assets/room1.jpg'
 import image1 from '../assets/room2.jpg'
 import image2 from '../assets/room3.jpg'
 import image3 from '../assets/room4.png'
 import image4 from '../assets/room5.png'
 import image5 from '../assets/room6.jpg'

const Room = () => {
  return (
    <>
    <div className="box">
    <div className="box-content absolute flex flex-col items-center   bottom-60 left-2/4 ">
      <p className='text-sm font-semibold '>LUXURIOUS ROOM</p>
      <h1 className='text-5xl font-bold font-serif mt-4'> Hotels Rooms</h1>
    </div>
   </div>
   <div className=" ">
        <h1 className=" font-sans text-4xl text-center mt-12">Ours Rooms</h1>
        <hr className="  relative line mt-2 w-24"/>
        <div className=" flex m-9 justify-center">
            <div className=" border-2 mr-5">
              <img className="h-52 hover:scale-105 transition ease-in-out  duration-500  " src={image}  />
              <h2 className="text-black text-center font-semibold pt-3">STANDARD ROOM</h2>
              <p className="text-black text-center font-light">$350 / per night</p>
            </div>
            <div className=" border-2 mr-5 ">
              <img className="h-52 hover:scale-105 transition ease-in-out delay-200 duration-500 " src={image1}  />
              <h2 className="text-black text-center font-semibold pt-3">FAMILY ROOM</h2>
              <p className="text-black text-center font-light">$500 / per night</p>
            </div>
            <div className=" border-2 mr-5">
              <img className="h-52 w-80 hover:scale-105 transition ease-in-out delay-200 duration-500 " src={image2}  />
              <h2 className="text-black text-center font-semibold pt-3">SINGLE ROOM</h2>
              <p className="text-black text-center font-light pb-4">$250 / per night</p>
            </div>
        </div>
        <div className=" flex m-9 justify-center">
            <div className=" border-2 mr-5">
              <img className="h-52 hover:scale-105 transition ease-in-out  duration-500  " src={image3}  />
              <h2 className="text-black text-center font-semibold pt-3">DELUXE ROOM</h2>
              <p className="text-black text-center font-light">$650 / per night</p>
            </div>
            <div className=" border-2 mr-5 ">
              <img className="h-52 hover:scale-105 transition ease-in-out delay-200 duration-500 " src={image4}  />
              <h2 className="text-black text-center font-semibold pt-3">LUXURY ROOM</h2>
              <p className="text-black text-center font-light">$800 / per night</p>
            </div>
            <div className=" border-2 mr-5">
              <img className="h-52  hover:scale-105 transition ease-in-out delay-200 duration-500 " src={image5}  />
              <h2 className="text-black text-center font-semibold pt-3">SINGLE ROOM</h2>
              <p className="text-black text-center font-light pb-4">$150 / per night</p>
            </div>
        </div>
      
      </div>
   </>
   
  )
}

export default Room
