import { useState, useRef, useEffect } from "react";
import logo from "../../images/logo_image.png";
import { Bell, LogOut, User, PlusCircle, Settings, Menu, X } from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";
import { authAPI } from "../../services/api";
import CreateProjectModal from "../projects/CreateProjectModal";

export default function Navbar() {
  const profileImage = "https://i.pravatar.cc/100"; // fake avatar generator
  const { user } = useAuth();
  const currentPath = window.location.pathname;

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showCreateProject, setShowCreateProject] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    await authAPI.logout();
    window.location.href = "/auth";
  };

  const navigate = (path) => {
    window.history.pushState({}, "", path);
    window.dispatchEvent(new Event("popstate"));
  };

  return (
    <div className="bg-white/80  border-b h-[82.5px] sticky top-0 z-[10000] border-gray-100 px-6 md:px-12 flex justify-between items-center transition-all">
      {/* LEFT LOGO */}
      <div
        className="flex items-center gap-3 cursor-pointer"
        onClick={() => navigate("/home")}
      >
        <img src={logo} className="w-[110px] h-auto" alt="Logo" />
      </div>

      {/* CENTER NAV */}
      <div className="hidden md:flex gap-14 text-sm text-gray-600 font-semibold">
        <span
          onClick={() => navigate("/home")}
          className={`cursor-pointer hover:text-black ${
            currentPath === "/home" ? "text-[#F97316]" : ""
          }`}
        >
          Home
        </span>
        <span
          onClick={() => navigate("/projects")}
          className={`cursor-pointer hover:text-black ${
            currentPath === "/projects" ? "text-[#F97316]" : ""
          }`}
        >
          My Projects
        </span>
        <span
          onClick={() => navigate("/contributions")}
          className={`cursor-pointer hover:text-black ${
            currentPath === "/contributions" ? "text-[#F97316]" : ""
          }`}
        >
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
      <div className="flex items-center gap-3 md:gap-6">
        {/* Notification */}
        <div className="w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition">
          <Bell size={20} className="text-gray-600" />
        </div>

        {/* Profile Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <img
            src={user?.avatar || profileImage}
            alt="Profile"
            className="w-11 h-11 rounded-full object-cover border border-gray-200 cursor-pointer hover:border-gray-400 transition"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          />

          {isDropdownOpen && (
            <div className="absolute right-0 mt-3 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="px-4 py-3 border-b border-gray-50 bg-gray-50/50">
                <p className="text-sm font-semibold text-gray-800">
                  {user?.nom || "User Name"}
                </p>
                <p className="text-xs text-gray-500 truncate mt-0.5">
                  {user?.email || "user@example.com"}
                </p>
              </div>

              <div className="py-1">
                <button
                  onClick={() => setIsDropdownOpen(false)}
                  className="w-full text-left px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 flex items-center gap-3 transition-colors"
                >
                  <User size={16} />
                  My Profile
                </button>

                <button
                  onClick={() => {
                    setIsDropdownOpen(false);
                    setShowCreateProject(true);
                  }}
                  className="w-full text-left px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 flex items-center gap-3 transition-colors"
                >
                  <PlusCircle size={16} />
                  Create New Project
                </button>

                <button
                  onClick={() => setIsDropdownOpen(false)}
                  className="w-full text-left px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 flex items-center gap-3 transition-colors"
                >
                  <Settings size={16} />
                  Settings
                </button>
              </div>

              <div className="border-t border-gray-50 py-1">
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 flex items-center gap-3 transition-colors"
                >
                  <LogOut size={16} />
                  Log Out
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="absolute top-[82.5px] left-0 w-full bg-white border-b border-gray-100 p-6 flex flex-col gap-6 shadow-xl md:hidden animate-in fade-in slide-in-from-top-2">
          <span
            onClick={() => {navigate("/home"); setIsMenuOpen(false)}}
            className={`text-lg font-medium cursor-pointer ${
              currentPath === "/home" ? "text-[#F97316]" : "text-gray-600"
            }`}
          >
            Home
          </span>
          <span
            onClick={() => {navigate("/projects"); setIsMenuOpen(false)}}
            className={`text-lg font-medium cursor-pointer ${
              currentPath === "/projects" ? "text-[#F97316]" : "text-gray-600"
            }`}
          >
            My Projects
          </span>
          <span
            onClick={() => {navigate("/contributions"); setIsMenuOpen(false)}}
            className={`text-lg font-medium cursor-pointer ${
              currentPath === "/contributions" ? "text-[#F97316]" : "text-gray-600"
            }`}
          >
            My Contributions
          </span>
          <span
            onClick={() => {navigate("/materials"); setIsMenuOpen(false)}}
            className={`text-lg font-medium cursor-pointer ${
              currentPath === "/materials" ? "text-[#F97316]" : "text-gray-600"
            }`}
          >
            Materials
          </span>
        </div>
      )}

      {showCreateProject && (
        <CreateProjectModal onClose={() => setShowCreateProject(false)} />
      )}
    </div>
  );
}
