import Image from "next/image";

interface LabProps {
  image: string;
  title: string;
  description: string;
}

export default function LabCard({ image, title, description }: LabProps) {
  return (
    <div className="flex flex-col border border-gray-200 p-5 rounded-xl shadow-md">
      <div className="relative w-full h-60 rounded-lg overflow-hidden shadow-sm ">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain p-2" // Ensures image fits without cropping
        />
      </div>
      <h3 className="mt-3 font-semibold text-lg text-primarydark">{title}</h3>
      <p className="text-sm text-primarylight">{description}</p>
    </div>
  );
}
