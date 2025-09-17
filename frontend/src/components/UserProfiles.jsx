import { FaEdit, FaFolderOpen, FaLink, FaTrophy, FaCheck, FaTimes, FaUsers } from "react-icons/fa"

export default function UserProfiles() {
  const skills = [
    { name: "Python", level: "Expert", percentage: 95, color: "accent-purple" },
    { name: "Java", level: "Advanced", percentage: 85, color: "accent-teal" },
    { name: "TensorFlow", level: "Intermediate", percentage: 70, color: "accent-coral" },
    { name: "React", level: "Advanced", percentage: 80, color: "accent-purple" },
    { name: "SQL", level: "Advanced", percentage: 85, color: "accent-teal" },
    { name: "Git", level: "Advanced", percentage: 85, color: "accent-coral" },
  ]

  const projects = [
    {
      title: "MalaPredict AI",
      category: "Machine Learning • Healthcare",
      description:
        "AI model that predicts malaria outbreaks using climate data and historical patterns. Achieved 87% accuracy in early outbreak detection.",
      technologies: ["Python", "TensorFlow", "Pandas"],
    },
    {
      title: "EduConnect Platform",
      category: "Full-Stack • Education",
      description:
        "Web platform connecting rural students with online educational resources. Currently serving 500+ students across 3 states.",
      technologies: ["React", "Node.js", "MongoDB"],
    },
  ]

  const achievements = [
    { title: "Google Code-in Winner", description: "Open source contribution award • 2023", color: "accent-purple" },
    { title: "Dean's List", description: "Top 5% of class • 2022, 2023", color: "accent-teal" },
    { title: "Hackathon Champion", description: "Lagos Tech Week • 2023", color: "accent-coral" },
  ]

  return (
    <section className="py-20 bg-earth-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-earth-900 mb-6">Build Your Professional Profile</h2>
          <p className="text-xl text-earth-600 max-w-3xl mx-auto">
            Create a comprehensive profile that showcases your skills, achievements, and aspirations. Stand out to
            scholarship committees and employers.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Preview */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              {/* Profile Header */}
              <div className="bg-gradient-to-r from-accent-purple to-accent-teal h-32 relative">
                <div className="absolute -bottom-12 left-8">
                  <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden">
                    <img src="/professional-african-woman.png" alt="Profile" className="w-full h-full object-cover" />
                  </div>
                </div>
                <button className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center space-x-2">
                  <FaEdit />
                  <span>Edit Profile</span>
                </button>
              </div>

              {/* Profile Content */}
              <div className="pt-16 p-8">
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-earth-900">Kemi Adebayo</h3>
                      <p className="text-earth-600">Computer Science Student • University of Lagos</p>
                      <p className="text-sm text-earth-500 mt-1">Lagos, Nigeria • Available for remote opportunities</p>
                    </div>
                    <div className="text-right">
                      <div className="bg-accent-purple/10 px-3 py-1 rounded-full inline-block">
                        <span className="text-accent-purple font-semibold text-sm">Profile: 95% Complete</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-earth-50 rounded-2xl p-6 mb-6">
                    <h4 className="font-semibold text-earth-900 mb-3">About Me</h4>
                    <p className="text-earth-600 leading-relaxed">
                      Passionate computer science student with a focus on artificial intelligence and machine learning.
                      I'm particularly interested in using technology to solve problems in healthcare and education
                      across Africa. Currently working on a project that uses ML to predict malaria outbreaks in rural
                      communities.
                    </p>
                  </div>
                </div>

                {/* Skills Section */}
                <div className="mb-8">
                  <h4 className="font-semibold text-earth-900 mb-4">Technical Skills</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[skills.slice(0, 3), skills.slice(3)].map((group, i) => (
                      <div key={i} className="space-y-3">
                        {group.map((skill, index) => (
                          <div key={index}>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm font-medium text-earth-700">{skill.name}</span>
                              <span className={`text-sm text-${skill.color}`}>{skill.level}</span>
                            </div>
                            <div className="w-full bg-earth-200 rounded-full h-2">
                              <div
                                className={`bg-${skill.color} h-2 rounded-full`}
                                style={{ width: `${skill.percentage}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Projects Section */}
                <div className="mb-8">
                  <h4 className="font-semibold text-earth-900 mb-4">Featured Projects</h4>
                  <div className="space-y-4">
                    {projects.map((project, index) => (
                      <div key={index} className="border border-earth-200 rounded-xl p-4">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h5 className="font-semibold text-earth-900">{project.title}</h5>
                            <p className="text-sm text-earth-600">{project.category}</p>
                          </div>
                          <div className="flex space-x-3 text-lg">
                            <FaFolderOpen className="text-accent-purple hover:text-accent-purple/80 cursor-pointer" />
                            <FaLink className="text-accent-teal hover:text-accent-teal/80 cursor-pointer" />
                          </div>
                        </div>
                        <p className="text-sm text-earth-600 mb-3">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="bg-accent-purple/10 text-accent-purple px-2 py-1 rounded text-xs"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Achievements Section */}
                <div className="mb-8">
                  <h4 className="font-semibold text-earth-900 mb-4">Achievements & Awards</h4>
                  <div className="space-y-3">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div
                          className={`w-8 h-8 bg-${achievement.color}/20 rounded-full flex items-center justify-center`}
                        >
                          <FaTrophy className={`text-${achievement.color}`} />
                        </div>
                        <div>
                          <div className="font-medium text-earth-900">{achievement.title}</div>
                          <div className="text-sm text-earth-600">{achievement.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Goals Section */}
                <div>
                  <h4 className="font-semibold text-earth-900 mb-4">Career Goals</h4>
                  <div className="bg-gradient-to-r from-accent-purple/10 to-accent-teal/10 rounded-xl p-6">
                    <p className="text-earth-700 leading-relaxed">
                      I aspire to become a machine learning engineer specializing in healthcare applications. My goal is
                      to pursue a Master's degree in AI at a top university and eventually start a company that develops
                      AI solutions for African healthcare challenges.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Tips & Activity */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h4 className="text-lg font-bold text-earth-900 mb-4">Profile Optimization Tips</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-accent-purple/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FaCheck className="text-accent-purple text-xs" />
                  </div>
                  <div>
                    <div className="font-medium text-earth-900 text-sm">Professional Photo</div>
                    <div className="text-xs text-earth-600">Use a clear, professional headshot</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-accent-teal/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FaCheck className="text-accent-teal text-xs" />
                  </div>
                  <div>
                    <div className="font-medium text-earth-900 text-sm">Detailed Skills</div>
                    <div className="text-xs text-earth-600">List all relevant technical skills</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-accent-coral/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FaTimes className="text-accent-coral text-xs" />
                  </div>
                  <div>
                    <div className="font-medium text-earth-900 text-sm">Project Portfolio</div>
                    <div className="text-xs text-earth-600">Add 2-3 significant projects</div>
                  </div>
                </div>
              </div>
              <button className="w-full bg-accent-purple text-white py-3 rounded-lg font-medium text-sm mt-4">
                Complete Profile
              </button>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h4 className="text-lg font-bold text-earth-900 mb-4">Recent Activity</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm">
                  <div className="w-2 h-2 bg-accent-purple rounded-full"></div>
                  <span className="text-earth-600">Updated skills assessment</span>
                  <span className="text-earth-400">2h ago</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <div className="w-2 h-2 bg-accent-teal rounded-full"></div>
                  <span className="text-earth-600">Added new project</span>
                  <span className="text-earth-400">1d ago</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <div className="w-2 h-2 bg-accent-coral rounded-full"></div>
                  <span className="text-earth-600">Profile viewed by 3 organizations</span>
                  <span className="text-earth-400">2d ago</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-accent-purple/10 to-accent-teal/10 rounded-2xl p-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-purple to-accent-teal rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <FaUsers className="text-white text-2xl" />
                </div>
                <h4 className="font-bold text-earth-900 mb-2">Join Our Community</h4>
                <p className="text-sm text-earth-600 mb-4">
                  Connect with other women in tech, share experiences, and grow together.
                </p>
                <button className="bg-gradient-to-r from-accent-purple to-accent-teal text-white px-6 py-2 rounded-lg font-medium text-sm">
                  Join Community
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
