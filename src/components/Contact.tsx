"use client";
import React, { useState } from "react";
import emailjs from '@/lib/emailjs';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

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
    setIsSubmitting(true);
    setSubmitMessage("");

    // Configure EmailJS with your credentials
    const templateParams = {
      name: formData.name,
      time: new Date().toLocaleString(), // Current date and time
      message: formData.message,
      from_name: formData.name,  // Standard field for sender name
      from_email: formData.email, // Standard field for sender email
      reply_to: formData.email, // This might be needed for your template or for reply functionality
      to_name: "Recipient Name", // Replace with actual recipient name you want
      subject: "Contact Form Submission", // Subject line for the email
    };

    console.log('Sending email with parameters:', templateParams);

    // EmailJS send with initialized public key
    emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_5f50fng",
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_kbkgklg",
      templateParams
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setSubmitMessage("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    })
    .catch((error) => {
      console.error('FAILED...', error);
      console.error('Error details:', error?.text || error?.message || error);
      setSubmitMessage(`Failed to send message. Error: ${error?.text || error?.message || 'Unknown error'}`);
      setIsSubmitting(false);
    });
  };

  return (
    <section className="py-16 md:py-24 bg-bg-main" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-text-main">
          Contact Us
        </h2>
        <div className="max-w-lg mx-auto">
          <form
            onSubmit={handleSubmit}
            className="bg-bg-card shadow-sleek rounded-xl px-8 pt-6 pb-8 mb-4 border border-border-light"
          >
            <div className="mb-4">
              <label
                className="block text-text-secondary text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border border-border-light bg-bg-input rounded w-full py-3 px-4 text-text-main leading-tight focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300"
                id="name"
                type="text"
                placeholder="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-text-secondary text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border border-border-light bg-bg-input rounded w-full py-3 px-4 text-text-main leading-tight focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300"
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
              <label
                className="block text-text-secondary text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="shadow appearance-none border border-border-light bg-bg-input rounded w-full py-3 px-4 text-text-main leading-tight focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 resize-none"
                id="message"
                placeholder="Your Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button
                className={`bg-gradient-modern hover:from-primary-700 hover:to-primary-800 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition-all duration-300 shadow-sleek hover:shadow-sleek-lg ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>

            {submitMessage && (
              <div className={`mt-4 text-center ${submitMessage.includes('success') ? 'text-green-600' : 'text-red-600'}`}>
                {submitMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
