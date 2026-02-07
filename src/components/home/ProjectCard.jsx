import { useState } from "react";
import ContributeModal from "../contributions/ContributeModal";

export default function ProjectCard({ title, description, progress }) {
  const [showContribute, setShowContribute] = useState(false);

  return (
    <>
      <div className="bg-white rounded-[28px] p-6 shadow-sm border border-gray-100">
        <img
          src="src/images/logo_image.png"
          className="w-[310px] h-auto object-contain mb-6"
        />

        <div className="flex items-center gap-1 text-xs text-gray-500 mb-1">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
          <span>GAZA CITY – CENTRAL DISTRICT</span>
        </div>

        <h3 className="text-xl font-semibold mb-3">{title}</h3>

        <p className="text-sm text-gray-600 leading-relaxed mb-6">
          {description}
        </p>

        <div className="flex gap-6 mb-6">
          <div className="flex flex-col items-center gap-1">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
            <span className="text-xs text-gray-500">Tools</span>
          </div>

          <div className="flex flex-col items-center gap-1">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
              />
            </svg>
            <span className="text-xs text-gray-500">Materials</span>
          </div>

          <div className="flex flex-col items-center gap-1">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="text-xs text-gray-500">People</span>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-semibold text-[#FF8C5A]">
              GROWTH INDICATOR
            </span>
            <span className="text-xs font-semibold">{progress}%</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full">
            <div
              className="h-full bg-[#FF8C5A] rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <button
          onClick={() => setShowContribute(true)}
          className="mt-6 w-full border transition-colors duration-300 ease-in-out border-[#6B8E23] hover:bg-[#6B8E23] hover:text-white text-[#6B8E23] py-3 rounded-full font-semibold"
        >
          Contribute Now
        </button>
      </div>

      {showContribute && (
        <ContributeModal
          projectTitle={title}
          onClose={() => setShowContribute(false)}
        />
      )}
    </>
  );
}
