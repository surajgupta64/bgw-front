import React from 'react'
import img1 from './../image/ewaste_4465758.png'

const SolutionsIndustry = () => {
  return (
    <>
    <div className="flex justify-center bg-[#b1e4c5] py-14 mb-7 pb-44 w-full">
        <div className="flex flex-col">
          <h1 className="font-sans font-bold text-2xl text-[#0A8935] text-center mb-5">
          Industries We Serve <br />
            <span className="text-5xl font-nunito text-black ">
            Solutions by Industry
            </span>
          </h1>
        </div>
      </div>
      <div className="w-full mb-12 mt-[-180px] px-4 ">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
          <div className=" flex-col justify-center bg-white items-center border-slate-300 border-2 shadow-gray-300 rounded-3xl flex gap-3 w-full ">
            <img src={img1} className="h-28" alt="mail" />
            <h4 className="font-nunito font-bold text-center">Electronic Scrap</h4>
            <h4 className="font-nunito text-[#797979] p-12 text-center">
            E-waste, or electronic waste, refers to discarded electrical or electronic devices, such as old computers, smartphones, and televisions, often containing hazardous materials that require proper disposal and recycling.
            </h4>
          </div>
          

        </div>
        
      </div>
    </>
  )
}

export default SolutionsIndustry
