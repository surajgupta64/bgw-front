import React from 'react';
import door from '../image/door-step.png'
import book from '../image/bookpickup.png'
import pay from '../image/pay.png'

const Cards = () => {
  return (
    <div className='w-full -mt-20 mb-12 px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
      <div className="shadow-2xl flex-col justify-center items-center border-slate-100 border-2 shadow-gray-300 rounded-3xl py-8 px-10 flex gap-3 w-full ">
            <img src={book} className="h-28" alt="mail" />
            <h4 className="font-nunito font-bold text-center">Book a Pickup</h4>
            <h4 className="font-nunito text-[#797979] text-center">
            Schedule scrap pickup effortlessly with us. Let's make your unwanted items disappear responsibly.
            </h4>
          </div>
          
          <div className="shadow-2xl flex-col justify-center items-center border-slate-100 border-2 shadow-gray-300 rounded-3xl py-8 px-10 flex gap-3 w-full ">
            <img src={door} className="h-28" alt="mail" />
            <h4 className="font-nunito font-bold text-center">Scrap Hero at your doorstep</h4>
            <h4 className="font-nunito text-[#797979] text-center">
            The executive will arrive at your doorstep at the date and time you specify within select areas  of our city.
            </h4>
          </div>
          
          <div className="shadow-2xl flex-col justify-center items-center border-slate-100 border-2 shadow-gray-300 rounded-3xl py-8 px-10 flex gap-3 w-full ">
            <img src={pay} className="h-32" alt="mail" />
            <h4 className="font-nunito font-bold text-center">Get Paid</h4>
            <h4 className="font-nunito text-[#797979] text-center">
            We compensate customers fairly, taking into account minimal operational expenses for our doorstep service.
            </h4>
          </div>
      </div>
    </div>
  );
};

export default Cards;
