const offers = [
  {
    title: "Share your need",
    desc: "Share your rebuilding need. Volunteers and helpers will see your project and help you.",
    img: "src/images/Landing/photo3.png",
    pos: "object-center",
    zoom: "scale-110",
  },
  {
    title: "Volunteers to help",
    desc: "Want to help? Browse projects and offer your time.",
    img: "src/images/Landing/image4.png",
    pos: "object-center",
    zoom: "scale-110",
  },
  {
    title: "Available Materials",
    desc: "Find and reserve reusable building materials near you.",
    img: "src/images/Landing/image5.png",
    pos: "object-top",
    zoom: "scale-[2.1]",
  },
  {
    title: "Offer Tools",
    desc: "Make your tools available to speed up the rebuilding work.",
    img: "src/images/Landing/image6.png",
    zoom: "scale-[2.8]",
    pos: "object-[40%_68%]",
  },
  {
    title: "Provide Transport",
    desc: "Help transport materials and volunteers where they’re needed.",
    img: "src/images/Landing/image7.png",
    pos: "object-top",
    zoom: "scale-[1.3]",
  },
];

const offsets = [-40, 70, -70, 70, -40];

export default function OfferSection() {
  return (
    <section className="px-8 md:px-12 pt-6 bg-gray-50">
      <h2 className="text-4xl font-bold text-gray-700">What do we offer to you</h2>

      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 items-start">
        {offers.map((item, i) => (
          <div
            key={item.title}
            className="flex flex-col items-center text-center"
            style={{ transform: `translateY(${offsets[i]}px)` }}
          >
            {/* Circle */}
            <div className="relative group">
              <div
                className="
                  w-40 h-40 rounded-full overflow-hidden
                  shadow-[0_10px_25px_rgba(0,0,0,0.18)]
                  ring-1 ring-black/5
                  transition-transform duration-300
                  hover:-translate-y-1 hover:scale-[1.02]
                  animate-float
                "
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  draggable="false"
                  className={[
                    "w-full h-full object-cover block",
                    item.pos,
                    item.zoom,
                  ].join(" ")}
                />
              </div>

              {/* Glow */}
              <div
                className="
                  absolute inset-0 rounded-full
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-300
                  shadow-[0_0_0_10px_rgba(99,102,241,0.06)]
                  pointer-events-none
                "
              />
            </div>

            <h3 className="mt-6 font-semibold text-gray-900">{item.title}</h3>
            <p className="mt-2 text-sm text-gray-500 max-w-[220px] leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes floaty {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        .animate-float {
          animation: floaty 3.8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
