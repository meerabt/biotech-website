"use client";

import React from "react";
import Image from "next/image";
import HomeGrid from "./grid";
import { CheckCircle } from "lucide-react";
import GradientHeading from "@/components/gradient";
import InfiniteCarousel from "@/components/carousel";

const services = [
  "Medical equipment repair and service",
  "Scientific equipment repair and service",
  "Laboratory equipment repair and service",
  "Industrial equipment repair and service",
  "Vibrator repair and service",
  "Arthroscopic equipment repair and service",
  "Scientific project development",
  "Customisation",
  "Pharmaceuticals equipment repair and service",
  "High efficiency industrial burner repair and service",
];

const images = [
  { src: "/carousel/one.jpg", alt: "Medical Equipment" },
  { src: "/carousel/two.jpg", alt: "Medical Equipment" },
  { src: "/carousel/three.jpg", alt: "Medical Equipment" },
  { src: "/carousel/fout.jpg", alt: "Medical Equipment" },
  { src: "/carousel/five.jpg", alt: "Medical Equipment" },
  { src: "/carousel/six.jpg", alt: "Medical Equipment" },
  { src: "/carousel/seven.jpg", alt: "Medical Equipment" },
  { src: "/carousel/eight.jpg", alt: "Medical Equipment" },
  { src: "/carousel/nine.jpg", alt: "Medical Equipment" },
  { src: "/carousel/ten.jpg", alt: "Medical Equipment" },
  { src: "/carousel/eleven.jpg", alt: "Medical Equipment" },
  { src: "/carousel/twelve.jpg", alt: "Medical Equipment" },
];

const Main = () => {
  return (
    <div>
      <main className="bg-primarylight/100 h-auto">
        <section className="max-w-7xl mx-auto px-4 py-10">
          <div className="relative overflow-hidden rounded-lg shadow-2xl">
            <Image
              src="/home/lab.jpg"
              alt="Lab"
              width={800}
              height={600}
              className="object-cover w-full sm:h-96 h-62"
            />
          </div>
        </section>
      </main>

      <section className="sm:px-20 sm:py-10 mx-auto px-4 py-10 bg-white">
        <GradientHeading className="text-2xl mb-8">
          Our Services
        </GradientHeading>
        <div className="grid sm:grid-cols-2 gap-6 cursor-pointer">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex items-start gap-3 bg-white p-4 rounded-lg shadow transition-all duration-300 transform hover:scale-[1.03] hover:shadow-lg hover:bg-primarylight/10"
            >
              <CheckCircle className="text-primarylight w-6 h-6 flex-shrink-0 mt-1 transition-colors duration-300 group-hover:text-primarydark" />
              <p className="text-primarydark font-medium">{service}</p>
            </div>
          ))}
        </div>
      </section>
      <InfiniteCarousel images={images} speed={60} />
      <HomeGrid />
    </div>
  );
};

export default Main;
