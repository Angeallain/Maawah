import { useState, useRef } from "react";
import { X, Camera, MapPin, LocateFixed, Upload, Loader2 } from "lucide-react";
import { materialsAPI } from "../../services/api";

export default function ReportMaterialModal({ onClose, onSuccess }) {
  const [photos, setPhotos] = useState([]);
  const [nom, setNom] = useState("");
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fileInputRef = useRef(null);

  const handleFileSelect = (e) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      if (photos.length + files.length > 5) {
        alert("You can only upload up to 5 photos");
        return;
      }

      const newPhotos = files.map((file) => ({
        file,
        preview: URL.createObjectURL(file),
      }));

      setPhotos((prev) => [...prev, ...newPhotos]);
    }
  };

  const removePhoto = (index) => {
    setPhotos((prev) => prev.filter((_, i) => i !== index));
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = async () => {
    setError("");
    if (!nom.trim()) {
      setError("Please describe what the material is");
      return;
    }
    if (!location.trim()) {
      setError("Please specify the location");
      return;
    }

    try {
      setLoading(true);
      await materialsAPI.create({
        nom,
        location,
        photo: photos.length > 0 ? photos[0].file : null,
      });
      if (onSuccess) onSuccess();
      else onClose();
    } catch (err) {
      console.error(err);
      setError(err.message || "Failed to create material");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[2000000] flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className="
        relative
        bg-white
        w-full max-w-[480px]
        rounded-3xl
        shadow-2xl
        p-6
        z-10
      "
      >
        {/* Header */}
        <div className="flex justify-between items-center pb-4 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-800">Report Material</h2>

          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-50 rounded-full transition-colors"
          >
            <X className="text-gray-400" size={20} />
          </button>
        </div>

        {/* Upload Area */}
        <div className="mt-5">
          {photos.length > 0 ? (
            <div className="grid grid-cols-5 gap-2">
              {photos.map((photo, index) => (
                <div
                  key={index}
                  className="relative aspect-square rounded-xl overflow-hidden border border-gray-200 group"
                >
                  <img
                    src={photo.preview}
                    alt={`Preview ${index}`}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => removePhoto(index)}
                    className="absolute top-1 right-1 bg-black/50 p-0.5 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X size={12} />
                  </button>
                </div>
              ))}
              {photos.length < 5 && (
                <button
                  onClick={triggerFileInput}
                  className="aspect-square rounded-xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center text-gray-400 hover:bg-gray-50 hover:border-gray-400 transition-all"
                >
                  <Camera size={20} />
                  <span className="text-[10px] mt-1 font-medium">Add</span>
                </button>
              )}
            </div>
          ) : (
            <div
              onClick={triggerFileInput}
              className="
                border-2 border-dashed border-gray-200
                rounded-xl
                h-[140px]
                flex flex-col items-center justify-center
                text-center
                bg-gray-50/50
                hover:bg-gray-50 transition-colors cursor-pointer
              "
            >
              <Camera className="text-gray-400 mb-2" size={28} />

              <p className="font-semibold text-gray-700 text-sm">
                Snap or drag photo
              </p>

              <p className="text-gray-400 text-xs mt-1">
                Px, JPG up to 10MB (Max 5)
              </p>
            </div>
          )}

          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            accept="image/*"
            multiple
            onChange={handleFileSelect}
          />
        </div>

        {/* What is it */}
        <div className="mt-5">
          <label className="text-sm font-semibold text-gray-700 ml-1">
            What is it?
          </label>

          <input
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            placeholder="e.g. Salvaged Terracotta Tiles"
            className="
              mt-2
              w-full
              px-4 py-3
              rounded-xl
              border border-gray-200
              bg-gray-50
              outline-none
              focus:ring-2 focus:ring-[#6B8E23]/20 focus:border-[#6B8E23]
              transition-all text-sm
            "
          />
        </div>

        {/* Where is it */}
        <div className="mt-4">
          <label className="text-sm font-semibold text-gray-700 ml-1">
            Where is it?
          </label>

          <div className="flex gap-2 mt-2">
            {/* Location Field */}
            <div
              className="
              flex items-center gap-3
              flex-1
              px-4 py-3
              rounded-xl
              bg-gray-50
              border border-gray-200
            "
            >
              <MapPin className="text-[#6B8E23]" size={18} />

              <input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Detecting location..."
                className="bg-transparent outline-none flex-1 text-sm"
              />
            </div>

            {/* Target Button */}
            <button
              className="
              w-[50px]
              rounded-xl
              border border-gray-200
              flex items-center justify-center
              hover:bg-gray-50 text-gray-500
              transition-colors
            "
            >
              <LocateFixed size={20} />
            </button>
          </div>
        </div>

        {error && (
          <div className="mt-4 text-red-500 text-sm text-center">{error}</div>
        )}

        {/* Publish Button */}
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="
          mt-8
          w-full
          bg-[#6B8E23]
          text-white
          py-3
          rounded-xl
          text-base
          font-semibold
          flex items-center justify-center gap-2
          shadow-lg shadow-[#6B8E23]/20
          hover:bg-[#5a7a1e] hover:shadow-xl hover:-translate-y-0.5
          transition-all
          disabled:opacity-50 disabled:cursor-not-allowed
        "
        >
          {loading ? (
            <>
              publishing...
              <Loader2 className="animate-spin" size={18} />
            </>
          ) : (
            <>
              Publish Now
              <Upload size={18} />
            </>
          )}
        </button>
      </div>
    </div>
  );
}
