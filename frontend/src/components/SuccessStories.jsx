import { FaGraduationCap, FaBriefcase, FaRocket, FaUsers } from "react-icons/fa";

export default function SuccessStories() {
  const stories = [
    // ... your existing stories
  ];

  const impactStats = [
    {
      icon: <FaGraduationCap className="text-white text-2xl" />,
      value: "2,847",
      label: "Scholarships Awarded",
      subtitle: "Total value: $15.2M",
      gradient: "from-accent-purple to-accent-purple/80",
    },
    {
      icon: <FaBriefcase className="text-white text-2xl" />,
      value: "1,523",
      label: "Job Placements",
      subtitle: "Avg. salary: $78,000",
      gradient: "from-accent-teal to-accent-teal/80",
    },
    {
      icon: <FaRocket className="text-white text-2xl" />,
      value: "247",
      label: "Startups Founded",
      subtitle: "Combined valuation: $180M",
      gradient: "from-accent-coral to-accent-coral/80",
    },
    {
      icon: <FaUsers className="text-white text-2xl" />,
      value: "15,000+",
      label: "Community Members",
      subtitle: "Across 45 countries",
      gradient: "from-accent-rose to-accent-rose/80",
    },
  ];

  return (
    <section id="success-stories" className="py-20 bg-earth-50">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {impactStats.map((stat, index) => (
          <div key={index} className="text-center">
            <div
              className={`w-20 h-20 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4`}
            >
              {stat.icon}
            </div>
            <div className="text-3xl font-bold text-earth-900 mb-2">{stat.value}</div>
            <div className="text-earth-600 font-medium">{stat.label}</div>
            <div className="text-sm text-earth-500 mt-1">{stat.subtitle}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
