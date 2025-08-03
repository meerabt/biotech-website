"use client";

import React from "react";
import Image from "next/image";
import HomeGrid from "./grid";

const Main = () => {
  return (
    <div>
      {" "}
      <main className="bg-gray-50 min-h-screen ">
        <section className="max-w-7xl mx-auto px-4 py-10">
          <div className="relative overflow-hidden rounded-lg">
            <Image
              src="/home/lab.png"
              alt="Lab"
              width={800}
              height={600}
              className="object-cover w-full h-96"
            />
            <div className="absolute inset-0 bg-black opacity-50 flex flex-col justify-center items-start px-10"></div>
            <div className="absolute inset-0 p-7">
              <h1 className="text-5xl font-semibold mt-35 sm:mt-50">
                {" "}
                Bio-Tech
              </h1>
              <p className="font-semibold text-xl">Technical Services</p>
              <p className="mt-5">
                Biotech Technical Services are a leading Manufacture ,Wholesale
                Trader of a wide range of medical equipment, hospital
                furniture,etc
              </p>
            </div>
          </div>
        </section>
        <HomeGrid />
      </main>
    </div>
  );
};

export default Main;
