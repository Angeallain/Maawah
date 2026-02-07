import { useState } from "react";
import { X, User, Mail, MessageSquare, HandHeart } from "lucide-react";

export default function ContributeModal({ onClose, projectTitle }) {
  const [contributionType, setContributionType] = useState("volunteer");
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-[50000] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div
        className="
          relative 
          bg-white 
          w-full max-w-[480px] 
          rounded-3xl 
          shadow-2xl 
          p-6 
          animate-in fade-in zoom-in-95 duration-200
        "
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              Make a Contribution
            </h2>
            {projectTitle && (
              <p className="text-xs text-gray-500 mt-1">To: {projectTitle}</p>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="text-gray-400" size={20} />
          </button>
        </div>

        <div className="space-y-4">
          {/* Contribution Type */}
          <div>
            <label className="block text-xs font-bold text-gray-800 mb-2">
              How would you like to help?
            </label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { id: "volunteer", label: "Volunteer Time" },

                { id: "tools", label: "Lend Tools" },
                { id: "transport", label: "Transport" },
              ].map((type) => (
                <button
                  key={type.id}
                  onClick={() => setContributionType(type.id)}
                  className={`
                    py-2.5 px-3 rounded-xl text-sm font-medium transition-all text-left border
                    ${
                      contributionType === type.id
                        ? "border-[#6B8E23] bg-[#6B8E23]/10 text-[#6B8E23]"
                        : "border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50"
                    }
                  `}
                >
                  {type.label}
                </button>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="
              w-full mt-2
              bg-[#6B8E23] hover:bg-[#5a761e]
              text-white
              font-bold
              py-3
              rounded-full
              flex items-center justify-center gap-2
              transition-all
              disabled:opacity-70 disabled:cursor-not-allowed
            "
          >
            {loading ? (
              "Processing..."
            ) : (
              <>
                <HandHeart size={18} />
                Send Offer
              </>
            )}
          </button>

          <p className="text-center text-[10px] text-gray-400">
            The project organizer will contact you shortly.
          </p>
        </div>
      </div>
    </div>
  );
}
