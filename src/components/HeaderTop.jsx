"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import Doctordrop from "./Doctordrop";

const HeaderTop = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div className="stickey top-0 border-b border-sky-200 shadow-sky-300 shadow-md w-auto h-24 flex items-center justify-around">
      <div className="text-5xl font-mono ">Logo</div>
      <div>
        <ul className="flex items-center justify-between gap-5 text-lg cursor-pointer">
          <li>
            <Link href="/Home" >
            Home</Link>
          </li>
          <li
            className="flex items-center justify-between "
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <Link href="#" />
            Doctor
            <MdKeyboardArrowDown />
            {showDropdown && <Doctordrop />}
          </li>
          <li>
            <Link href="/Lab&Diagnostics">Lab & Diagnostics</Link>
          </li>
          <li>
            <Link href="/Medicaine">Medicaine</Link>
          </li>
          <li>
            <Link href="/Surgeries">Surgeries</Link>
          </li>
          <li>
            <Link href="/AmbulanceService">Ambulance Service</Link>
          </li>
          <li>
            <Link href="/SickNote">Sick Note</Link>
          </li>
          <li>
            <Link href="/PatientDiscount-12%">
              Patient Discount - 12%
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-around gap-2">
        <button className="bg-teal-400 text-white rounded-md px-5 py-2">
          Login
        </button>
        <button className="bg-blue-950 text-white rounded-md px-5 py-2">
          Sign up
        </button>
        <button className="bg-green-800 text-white rounded-md px-5 py-2 h-10 ">
          <FaPhoneAlt />
        </button>
      </div>
    </div>
  );
};

export default HeaderTop;
