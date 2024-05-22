import React, { useState } from "react";
import Footer from "../components/Footer";
import './faq.css'
import arrow1 from './../image/sidearrow.svg'
import arrow2 from './../image/downarrow.svg'

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="mt-36">
      <div className="flex justify-center bg-[#0A8935] py-5 w-full">
      <div className="faq-container">
      <h1 className="font-nunito font-bold text-2xl">Frequently Asked Questions</h1>
      <div className="faq-item" onClick={() => toggleFAQ(1)}>
        <div className="faq-question font-nunito font-semibold">
          1. HOW YOU CAN SELL YOUR SCRAP ?
          <span className="faq-icon">{openIndex === 1 ? <img src={arrow2} alt="arrow" height="43px" width="43px" /> :  <img src={arrow1} alt="arrow" height="43px" width="43px" />}</span>
        </div>
        {openIndex === 1 && (
          <div className="faq-answer">
            Click on sell now button Then select the scrap type Weight and fill your personal details 
          </div>
        )}
      </div>
      <div className="faq-item" onClick={() => toggleFAQ(2)}>
        <div className="faq-question">
          2. Which weight machine you are using?
          <span className="faq-icon">{openIndex === 2 ? <img src={arrow2} alt="arrow" height="43px" width="43px" /> :  <img src={arrow1} alt="arrow" height="43px" width="43px" />}</span>
        </div>
        {openIndex === 2 && (
          <div className="faq-answer">
            Electronic weight machine
          </div>
        )}
      </div>
      <div className="faq-item" onClick={() => toggleFAQ(3)}>
        <div className="faq-question">
          3. How you are giving money 
          <span className="faq-icon">{openIndex === 3 ? <img src={arrow2} alt="arrow" height="43px" width="43px" /> :  <img src={arrow1} alt="arrow" height="43px" width="43px" />}</span>
        </div>
        {openIndex === 3 && (
          <div className="faq-answer">
            Online and cash both 
          </div>
        )}
      </div>
      <div className="faq-item" onClick={() => toggleFAQ(4)}>
        <div className="faq-question">
          4. How do  you calculate the value of scrap
          <span className="faq-icon">{openIndex === 4 ? <img src={arrow2} alt="arrow" height="43px" width="43px" /> :  <img src={arrow1} alt="arrow" height="43px" width="43px" />}</span>
        </div>
        {openIndex === 4 && (
          <div className="faq-answer">
            according to scrap market 
          </div>
        )}
      </div>
      <div className="faq-item" onClick={() => toggleFAQ(5)}>
        <div className="faq-question">
          5. Does this website has safe server 
          <span className="faq-icon">{openIndex === 5 ? <img src={arrow2} alt="arrow" height="43px" width="43px" /> :  <img src={arrow1} alt="arrow" height="43px" width="43px" />}</span>
        </div>
        {openIndex === 5 && (
          <div className="faq-answer">
            Yes
          </div>
        )}
      </div>
    </div>
      </div>
      <Footer />
    </div>
  );
};

export default Faq;
