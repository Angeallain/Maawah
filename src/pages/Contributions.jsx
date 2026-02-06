import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import ContributionsHeader from "../components/contributions/ContributionsHeader";
import StatsCards from "../components/contributions/StatsCards";
import ActiveContributions from "../components/contributions/ActiveContributions";
import ContributionHistory from "../components/contributions/ContributionHistory";
import ExploreCTA from "../components/contributions/ExploreCTA";

export default function Contributions() {
  return (
    <div className="bg-[#F4F5F7] min-h-screen flex flex-col">
      <Navbar />

      <main className="px-12 py-12 space-y-10 flex-1">
        <ContributionsHeader />
        <StatsCards />
        <ActiveContributions />
        <ContributionHistory />
        <ExploreCTA />
      </main>

      <Footer />
    </div>
  );
}
