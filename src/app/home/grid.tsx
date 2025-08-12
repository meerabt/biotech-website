"use client";

import React from "react";
import Image from "next/image";
import { routes } from "@/lib/route";
import Link from "next/link";
import { motion } from "framer-motion";
import GradientHeading from "@/components/gradient";

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  },
};

const products = [
  {
    title: "Medical Equipments",
    image: "/home/grid/medical.jpg",
    alt: "Medical Equipment",
    description:
      "Explore our range of medical equipment including surgical tools, diagnostic devices, and patient monitoring systems.",
    tab: "Medical Equipments",
  },
  {
    title: "Laboratory & Scientific Equipments",
    image: "/home/grid/laboratary.jpg",
    alt: "Scientific Equipment",
    description:
      "Browse our collection of scientific instruments, lab tools, and analytical devices designed for research and innovation.",
    tab: "Lab Equipments",
  },
  // {
  //   title: "Industrial Equipments ",
  //   image: "/home/grid/extra1.jpg",
  //   alt: "Extra Equipment 1",
  //   description:
  //     "Providing high-quality industrial and medical equipment along with expert repair and maintenance services.",
  //   tab: "Extra 1",
  // },
  // {
  //   title: "Arthroscopic Equipments",
  //   image: "/home/grid/extra2.jpg",
  //   alt: "Extra Equipment 2",
  //   description:
  //     "Offering reliable arthroscopic medical equipment and specialized repair and maintenance services.",
  //   tab: "Extra 2",
  // },
  {
    title: "Vibrator Equipments",
    image: "/home/grid/vibrator.jpg",
    alt: "Vibrator",
    description:
      "Offering premium vibrator medical equipment coupled with reliable maintenance and repair services.",
    tab: "Extra 2",
  },
  {
    title: "Pharmaceutical Equipments",
    image: "/home/grid/pharamaceutical.jpg",
    alt: "Pharmaceutical",
    description:
      "Supplying reliable pharmaceutical medical equipment with professional maintenance and repair services.",
    tab: "Extra 2",
  },
];

const HomeGrid = () => {
  return (
    <div className="bg-white p-3">
      <section className="max-w-7xl mx-auto py-10 text-primarydark rounded-xl">
        <Link href={routes.products}>
          <GradientHeading className="text-2xl mb-6">
            Our Products
          </GradientHeading>
        </Link>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {products.map((product, index) => (
            <Link
              key={index}
              href={`${routes.products}?tab=${encodeURIComponent(product.tab)}`}
              className="block"
            >
              <motion.div
                variants={cardVariants}
                className="flex flex-col bg-gray-50 p-4 rounded-md shadow-xl cursor-pointer border border-gray-200 h-full"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="w-full mb-4 aspect-[5/3] relative">
                  <Image
                    src={product.image}
                    alt={product.alt}
                    fill
                    className="object-contain rounded-md bg-white"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={index < 3}
                  />
                </div>

                <h3 className="text-lg font-semibold mb-2 text-primarylight">
                  {product.title}
                </h3>
                <p className="text-primarydark text-base leading-relaxed flex-grow">
                  {product.description}
                </p>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default HomeGrid;
