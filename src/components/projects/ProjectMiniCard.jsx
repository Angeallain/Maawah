import logo from "../../images/logo_image.png";
import { MapPin, Users } from "lucide-react";

export default function ProjectMiniCard({
  title,
  progress,
  status,
  location = "North of Gaza",
  volunteers = 0,
}) {

  const isCompleted = status === "COMPLETED";
  const isDraft = status === "DRAFT";

  const progressColor = isCompleted
    ? "bg-[#6B8E23]"
    : "bg-[#E97A55]";

  return (
    <div className="
        bg-white/80
        rounded-2xl
        px-8 py-6
        shadow-sm
        ">

        {/* TOP ROW */}
        <div className="flex justify-between items-start">

            {/* LEFT CONTENT */}
            <div className="flex gap-6 items-center">

            <img src={logo} className="w-24 object-contain" />

            <div>
                {/* STATUS + LOCATION */}
                <div className="flex items-center gap-3 text-xs mb-1">
                <span className="px-2 py-0.5 rounded-md bg-gray-200 text-gray-600 font-medium">
                    {status}
                </span>

                <div className="flex items-center gap-1 text-gray-400">
                    <MapPin size={14} />
                    {location}
                </div>
                </div>

                {/* TITLE */}
                <h3 className="font-semibold text-gray-800 text-lg">
                {title}
                </h3>

                {/* VOLUNTEERS */}
                <div className="flex items-center gap-2 text-sm text-gray-400 mt-1">
                <Users size={14} />
                {volunteers} Volunteers
                </div>

            </div>
            </div>

            {/* RIGHT SIDE */}
            <button className="text-gray-500 text-sm font-medium whitespace-nowrap hover:text-gray-700">
            Show Details →
            </button>

        </div>

        {/* PROGRESS LABEL ROW */}
        <div className="flex justify-between text-xs text-gray-400 mt-6">
            <span className="font-medium tracking-wide">
            PROGRESS
            </span>
            <span>{progress}%</span>
        </div>

        {/* ⭐ FULL WIDTH PROGRESS BAR */}
        <div className="mt-2 h-2 w-full bg-gray-200 rounded-full overflow-hidden">
            <div
            className={`h-full rounded-full ${progressColor}`}
            style={{ width: `${progress}%` }}
            />
        </div>

        </div>

  );
}
