"use client";
import React, { ReactElement } from "react";
import Search from "./Search";
import Login from "./Login";
import { ChevronDown, LocationEdit } from "lucide-react";
import Image from "next/image";

export default function Header(): ReactElement {
  return (
    <header className="text-black shadow border-b">
      {/*------------------------------------------------- Top Section ----------------------------------------------------*/}
      <div className="max-w-[1200px] mx-auto flex items-center justify-between py-3 px-6">
        <div className="flex items-center space-x-6">
          <Image
            src="apollo247.svg"
            alt="Apollo247 Logo"
            width={60}
            height={20}
          />

          <div className="flex items-center">
            <LocationEdit className="mr-1" size={28} />
            <div className="text-left">
              <p className="text-xs text-gray-600">Select Location</p>
              <div className="flex items-center hover:cursor-pointer">
                <p className="font-bold text-xl">Select Address</p>
                <ChevronDown className="w-4 h-4 ml-1" />
              </div>
            </div>
          </div>
        </div>

        {/*------------------------------------------------- Search ----------------------------------------------------*/}
        <div className="flex-1 mx-8">
          <Search />
        </div>

        {/*------------------------------------------------- Login ----------------------------------------------------*/}
        <Login />
      </div>

      {/*------------------------------------------------- Embedded Site Links ----------------------------------------------------*/}
      <div className="border-t border-gray-300 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <ul className="flex justify-between py-3 px-6 text-sm font-semibold text-gray-700">
            <li>
              <a href="#" className="hover:text-teal-800 hover:underline">
                Buy Medicines
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-800 hover:underline">
                Find Doctors
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-800 hover:underline">
                Lab Test
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-800 hover:underline">
                Circle Membership
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-800 hover:underline">
                Health Records
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-800 hover:underline">
                Diabetes Reversal
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-800 hover:underline">
                Buy Insurance
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
