import { useState } from "react";

import LoginForm from "../components/auth/LoginForm";
import RegisterForm from "../components/auth/RegisterForm";
import AuthSidePanel from "../components/auth/AuthSidePanel";

export default function Auth() {
  const [mode, setMode] = useState(() => {
    // Check URL params for initial mode
    const params = new URLSearchParams(window.location.search);
    const modeParam = params.get("mode");
    return modeParam === "register" ? "register" : "login";
  });

  return (
    <div className="min-h-screen flex overflow-hidden relative bg-white">
      {/* Side Panel Overlay (High Z-Index) */}
      <div
        className={`
          absolute top-0 bottom-0 w-1/2 z-50 
          transition-transform duration-700 ease-in-out
          ${mode === "login" ? "translate-x-full" : "translate-x-0"}
        `}
      >
        <AuthSidePanel
          title={mode === "login" ? "Hello, Friend!" : "Welcome Back!"}
          description={
            mode === "login"
              ? "Enter your personal details and start your journey with us."
              : "To keep connected with us please login with your personal info."
          }
          buttonText={mode === "login" ? "Sign up" : "Sign in"}
          onClick={() => setMode(mode === "login" ? "register" : "login")}
        />
      </div>

      {/* Login Form (Always on Left) */}
      <div
        className={`
          absolute top-0 bottom-0 left-0 w-1/2 z-10
          flex items-center justify-center
          transition-all duration-700 ease-in-out
          ${mode === "login" ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
        `}
      >
        <LoginForm switchMode={() => setMode("register")} />
      </div>

      {/* Register Form (Always on Right) */}
      <div
        className={`
          absolute top-0 bottom-0 right-0 w-1/2 z-10
          flex items-center justify-center
          transition-all duration-700 ease-in-out
          ${mode === "register" ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
        `}
      >
        <RegisterForm switchMode={() => setMode("login")} />
      </div>
    </div>
  );
}
