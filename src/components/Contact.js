import React from 'react'
import "./Home.css";
const Contact = () => {
  return (
    <>
    <div className="contact">
    <div className="contact-content absolute flex flex-col items-center   bottom-60 left-2/4 ">
    <p className="text-sm font-semibold pb-5 ">CHAT WITH US</p>
     <h1 className="text-6xl font-bold font-serif">Get In Touch</h1>
     </div>  
   </div>

   <div className='flex justify-center items-center mt-28'> 
   <form className=' pad'>
  <div className="mb-3 ">
    <label for="exampleInputEmail1" className="form-label">Full Name</label>
    <input type="text" placeholder='Full Name' className="   ml-4  w-96" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" placeholder='Email address' className="  ml-4 w-96" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label ">Phone </label>
    <input type="number" placeholder='Phone #' className="  ml-4 w-96" id="exampleInputPassword1" />
  </div>
  <div className="mb-3 flex flex-col ">
    <label className="" for="exampleCheck1">Message</label>
    <textarea name="textarea" className='border-1 border-black w-80 ' ></textarea>
  </div>
  <button type="submit" className=" bg-orange-800 py-1 border rounded-2xl   px-3 hover:shadow-black text-white">Send Message</button>
  </form>

      <div className=' mb-28'>
        <div className='mb-3'>
            <h1 className='text-2xl  font-semibold mb-3'> Contact Info</h1>
            <h2 className=' text-gray-600 text-xl mb-1'>Address</h2>
            <p className='font-light'>203 Fake St. Mountain View, San</p>
            <p className='font-light'>Francisco, California, USA</p>
        </div >
        <div className='mb-3'>
            <h2 className=' text-gray-600 text-xl mb-1'> Phone</h2>
            <p className='text-red-600'>+1 232 3235 324</p>
            
        </div >
        <div>
            <h2 className=' text-gray-500 text-xl mb-1'>Email Address</h2>
            <p className='text-red-600'>youremail@domain.com </p>

        </div>
      </div>
   </div>
   </>
  )
}

export default Contact
