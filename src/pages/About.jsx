import React from "react";
import image1 from "../image/Photo.svg";
import image2 from "../image/Photo2.svg";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
    <div className="flex justify-center mt-40 bg-white mb-20">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col items-center gap-4 mx-5 mt-14">
          <h2 className="md:text-6xl sm:text-5xl text-4xl font-nunito text-slate-800 font-bold">
            About our company
          </h2>
          <p className="text-lg font-nunito text-slate-800 text-center">
            Your trusted scrap partner, simplifying recycling solutions. We buy,
            recycle, and responsibly dispose of metal scraps, promoting
            sustainability. <br /> With competitive prices and efficient
            service, we're your go-to destination for all scrap needs.
          </p>
        </div>
        <div className="flex items-center flex-col sm:flex-row gap-9 mt-16 mx-8 ">
          <div>
            <img
              src={image1}
              alt="office im"
              width="auto"
              className="rounded-2xl w-full object-cover"
            />
          </div>
          <div>
            <img
              src={image2}
              alt="Office Im 2"
              className="rounded-2xl sm:w-full hidden sm:block object-cover sm:h-auto h-80"
              width="auto"
            />
          </div>
        </div>
        <div className="flex md:gap-32 gap-5 mt-16 md:flex-row flex-col mx-7 lg:mx-40">
          <h4 className="md:text-5xl sm:text-4xl text-2xl font-nunito text-slate-800 font-bold w-full">
            What we do
          </h4>
          <div>
            <p className="text-lg font-nunito text-slate-800 w-auto">
              At <b>Your Bhangar Wala</b>, we specialize in the collection, processing,
              and recycling of various metal scraps. With a commitment to
              environmental sustainability, we efficiently handle everything
              from ferrous to non-ferrous metals, ensuring responsible disposal
              and minimal environmental impact. Our dedicated team combines
              expertise with state-of-the-art technology to deliver seamless
              solutions, providing our clients with top-notch service and
              competitive prices. Join us in our mission to promote a greener
              future through effective scrap management.
            </p>
            <p className="text-lg font-nunito text-slate-800 mt-3">
              Your trusted scrap partner, simplifying recycling solutions. We
              buy, recycle, and responsibly dispose of metal scraps, promoting
              sustainability. With competitive prices and efficient service,
              we're your go-to destination for all scrap needs.
            </p>
          </div>
        </div>
        {/* <div className="bg-[#9ff7bc] rounded-3xl px-20 py-24 mt-14 m-8">
          <div className="flex flex-wrap lg:justify-between gap-36">
            <div>
              <div className="md:text-5xl sm:text-4xl text-3xl font-nunito text-slate-800 font-bold">
                100M
              </div>
              <div className="md:text-2xl sm:text-lg text-base font-nunito text-slate-800 font-bold">
                Client Satisfaction
              </div>
            </div>{" "}
            <div>
              <div className="md:text-5xl sm:text-4xl text-3xl font-nunito text-slate-800 font-bold">
                24 h
              </div>
              <div className="md:text-2xl sm:text-lg text-base font-nunito text-slate-800 font-bold">
                Expert Support Team
              </div>
            </div>{" "}
            <div>
              <div className="md:text-5xl sm:text-4xl text-3xl font-nunito text-slate-800 font-bold">
                98 k+
              </div>
              <div className="md:text-2xl sm:text-lg text-base font-nunito text-slate-800 font-bold">
                Sales Count
              </div>
            </div>{" "}
            <div>
              <div className="md:text-5xl sm:text-4xl text-3xl font-nunito text-slate-800 font-bold">
                208 +
              </div>
              <div className="md:text-2xl sm:text-lg text-base font-nunito text-slate-800 font-bold">
                Client Worldwide
              </div>
            </div>
          </div>
        </div> */}
        <div className="flex md:gap-8 gap-5 mt-16 md:flex-row flex-col mx-7 lg:mx-40">
          <div className="w-full lg:w-1/2">
            <h4 className="md:text-5xl sm:text-4xl text-2xl font-nunito text-slate-800 font-bold ">
              Our Mission
            </h4>
            <p className="text-lg font-nunito text-slate-800 mt-7">
              Our mission is to streamline the recycling process by providing
              comprehensive scrap metal solutions. From purchasing various metal
              scraps to processing and recycling them responsibly, we ensure
              environmental sustainability while offering competitive prices.
              With a commitment to efficiency and integrity, we strive to be
              your preferred partner in the scrap metal industry.
            </p>
          </div>
          <div>
          <img
              src={image1}
              alt="Office Im 2"
              className="rounded-2xl sm:w-full sm:block object-cover sm:h-auto h-80"
              width="auto"
            />
          </div>
        </div>
      </div>

    </div>

<Footer />
    </>
  );
};

export default About;
