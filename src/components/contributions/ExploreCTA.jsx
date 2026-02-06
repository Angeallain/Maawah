import { ArrowRight } from "lucide-react";

export default function ExploreCTA() {
  return (
    <div className="
      bg-[#F8F4F1]
      border border-[#EBDCD3]
      rounded-2xl
      p-8
      flex justify-between items-center
    ">

      <div>
        <h3 className="font-semibold text-lg">
          Ready to do more?
        </h3>

        <p className="text-gray-500 mt-1 text-sm">
          Discover new projects in your area that need your help today.
        </p>
      </div>

      <button className="
        bg-[#6B8E23]
        text-white
        px-6 py-3
        rounded-xl
        flex items-center gap-2
      ">
        Explore Projects
        <ArrowRight size={18} />
      </button>

    </div>
  );
}
