import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";

export default function RegisterForm({ switchMode }) {
  const { register } = useAuth();
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    numero: "",
    password: "",
    confirmPassword: "",
    location: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Validate required fields
    if (
      !formData.nom ||
      !formData.email ||
      !formData.numero ||
      !formData.password ||
      !formData.location
    ) {
      setError("Please fill in all required fields");
      return;
    }

    setLoading(true);

    try {
      // Prepare data for API (remove confirmPassword)
      const { confirmPassword, ...registrationData } = formData;

      await register(registrationData);
      window.location.href = "/";
    } catch (err) {
      setError(err.message || "Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-10">
        <h2 className="text-3xl font-bold">Create your account</h2>

        <p className="text-gray-500 mt-2">
          Already have an account?{" "}
          <button
            onClick={switchMode}
            className="font-semibold text-black"
            type="button"
          >
            Log in
          </button>
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          {error && (
            <div className="bg-red-50 text-red-600 px-4 py-3 rounded-xl text-sm">
              {error}
            </div>
          )}

          <input
            type="text"
            name="nom"
            placeholder="Full Name"
            value={formData.nom}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3"
            required
          />

          <input
            type="tel"
            name="numero"
            placeholder="Phone Number"
            value={formData.numero}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3"
            required
          />

          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3"
            required
          />

          <div className="flex gap-4">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3"
              required
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#6B8E23] text-white py-3 rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>
      </div>
    </div>
  );
}
