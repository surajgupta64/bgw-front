import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, Outlet, useNavigate } from "react-router-dom";

const AdminNavbar = () => {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate(null);
  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (!userData) {
      navigate("/admin");
    }
    setNav(false)
  }, [navigate]);
  const navItems = [
    { title: "Sell Now", path: "/admin/sell" },
    { title: "Bulk Sell", path: "/admin/bulk" },
    { title: "Donate", path: "/admin/donate" },
    { title: "Feedback", path: "/admin/feedback" },
  ];
  const clearLogin = () => {
    localStorage.removeItem("userData");
    navigate("/admin");
    setNav(!nav);
  };
  
  return (
    <>
      <div className="flex justify-between items-center px-10 h-24 border-b-4 shadow-black mx-auto text-[#050505] w-full md:px-15 sticky bg-white z-40 top-0">
        <div className="cursor-pointer" onClick={handleNav}>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <ul
          className={
            nav
              ? "fixed left-0 top-0 w-80 h-full border-r border-r-gray-900 bg-[#fff] ease-in-out duration-500"
              : "ease-in-out duration-500 fixed left-[-100%] h-full"
          }
        >
          <div className="flex justify-between ">
            <h1 className="w-full mt-6 text-3xl font-bold text-[#070707] m-4">
              <Link to="/admin">Admin.</Link>
            </h1>
            <div className="m-7 cursor-pointer" onClick={handleNav}>
              {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={20} />}
            </div>
          </div>
          {navItems.map((item, index) => (
            <li
              key={index}
              className="px-4 py-4 border-b border-gray-600 text-md"
            >
              <Link to={item.path}>{item.title}</Link>
            </li>
          ))}
          <li className="px-4 py-4 border-b border-gray-600 text-md cursor-pointer" onClick={clearLogin}>Logout</li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default AdminNavbar;
