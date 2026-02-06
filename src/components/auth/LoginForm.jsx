export default function LoginForm({ switchMode }) {
  return (
    <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-10">
        <h2 className="text-3xl font-bold">Welcome Back !</h2>

        <p className="text-gray-500 mt-2">
          Don’t have an account?{" "}
          <button
            onClick={switchMode}
            className="font-semibold text-black"
          >
            Sign up
          </button>
        </p>

        <div className="mt-8 space-y-4">
          <input
            placeholder="Email Address"
            className="w-full border rounded-xl px-4 py-3"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-xl px-4 py-3"
          />

          <button className="w-full bg-[#6B8E23] text-white py-3 rounded-xl font-semibold">
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
}
