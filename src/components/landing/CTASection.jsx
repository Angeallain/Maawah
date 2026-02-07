export default function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          
          {/* COLONNE GAUCHE : Image avec texte centré */}
          <div className="relative rounded-3xl overflow-hidden shadow-lg h-full min-h-[500px]">
            {/* Image */}
            <img
              src="src/images/Landing/forum.png"
              alt="Community impact"
              className="w-full h-full object-cover"
            />
            
            {/* Overlay avec texte CENTRÉ */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-left text-white px-8 md:px-12 max-w-xl">
                <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                  Ready to make an impact?
                </h3>
                <p className="mt-3 text-lg text-gray-200 mb-6">
                  Join our community today.
                </p>
                
                {/* Texte descriptif supplémentaire */}
                <p className="text-base md:text-lg text-gray-100 leading-relaxed">
                  Whether you have tools to lend, hands to work, or a project that needs help, we're here to bridge the gap.
                </p>
                
                {/* Statistique avec avatars */}
                <div className="mt-8 pt-6 border-t border-white/20 flex items-center justify-center gap-4">
                  {/* Avatars des membres */}
                  <div className="flex -space-x-3">
                    <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop" 
                        alt="Member 1"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" 
                        alt="Member 2"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop" 
                        alt="Member 3"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  <p className="text-left text-xl font-semibold">
                    Join 1,200+ members
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* COLONNE DROITE : Formulaire (reste le même) */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-gray-100 h-full flex flex-col justify-center">
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                Create Account
              </h3>
              <div className="mt-3 h-1 w-16 bg-[#6B8E23]"></div>
            </div>

            <form className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <input 
                    type="text" 
                    placeholder="Jane Doe" 
                    className="w-full border border-gray-300 rounded-xl pl-12 pr-4 py-3.5 focus:ring-2 focus:ring-[#6B8E23] focus:border-[#6B8E23] outline-none transition"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <input 
                    type="email" 
                    placeholder="jane@company.com" 
                    className="w-full border border-gray-300 rounded-xl pl-12 pr-4 py-3.5 focus:ring-2 focus:ring-[#6B8E23] focus:border-[#6B8E23] outline-none transition"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <input 
                    type="tel" 
                    placeholder="+1 (555) 000-0000" 
                    className="w-full border border-gray-300 rounded-xl pl-12 pr-4 py-3.5 focus:ring-2 focus:ring-[#6B8E23] focus:border-[#6B8E23] outline-none transition"
                  />
                </div>
              </div>

              {/* Password et Confirm Password */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Password */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <input 
                      type="password" 
                      placeholder="••••••••••••" 
                      className="w-full border border-gray-300 rounded-xl pl-12 pr-10 py-3.5 focus:ring-2 focus:ring-[#6B8E23] focus:border-[#6B8E23] outline-none transition"
                    />
                    <button 
                      type="button" 
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Confirm Password */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <input 
                      type="password" 
                      placeholder="••••••••••••" 
                      className="w-full border border-gray-300 rounded-xl pl-12 pr-10 py-3.5 focus:ring-2 focus:ring-[#6B8E23] focus:border-[#6B8E23] outline-none transition"
                    />
                    <button 
                      type="button" 
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Bouton Create Account */}
              <button 
                type="submit" 
                className="w-full bg-[#6B8E23] hover:bg-[#5a7c1c] text-white py-4 rounded-xl font-semibold text-lg transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 mt-2"
              >
                Create Account
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}