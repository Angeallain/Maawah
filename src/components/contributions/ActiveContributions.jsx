import logo from "../../images/logo_image.png";

export default function ActiveContributions() {

  const cards = [
    {
      title: "Shelter Rebuild #4",
      role: "Providing Tools: Saw & Drill",
    },
    {
      title: "Community Hub",
      role: "Volunteer: Site Lead",
    },
    {
      title: "Urban Garden Tools",
      role: "Transport: Delivery",
    },
  ];

  return (
    <div>

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">
          Active Contributions
        </h2>

        <button className="text-orange-500 text-sm font-medium">
          View all active
        </button>
      </div>

      <div className="grid grid-cols-3 gap-6">

        {cards.map((card, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-6 shadow-sm"
          >
            <img src={logo} className="w-24 mb-4" />

            <h3 className="font-semibold">{card.title}</h3>

            <p className="text-sm text-gray-400 mt-1">
              Role: {card.role}
            </p>

            <button className="
              mt-5
              w-full
              bg-[#FBE4DA]
              text-[#E97A55]
              py-2
              rounded-lg
              text-sm font-medium
            ">
              Update Status
            </button>
          </div>
        ))}

      </div>

    </div>
  );
}
