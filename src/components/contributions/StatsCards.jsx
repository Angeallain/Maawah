import { HandHeart, Clock, Package } from "lucide-react";

export default function StatsCards() {
  const cards = [
    {
      label: "PROJECTS HELPED",
      value: "12",
      change: "+20% this month",
      icon: HandHeart,
    },
    {
      label: "HOURS VOLUNTEERED",
      value: "48",
      change: "+5% since last week",
      icon: Clock,
    },
    {
      label: "RESOURCES SHARED",
      value: "15",
      change: "+10% this quarter",
      icon: Package,
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-6">

      {cards.map((card, i) => {
        const Icon = card.icon;

        return (
          <div
            key={i}
            className="bg-white rounded-2xl p-6 shadow-sm"
          >
            <div className="flex justify-between items-start">
              <p className="text-xs text-gray-400 font-semibold">
                {card.label}
              </p>
              <Icon size={18} className="text-[#E97A55]" />
            </div>

            <h2 className="text-3xl font-bold mt-3">
              {card.value}
            </h2>

            <p className="text-xs text-green-600 mt-2">
              {card.change}
            </p>
          </div>
        );
      })}

    </div>
  );
}
