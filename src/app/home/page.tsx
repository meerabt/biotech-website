"use client";

import React from "react";
import Image from "next/image";
import HomeGrid from "./grid";

const Main = () => {
  return (
    <div className="">
      {" "}
      <main className="bg-primarylight/100 min-h-screen">
        <section className="max-w-7xl mx-auto px-4 py-10 ">
          <div className="relative overflow-hidden rounded-lg shadow-2xl">
            <Image
              src="/home/lab.jpg"
              alt="Lab"
              width={800}
              height={600}
              className="object-cover w-full sm:h-96 h-62 "
            />
          </div>
        </section>
        <HomeGrid />
      </main>
    </div>
  );
};

export default Main;
