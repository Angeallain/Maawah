import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import MaterialsGrid from "../components/materials/MaterialsGrid";
import AddMaterialForm from "../components/materials/AddMaterialForm";
import ReportMaterialModal from "../components/materials/ReportMaterialModal";

export default function Materials() {
  const [openModal, setOpenModal] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [refreshKey, setRefreshKey] = useState(0);

  const handleAddSuccess = () => {
    setShowAddForm(false);
    setRefreshKey((prev) => prev + 1); // Trigger refresh
  };

  return (
    <div className="bg-[#F4F5F7] min-h-screen flex flex-col">
      <Navbar />

      <main className="px-12 py-16 flex-1">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-bold text-gray-700">
            View all Building Materials
          </h1>

          <button
            onClick={() => setOpenModal(true)}
            className="bg-[#6B8E23] text-white px-8 py-3 rounded-2xl font-semibold"
          >
            Report Material
          </button>
        </div>

        <div className="mb-6">
          <input
            type="text"
            placeholder="Search materials..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full max-w-md border rounded-xl px-4 py-3"
          />
        </div>

        <MaterialsGrid key={refreshKey} searchQuery={searchQuery} />
      </main>

      <Footer />
      {openModal && (
        <ReportMaterialModal
          onClose={() => setOpenModal(false)}
          onSuccess={() => {
            setOpenModal(false);
            setRefreshKey((prev) => prev + 1);
          }}
        />
      )}
    </div>
  );
}
