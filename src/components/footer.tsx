"use client";

import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-primarylight text-white border-t border-gray-300 py-3 text-center">
      <div className="max-w-7xl mx-auto px-4 text-xs ">
        {/* Left: Copyright */}
        <div className="text-right">
          © Bio-tech Technical. All rights reserved.
        </div>

        {/* Right: Social / Contact */}
        {/* <div className="text-center sm:text-right"></div> */}
      </div>
    </footer>
  );
};

export default Footer;
