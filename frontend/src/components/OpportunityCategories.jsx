export default function OpportunityCategories() {
  const categories = [
    {
      title: "Scholarships",
      description:
        "Full and partial scholarships for undergraduate and graduate programs in computer science, engineering, and related fields.",
      icon: "🎓",
      gradient: "from-accent-purple to-accent-purple/80",
      stats: [
        { label: "Available Now", value: "1,247", color: "accent-purple" },
        { label: "Total Value", value: "$2.8M+", color: "accent-purple" },
        { label: "Success Rate", value: "68%", color: "accent-purple" },
      ],
      buttonText: "Browse Scholarships",
      buttonColor: "bg-accent-purple hover:bg-accent-purple/90",
    },
    {
      title: "Internships",
      description:
        "Paid internships at leading tech companies, startups, and NGOs across Africa and globally.",
      icon: "💼",
      gradient: "from-accent-teal to-accent-teal/80",
      stats: [
        { label: "Available Now", value: "843", color: "accent-teal" },
        { label: "Avg. Stipend", value: "$1,500/mo", color: "accent-teal" },
        { label: "Placement Rate", value: "82%", color: "accent-teal" },
      ],
      buttonText: "Find Internships",
      buttonColor: "bg-accent-teal hover:bg-accent-teal/90",
    },
    {
      title: "Research Grants",
      description:
        "Funding for research projects, conference attendance, and innovative tech solutions addressing African challenges.",
      icon: "💰",
      gradient: "from-accent-coral to-accent-coral/80",
      stats: [
        { label: "Available Now", value: "312", color: "accent-coral" },
        { label: "Avg. Amount", value: "$5,000", color: "accent-coral" },
        { label: "Success Rate", value: "45%", color: "accent-coral" },
      ],
      buttonText: "Apply for Grants",
      buttonColor: "bg-accent-coral hover:bg-accent-coral/90",
    },
    {
      title: "Bootcamps",
      description:
        "Intensive coding bootcamps and skill development programs with job placement assistance.",
      icon: "💻",
      gradient: "from-accent-rose to-accent-rose/80",
      stats: [
        { label: "Programs", value: "127", color: "accent-rose" },
        { label: "Duration", value: "3-6 months", color: "accent-rose" },
        { label: "Job Placement", value: "89%", color: "accent-rose" },
      ],
      buttonText: "Join Bootcamp",
      buttonColor: "bg-accent-rose hover:bg-accent-rose/90",
    },
    {
      title: "Mentorship",
      description:
        "Connect with industry professionals and successful women in tech for guidance and career support.",
      icon: "👥",
      gradient: "from-earth-600 to-earth-500",
      stats: [
        { label: "Mentors", value: "450+", color: "earth-700" },
        { label: "Companies", value: "120+", color: "earth-700" },
        { label: "Match Rate", value: "95%", color: "earth-700" },
      ],
      buttonText: "Find Mentor",
      buttonColor: "bg-earth-600 hover:bg-earth-700",
    },
    {
      title: "Conferences",
      description:
        "Sponsored tickets and travel grants for major tech conferences, workshops, and networking events.",
      icon: "📅",
      gradient: "from-accent-purple/80 to-accent-teal/80",
      stats: [
        { label: "Events", value: "89", color: "accent-purple" },
        { label: "Avg. Value", value: "$2,500", color: "accent-purple" },
        { label: "Network Size", value: "10K+", color: "accent-purple" },
      ],
      buttonText: "Browse Events",
      buttonColor:
        "bg-gradient-to-r from-accent-purple to-accent-teal hover:shadow-lg",
    },
  ];

  return (
    <section id="opportunities" className="py-20 bg-earth-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-earth-900 mb-6">
            Explore Opportunities by Category
          </h2>
          <p className="text-xl text-earth-600 max-w-3xl mx-auto">
            From scholarships to internships, grants to mentorship programs -
            find the perfect opportunity to advance your tech career.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow group"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
              >
                <span className="text-white text-2xl">{category.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-earth-900 mb-4">
                {category.title}
              </h3>
              <p className="text-earth-600 mb-6">{category.description}</p>
              <div className="space-y-3 mb-6">
                {category.stats.map((stat, statIndex) => (
                  <div
                    key={statIndex}
                    className="flex justify-between text-sm"
                  >
                    <span className="text-earth-600">{stat.label}</span>
                    <span className={`font-semibold text-${stat.color}`}>
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
              <button
                className={`w-full ${category.buttonColor} text-white py-3 rounded-lg font-medium transition-all`}
              >
                {category.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
