import { HandCoins, FastForward, Airplay, PanelsTopLeft } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      title: "Maximize your profit Margins",
      icon: HandCoins,
    },
    {
      title: "Fast Ordering",
      icon: FastForward,
    },
    {
      title: "Streamline Your Operations",
      icon: Airplay,
    },
    {
      title: "Wholesale & Retail Options",
      icon: PanelsTopLeft,
    },
  ];

  return (
    <section className="bg-[#F5F1DC] grid grid-cols-2 md:grid-cols-4 px-3 gap-3 py-4 -mt-5">
      {benefits.map((benefit, index) => {
        const Icon = benefit.icon;

        return (
          <div key={index} className="flex gap-3 items-center">
            {/* Icon */}
            <span className="bg-[#DE1E26] p-2 md:p-3 text-white rounded-full shrink-0">
              <Icon className="w-5 h-5 md:w-8 md:h-8" />
            </span>

            {/* Text */}
            <p className="text-sm b font-bold">{benefit.title}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Benefits;
