import { useState } from "react";
import { X, MapPin, Loader2, Users, Hammer, Truck, Layers, ChevronRight } from "lucide-react";

export default function CreateProjectModal({ onClose }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [needs, setNeeds] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const toggleNeed = (need) => {
    if (needs.includes(need)) {
      setNeeds(needs.filter((n) => n !== need));
    } else {
      setNeeds([...needs, need]);
    }
  };

  const handleSubmit = async () => {
    setError("");
    if (!title.trim()) {
      setError("Please add a project title");
      return;
    }
    
    setLoading(true);
    setTimeout(() => {
        setLoading(false);
        onClose();
        alert("Project created successfully (Frontend Simulation)");
    }, 1000);
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
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold  text-gray-900">Create New Project</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="text-gray-400" size={20} />
          </button>
        </div>

        <div className="space-y-4">
          {/* Project Title */}
          <div>
            <label className="block text-xs font-bold text-gray-800 mb-1.5">
              Project Title
            </label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Oak Street Community Garden Cleanup"
              className="
                w-full
                px-3 py-2.5
                rounded-lg
                border border-gray-200
                focus:border-[#6B8E23] focus:ring-1 focus:ring-[#6B8E23]
                outline-none
                placeholder:text-gray-300
                text-sm
                transition-all
              "
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-xs font-bold text-gray-800 mb-1.5">
              Location
            </label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                 <MapPin size={16} />
              </div>
              <input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Neighborhood or specific address"
                className="
                  w-full
                  pl-9 pr-3 py-2.5
                  rounded-lg
                  border border-gray-200
                  focus:border-[#6B8E23] focus:ring-1 focus:ring-[#6B8E23]
                  outline-none
                  placeholder:text-gray-300
                  text-sm
                  transition-all
                "
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-xs font-bold text-gray-800 mb-1.5">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Tell us what's happening and how others can help..."
              rows={3}
              className="
                w-full
                px-3 py-2.5
                rounded-lg
                border border-gray-200
                focus:border-[#6B8E23] focus:ring-1 focus:ring-[#6B8E23]
                outline-none
                placeholder:text-gray-300
                text-sm
                transition-all resize-none
              "
            />
          </div>

          {/* What do you need? */}
          <div>
            <label className="block text-xs font-bold text-gray-800 mb-2">
              What do you need? (Select all that apply)
            </label>
            <div className="grid grid-cols-4 gap-2">
              {[
                  { id: 'volunteers', label: 'VOLUNTEERS', icon: Users },
                  { id: 'tools', label: 'TOOLS', icon: Hammer },
                  { id: 'transport', label: 'TRANSPORT', icon: Truck },
                  { id: 'materials', label: 'MATERIALS', icon: Layers },
              ].map((item) => {
                  const Icon = item.icon;
                  const isSelected = needs.includes(item.id);
                  return (
                    <button
                        key={item.id}
                        onClick={() => toggleNeed(item.id)}
                        className={`
                            flex flex-col items-center justify-center
                            py-3 px-1
                            rounded-xl
                            border
                            transition-all
                            ${isSelected 
                                ? 'border-[#6B8E23] bg-[#6B8E23]/5 text-[#6B8E23]' 
                                : 'border-gray-200 text-gray-600 hover:border-gray-300'
                            }
                        `}
                    >
                        <Icon size={20} className="mb-1.5" />
                        <span className="text-[9px] font-bold tracking-wider">{item.label}</span>
                    </button>
                  );
              })}
            </div>
          </div>

          {error && <div className="text-red-500 text-xs">{error}</div>}

          {/* Actions */}
          <div className="pt-2 flex flex-col items-center gap-3">
             <button
                onClick={handleSubmit}
                disabled={loading}
                className="
                    w-full
                    border border-[#6B8E23]
                    text-[#6B8E23]
                    bg-white
                    hover:bg-[#6B8E23] hover:text-white
                    py-3
                    rounded-full
                    text-sm
                    font-bold
                    flex items-center justify-center gap-2
                    transition-all
                    disabled:opacity-50 disabled:cursor-not-allowed
                "
             >
                {loading ? <Loader2 className="animate-spin" size={16} /> : (
                    <>
                        Publish Project <ChevronRight size={16} />
                    </>
                )}
             </button>
             
             <button 
                onClick={onClose}
                className="text-gray-500 text-xs hover:text-gray-700 font-medium"
             >
                Cancel and discard
             </button>
          </div>

        </div>
      </div>
    </div>
  );
}
