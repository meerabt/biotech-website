"use client";

import GradientHeading from "@/components/gradient";
import React from "react";
import AboutSection from "./aboutContent";

export default function page() {
  return (
    <div className=" bg-white">
      <div className="p-10">
        <div className="sm:text-4xl text-2xl text-center mb-3">
          {" "}
          <GradientHeading useCustomGradient>About Us</GradientHeading>
        </div>
        <div className="mb-10">
          {" "}
          <p className="text-primarydark sm:px-25 text-center">
            BIO-TECH TECHNICAL SERVICES provides healthcare technology
            management solutions to help reduce costs, increase quality and
            improve medical equipment performance in healthcare facilities
            nationwide. We also provide unbiased and objective healthcare
            technology management advice and consulting.
          </p>
        </div>

        <AboutSection />
      </div>
    </div>
  );
}
