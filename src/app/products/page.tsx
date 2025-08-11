"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Tabs from "@/components/tabs";
import GradientHeading from "@/components/gradient";
import MedicalCard from "./medicalCard";
import LabCard from "./labCard";
import labEquipments from "@/data/labData";
import medicalProducts from "@/data/medicalData";

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab");

  const [activeTab, setActiveTab] = useState("Medical Equipments");

  // Set initial tab from query
  useEffect(() => {
    if (
      tabParam &&
      (tabParam === "Medical Equipments" || tabParam === "Lab Equipments")
    ) {
      setActiveTab(tabParam);
    }
  }, [tabParam]);

  const isMedicalTab = activeTab === "Medical Equipments";
  const products = isMedicalTab ? medicalProducts : labEquipments;

  return (
    <main className="mx-auto px-6 py-12 bg-white sm:px-20 sm:py-10">
      <GradientHeading useCustomGradient className="text-3xl mb-6">
        Our Products
      </GradientHeading>

      <Tabs
        tabs={["Medical Equipments", "Lab Equipments"]}
        activeTab={activeTab}
        onTabClick={setActiveTab}
      />

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-6 text-primarydark">
          {isMedicalTab ? "Medical Products" : " Lab Products"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) =>
            isMedicalTab ? (
              <MedicalCard
                key={product.title}
                image={product.image}
                title={product.title}
                description={product.description}
              />
            ) : (
              <LabCard
                key={product.title}
                image={product.image}
                title={product.title}
                description={product.description}
              />
            )
          )}
        </div>
      </section>
    </main>
  );
}
