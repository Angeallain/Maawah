import { useState, useEffect } from "react";
import { materialsAPI } from "../../services/api";
import MaterialCard from "./MaterialCard";

export default function MaterialsGrid({ searchQuery = "" }) {
  const [materials, setMaterials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchMaterials();
  }, [searchQuery]);

  const fetchMaterials = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await materialsAPI.getAll(searchQuery);
      console.log("Materials fetched:", data); // Debug log

      // Handle different response formats (array, { materials: [] }, or { materiels: [] })
      let materialsList = [];
      if (Array.isArray(data)) {
        materialsList = data;
      } else if (data.materials && Array.isArray(data.materials)) {
        materialsList = data.materials;
      } else if (data.materiels && Array.isArray(data.materiels)) {
        materialsList = data.materiels; // Handle French key plural
      } else if (data.materiel && Array.isArray(data.materiel)) {
        materialsList = data.materiel; // Handle French key singular (actual API response)
      } else if (data.data && Array.isArray(data.data)) {
        materialsList = data.data; // Handle common wrapper
      }

      setMaterials(materialsList);
    } catch (err) {
      console.error("Materials fetch error:", err);
      setError(err.message || "Failed to load materials");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="text-xl text-gray-600">Loading materials...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center py-20 space-y-4">
        <div className="text-xl text-red-600 text-center max-w-md">{error}</div>
        <button
          onClick={fetchMaterials}
          className="bg-[#6B8E23] text-white px-6 py-2 rounded-xl font-semibold hover:bg-[#5a7a1e]"
        >
          Retry
        </button>
        {error.includes("port 3001") && (
          <div className="text-sm text-gray-600 text-center max-w-md mt-4">
            <p>Make sure your backend server is running:</p>
            <code className="block bg-gray-100 p-2 rounded mt-2">
              Backend should be running on http://localhost:3001
            </code>
          </div>
        )}
      </div>
    );
  }

  if (materials.length === 0) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="text-xl text-gray-600">
          No materials found. Be the first to add one!
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {materials.map((material) => (
        <MaterialCard
          key={material.id}
          material={material}
          onUpdate={fetchMaterials}
        />
      ))}
    </div>
  );
}
