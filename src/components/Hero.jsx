import React, { useState } from "react";
import Typed from "react-typed";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MdCall } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { FaDonate, FaShoppingCart } from "react-icons/fa";
import image1 from "../image/image1.jpg";
import image2 from "../image/image2.jpg";
import image3 from "../image/image3.webp";
import image4 from "../image/image4.jpg";
import image5 from "../image/image5.jpeg";
import SellForm from "./SellForm";
import BulkSellForm from "./BulkSellForm";
import DonateForm from "./DonateForm";

const SimpleSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: false,
    prevArrow: false,
  };
  return (
    <div className="slider-container w-full">
      <Slider className="" {...settings}>
        <div>
          <img
            className="w-full object-cover h-[380px] sm:h-[460px] md:h-[610px] rounded-xl"
            src={image1}
            alt=""
          />
        </div>
        <div>
          <img
            className="w-full object-cover h-[380px] sm:h-[460px] md:h-[610px] rounded-xl"
            src={image2}
            alt=""
          />
        </div>
        <div>
          <img
            className="w-full object-cover h-[380px] sm:h-[460px] md:h-[610px] rounded-xl"
            src={image3}
            alt=""
          />
        </div>
        <div>
          <img
            className="w-full object-cover h-[380px] sm:h-[460px] md:h-[610px] rounded-xl"
            src={image4}
            alt=""
          />
        </div>

        <div>
          <img
            className="w-full object-cover h-[380px] sm:h-[460px] md:h-[610px] rounded-xl"
            src={image5}
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

const Hero = () => {
  const phoneNumber = "+918828750021";
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="bg-white h-full w-screen py-28 px-6 lg:px-20 flex justify-center">
      <SimpleSlider />
      <div className="m-6 md:ml-24 md:w-2/3 lg:w-1/2 absolute top-28 md:top-44 bg-[#fbfbfba4] p-5 rounded-3xl shadow-slate-300 flex flex-col items-center" >
        <h1 className="text-center text-4xl md:text-6xl sm:text-6xl font-nunito text-slate-800 font-semibold">
          Welcome to <span className="text-[#0A8935]">Bhangarwala</span>
        </h1>
        <h2 className="text-md text-[#000000] md:text-4xl sm:text-3xl font-nunito sm:text-[#141414] my-2 md:my-4 text-center font-medium ">
          Buy and Sell Scrap Materials with Ease – Best Prices Guaranteed!
        </h2>
        <div className="flex items-center">
          <p className="md:text-4xl sm:text-3xl text-lg font-nunito text-slate-800 font-bold md:py-2">
            We Deal In:
          </p>
          <Typed
            className="text-lg md:text-4xl sm:text-3xl font-nunito text-[#0A8935] font-bold md:pl-4 pl-2"
            strings={[
              "Metals",
              "Plastics",
              "Paper and Cardboard",
              "Glass",
              "Electronics",
              "Copper",
              "Aluminium",
              "Furniture",
            ]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <div className="flex gap-2 mt-2 md:mt-6">
          <a
            href={`tel:${phoneNumber}`}
            className="flex items-center p-4 py-3 sm:px-7 sm:py-4 text-white rounded-full font-bold gap-2 bg-[#0A8935] "
          >
            <MdCall className="text-lg sm:text-2xl"  />
            Call Now
          </a>

          <button
            onClick={() => setOpen(1)}
            className="flex items-center p-4 py-3 sm:px-7 sm:py-4 text-[#0A8935] rounded-full font-bold gap-2 bg-[#CBF1DA] hover:bg-[#0A8935] hover:text-[#ffffff]"
          >
             <FaShoppingCart  className="text-lg sm:text-2xl"  />Sell Now 
          </button>
        </div>
        <div className="flex gap-2 mt-3">
        <button
            onClick={() => setOpen(2)}
            className="flex items-center p-4 py-3 sm:px-7 sm:py-4 text-[#0A8935] rounded-full font-bold gap-2 bg-[#CBF1DA] hover:bg-[#0A8935] hover:text-[#ffffff]"
          >
            <TbTruckDelivery className="text-lg sm:text-2xl"  />Bulk Now  
          </button>

          <button
            onClick={() => setOpen(3)}
            className="flex items-center p-4 py-3 sm:px-7 sm:py-4 text-[#0A8935] rounded-full font-bold gap-2 bg-[#CBF1DA] hover:bg-[#0A8935] hover:text-[#ffffff]"
          >
           <FaDonate className="text-lg sm:text-2xl"  /> Donate
          </button>
        </div>
      </div>

      {/* <div className="mt-[-45px]  h-screen mx-auto text-center flex-col justify-center absolute top-24 flex items-center">
        <h3 className="md:text-6xl sm:text-5xl text-3xl font-nunito text-slate-800 font-bold md:py-3">
          Welcome to <span className="text-[#2caf2c]">bhangarwala</span>
        </h3>
        <div className="flex justify-center items-center">
          <p className="md:text-4xl sm:text-3xl text-lg font-nunito text-slate-800  font-bold py-2">
            Type of Scrap
          </p>
          <Typed
            className="md:text-4xl sm:text-3xl text-lg font-nunito text-slate-800  font-bold md:pl-4 pl-2"
            strings={[
              "Metals",
              "Plastics",
              "Paper and Cardboard",
              "Glass",
              "Electronics",
              "Copper",
              "Aluminium",
              "Furniture",
            ]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-5xl sm:text-4xl text-xl font-bold py-2">
          we are accepting
        </p>

        <p className="md:text-2xl mx-5 text-xl font-bold text-gray-500">
          From metals to electronics, we pick up all types of recyclable scrap
          to lighten your load and the planet's burden.
        </p>
        <div className="flex gap-4 mb-5 mt-5">
          <a
            className="flex items-center justify-center gap-2 bg-[#2caf2c] hover:bg-[#258025] w-[180px] md:w-[220px] text-lg font-bold rounded-md mx-auto py-4 text-white"
            href={`tel:${phoneNumber}`}
            onClick={handleCallNowClick}
          >
            <MdCall size={24} />
            Call Now
          </a>
          <button
            onClick={() => setOpen(1)}
            className="flex items-center justify-center gap-2 bg-[#2caf2c] hover:bg-[#258025] w-[180px] md:w-[220px] text-lg font-bold rounded-md mx-auto py-4 text-white"
          >
            <LuShoppingCart size={24} /> Sell Now
          </button>
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => setOpen(2)}
            className="flex items-center justify-center gap-2 bg-[#2caf2c] hover:bg-[#258025] w-[180px] md:w-[220px] text-lg font-bold rounded-md mx-auto py-4 text-white"
          >
            <TbTruckDelivery size={24} /> Bulk Sell
          </button>
          <button
            onClick={() => setOpen(3)}
            className="flex items-center justify-center gap-2 bg-[#2caf2c] hover:bg-[#258025] w-[180px] md:w-[220px] text-lg font-bold rounded-md mx-auto py-4 text-white"
          >
            <FaDonate size={24} /> Donate
          </button>
        </div>
      </div> */}

      <SellForm open={open === 1} handleClose={handleClose} />
      <BulkSellForm open={open === 2} handleClose={handleClose} />
      <DonateForm open={open === 3} handleClose={handleClose} />
    </div>
  );
};

export default Hero;
