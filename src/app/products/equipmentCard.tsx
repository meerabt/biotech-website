import Image from "next/image";

interface EquipmentCardProps {
  image: string;
  title: string;
  description: string;
}

export default function EquipmentCard({
  image,
  title,
  description,
}: EquipmentCardProps) {
  return (
    <div className="flex flex-col border border-gray-200 p-5 rounded-xl shadow-md">
      <div className="relative w-full h-60 rounded-lg overflow-hidden shadow-sm">
        <Image src={image} alt={title} fill className="object-contain p-2" />
      </div>

      <h3 className="mt-1 font-semibold text-lg text-primarydark">{title}</h3>
      <p className="text-sm text-primarylight">{description}</p>
    </div>
  );
}
