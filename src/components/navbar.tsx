
import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="p-6 m-0 bg-[url(https://th.bing.com/th/id/R.5426a7d8be723846c79712072835a3d0?rik=6O5dVvMDYKwSkA&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f4%2fb%2f9%2f1314357-most-popular-fancy-background-images-2000x1250.jpg&ehk=6sHK0pHu1v8uinwdF5N8k0Lb0f3yD6NaH89931v%2fHts%3d&risl=&pid=ImgRaw&r=0)]">
      <ul className=" flex space-x-8  text-black justify-center font-bold text-xl">
      <li>
          <Link href="/" className="hover:text-red-600" >Home</Link>
        </li>
        <li>
          <Link href="/About" className="hover:text-red-600">About</Link>
        </li>
        <li>
          <Link href="/Contact" className="hover:text-red-600">Contact</Link>                    
        </li>
        <li>
          <Link href="/Menu" className="hover:text-red-600">Menu</Link>
        </li>
        <li>
          <Link href="/hobs" className="hover:text-red-600">Jobs</Link>
        </li>
      </ul> 
    </nav>
  );
}
