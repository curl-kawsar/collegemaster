'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaChevronDown } from 'react-icons/fa';

export default function Navbar() {
  const [isAboutOpen, setAboutOpen] = useState(false);
  const [isServicesOpen, setServicesOpen] = useState(false);

  const toggleDropdown = (setDropdown) => {
    setDropdown((prevState) => !prevState);
  };

  return (
    <nav className="bg-[#b9c8d0] shadow-md p-4 flex justify-between items-center mb-8 gap-10">
      <div className="flex items-center gap-4">
        <Image src="/logo.png" alt="College Mastermind Logo" width={110} height={110} />
      </div>
      <div className="space-x-4 md:flex gap-4 relative">
        <Link href="/">Home</Link>
        <div className="relative">
          <button
            onClick={() => toggleDropdown(setAboutOpen)}
            className="focus:outline-none flex items-center"
          >
            About <FaChevronDown className="ml-2" />
          </button>
          {isAboutOpen && (
            <div className="absolute bg-white shadow-md rounded mt-2">
              <Link href="/about/team" className="block px-4 py-2 hover:bg-gray-200">
                DropDown One
              </Link>
              <Link href="/about/mission" className="block px-4 py-2 hover:bg-gray-200">
                DropDown Two
              </Link>
              <Link href="/about/contact" className="block px-4 py-2 hover:bg-gray-200">
                DropDown Three
              </Link>
            </div>
          )}
        </div>
        <div className="relative">
          <button
            onClick={() => toggleDropdown(setServicesOpen)}
            className="focus:outline-none flex items-center"
          >
            Services <FaChevronDown className="ml-2" />
          </button>
          {isServicesOpen && (
            <div className="absolute bg-white shadow-md rounded mt-2">
              <Link href="/services/consulting" className="block px-4 py-2 hover:bg-gray-200">
                Services One
              </Link>
              <Link href="/services/training" className="block px-4 py-2 hover:bg-gray-200">
                Services Two
              </Link>
              <Link href="/services/workshops" className="block px-4 py-2 hover:bg-gray-200">
                Services Three
              </Link>
            </div>
          )}
        </div>
        <Link href="/events">Events</Link>
      </div>
      <div className="md:flex gap-4">
        <button className="text-blue-600 border border-blue-600 px-4 py-2 rounded">Sign Up</button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Log In</button>
      </div>
    </nav>
  );
}