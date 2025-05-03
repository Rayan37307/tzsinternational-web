"use client";
import React, { useState } from "react";
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: "", email: "", message: "" });
  };
  return (
    <section className="py-16 bg-slate-950" id="contact">
      {" "}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-100">
          Contact Us
        </h2>{" "}
        <div className="max-w-lg mx-auto">
          <form
            onSubmit={handleSubmit}
            className="bg-slate-900 shadow-md rounded px-8 pt-6 pb-8 mb-4 border border-slate-800"
          >
            {" "}
            <div className="mb-4">
              <label
                className="block text-gray-300 text-sm font-bold mb-2"
                htmlFor="name"
              >
                {" "}
                Name
              </label>{" "}
              <input
                className="shadow appearance-none border border-slate-700 bg-slate-800 rounded w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:shadow-outline focus:border-secondary-500"
                id="name"
                type="text"
                placeholder="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />{" "}
            </div>
            <div className="mb-4">
              {" "}
              <label
                className="block text-gray-300 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email{" "}
              </label>
              <input
                className="shadow appearance-none border border-slate-700 bg-slate-800 rounded w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:shadow-outline focus:border-secondary-500"
                id="email"
                type="email"
                placeholder="Your Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-6">
              {" "}
              <label
                className="block text-gray-300 text-sm font-bold mb-2"
                htmlFor="message"
              >
                {" "}
                Message
              </label>{" "}
              <textarea
                className="shadow appearance-none border border-slate-700 bg-slate-800 rounded w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:shadow-outline focus:border-secondary-500"
                id="message"
                placeholder="Your Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
              ></textarea>{" "}
            </div>
            <div className="flex items-center justify-between">
              {" "}
              <button
                className="bg-secondary-600 hover:bg-secondary-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-200"
                type="submit"
              >
                {" "}
                Send Message
              </button>{" "}
            </div>
          </form>{" "}
        </div>
      </div>{" "}
    </section>
  );
}
