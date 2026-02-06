export default function ProjectCard({ title, progress }) {
  return (
    <div className="bg-white rounded-[28px] p-6 shadow-sm border border-gray-100">
      <img
        src="src/images/logo_image.png"
        className="w-[310px] h-auto object-contain mb-6"
      />

      <div className="text-xs text-gray-400">GAZA CITY – CENTRAL DISTRICT</div>

      <h3 className="text-lg font-semibold mt-2">{title}</h3>

      <div className="mt-6">
        <div className="flex justify-between text-xs text-gray-400">
          <span>GROWTH INDICATOR</span>
          <span>{progress}%</span>
        </div>

        <div className="h-2 bg-gray-200 rounded-full mt-2">
          <div
            className="h-full bg-[#FF8C5A] rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <button className="mt-6 w-full border border-[#6B8E23] text-[#6B8E23] py-3 rounded-full font-semibold">
        Contribute Now
      </button>
    </div>
  );
}
