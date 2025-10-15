
import React from "react";

function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {/* Hero Banner */}
      <div
        className="w-full h-64 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://source.unsplash.com/1200x400/?contact,travel')",
        }}
      >
        <div className="w-full h-full bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white text-center">Contact Us</h1>
        </div>
      </div>

      {/* Content Card */}
      <div className="bg-white shadow-lg rounded-xl p-8 mt-8 max-w-3xl text-center">
        <p className="text-gray-700 text-lg mb-4">
          We'd love to hear from you! Reach out to us via email for inquiries,
          suggestions, or collaborations.
        </p>
        <p className="text-blue-600 font-semibold text-lg">
          Email: <a href="mailto:contact@travelblog.com" className="underline">contact@travelblog.com</a>
        </p>
      </div>

      {/* Optional Footer Spacing */}
      <div className="h-12"></div>
    </div>
  );
}

export default Contact;
