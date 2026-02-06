export default function ContributionsHeader() {
  return (
    <div className="flex items-center gap-6">

      <img
        src="https://randomuser.me/api/portraits/men/32.jpg"
        className="w-20 h-20 rounded-full shadow"
      />

      <div>
        <h1 className="text-2xl font-bold text-[#1E293B]">
          Hello Samir, thank you for your impact.
        </h1>

        <p className="text-gray-500 mt-1">
          Every small action helps rebuild a stronger community.
        </p>
      </div>

    </div>
  );
}
