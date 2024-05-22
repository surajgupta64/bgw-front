/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import logo from './../image/Logo.svg'

const Footer = () => {
  return (
    <footer className="bg-white py-8 p-5 rounded-t-3xl shadow-3xl">
      <div className="container mx-auto px-4 lg:flex lg:justify-between">
        <div className="lg:w-1/3 mb-8 lg:mb-0">
          <h2 className="text-xl font-bold mb-4 flex items-center">
          <img src={logo} alt="company" />
          <p className="font-nunito font-bold text-2xl ml-2">SaaSup</p>
          </h2>
          <p className="text-gray-600 mb-4">
          YourBhangarwala Turning Waste into Wealth - Simplified. Sell your scrap effortlessly and get the best value instantly!
          </p>
          <p className="text-gray-600 mb-2">
            <a href="mailto:yourbhangarwalaorder@gmail.com">yourbhangarwalaorder@gmail.com</a>
          </p>
          <p className="text-gray-600">
          <i className="fas fa-phone-alt mr-2 text-indigo-600"></i> +91 8879002733<br />
          <i className="fas fa-phone-alt mr-2 text-indigo-600"></i> +91 8828750021
          </p>
        </div>
        <div className="lg:w-1/3 mb-8 lg:mb-0">
          <h3 className="text-lg font-semibold mb-4">Pages</h3>
          <ul className="text-gray-600">
            <li className="mb-2"><a href="#">Home</a></li>
            <li className="mb-2"><a href="#">About Us</a></li>
            <li className="mb-2"><a href="#">FAQ</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div className="lg:w-1/3 rounded-3xl bg-[#F9F9F9] p-7">
          <h3 className="text-lg font-semibold mb-4">Download</h3>
          <p className="text-gray-600 mb-4">
            Our app is coming soon. Stay tuned for updates!
          </p>
          <div className="flex space-x-4">
            <button className="bg-gray-300 text-gray-600 px-7 py-4 rounded-full cursor-not-allowed" disabled>
              <i className="fab fa-apple"></i> Coming Soon
            </button>
            <button className="bg-gray-300 text-gray-600 px-7 py-4 rounded-full cursor-not-allowed" disabled>
              <i className="fab fa-google-play"></i> Coming Soon
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 border-t pt-4 flex justify-between  gap-7">
        <p className="text-gray-600 text-sm">
          Copyright © SaaSup | Designed by Victorflow - Powered by Webflow
        </p>
        <div className="flex justify-center space-x-4">
          <a href="#"><i className="fab fa-facebook-f text-gray-600"></i></a>
          <a href="#"><i className="fab fa-twitter text-gray-600"></i></a>
          <a href="#"><i className="fab fa-linkedin-in text-gray-600"></i></a>
          <a href="#"><i className="fab fa-instagram text-gray-600"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
