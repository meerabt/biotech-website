"use client";

import Link from "next/link";
import Image from "next/image";
import { routes } from "@/lib/route";

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Image src={"/logo.png"} width={120} height={100} alt={"logo"} />
        </div>
        <nav className="space-x-6 hidden md:block">
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
            href={routes.services}
            className="text-primarydark hover:text-primarylight"
          >
            Services
          </Link>
          <Link
            href={routes.contact}
            className="text-primarydark hover:text-primarylight"
          >
            About Us
          </Link>
          <Link
            href={routes.about}
            className="text-primarydark hover:text-primarylight"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
