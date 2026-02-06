import { useState, useEffect } from "react";
import { useAuth } from "./contexts/AuthContext";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Materials from "./pages/Materials";
import Projects from "./pages/Projects";
import Contributions from "./pages/Contributions";

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const { isAuthenticated, loading } = useAuth();

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = (path) => {
    window.history.pushState({}, "", path);
    setCurrentPath(path);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  // Routing logic
  if (currentPath === "/auth") {
    if (isAuthenticated) {
      navigate("/");
      return null;
    }
    return <Auth />;
  }

  if (currentPath === "/materials") {
    if (!isAuthenticated) {
      navigate("/auth");
      return null;
    }
    return <Materials />;
  }

  if (currentPath === "/projects") {
    if (!isAuthenticated) {
      navigate("/auth");
      return null;
    }
    return <Projects />;
  }
  if (currentPath === "/contributions") {
    if (!isAuthenticated) {
      navigate("/auth");
      return null;
    }
    return <Contributions />;
  }

  // Default to home
  if (!isAuthenticated) {
    navigate("/auth");
    return null;
  }

  return <Home />;
}

export default App;
