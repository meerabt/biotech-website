"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Tabs from "@/components/tabs";
import GradientHeading from "@/components/gradient";
import arthroscopicEquipments from "@/data/arthroscopicData";
import industrialEquipments from "@/data/industrialData";
import labEquipments from "@/data/labData";
import medicalProducts from "@/data/medicalData";
import pharmaEquipments from "@/data/pharmaData";
import vibratorEquipments from "@/data/vibratorData";
import EquipmentCard from "./equipmentCard";

// All categories in one config
const categories = [
  { name: "Medical Equipments", data: medicalProducts },
  { name: "Lab Equipments", data: labEquipments },
  { name: "Industrial Equipments", data: industrialEquipments },
  { name: "Pharmaceutical Equipments", data: pharmaEquipments },
  { name: "Vibrator Equipments", data: vibratorEquipments },
  { name: "Arthroscopic Equipments", data: arthroscopicEquipments },
];

export default function ProductsContent() {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab");

  const [activeTab, setActiveTab] = useState(categories[0].name);

  // Set initial tab from query
  useEffect(() => {
    if (tabParam && categories.some((cat) => cat.name === tabParam)) {
      setActiveTab(tabParam);
    }
  }, [tabParam]);

  const activeCategory = categories.find((cat) => cat.name === activeTab);

  return (
    <main className="mx-auto px-6 py-12 bg-white sm:px-20 sm:py-10">
      <GradientHeading useCustomGradient className="text-3xl mb-6">
        Our Products
      </GradientHeading>

      <Tabs
        tabs={categories.map((cat) => cat.name)}
        activeTab={activeTab}
        onTabClick={setActiveTab}
      />

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-6 text-primarydark">
          {activeTab}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {activeCategory?.data.map((product) => (
            <EquipmentCard
              key={product.title}
              image={product.image}
              title={product.title}
              description={product.description}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
