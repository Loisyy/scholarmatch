import { FaPlus, FaChevronRight } from "react-icons/fa";

export default function DashboardPreview() {
  return (
    <section id="dashboard" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-earth-900 mb-6">
            Your Personalized Dashboard
          </h2>
          <p className="text-xl text-earth-600 max-w-3xl mx-auto">
            Get tailored recommendations, track deadlines, and manage your
            applications all in one place. Our AI-powered matching system
            connects you with the most relevant opportunities.
          </p>
        </div>

        <div className="bg-gradient-to-br from-earth-50 to-white rounded-3xl shadow-2xl p-8 lg:p-12">
          {/* Dashboard Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img
                  src="/professional-african-woman-avatar.jpg"
                  alt="User"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-earth-900">
                  Welcome back, Amara!
                </h3>
                <p className="text-earth-600">
                  You have 12 new opportunities waiting
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4 mt-4 lg:mt-0">
              <div className="bg-accent-purple/10 px-4 py-2 rounded-lg">
                <span className="text-accent-purple font-semibold">
                  Profile: 85% Complete
                </span>
              </div>
              <button className="bg-accent-teal text-white px-4 py-2 rounded-lg font-medium flex items-center">
                <FaPlus className="mr-2 inline w-3 h-3" />
                Add Skills
              </button>
            </div>
          </div>

          {/* Dashboard Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Recommendations */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-lg font-bold text-earth-900">
                    Recommended for You
                  </h4>
                  <button className="text-accent-purple font-medium">
                    View All
                  </button>
                </div>
                <div className="space-y-4">
                  {/* Recommendation Cards */}
                  <div className="border border-earth-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="bg-accent-purple text-white text-xs px-2 py-1 rounded-full">
                            98% Match
                          </span>
                          <span className="text-accent-coral text-xs font-medium">
                            Deadline: 5 days
                          </span>
                        </div>
                        <h5 className="font-semibold text-earth-900 mb-1">
                          Microsoft LEAP Program
                        </h5>
                        <p className="text-sm text-earth-600 mb-3">
                          Software engineering internship with full-time
                          potential
                        </p>
                        <div className="flex items-center space-x-4 text-xs text-earth-500">
                          <span>📍 Remote/Lagos</span>
                          <span>💰 $2,000/month</span>
                          <span>⏰ 6 months</span>
                        </div>
                      </div>
                      <button className="bg-accent-purple text-white px-4 py-2 rounded-lg text-sm font-medium">
                        Apply Now
                      </button>
                    </div>
                  </div>

                  <div className="border border-earth-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="bg-accent-teal text-white text-xs px-2 py-1 rounded-full">
                            95% Match
                          </span>
                          <span className="text-accent-coral text-xs font-medium">
                            Deadline: 12 days
                          </span>
                        </div>
                        <h5 className="font-semibold text-earth-900 mb-1">
                          SheCodes Africa Scholarship
                        </h5>
                        <p className="text-sm text-earth-600 mb-3">
                          Full scholarship for African women in stem
                        </p>
                        <div className="flex items-center space-x-4 text-xs text-earth-500">
                          <span>🎓 Bootcamps/Fellowship</span>
                          <span>save 💰 $10,000</span>
                          <span>🌍 Global</span>
                        </div>
                      </div>
                      <button className="bg-accent-teal text-white px-4 py-2 rounded-lg text-sm font-medium">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats & Actions */}
            <div className="space-y-6">
              {/* Progress Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h4 className="text-lg font-bold text-earth-900 mb-4">
                  Your Progress
                </h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-earth-600">Profile Completion</span>
                      <span className="font-semibold text-earth-900">85%</span>
                    </div>
                    <div className="w-full bg-earth-200 rounded-full h-2">
                      <div
                        className="bg-accent-purple h-2 rounded-full"
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-earth-600">Applications Sent</span>
                      <span className="font-semibold text-earth-900">7/10</span>
                    </div>
                    <div className="w-full bg-earth-200 rounded-full h-2">
                      <div
                        className="bg-accent-teal h-2 rounded-full"
                        style={{ width: "70%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-earth-600">Skills Assessment</span>
                      <span className="font-semibold text-earth-900">60%</span>
                    </div>
                    <div className="w-full bg-earth-200 rounded-full h-2">
                      <div
                        className="bg-accent-coral h-2 rounded-full"
                        style={{ width: "60%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Deadline Reminders */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h4 className="text-lg font-bold text-earth-900 mb-4">
                  Upcoming Deadlines
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-accent-coral/10 rounded-lg">
                    <div className="w-3 h-3 bg-accent-coral rounded-full"></div>
                    <div className="flex-1">
                      <div className="font-medium text-earth-900 text-sm">
                        Microsoft LEAP
                      </div>
                      <div className="text-xs text-earth-600">5 days left</div>
                    </div>
                    <FaChevronRight className="text-earth-400 w-3 h-3" />
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-accent-purple/10 rounded-lg">
                    <div className="w-3 h-3 bg-accent-purple rounded-full"></div>
                    <div className="flex-1">
                      <div className="font-medium text-earth-900 text-sm">
                        SheCodes Africa
                      </div>
                      <div className="text-xs text-earth-600">12 days left</div>
                    </div>
                    <FaChevronRight className="text-earth-400 w-3 h-3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
