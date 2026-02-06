import { useAuth } from "../contexts/AuthContext";

export default function Home() {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h1 className="text-3xl font-bold mb-4">Welcome, {user?.nom}!</h1>
          <div className="space-y-2 text-gray-700">
            <p>
              <strong>Email:</strong> {user?.email}
            </p>
            <p>
              <strong>Phone:</strong> {user?.numero}
            </p>
            <p>
              <strong>Location:</strong> {user?.location}
            </p>
            {user?.available_days && user.available_days.length > 0 && (
              <p>
                <strong>Available Days:</strong>{" "}
                {user.available_days.join(", ")}
              </p>
            )}
          </div>
          <button
            onClick={logout}
            className="mt-6 bg-red-600 text-white px-6 py-2 rounded-xl font-semibold hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
