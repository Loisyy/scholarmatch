import { FaBrain, FaCheckCircle, FaArrowRight } from "react-icons/fa"

export default function SkillMatching() {
  const skills = [
    { name: "Python", level: "Advanced", percentage: 90, color: "accent-purple" },
    { name: "JavaScript", level: "Intermediate", percentage: 75, color: "accent-teal" },
    { name: "Machine Learning", level: "Beginner", percentage: 45, color: "accent-coral" },
    { name: "React", level: "Intermediate", percentage: 70, color: "accent-purple" },
  ]

  const recommendedSkills = ["TensorFlow", "AWS", "Docker"]

  return (
    <section id="skill-matching" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-accent-teal/10 rounded-full">
                <FaBrain className="text-accent-teal mr-2" size={16} />
                <span className="text-accent-teal font-medium text-sm">AI-Powered Matching</span>
              </div>

              <h2 className="text-4xl font-bold text-earth-900">
                Smart Skill Matching for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-teal to-accent-purple">
                  Perfect Opportunities
                </span>
              </h2>
              <p className="text-xl text-earth-600 leading-relaxed">
                Our advanced algorithm analyzes your skills, experience, and career goals to match you with the most
                relevant opportunities. The more you use ScholarMatch, the smarter it gets.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-6">
              {[
                {
                  title: "Skills Assessment",
                  text: "Complete our comprehensive skills assessment to get personalized recommendations based on your technical abilities and interests.",
                  color: "accent-teal",
                },
                {
                  title: "Career Path Planning",
                  text: "Set your career goals and let our system recommend the best opportunities to help you achieve them step by step.",
                  color: "accent-purple",
                },
                {
                  title: "Continuous Learning",
                  text: "Get recommendations for courses, certifications, and resources to fill skill gaps and strengthen your applications.",
                  color: "accent-coral",
                },
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div
                    className={`w-8 h-8 bg-${feature.color}/20 rounded-lg flex items-center justify-center flex-shrink-0`}
                  >
                    <FaCheckCircle className={`text-${feature.color}`} size={14} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-earth-900 mb-2">{feature.title}</h3>
                    <p className="text-earth-600">{feature.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button className="bg-gradient-to-r from-accent-teal to-accent-purple text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center">
              Take Skills Assessment
              <FaArrowRight className="ml-2" size={16} />
            </button>
          </div>

          {/* Right content - Skill profile */}
          <div className="relative">
            <div className="bg-gradient-to-br from-earth-50 to-white rounded-3xl shadow-2xl p-8">
              {/* Skill Bars */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-earth-900 mb-4">Your Skill Profile</h3>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-earth-700">{skill.name}</span>
                        <span className={`text-sm font-semibold text-${skill.color}`}>{skill.level}</span>
                      </div>
                      <div className="w-full bg-earth-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full bg-${skill.color}`}
                          style={{ width: `${skill.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommended Skills */}
              <div className="border-t border-earth-200 pt-6">
                <h4 className="text-md font-bold text-earth-900 mb-4">Recommended Skills to Learn</h4>
                <div className="flex flex-wrap gap-2">
                  {recommendedSkills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-accent-teal/10 text-accent-teal px-3 py-1 rounded-full text-sm font-medium"
                    >
                      + {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Match Score */}
              <div className="mt-6 p-4 bg-gradient-to-r from-accent-purple/10 to-accent-teal/10 rounded-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <h5 className="font-semibold text-earth-900">Match Score</h5>
                    <p className="text-sm text-earth-600">Based on current skills</p>
                  </div>
                  <div className="text-3xl font-bold text-accent-purple">92%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
