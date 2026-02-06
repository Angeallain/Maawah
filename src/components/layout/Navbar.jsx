import logo from "../../images/logo_image.png";
import { Bell } from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";

export default function Navbar() {
  const profileImage = "https://i.pravatar.cc/100"; // fake avatar generator
  const { user } = useAuth();
  const currentPath = window.location.pathname;

  const navigate = (path) => {
    window.history.pushState({}, "", path);
    window.dispatchEvent(new Event("popstate"));
  };

  return (
    <div className="bg-white border-b border-gray-100 px-12 flex justify-between items-center">
      {/* LEFT LOGO */}
      <div
        className="flex items-center gap-3 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img src={logo} className="w-[110px] h-auto" alt="Logo" />
      </div>

      {/* CENTER NAV */}
      <div className="flex gap-14 text-gray-600 font-semibold">
        <span
          onClick={() => navigate("/")}
          className={`cursor-pointer hover:text-black ${
            currentPath === "/" ? "text-[#F97316]" : ""
          }`}
        >
          Home
        </span>
        <span className="cursor-pointer hover:text-black">My Projects</span>
        <span className="cursor-pointer hover:text-black">
          My Contributions
        </span>
        <span
          onClick={() => navigate("/materials")}
          className={`cursor-pointer hover:text-black ${
            currentPath === "/materials" ? "text-[#F97316]" : ""
          }`}
        >
          Materials
        </span>
      </div>

      {/* RIGHT ICONS */}
      <div className="flex items-center gap-6">
        {/* Notification */}
        <div className="w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition">
          <Bell size={20} className="text-gray-600" />
        </div>

        {/* Profile */}
        <img
          src={user?.avatar || profileImage}
          alt="Profile"
          className="w-11 h-11 rounded-full object-cover border border-gray-200 cursor-pointer"
        />
      </div>
    </div>
  );
}
