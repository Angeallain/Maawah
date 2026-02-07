import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../images/logo_image.png";

export default function LandingNavbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sections = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Join us", id: "join-us" },
  ];

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    if (id === "join-us") {
      window.location.href = "/auth?mode=register";
      return;
    }
    if (id === "login") {
      window.location.href = "/auth?mode=login";
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for navbar height

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-white/90 backdrop-blur-md border-b sticky top-0 z-[10000] border-gray-100 px-6 md:px-12 h-[80px] py-5 flex justify-between items-center transition-all">
      <div
        className="flex items-center gap-3 cursor-pointer"
        onClick={() => scrollToSection("home")}
      >
        <img src={logo} className="w-[90px] md:w-[110px] h-auto" alt="Logo" />
      </div>

      <div className="hidden md:flex gap-12 text-gray-600 font-medium">
        {sections.map((item) => (
          <span
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`cursor-pointer transition-colors duration-300 relative ${
              activeSection === item.id
                ? "text-[#6B8E23] font-bold"
                : "hover:text-[#6B8E23]"
            }`}
          >
            {item.name}
            {activeSection === item.id && (
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#6B8E23] rounded-full"></span>
            )}
          </span>
        ))}
      </div>

      <div className="hidden md:flex items-center gap-6">
        <span
          onClick={() => scrollToSection("login")}
          className="text-gray-600 font-medium cursor-pointer hover:text-[#6B8E23] transition-colors"
        >
          Login
        </span>
        <button
          onClick={() => scrollToSection("join-us")}
          className="bg-[#6B8E23] text-white px-6 py-2 rounded-xl font-semibold hover:bg-[#5a7a1e] transition-colors shadow-sm hover:shadow-md"
        >
          Join us
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-600"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="absolute top-[80px] left-0 w-full bg-white border-b border-gray-100 p-6 flex flex-col gap-6 shadow-xl md:hidden animate-in fade-in slide-in-from-top-2">
          {sections.map((item) => (
            <span
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-lg font-medium cursor-pointer ${
                activeSection === item.id
                  ? "text-[#6B8E23] font-bold"
                  : "text-gray-600"
              }`}
            >
              {item.name}
            </span>
          ))}
          <div className="h-px bg-gray-100 w-full my-2"></div>
          <span
            onClick={() => scrollToSection("login")}
            className="text-gray-600 font-medium cursor-pointer text-lg"
          >
            Login
          </span>
          <button
            onClick={() => scrollToSection("join-us")}
            className="bg-[#6B8E23] text-white px-6 py-3 rounded-xl font-semibold w-full text-center hover:bg-[#5a7a1e] transition-colors shadow-sm"
          >
            Join us
          </button>
        </div>
      )}
    </div>
  );
}
