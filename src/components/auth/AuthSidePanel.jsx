import logo from "../../images/logo_image.png";
import bg from "../../images/happy_gaza.png";

export default function AuthSidePanel({ buttonText, onClick }) {
  return (
    <div className="hidden md:flex w-1/2 relative overflow-hidden">
      <img
        src={bg}
        className="absolute inset-0 w-full h-full object-cover object-center"
        alt="Background"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/30 to-black/50" />

      <div className="relative z-10 px-10 py-8 text-white flex flex-col justify-between h-full">
        <div>
          <img src={logo} alt="Logo" className="h-12" />
        </div>

        <div className="flex-1 flex flex-col justify-center -mt-8">
          <h1 className="text-[45px] font-bold leading-[1.1] tracking-tight mb-5">
            Join a community
            <br />
            that
            <br />
            builds impactful
            <br />
            projects.
          </h1>

          <p className="text-[17px] text-white/80 max-w-[480px] leading-[1.5]">
            Empowering collaboration for a better world through high-end project
            management and curated community support.
          </p>
        </div>

        <div className="space-y-3.5">
          <div className="flex items-center gap-2.5">
            <div className="flex -space-x-2.5">
              <img
                src="https://i.pravatar.cc/40?img=1"
                alt="User"
                className="w-10 h-10 rounded-full border-2 border-white object-cover"
              />
              <img
                src="https://i.pravatar.cc/40?img=2"
                alt="User"
                className="w-10 h-10 rounded-full border-2 border-white object-cover"
              />
              <img
                src="https://i.pravatar.cc/40?img=3"
                alt="User"
                className="w-10 h-10 rounded-full border-2 border-white object-cover"
              />
            </div>
            <span className="text-[13px] text-white font-normal">
              Joined by 2,000+ Impact Builders
            </span>
          </div>

          <button
            onClick={onClick}
            className="bg-white text-gray-900 font-semibold text-[15px] px-9 py-2.5 rounded-full hover:bg-gray-50 transition-colors"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}
