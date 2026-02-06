import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import HomeHero from "../components/home/HomeHero";
import GlobalMapSection from "../components/home/GlobalMapSection";
import ProjectsSection from "../components/home/ProjectsSection";

export default function Home() {
  return (
    <div className="bg-[#F3F3F3] min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 px-12 py-10 space-y-16">
        <HomeHero />
        <GlobalMapSection />
        <ProjectsSection />
      </main>

      <Footer />
    </div>
  );
}
