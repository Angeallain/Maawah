import logo from "../../images/logo_image.png";
import { MoreVertical, Pencil } from "lucide-react";
import BreakdownGrid from "./BreakdownGrid";

export default function MainProjectCard() {
  return (
    <div
      className="
      mt-8
      bg-white
      rounded-[28px]
      border border-[#F2B9A6]
      shadow-sm
      overflow-hidden
    "
    >
      {/* TOP AREA */}
      <div className="p-8">
        {/* Status + Actions */}
        <div className="flex justify-between items-start">
          <span
            className="
            text-xs
            bg-[#FF8C5A]
            text-white
            px-4 py-1.5
            rounded-full
            font-semibold
          "
          >
            ● IN PROGRESS
          </span>

          <div className="flex gap-3 text-gray-400">
            <Pencil size={18} />
            <MoreVertical size={18} />
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="flex gap-8 mt-6">
          <img src={logo} className="w-40 object-contain" />

          <div className="flex-1">
            <p className="text-xs text-[#6B8E23] font-semibold tracking-wide">
              PERSONAL REBUILDING
            </p>

            <h2 className="text-2xl font-bold mt-2">Rebuild My Home</h2>

            <p className="text-gray-500 text-sm mt-2 max-w-xl">
              My home was severely damaged, and my family of five currently has
              no safe place to stay.
            </p>

            {/* STAT BOXES */}
            <div className="grid grid-cols-4 gap-4 mt-6">
              <Stat label="LOCATION" value="Rafah" />
              <Stat label="VOLUNTEERS" value="24" />
              <Stat label="TOOLS" value="12/15" />
              <Stat label="DURATION" value="14 Days" />
            </div>

            {/* PROGRESS */}
            <div className="mt-6">
              <div className="flex justify-between text-xs text-gray-400">
                <span>Materials Collection Progress</span>
                <span className="text-[#FF8C5A] font-semibold">75%</span>
              </div>

              <div className="h-2 bg-gray-200 rounded-full mt-2">
                <div className="h-full bg-[#FF8C5A] rounded-full w-[75%]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="px-8 pb-6 ">
        <BreakdownGrid />
      </div>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="bg-[#F4F6F8] rounded-xl p-4 text-center">
      <p className="text-[10px] text-gray-400 tracking-wide">{label}</p>
      <p className="font-semibold mt-1">{value}</p>
    </div>
  );
}
