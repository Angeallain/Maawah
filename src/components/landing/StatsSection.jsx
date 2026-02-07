export default function StatsSection() {
  const stats = [
    { 
      value: "5k+", 
      label: "Lives Impacted",
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 20.408c-.492.308-.903.546-1.192.709-.153.086-.308.17-.463.252h-.002a.75.75 0 01-.686 0 16.709 16.709 0 01-.465-.252 31.147 31.147 0 01-4.803-3.34C3.8 15.572 1 12.331 1 8.513 1 5.052 3.829 2.5 6.736 2.5 9.03 2.5 10.881 3.726 12 5.605 13.12 3.726 14.97 2.5 17.264 2.5 20.17 2.5 23 5.052 23 8.514c0 3.818-2.801 7.06-5.389 9.262A31.146 31.146 0 0114 20.408z"/>
        </svg>
      )
    },
    { 
      value: "450", 
      label: "Projects Completed",
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 00-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"/>
        </svg>
      )
    },
    { 
      value: "1.2k", 
      label: "Active Volunteers",
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clipRule="evenodd"/>
          <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z"/>
        </svg>
      )
    },
  ];

  return (
    <>
      <section className="px-8 md:px-12 py-16 md:py-20">
        <div className="grid md:grid-cols-3 gap-12 md:gap-16 max-w-6xl mx-auto">
          {stats.map((s, i) => (
            <div 
              key={i} 
              className="bg-white rounded-2xl shadow-lg p-10 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center"
              style={{
                opacity: 0,
                transform: 'translateY(80px)',
                animation: `fadeUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${i * 0.2}s forwards`
              }}
            >
              {/* Carré orange avec icône centrée */}
              <div className="text-[#E64C19] mb-6">
                {s.icon}
              </div>

              {/* Valeur */}
              <h3 className="text-4xl md:text-5xl font-bold text-gray-800">{s.value}</h3>
              
              {/* Label */}
              <p className="text-gray-600 mt-4 text-lg">{s.label}</p>
              
              {/* Ligne orange décorative */}
              <div className="mt-8 h-1 w-16 bg-orange-500 rounded-full"></div>
            </div>
          ))}
        </div>
      </section>

      <style jsx global>{`
        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(80px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}