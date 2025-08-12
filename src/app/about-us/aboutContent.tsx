"use client";

import React from "react";
import Image from "next/image";

type AboutBlockProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  reverse?: boolean;
};

function AboutBlock({
  title,
  description,
  imageSrc,
  imageAlt = "",
  reverse = false,
}: AboutBlockProps) {
  return (
    <div
      className={`flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-center gap-10`}
    >
      {/* Text */}
      <div className="w-full md:w-1/2">
        <h2 className="text-2xl font-bold text-primarydark mb-4">{title}</h2>
        <p className="text-primarydark leading-relaxed whitespace-pre-line">
          {description}
        </p>
      </div>

      {/* Image */}
      <div className="w-full md:w-1/2">
        <div className="relative w-full h-64 md:h-80">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="rounded-md shadow-md object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority // Use only for above-the-fold images
          />
        </div>
      </div>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Add as many blocks as needed */}
        <AboutBlock
          title="Medical technical service"
          description="Medical technical service for
hospitals, laboratories, research facilities, industrial
Bio-Tech technical services provides certified, high-quality medical technical service to various types of companies within the healthcare sector. We carry out a wide range of services, including installations, annual maintenance, repairs, calibrations, and verifications. In addition, we supply and sell original spare parts. Our employees are known for their excellent technical skills and expertise. We value good communication and teamwork, which form the foundation of a great customer experience. We always offer fast response times and high-quality service."
          imageSrc="/about/medical.jpg"
          imageAlt="Lab Technician Working"
        />

        <AboutBlock
          title="Preventive Maintenance of Laboratory Equipment"
          description="When is it time to perform laboratory equipment service
Most laboratory equipment requires regularly performed maintenance to ensure that research results are valid and equipment is working without delays. It is important to be aware of manufacturer recommendations for the maintenance period. During maintenance, equipment is calibrated, possible spare part change is performed, and overall functions are checked. Bio-tech Technical group only uses calibrated test equipment and all service is traceable."
          imageSrc="/about/labequip.jpg"
          imageAlt="Healthcare Equipment"
          reverse // alternate layout
        />

        <AboutBlock
          title="Repair of Laboratory Equipment"
          description="Following the manufacturer recommendations for preventive maintenance, equipment is more reliable to use. In case of equipment malfunction, we are ready to help you onsite as fast as possible. Smaller equipment can also to be sent to our local workshop throughout the Bangalore region. We have local hotline support to help you with the best possible solution."
          imageSrc="/about/repair.jpg"
          imageAlt="Lab Technician Working"
        />

        {/* You can keep adding <AboutBlock /> as needed */}
      </div>
    </section>
  );
}
