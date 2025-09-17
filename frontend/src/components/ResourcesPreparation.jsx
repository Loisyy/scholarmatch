import { FaGraduationCap, FaBriefcase, FaRocket, FaUsers } from "react-icons/fa"

export default function SuccessStories() {
  const stories = [
    // keep your existing stories here
  ]

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
  ]

  return (
    <section id="success" className="py-20 bg-earth-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title & description */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-earth-900 mb-4">Success Stories</h2>
          <p className="text-xl text-earth-600 max-w-3xl mx-auto">
            Celebrating the achievements of our community — scholarships earned, careers launched,
            startups built, and lives changed.
          </p>
        </div>

        {/* Impact stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impactStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div
                className={`w-20 h-20 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
              >
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-earth-900 mb-2">{stat.value}</div>
              <div className="text-earth-600 font-medium">{stat.label}</div>
              <div className="text-sm text-earth-500 mt-1">{stat.subtitle}</div>
            </div>
          ))}
        </div>

        {/* Stories (optional, if you want to render them) */}
        {/* 
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-lg font-bold text-earth-900 mb-2">{story.title}</h3>
              <p className="text-earth-600">{story.description}</p>
            </div>
          ))}
        </div> 
        */}
      </div>
    </section>
  )
}
