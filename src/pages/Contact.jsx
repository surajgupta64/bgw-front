/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from "react";
import img from "../image/mail.svg";
import img1 from "../image/call.svg";
import location from "../image/location.svg";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className="bg-[#fff] pt-10 mt-40">
      <div className="flex flex-col items-center justify-center gap-7">
        <h2 className="md:text-6xl sm:text-5xl text-4xl font-nunito text-slate-800 font-bold">
          Get in touch today!
        </h2>
        <div className="flex flex-col mx-6 sm:flex-row gap-8">
          <div className="shadow-2xl flex-col md:flex-row items-center border-slate-100 border-2 shadow-gray-300 rounded-3xl py-6 px-8 flex gap-5 lg:gap-14">
            <div className="flex items-center gap-3">
              <img src={img} className="h-16" alt="mail" />
              <h4 className="font-nunito font-bold">Mail Us</h4>
            </div>
            <h4 className="font-nunito text-[#797979]">yourbhangarwalaorder@gmail.com</h4>
          </div>
          <div className="shadow-2xl  border-slate-100 border-2 items-center shadow-gray-300 rounded-3xl py-6 px-8 flex gap-14">
            <div className="flex items-center gap-3">
              <img src={img1} className="h-16" alt="call" />
              <h4 className="font-nunito font-bold">Call Us</h4>
            </div>
            <h4 className="font-nunito text-[#797979]">8828750021</h4>
          </div>
        </div>
      </div>
      <ContactForm />
      <div className="flex flex-col items-center justify-center gap-7 mt-20 mb-20 mx-14 sm:mx-14 md:mx-20 lg:mx-56 xl:mx-60">
        <h2 className="text-2xl md:text-6xl sm:text-3xl font-nunito text-slate-800 font-bold text-center mx-6 max-w-5xl">
          We help small businesses with big
          hearts make meaningful hires
        </h2>
        <div className="flex flex-col mx-6 md:flex-row gap-8 w-full">
          <div className="shadow-2xl flex-col justify-center items-center border-slate-100 border-2 shadow-gray-300 rounded-3xl py-8 px-10 flex gap-3 w-full md:w-3/12">
            <img src={location} className="h-16" alt="mail" />
            <h4 className="font-nunito font-bold">Borivali West</h4>
            <h4 className="font-nunito text-[#797979] text-center">
              I c colony borivali (W) <br /> Mumbai - 400103
            </h4>
          </div>
          <div className="shadow-2xl border-slate-100 border-2 shadow-gray-300 rounded-3xl p-3 w-full md:w-9/12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7533.503345165711!2d72.84456054211722!3d19.249651406994456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b11e78607c45%3A0x9bd19ca18ac976a2!2sI%20C%20Colony%2C%20Borivali%20West%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1715858158974!5m2!1sen!2sin"
            height="450"
            style={{border:0}}
            className="rounded-2xl w-full"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
