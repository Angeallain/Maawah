import { useState } from "react";

import LoginForm from "../components/auth/LoginForm";
import RegisterForm from "../components/auth/RegisterForm";
import AuthSidePanel from "../components/auth/AuthSidePanel";

export default function Auth() {
  const [mode, setMode] = useState("register");

  return (
    <div className="min-h-screen flex">
      {mode === "login" ? (
        <div className="flex w-full">
          <LoginForm switchMode={() => setMode("register")} />
          <AuthSidePanel
            buttonText="Sign up"
            onClick={() => setMode("register")}
          />
        </div>
      ) : (
        <div className="flex w-full">
          <AuthSidePanel
            buttonText="Sign in"
            onClick={() => setMode("login")}
          />
          <RegisterForm switchMode={() => setMode("login")} />
        </div>
      )}
    </div>
  );
}