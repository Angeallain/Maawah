import { useEffect, useRef, useState } from "react";

export default function TestimonialsSection() {
  const testimonials = [
    { name: "Jenny Wilson", text: "Lorem ipsum dolor sit amet consectetur adipiscing elit.", photo: "src/images/Landing/avatar1.png" },
    { name: "Robert Fox", text: "Lorem ipsum dolor sit amet consectetur adipiscing elit.", photo: "src/images/Landing/avatar2.png" },
    { name: "Kristin Watson", text: "Lorem ipsum dolor sit amet consectetur adipiscing elit.", photo: "src/images/Landing/avatar4.png" },
    { name: "Cody Fisher", text: "Lorem ipsum dolor sit amet consectetur adipiscing elit.", photo: "src/images/Landing/avatar1.png" },
    { name: "Marvin McKinney", text: "Lorem ipsum dolor sit amet consectetur adipiscing elit.", photo: "src/images/Landing/avatar2.png" },
    { name: "Leslie Alexander", text: "Lorem ipsum dolor sit amet consectetur adipiscing elit.", photo: "src/images/Landing/avatar4.png" },
  ];

  return (
    <section className="px-8 md:px-12 py-12 md:py-16 bg-gray-50 overflow-hidden">
      {/* HEADER */}
      <div className="text-left mb-12">
        <h2 className="text-4xl font-bold text-[#6B7280]">Testimonials</h2>
        <p className="mt-2 text-gray-600">
          Hear from those whose lives have been touched by our community.
        </p>
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* LEFT (slides from left) */}
          <div className="space-y-4">
            <Reveal from="left" delay={0}>
              <div className="lg:translate-x-8">
                <TestimonialCard data={testimonials[0]} />
              </div>
            </Reveal>

            <Reveal from="left" delay={120}>
              <div className="lg:-translate-x-16">
                <TestimonialCard data={testimonials[1]} />
              </div>
            </Reveal>

            <Reveal from="left" delay={240}>
              <div className="lg:translate-x-8">
                <TestimonialCard data={testimonials[2]} />
              </div>
            </Reveal>
          </div>

          {/* CENTER (fade + scale) */}
          <Reveal from="center" delay={100}>
            <div className="flex items-center justify-center text-center px-6">
              <p
                className="
                  font-inter font-normal
                  text-[24px] leading-[32px]
                  text-[#2C3E50]
                  max-w-md
                "
              >
                Hear from those whose lives have been touched by our community.
              </p>
            </div>
          </Reveal>

          {/* RIGHT (slides from right) */}
          <div className="space-y-4">
            <Reveal from="right" delay={0}>
              <div className="lg:-translate-x-8">
                <TestimonialCard data={testimonials[3]} />
              </div>
            </Reveal>

            <Reveal from="right" delay={120}>
              <div className="lg:translate-x-16">
                <TestimonialCard data={testimonials[4]} />
              </div>
            </Reveal>

            <Reveal from="right" delay={240}>
              <div className="lg:-translate-x-8">
                <TestimonialCard data={testimonials[5]} />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * ✅ Reveal on scroll:
 * - left: slide from left + fade
 * - right: slide from right + fade
 * - center: fade + scale
 */
function Reveal({ from = "left", delay = 0, children }) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // stagger via delay
          const t = setTimeout(() => setShow(true), delay);
          obs.unobserve(entry.target);
          return () => clearTimeout(t);
        }
      },
      { threshold: 0.2 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  let hidden = "opacity-0";
  if (from === "left") hidden += " -translate-x-16";
  if (from === "right") hidden += " translate-x-16";
  if (from === "center") hidden += " scale-95";

  const visible = "opacity-100 translate-x-0 scale-100";

  return (
    <div
      ref={ref}
      className={[
        "transition-all duration-700 ease-out will-change-transform",
        show ? visible : hidden,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

/* Card */
function TestimonialCard({ data }) {
  return (
    <div className="bg-white p-5 rounded-lg border border-gray-300 shadow-sm">
      <div className="flex items-start gap-4">
        <Avatar src={data.photo} />
        <Content text={data.text} name={data.name} />
      </div>
    </div>
  );
}

function Avatar({ src }) {
  return (
    <div className="w-12 h-12 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden">
      <img src={src} alt="" className="w-full h-full object-cover" />
    </div>
  );
}

function Content({ text, name }) {
  return (
    <div className="flex-1">
      <p className="text-gray-700 text-sm mb-3">"{text}"</p>
      <p className="font-medium text-gray-900 text-sm">{name}</p>
    </div>
  );
}
