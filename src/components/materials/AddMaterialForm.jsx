import { useState } from "react";
import { materialsAPI } from "../../services/api";

export default function AddMaterialForm({ onSuccess, onCancel }) {
  const [formData, setFormData] = useState({
    nom: "",
    location: "",
    photo: null,
  });
  const [photoPreview, setPhotoPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (error) setError("");
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        photo: file,
      });
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.nom || !formData.location) {
      setError("Please fill in all required fields");
      return;
    }

    setLoading(true);

    try {
      await materialsAPI.create(formData);
      // Reset form
      setFormData({ nom: "", location: "", photo: null });
      setPhotoPreview(null);
      // Call success callback
      if (onSuccess) onSuccess();
    } catch (err) {
      setError(err.message || "Failed to add material");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-6">Report New Material</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="bg-red-50 text-red-600 px-4 py-3 rounded-xl text-sm">
              {error}
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Material Name *
            </label>
            <input
              type="text"
              name="nom"
              placeholder="e.g., Building Blocks"
              value={formData.nom}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Location *
            </label>
            <input
              type="text"
              name="location"
              placeholder="e.g., Gaza City"
              value={formData.location}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Photo (Optional)
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              className="w-full border rounded-xl px-4 py-3"
            />
            {photoPreview && (
              <img
                src={photoPreview}
                alt="Preview"
                className="mt-4 w-full h-48 object-cover rounded-xl"
              />
            )}
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onCancel}
              className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-50"
              disabled={loading}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 bg-[#6B8E23] text-white py-3 rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#5a7a1e]"
            >
              {loading ? "Adding..." : "Add Material"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
