"use client";

import Tabs from "@/components/tabs";
import { useState } from "react";
import ProductCard from "./productCard";
import GradientHeading from "@/components/gradient";

const categories = [
  {
    name: "Medical Products",
    products: [
      {
        image: "/images/diagnostic-kit.jpg",
        title: "Advanced Diagnostic Kit",
        description:
          "High-accuracy diagnostic kit for early disease detection.",
      },
      {
        image: "/images/surgical-tools.jpg",
        title: "Precision Surgical Tools",
        description:
          "Ergonomically designed surgical tools for precision procedures.",
      },
      {
        image: "/images/patient-monitor.jpg",
        title: "Patient Monitoring System",
        description:
          "Real-time patient monitoring system with wireless sensors.",
      },
    ],
  },
  {
    name: "Science Lab Equipments",
    products: [
      {
        image: "/images/sensor-device.jpg",
        title: "Digital Lab Sensor",
        description: "Accurate readings for laboratory experiments.",
      },
      {
        image: "/images/centrifuge.jpg",
        title: "Centrifuge Machine",
        description: "High-speed centrifuge for sample separation.",
      },
      {
        image: "/images/analyzer.jpg",
        title: "Automated Analyzer",
        description: "Fully automated sample analysis system.",
      },
    ],
  },
];

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState("Medical");

  const filteredCategory =
    activeTab === "Medical"
      ? categories.find((cat) => cat.name === "Medical Products")
      : categories.find((cat) => cat.name === "Science Lab Equipments");

  return (
    <main className=" mx-auto px-6 py-12 bg-white sm:px-20 sm:py-10">
      <GradientHeading useCustomGradient className="text-3xl mb-6">
        Our Products
      </GradientHeading>

      <Tabs
        tabs={["Medical", "Science Lab Equipments"]}
        activeTab={activeTab}
        onTabClick={setActiveTab}
      />

      {filteredCategory && (
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-6 text-primarydark">
            {filteredCategory.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {filteredCategory.products.map((product) => (
              <ProductCard
                key={product.title}
                image={product.image}
                title={product.title}
                description={product.description}
              />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
