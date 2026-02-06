import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import ProjectsTabs from "../components/projects/ProjectsTabs";
import MainProjectCard from "../components/projects/MainProjectCard";
import ProjectMiniCard from "../components/projects/ProjectMiniCard";
import CreateProjectModal from "../components/projects/CreateProjectModal";

import { Plus } from "lucide-react";

export default function Projects() {
  const [showCreateProject, setShowCreateProject] = useState(false);

  return (
    <div className="bg-[#F4F5F7] min-h-screen flex flex-col">
      {/* Modal */}
      {showCreateProject && (
        <CreateProjectModal onClose={() => setShowCreateProject(false)} />
      )}

      <Navbar />

      <main className="px-12 py-12 flex-1">
        {/* HEADER */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Manage My Projects
            </h1>

            <p className="text-gray-500 mt-1">
              Coordinate and track the projects you created.
            </p>
          </div>

          <button
            onClick={() => setShowCreateProject(true)}
            className="
            flex items-center gap-2
            bg-[#6B8E23]
            text-white
            px-6 py-3
            rounded-full
           hover:bg-white
            transition-colors
            duration-300
            ease-in-out
            hover:text-[#6B8E23]
            shadow-md
            border-[#6B8E23]
            border-2
         
          "
          >
            <Plus size={18} />
            Create Project
          </button>
        </div>

        {/* TABS */}
        <ProjectsTabs />

        {/* MAIN CARD */}
        <div className="mt-8">
          <MainProjectCard />
        </div>

        {/* MINI CARDS */}
        <div className="mt-6 space-y-4">
          <div className="mt-6 space-y-4">
            <ProjectMiniCard
              title="A little mosque"
              progress={0}
              status="DRAFT"
              location="North of Gaza"
              volunteers={0}
            />

            <ProjectMiniCard
              title="Fatima’s house"
              progress={100}
              status="COMPLETED"
              location="Rafah"
              volunteers={42}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
