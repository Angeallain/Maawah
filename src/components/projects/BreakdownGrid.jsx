import { Phone, User, Truck, Wrench } from "lucide-react";

export default function BreakdownGrid() {
  return (
    <div className="mt-8">
      {/* Section Title */}
      <p className="text-xs tracking-wider text-gray-400 font-semibold mb-6">
        RESOURCE & CONTRIBUTOR BREAKDOWN
      </p>

      <div className="grid grid-cols-4 gap-6">
        {/* Top Volunteers */}
        <div>
          <h4 className="text-sm font-semibold text-gray-700 border-b pb-2 mb-4">
            Top Volunteers
          </h4>

          <div className="space-y-3">
            <div className="flex justify-between items-center bg-gray-50 rounded-xl px-4 py-3">
              <div className="flex gap-3 items-center">
                <img
                  src="https://i.pravatar.cc/40?img=5"
                  className="w-8 h-8 rounded-full"
                />
                <div>
                  <p className="text-sm font-medium">Sarah Jenkins</p>
                  <p className="text-xs text-gray-400">Help in buildings</p>
                </div>
              </div>

              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                <User size={16} className="text-[#6B8E23]" />
              </div>
            </div>

            <div className="flex justify-between items-center bg-gray-50 rounded-xl px-4 py-3">
              <div className="flex gap-3 items-center">
                <img
                  src="https://i.pravatar.cc/40?img=8"
                  className="w-8 h-8 rounded-full"
                />
                <div>
                  <p className="text-sm font-medium">Marcus Chen</p>
                  <p className="text-xs text-gray-400">Help in buildings</p>
                </div>
              </div>

              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                <User size={16} className="text-[#6B8E23]" />
              </div>
            </div>

            <p className="text-xs text-[#6B8E23] mt-2 cursor-pointer">
              View all 24 volunteers →
            </p>
          </div>
        </div>

        {/* Tools */}
        <div>
          <h4 className="text-sm font-semibold text-gray-700 border-b pb-2 mb-4">
            Tools Pledged
          </h4>

          <div className="space-y-3">
            <div className="bg-gray-50 rounded-xl px-4 py-3 flex justify-between items-center">
              <div>
                <p className="text-sm font-medium">Power Drill (3)</p>
                <p className="text-xs text-gray-400">From: Liam Oshea</p>
              </div>
              <Wrench size={18} className="text-gray-400" />
            </div>

            <div className="bg-gray-50 rounded-xl px-4 py-3 flex justify-between items-center">
              <div>
                <p className="text-sm font-medium">Wheelbarrows (2)</p>
                <p className="text-xs text-gray-400">From: City Hardware</p>
              </div>
              <Wrench size={18} className="text-gray-400" />
            </div>
          </div>
        </div>

        {/* Transport */}
        <div>
          <h4 className="text-sm font-semibold text-gray-700 border-b pb-2 mb-4">
            Transport Help
          </h4>

          <div className="space-y-3">
            <div className="bg-gray-50 rounded-xl px-4 py-3 flex justify-between items-center">
              <div>
                <p className="text-sm font-medium">Ford F-150</p>
                <p className="text-xs text-gray-400">Driver: Sam T.</p>
              </div>

              <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                <Phone size={16} className="text-[#FF8C5A]" />
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl px-4 py-3 flex justify-between items-center">
              <div>
                <p className="text-sm font-medium">Utility Van</p>
                <p className="text-xs text-gray-400">Driver: Elena R.</p>
              </div>

              <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                <Phone size={16} className="text-[#FF8C5A]" />
              </div>
            </div>
          </div>
        </div>

        {/* Reserved Materials */}
        <div>
          <h4 className="text-sm font-semibold text-gray-700 border-b pb-2 mb-4">
            Reserved Materials
          </h4>

          <div className="space-y-3 text-sm">
            <div className="flex gap-2 items-start">
              <span className="text-[#FF8C5A]">●</span>
              <div>
                <p className="font-medium">15x Recycled Wood Benches</p>
                <p className="text-xs text-gray-400">Stored at Depot B</p>
              </div>
            </div>

            <div className="flex gap-2 items-start">
              <span className="text-[#FF8C5A]">●</span>
              <div>
                <p className="font-medium">Windows</p>
                <p className="text-xs text-gray-400">
                  Donated by Local Nursery
                </p>
              </div>
            </div>

            <div className="flex gap-2 items-start opacity-50">
              <span>○</span>
              <div>
                <p className="font-medium">Playground Rubber Matting</p>
                <p className="text-xs">Awaiting Procurement</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
