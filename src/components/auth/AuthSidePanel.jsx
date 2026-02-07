import bg from "../../images/happy_gaza.png";

export default function AuthSidePanel({
  title,
  description,
  buttonText,
  onClick,
}) {
  return (
    <div className="w-full h-full relative overflow-hidden">
      <img
        src={bg}
        className="absolute inset-0 w-full h-full object-cover object-center"
        alt="Background"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/60" />

      <div className="relative z-10 px-12 py-12 text-white flex flex-col justify-center h-full text-center items-center">
        <h1 className="text-4xl font-bold mb-6 leading-tight">{title}</h1>

        <p className="text-lg text-white/90 mb-8 max-w-sm leading-relaxed">
          {description}
        </p>

        <button
          onClick={onClick}
          className="
            border-2 border-white 
            bg-transparent 
            text-white 
            font-bold 
            text-sm 
            uppercase 
            pk-4 py-3 px-12 
            rounded-full 
            hover:bg-white hover:text-gray-900 
            transition-all duration-300
            tracking-wider
          "
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}
