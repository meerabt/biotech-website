"use client";

import React from "react";
import Image from "next/image";
import { routes } from "@/lib/route";
import Link from "next/link";
import { motion } from "framer-motion";
import GradientHeading from "@/components/gradient";

// Animation variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
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

// Product data with descriptions
const products = [
  {
    image: "/home/grid/medical.jpg",
    alt: "Medical Equipment",
    description:
      "Explore our range of medical equipment including surgical tools, diagnostic devices, and patient monitoring systems.",
  },
  {
    image: "/home/grid/science.jpg",
    alt: "Scientific Equipment",
    description:
      "Browse our collection of scientific instruments, lab tools, and analytical devices designed for research and innovation.",
  },
];

const HomeGrid = () => {
  return (
    <div className="bg-white p-3 ">
      <section className="max-w-7xl  mx-auto py-10 text-primarydark rounded-xl">
        <Link href={routes.products}>
          <GradientHeading className="text-2xl mb-6">
            Our Products & Services
          </GradientHeading>
        </Link>

        <motion.div
          className="space-y-8  mb-20"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="flex flex-col sm:flex-row sm:h-[300px]  gap-6 bg-gray-50 p-4 rounded-md shadow-xl cursor-pointer border border-gray-200"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="sm:w-[400px] w-full">
                <Image
                  src={product.image}
                  alt={product.alt}
                  width={500}
                  height={300}
                  className="object-cover w-full h-full rounded-md"
                />
              </div>
              <div className="sm:w-1/2 w-full flex items-center">
                <p className="text-primarydark text-base leading-relaxed">
                  {product.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default HomeGrid;
