import React from 'react'
import img1 from './../image/ewaste_4465758.png'
import img2 from './../image/metal_9113667.png'
import img3 from './../image/garbage_1758334.png'
import img4 from './../image/paper-recycle_7296301.png'
import img5 from './../image/recycle-can_9113615.png'
import img6 from './../image/recycled_7305161.png'
import img7 from './../image/recycling-center_8318680.png'
import img8 from './../image/3d-printing-filament_663585.png'
import img9 from './../image/waste_10708500.png'

const CategoryService = () => {
  return (
    <>
    <div className="flex justify-center bg-[#0A8935] py-14 mb-7 pb-44 w-full">
        <div className="flex flex-col">
          <h1 className="font-sans font-bold text-2xl text-[#f0d395] text-center mb-5">
            Our Services <br />
            <span className="text-5xl font-nunito text-white ">
              Waste Services
            </span>
          </h1>
          <h4 className="font-nunito font-bold text-lg text-slate-200 text-center lg:mx-32 xl:mx-96 mx-6">
            India generates 62 million tons of garbage annually. Only 70% of
            this waste is collected, and of the collected garbage, just 19% is
            treated and processed. The remaining waste is sent to dumping
            grounds.
          </h4>
        </div>
      </div>
      <div className="w-full mb-12 mt-[-140px] px-4 ">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
          <div className=" flex-col justify-center bg-[#F1F1F1] items-center border-slate-200 border-2 shadow-gray-300 rounded-3xl py-8 px-10 flex gap-3 w-full ">
            <img src={img1} className="h-28" alt="mail" />
            <h4 className="font-nunito font-bold text-center">Electronic Scrap</h4>
            <h4 className="font-nunito text-[#797979] text-center">
            E-waste, or electronic waste, refers to discarded electrical or electronic devices, such as old computers, smartphones, and televisions, often containing hazardous materials that require proper disposal and recycling.
            </h4>
          </div>
          <div className=" flex-col justify-center bg-[#F1F1F1] items-center border-slate-200 border-2 shadow-gray-300 rounded-3xl py-8 px-10 flex gap-3 w-full ">
            <img src={img2} className="h-28" alt="mail" />
            <h4 className="font-nunito font-bold text-center">Metal Scrap</h4>
            <h4 className="font-nunito text-[#797979] text-center">
            Small metal waste includes discarded items such as screws, nails, and metal scraps from manufacturing or construction, like leftover shavings or broken tools.
            </h4>
          </div>
          <div className=" flex-col justify-center bg-[#F1F1F1] items-center border-slate-200 border-2 shadow-gray-300 rounded-3xl py-8 px-10 flex gap-3 w-full ">
            <img src={img3} className="h-28" alt="mail" />
            <h4 className="font-nunito font-bold text-center">Plastic Scrap</h4>
            <h4 className="font-nunito text-[#797979] text-center">
            Plastic waste refers to discarded plastic materials, such as bottles, bags, and packaging, which often accumulate in landfills and oceans, causing environmental pollution.
            </h4>
          </div>
          <div className=" flex-col justify-center bg-[#F1F1F1] items-center border-slate-200 border-2 shadow-gray-300 rounded-3xl py-8 px-10 flex gap-3 w-full ">
            <img src={img4} className="h-28" alt="mail" />
            <h4 className="font-nunito font-bold text-center">Paper and Cardboard Scrap</h4>
            <h4 className="font-nunito text-[#797979] text-center">
            Paper and cardboard waste includes discarded items like newspapers, magazines, and packaging boxes, which are commonly recycled materials.
            </h4>
          </div>
          <div className=" flex-col justify-center bg-[#F1F1F1] items-center border-slate-200 border-2 shadow-gray-300 rounded-3xl py-8 px-10 flex gap-3 w-full ">
            <img src={img5} className="h-28" alt="mail" />
            <h4 className="font-nunito font-bold text-center">Aluminium Scrap</h4>
            <h4 className="font-nunito text-[#797979] text-center">
            Aluminium waste refers to discarded aluminium materials from manufacturing or consumption, such as used beverage cans or scrap metal from construction.
            </h4>
          </div>
          <div className=" flex-col justify-center bg-[#F1F1F1] items-center border-slate-200 border-2 shadow-gray-300 rounded-3xl py-8 px-10 flex gap-3 w-full ">
            <img src={img6} className="h-28" alt="mail" />
            <h4 className="font-nunito font-bold text-center">Glass Scrap</h4>
            <h4 className="font-nunito text-[#797979] text-center">
            Glass waste consists of discarded glass items such as bottles, jars, and broken windows. For example, a broken wine bottle thrown into the trash is considered glass waste.
            </h4>
          </div>
          <div className=" flex-col justify-center bg-[#F1F1F1] items-center border-slate-200 border-2 shadow-gray-300 rounded-3xl py-8 px-10 flex gap-3 w-full ">
            <img src={img7} className="h-28" alt="mail" />
            <h4 className="font-nunito font-bold text-center">Industry Scrap</h4>
            <h4 className="font-nunito text-[#797979] text-center">
            Industry waste refers to the leftover materials or by-products from manufacturing processes, such as metal shavings from automotive production.
            </h4>
          </div>
          <div className=" flex-col justify-center bg-[#F1F1F1] items-center border-slate-200 border-2 shadow-gray-300 rounded-3xl py-8 px-10 flex gap-3 w-full ">
            <img src={img8} className="h-28" alt="mail" />
            <h4 className="font-nunito font-bold text-center">Copper Scrap</h4>
            <h4 className="font-nunito text-[#797979] text-center">
            Copper waste, often from electrical wiring or plumbing, refers to discarded or leftover copper materials, such as scrap wires or old pipes.
            </h4>
          </div>
          <div className=" flex-col justify-center bg-[#F1F1F1] items-center border-slate-200 border-2 shadow-gray-300 rounded-3xl py-8 px-10 flex gap-3 w-full ">
            <img src={img9} className="h-28" alt="mail" />
            <h4 className="font-nunito font-bold text-center">Furniture Scrap</h4>
            <h4 className="font-nunito text-[#797979] text-center">
            Furniture waste refers to discarded or unwanted furniture, such as old sofas, broken chairs, and outdated tables, often resulting from renovations or replacements.
            </h4>
          </div>

        </div>
        
      </div>
    </>
  )
}

export default CategoryService
