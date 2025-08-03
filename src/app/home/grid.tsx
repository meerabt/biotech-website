"use client";

import React from "react";
import Image from "next/image";
import { routes } from "@/lib/route";
import Link from "next/link";

const HomeGrid = () => {
  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 py-10 text-primarydark">
        <Link href={routes.products}>
          <h2 className="text-2xl font-bold hover:text-primarylight">
            Our Products
          </h2>
        </Link>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-md shadow">
            <Image
              src="/home/grid/oxygen.jpg"
              alt="Oxygen Concentrator"
              width={400}
              height={300}
              className="object-cover w-full h-48 mb-4"
            />
            <h3 className="font-semibold">Oxygen Concentrator</h3>
            <p className="text-sm text-gray-600 mt-2">
              Oxygen concentrator solutions
            </p>
          </div>

          <div className="bg-white p-4 rounded-md shadow">
            <Image
              src="/home/grid/healthcare.jpg"
              alt="Health Care"
              width={400}
              height={300}
              className="object-cover w-full h-48 mb-4"
            />
            <h3 className="font-semibold">Health Care</h3>
            <p className="text-sm text-gray-600 mt-2">
              Experts health care equipments
            </p>
          </div>

          <div className="bg-white p-4 rounded-md shadow">
            <Image
              src="/home/grid/medical.jpg"
              alt="Medical Equipment"
              width={400}
              height={300}
              className="object-cover w-full h-48 mb-4"
            />
            <h3 className="font-semibold">Medical Equipment</h3>
            <p className="text-sm text-gray-600 mt-2">
              One-stop solution for medical equipment repair and services
            </p>
          </div>

          <div className="bg-white p-4 rounded-md shadow">
            <Image
              src="/home/grid/physio.jpg"
              alt="Physiotherapy Equipment"
              width={400}
              height={300}
              className="object-cover w-full h-48 mb-4"
            />
            <h3 className="font-semibold">Physiotherapy Equipment</h3>
            <p className="text-sm text-gray-600 mt-2">
              Physiotherapy equipments maintanence
            </p>
          </div>

          <div className="bg-white p-4 rounded-md shadow">
            <Image
              src="/home/grid/science.jpeg"
              alt="Scientific Equipment"
              width={400}
              height={300}
              className="object-cover w-full h-48 mb-4"
            />
            <h3 className="font-semibold">Scientific Equipment</h3>
            <p className="text-sm text-gray-600 mt-2">
              Scientific equipments maintanence
            </p>
          </div>

          <div className="bg-white p-4 rounded-md shadow">
            <Image
              src="/home/grid/labs.png"
              alt="Laboratory Equipment"
              width={400}
              height={300}
              className="object-cover w-full h-48 mb-4"
            />
            <h3 className="font-semibold">Laboratory Equipment</h3>
            <p className="text-sm text-gray-600 mt-2">
              Laboratory equipments maintanence
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeGrid;
