import React from "react";

export default function Jobs() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
      <p className="text-lg text-gray-700 mb-8">
        We are always looking for talented individuals to join our team. Apply
        today!
      </p>
      <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
        Apply Now
      </button>
    </div>
  );
}
