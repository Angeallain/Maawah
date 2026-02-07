export default function ContributeOptionCard({
  icon: Icon,
  title,
  subtitle,
  selected,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className={`
        flex flex-col items-center text-center
        rounded-2xl p-8
        transition
        w-full
        ${selected
          ? "bg-white shadow-md ring-2 ring-[#6B8E23]"
          : "bg-[#F4F5F7] hover:bg-white hover:shadow-sm"}
      `}
    >

      {/* ICON CIRCLE */}
      <div className="
        w-16 h-16
        rounded-full
        bg-white
        flex items-center justify-center
        shadow-sm
      ">
        <Icon size={28} className="text-gray-500" />
      </div>

      <h3 className="mt-6 font-semibold text-lg text-[#1E293B]">
        {title}
      </h3>

      <p className="text-gray-500 text-sm mt-2">
        {subtitle}
      </p>

    </button>
  );
}
