import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Handle form submission here (e.g., send data to backend or display a success message)
    try {
      const response = await fetch(
        "https://bgw-api.vercel.app/contactus/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit data");
      }

      await emailjs.send(
        "service_v9oijsn",
        "template_94x3to8",
        {
          to_name: formData.name,
          reply_to: "surajgupta6425@gmail.com",
          message: "Contact Us successfully.",
          type: "Contact Us",
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          reason: formData.message,
        },
        "MYJf9hkNdOjbtAMAa"
      );

      setFormData({
        ...formData,
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      console.log(formData);
      // Close the dialog after successful form submission
    } catch (error) {
      console.error("Error:", error);
      // Handle error appropriately, e.g., show an error message to the user
    }
  };

  return (
    <div className="my-8 mx-7 sm:my-8 sm:mx-14 md:mx-20 lg:mx-32 xl:mx-56 py-8 px-12 rounded-3xl border-slate-100 border-2 shadow-gray-300 shadow-2xl">
      <form onSubmit={handleSubmit}>
        <div className="grid gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className=" grid grid-cols-1 gap-2">
              <label className="font-nunito font-semibold">Full Name *</label>
              <input
                type="text"
                placeholder="Suraj Gupta"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                value={formData.name}
                className="border-2 p-4 rounded-2xl"
              />
            </div>
            <div className=" grid grid-cols-1 gap-2">
              <label className="font-nunito font-semibold">Your Email *</label>
              <input
                type="text"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                value={formData.email}
                placeholder="example@yourmail.com"
                className="border-2 p-4 rounded-2xl"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className=" grid grid-cols-1 gap-2">
              <label className="font-nunito font-semibold">Subject *</label>
              <input
                type="text"
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                value={formData.subject}
                placeholder="How can we Help"
                className="border-2 p-4 rounded-2xl"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className=" grid grid-cols-1 gap-2">
              <label className="font-nunito font-semibold">Message *</label>
              <textarea
                type="text"
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                value={formData.message}
                rows={5}
                placeholder="Hello there,I would like to talk about how to..."
                className="border-2 p-4 rounded-2xl"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 mt-3">
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-10 py-4 text-white bg-[#242331] rounded-full"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
