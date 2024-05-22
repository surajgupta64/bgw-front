import React from "react";
import book from "../image/bookpickup.png";

const Feature = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid gap-8">
        <div className="w-full items-center shadow-xl pb-20 flex justify-between p-4 my-4 rounded-lg">
          <div className="w-1/2">
            <img className="w-52 mx-auto bg-white" src={book} alt="/" />
          </div>
          <div className="w-1/2">
            {" "}
            <h2 className="text-2xl font-bold text-center">Book a Pickup</h2>
            <p className="py-2 mx-2 text-center">
              Schedule scrap pickup effortlessly with us. Let's make your
              unwanted items disappear responsibly.
            </p>
          </div>
        </div>
        <div className="w-full items-center shadow-xl pb-20 flex justify-between p-4 my-4 rounded-lg">
          <div className="w-1/2">
            {" "}
            <h2 className="text-2xl font-bold text-center">Book a Pickup</h2>
            <p className="py-2 mx-2 text-center">
              Schedule scrap pickup effortlessly with us. Let's make your
              unwanted items disappear responsibly.
            </p>
          </div>
          <div className="w-1/2">
            <img className="w-52 mx-auto bg-white" src={book} alt="/" />
          </div>
        </div>
        {/* <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-44 mx-auto mt-[-3rem] bg-white' src={door} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Scrap Hero at your doorstep</h2>
              <p className='py-2 text-center mx-6 mt-2'>The executive will arrive at your doorstep at the date and time you specify within select areas of our city.</p>
              
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-44 mx-auto mt-[-3rem] bg-white' src={pay} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Get Paid </h2>
              <p className='py-2 text-center mx-6 mt-2'>We compensate customers fairly, taking into account minimal operational expenses for our doorstep service.</p>
             
          </div> */}
      </div>
    </div>
  );
};

export default Feature;
