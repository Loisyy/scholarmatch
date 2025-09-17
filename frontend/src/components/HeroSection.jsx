import { FaStar, FaArrowRight } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="bg-gradient-to-br from-earth-50 via-white to-accent-purple/5 h-[700px] flex items-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-accent-purple/10 rounded-full">
                <FaStar className="text-accent-purple mr-2" />
                <span className="text-accent-purple font-medium text-sm">
                  Empowering African Women in Tech
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-earth-900 leading-tight">
                Your Gateway to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-teal">
                  Tech Excellence
                </span>
              </h1>
              <p className="text-xl text-earth-600 leading-relaxed">
                Connect with scholarships, internships, and grants designed
                specifically for young women in tech across Africa. Build your
                future with personalized opportunities and expert guidance.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#opportunities"
                className="bg-gradient-to-r from-accent-purple to-accent-teal text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center"
              >
                Start Your Journey
                <FaArrowRight className="ml-2" />
              </a>

              <a
                href="#resources"
                className="border-2 border-earth-300 text-earth-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-accent-purple hover:text-accent-purple transition-all text-center"
              >
                Explore Opportunities
              </a>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-earth-900">2,500+</div>
                <div className="text-sm text-earth-600">Active Scholarships</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-earth-900">850+</div>
                <div className="text-sm text-earth-600">Success Stories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-earth-900">45</div>
                <div className="text-sm text-earth-600">Countries</div>
              </div>
            </div>
          </div>

          {/* Right content (image + card) */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-accent-purple/20 to-accent-teal/20 rounded-3xl transform rotate-3"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl p-8">
              <img
                className="w-full h-80 rounded-2xl object-cover"
                src="/young-african-women-coding-together--diverse-group.jpg"
                alt="Young African women coding together"
              />
              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-earth-600 font-medium">
                    Next Deadline
                  </span>
                  <span className="text-accent-coral font-bold">3 days left</span>
                </div>
                <div className="bg-earth-50 rounded-lg p-4">
                  <h3 className="font-semibold text-earth-900">
                    Google Women Techmakers Scholarship
                  </h3>
                  <p className="text-sm text-earth-600 mt-1">
                    Full tuition + mentorship program
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
