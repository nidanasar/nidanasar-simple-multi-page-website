"use client";
import React from "react";
import Image from "next/image";

export default function Menu() {
  return (
    <div className="bg-black">

      <h1 className="text-4xl font-bold mb-3 text-center text-white ">Our Menu</h1>
      <div className="bg-yellow-200 flex flex-row justify-around items-center mb-2 p-6">
        <Image
          src="/image/Biryani.jpg"
          width={200}
          height={200}
          alt="Biryani"
          className="rounded-full shadow-lg mr-8 flex flex-row justify-around mb-4 items-center"
        />
        <Image
          src="/image/Tikka.jpeg"
          width={200}
          height={200}
          alt="Tikka"
          className="rounded-full shadow-lg float-right mr-8 flex"
        />

        <ul className="text-lg text-gray-700">
          <h2 className="text-xl font-bold mb-3 ">Main Course</h2>
          <li className="mb-2 text-sm font-bold">Chiken Biryani- $20</li>
          <li className="mb-2 text-sm font-bold"> Chiken Tikka - $15</li>
          <li className="mb-2 text-sm font-bold"> Chiken Tandoori - $15</li>
          <li className="mb-2 text-sm font-bold"> Chiken Qorma - $18</li>
        </ul>
      </div>
      <div className="bg-blue-200  flex-row justify-around items-center mb-2 p-4">
        <Image
          src="/image/chana chat.jpeg "
          width={200}
          height={200}
          alt="chana chat"
          className="rounded-full shadow-lg mr-8 flex flex-row justify-around mb-4 items-center"
        />
        <Image
          src="/image/dahi baray.jpeg"
          width={200}
          height={200}
          alt="dahi baray"
          className="rounded-full shadow-lg float-right mr-8 flex"
        />
        <ul className="text-lg text-gray-700 text-center mb-10 ">
          <h2 className="text-lg  mb-3 font-extrabold ">Starters</h2>

          <li className="mb-2 text-sm font-bold"> Chana Chat - $15</li>
          <li className="mb-2 text-sm font-bold">Dahi Baray - $20</li>
        </ul>
      </div>
      <div className="bg-pink-200 flex flex-row justify-around items-center mb-2 p-2">
        <Image
          src="/image/Ice-cream.jpg"
          width={200}
          height={200}
          alt="ice cream"
          className="rounded-full shadow-lg mr-8 flex flex-row justify-around mb-4 items-center"
        />
        <Image
          src="/image/colddrinks.jpeg"
          width={200}
          height={200}
          alt="colddrink"
          className="rounded-full shadow-lg mr-8 flex flex-row justify-around mb-4 items-center"
        />
        <ul>
        <h2 className="text-lg mb-3 font-extrabold">Dessert and Drinks</h2>
        
          <li className="mb-2 text-sm font-bold">Gulab Jamun - $2</li>
          <li className="mb-2 text-sm font-bold">Ice Creame - $5</li>
          <li className="mb-2 text-sm font-bold">any 50ml Coldrink - $3</li>
          <li className="mb-2 text-sm font-bold"> Water 100ml - $2</li>
        </ul>
      </div>
    </div>
  );
}
