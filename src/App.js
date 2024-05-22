import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Login from "./pages/login";
import Navbar from "./components/Navbar";
import AdminNavbar from "./components/AdminNavbar";
import Sell from "./pages/Sell";
import Bulk from "./pages/Bulk";
import ContactUs from "./pages/ContactUs";
import Donate from "./pages/Donate";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="faq" element={<Faq />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="/admin/" element={<AdminNavbar />}>
          <Route index element={<Login />} />
          <Route path="sell" element={<Sell />} />
          <Route path="bulk" element={<Bulk />} />
          <Route path="donate" element={<Donate />} />
          <Route path="feedback" element={<ContactUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
