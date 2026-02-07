import { useState } from "react";
import { materialsAPI } from "../../services/api";

export default function MaterialCard({ material, onUpdate }) {
  const [loading, setLoading] = useState(false);
  const isAvailable =
    (material.status === "AVAILABLE" || material.available !== false) &&
    material.status !== "RESERVED";

  const handleReserve = async () => {
    if (!window.confirm("Do you want to reserve this item?")) return;

    setLoading(true);
    try {
      await materialsAPI.reserve(material.id || material._id);
      if (onUpdate) onUpdate();
    } catch (err) {
      console.error("Reservation failed:", err);
      alert("Failed to reserve item");
    } finally {
      setLoading(false);
    }
  };

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
          onClick={handleReserve}
          disabled={!isAvailable || loading}
          className={`mt-6 px-6 py-2 rounded-full border font-medium transition-colors w-full
          ${
            isAvailable
              ? "border-[#6B8E23] text-[#6B8E23] hover:bg-[#6B8E23] hover:text-white"
              : "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
          }
        `}
        >
          {loading ? "Processing..." : isAvailable ? "Reserve" : "Reserved"}
        </button>
      </div>
    </div>
  );
}
