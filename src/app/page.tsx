import React from "react";



export default function Home() {
  return (
    <div className="h-screen bg-transparent bg-[url(https://wallpapercave.com/wp/wp1874155.jpg)] bg-cover bg-center flex items-center justify-center">
      <div className="text-center p-6 bg-yellow-100 bg-opacity-60 rounded-lg">
        <h1 className="text-6xl font-extrabold mb-4 text-white drop-shadow-lg">
          Welcome to the Home Page
        </h1>
        <p className="text-2xl text-white mb-8 drop-shadow-md">
          This is the homepage of our restaurant website.
        </p>
      </div>
    </div>
  );
}


