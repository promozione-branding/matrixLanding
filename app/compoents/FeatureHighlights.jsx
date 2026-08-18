import {
  BrickWall,
  Mountain,
  Layers,
  ChartSpline,
  Weight,
  PackageOpen,
} from "lucide-react";

const FeatureHighlights = () => {
  const features = [
    {
      title: "Material",
      icon: BrickWall,
    },
    {
      title: "Texture and Finish",
      icon: Mountain,
    },
    {
      title: "Thickness",
      icon: Layers,
    },
    {
      title: "Usage Type",
      icon: ChartSpline,
    },
    {
      title: "Weight",
      icon: Weight,
    },
    {
      title: "Packaging",
      icon: PackageOpen,
    },
  ];

  return (
    <section className="px-5 bg-[#ffff] py-6">
      {/* Heading */}
      <h3 className="text-center b text-3xl font-medium">
        Feature Highlights
      </h3>

      {/* Underline */}
      <p className="border-2 w-[200px] b mx-auto mt-2"></p>

      {/* Features */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-5 mt-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <div
              key={index}
              className="flex items-center justify-center flex-col gap-2"
            >
              <Icon
                className="bg-red-300 text-white h-[68px] w-[68px] p-4 rounded-full"
              />

              <p className="font-medium b text-lg text-center">
                {feature.title}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FeatureHighlights;