"use client";

import Link from "next/link";
import Image from "next/image";
import { routes } from "@/lib/route";
import { useState } from "react";
import { X, Menu } from "lucide-react"; // Lucide icons (optional)

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 max-h-20 px-4">
      <div className=" mx-auto px-4 py-4 flex items-center justify-between max-h-20">
        <div className="w-[120px] h-[40px] relative">
          <Image
            src="/logo.png"
            alt="logo"
            fill
            priority
            className="object-contain"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="space-x-6 hidden md:block max-h-20">
          <Link
            href={routes.home}
            className="text-primarydark hover:text-primarylight"
          >
            Home
          </Link>
          <Link
            href={routes.products}
            className="text-primarydark hover:text-primarylight"
          >
            Products
          </Link>

          <Link
            href={routes.about}
            className="text-primarydark hover:text-primarylight"
          >
            About Us
          </Link>
          <Link
            href={routes.contact}
            className="text-primarydark hover:text-primarylight"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button onClick={toggleMenu} className="md:hidden text-primarydark">
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b">
          <span className="font-bold text-primarydark text-lg">Menu</span>
          <button onClick={closeMenu} className="text-primarydark">
            <X size={24} />
          </button>
        </div>
        <nav className="flex flex-col p-4 space-y-4 text-primarydark">
          <Link
            href={routes.home}
            onClick={closeMenu}
            className="hover:text-primarylight"
          >
            Home
          </Link>
          <Link
            href={routes.products}
            onClick={closeMenu}
            className="hover:text-primarylight"
          >
            Products
          </Link>
          <Link
            href={routes.contact}
            onClick={closeMenu}
            className="hover:text-primarylight"
          >
            About Us
          </Link>
          <Link
            href={routes.about}
            onClick={closeMenu}
            className="hover:text-primarylight"
          >
            Contact
          </Link>
        </nav>
      </div>

      {/* Optional Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0   backdrop-blur-xs z-40"
          onClick={closeMenu}
        />
      )}
    </header>
  );
}
