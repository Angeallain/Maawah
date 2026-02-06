export default function MaterialCard({ material }) {
  const isAvailable =
    material.status === "AVAILABLE" || material.available !== false;

  return (
    <div className="bg-white rounded-[28px] overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="relative">
        <img
          src={material.photo || material.img || "/default-material.jpg"}
          alt={material.nom || material.title}
          className="h-56 w-full object-cover"
        />

        <span
          className={`absolute top-4 left-4 text-xs px-4 py-2 rounded-full text-white font-semibold
          ${isAvailable ? "bg-green-600" : "bg-orange-400"}
        `}
        >
          {isAvailable ? "AVAILABLE" : "RESERVED"}
        </span>
      </div>

      <div className="p-6">
        <p className="text-xs text-gray-400 tracking-wide uppercase">
          {material.location || "GAZA CITY – CENTRAL DISTRICT"}
        </p>

        <h3 className="text-xl font-semibold mt-2">
          {material.nom || material.title}
        </h3>

        <button
          className={`mt-6 px-6 py-2 rounded-full border font-medium transition-colors
          ${
            isAvailable
              ? "border-[#6B8E23] text-[#6B8E23] hover:bg-[#6B8E23] hover:text-white"
              : "bg-gray-200 text-gray-400 border-gray-200 cursor-not-allowed"
          }
        `}
          disabled={!isAvailable}
        >
          Reserve
        </button>
      </div>
    </div>
  );
}
