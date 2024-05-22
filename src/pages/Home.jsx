import React from "react";
import Hero from "../components/Hero";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import OurService from "../components/OurService";
import ContactForm from "../components/ContactForm";
import CategoryService from "../components/categoryService";
import SolutionsIndustry from "../components/SolutionsIndustry";

const Home = () => {
  return (
    <div className="flex flex-col gap-3" style={{ backgroundColor: "#fff" }}>
      <Hero />
      <Cards />
      <CategoryService />
      <OurService />
      {/* <SolutionsIndustry/> */}
      <h2 className="font-nunito text-4xl text-center mb-2 mt-10 font-bold ">
        Get in touch today!
      </h2>
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;
