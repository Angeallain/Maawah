import logo from "../../images/logo_image.png";
import bg from "../../images/happy_gaza.png";

export default function AuthSidePanel({ buttonText, onClick }) {
  return (
    <div className="hidden md:flex w-1/2 relative">
      <img
        src={bg}
        className="absolute inset-0 w-full h-full object-cover"/>

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 p-16 text-white flex flex-col justify-center">
        <div className="flex items-center gap-3 mb-8">
          <img src={logo} className="w-10 h-10" />
          <span className="font-semibold text-lg">ImpactBuild</span>
        </div>

        <h1 className="text-5xl font-bold leading-tight">
          Join a community
          <br />
          that builds impactful
          <br />
          projects.
        </h1>

        <p className="mt-6 text-gray-200 max-w-md">
          Empowering collaboration for a better world through high-end
          project management and curated community support.
        </p>

        <button onClick={onClick} className="mt-10 bg-white text-black px-10 py-3 rounded-xl w-fit">
          {buttonText}
        </button>
      </div>
    </div>
  );
}
