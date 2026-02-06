export default function RegisterForm({ switchMode }) {
  return (
    <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-10">
        <h2 className="text-3xl font-bold">Create your account</h2>

        <p className="text-gray-500 mt-2">
          Already have an account?{" "}
          <button
            onClick={switchMode}
            className="font-semibold text-black"
          >
            Log in
          </button>
        </p>

        <div className="mt-8 space-y-4">
          <input
            placeholder="Full Name"
            className="w-full border rounded-xl px-4 py-3"
          />

          <input
            placeholder="Email Address"
            className="w-full border rounded-xl px-4 py-3"
          />

          <input
            placeholder="Phone Number"
            className="w-full border rounded-xl px-4 py-3"
          />

          <div className="flex gap-4">
            <input
              type="password"
              placeholder="Password"
              className="w-full border rounded-xl px-4 py-3"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full border rounded-xl px-4 py-3"
            />
          </div>

          <button className="w-full bg-[#6B8E23] text-white py-3 rounded-xl font-semibold">
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
}
