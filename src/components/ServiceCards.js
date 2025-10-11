import Link from "next/link";

export default function ServiceCard({ title, description, image, link }) {
  return (
    <Link
      href={link}
      className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col h-full"
    >
      <div className="h-48 sm:h-56 w-full flex-shrink-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Text Overlay at Bottom */}
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4 sm:p-6">
        <h3 className="text-white text-lg font-semibold">{title}</h3>
        <p className="text-gray-200 text-sm mt-1">{description}</p>
      </div>
    </Link>
  );
}
