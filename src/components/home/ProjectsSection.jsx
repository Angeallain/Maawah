import ProjectCard from "./ProjectCard";
import { Search } from "lucide-react";

export default function ProjectsSection() {

  const projects = [
    { title: "Project Homebound", progress: 24 },
    { title: "Unity Medical Annex", progress: 68 },
    { title: "Bridge Reconnect Initiative", progress: 45 },
  ];

  return (
    <section>

      {/* Header Row */}
      <div className="flex justify-between items-center">

        <h2 className="text-2xl font-bold text-gray-600">
          View All Projects
        </h2>

        <div className="w-[420px]">

            <div className="flex items-center gap-3 px-5 py-3 rounded-full border bg-white shadow-sm">

                <Search size={18} className="text-gray-400" />

                <input
                placeholder="Search by location, project type, or keyword..."
                className="flex-1 outline-none text-sm text-gray-600 placeholder-gray-400 bg-transparent"
                />

            </div>

        </div>


      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-10 mt-10">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>

      <div className="text-right mt-8">
        <button className="text-[#6B8E23] font-semibold">
          See All Projects →
        </button>
      </div>

    </section>
  );
}
