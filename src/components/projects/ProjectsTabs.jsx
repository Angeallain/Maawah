export default function ProjectsTabs() {
  return (
    <div className="mt-8 border-b border-gray-200">

      <div className="flex gap-8 text-sm font-medium">

        <button className="pb-3 border-b-2 border-[#FF8C5A] text-gray-900">
          All Projects
        </button>

        <button className="pb-3 text-gray-400 hover:text-gray-600">
          Active
        </button>

        <button className="pb-3 text-gray-400 hover:text-gray-600">
          Completed
        </button>

        <button className="pb-3 text-gray-400 hover:text-gray-600">
          Drafts
        </button>

      </div>

    </div>
  );
}
