import Image from "next/image";

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
}

export default function ProductCard({
  image,
  title,
  description,
}: ProductCardProps) {
  return (
    <div className="flex flex-col">
      <div className="relative w-full h-60 rounded-lg overflow-hidden shadow-sm">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <h3 className="mt-3 font-semibold text-lg text-primarydark">{title}</h3>
      <p className="text-sm text-primarylight">{description}</p>
    </div>
  );
}
