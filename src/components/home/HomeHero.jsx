import hero from "../../images/happy_gaza.png";

export default function HomeHero() {
  return (
    <section className="relative h-[420px] rounded-[28px] overflow-hidden">

      <img
        src={hero}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-6">

        <span className="text-xs bg-white/20 px-4 py-1 rounded-full mb-6">
          RECOVERY & RESTORATION HUB
        </span>

        <h1 className="text-[48px] font-bold max-w-4xl leading-tight">
          Restoring Stability,
          <br />
          <span className="text-[#FF8C5A]">
            One Community
          </span>{" "}
          at a Time.
        </h1>

        <p className="mt-5 text-gray-200 max-w-2xl">
          Track, contribute, and witness the rebuilding of lives and infrastructure.
        </p>

        <button className="mt-8 bg-[#6B8E23] px-8 py-3 rounded-xl font-semibold">
          Create a Project
        </button>

      </div>
    </section>
  );
}
