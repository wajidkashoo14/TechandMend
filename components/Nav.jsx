import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="h-24 px-40 flex items-center text-[#fff] bg-[#47f] overflow-x-hidden">
      <div>
        <ul className="flex gap-10 text-xl cursor-pointer">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/products">Services</Link>
          </li>
          <li>
            <Link href="/products">Categories</Link>
          </li>
          <li>
            <Link href="/aboutus">About Us</Link>
          </li>
          <li>
            <Link href="/contactus">Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
