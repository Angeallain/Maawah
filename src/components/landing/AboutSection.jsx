export default function AboutSection() {
  return (
    <section className="px-8 md:px-12 py-16 md:py-20 grid md:grid-cols-2 gap-12 md:gap-16 items-center bg-gray-50">
      
      {/* TEXT */}
      <div>
        <h2 className="text-5xl md:text-6xl font-bold text-[#6B7280] mb-6 md:mb-8">
          About us
        </h2>

        <p className="text-gray-600 leading-relaxed text-2xl md:text-xl">
          Our platform connects communities affected by devastation, linking those who need help with volunteers, tools, materials, and transportation.
          <span className="block mt-4">
            Simply share your need to get support, or offer your time and resources to help others.
          </span>
        </p>

        <p className="mt-6 md:mt-8 text-gray-600 text-2xl md:text-xl leading-relaxed">
          No money involved, just generosity, solidarity, and a shared mission to rebuild stronger, safer homes.
        </p>
      </div>

      {/* IMAGES — clean, no edges */}
      <div className="relative h-[420px] w-full">
        
        {/* TOP IMAGE */}
        <img
          src="src/images/Landing/photo2.png"
          alt="Community helping"
          className="
            absolute
            top-0 right-10
            w-[340px] md:w-[400px]
            aspect-[4/3]
            object-cover
          "
        />

        {/* BOTTOM IMAGE */}
        <img
          src="src/images/Landing/photo1.png"
          alt="Rebuilding homes"
          className="
            absolute
            bottom-0 left-14

            w-[300px] md:w-[360px]
            aspect-[4/3]
            object-cover
            z-10
          "
        />
      </div>

    </section>
  );
}
