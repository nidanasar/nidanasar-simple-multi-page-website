import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg text-gray-700 mb-8">Feel free to reach out to us!</p>
      <form className="bg-white p-6 rounded shadow-md w-96">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full mb-4 p-2 border border-gray-300 rounded"
        />
        <textarea
          placeholder="Your Message"
          className="w-full mb-4 p-2 border border-gray-300 rounded"
        ></textarea>
        
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Send
        </button>
      </form>
    </div>
  );
}
