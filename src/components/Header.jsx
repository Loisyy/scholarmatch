import { FaGraduationCap } from "react-icons/fa";


export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-earth-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-accent-purple to-accent-teal rounded-xl flex items-center justify-center">
                <FaGraduationCap className="text-white text-lg w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-earth-900">ScholarMatch</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <span className="text-earth-700 hover:text-accent-purple transition-colors font-medium cursor-pointer">
                Opportunities
              </span>
              <span className="text-earth-700 hover:text-accent-purple transition-colors font-medium cursor-pointer">
                Resources
              </span>
              <span className="text-earth-700 hover:text-accent-purple transition-colors font-medium cursor-pointer">
                Community
              </span>
              <span className="text-earth-700 hover:text-accent-purple transition-colors font-medium cursor-pointer">
                Success Stories
              </span>
              <span className="text-earth-700 hover:text-accent-purple transition-colors font-medium cursor-pointer">
                About
              </span>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-earth-700 hover:text-accent-purple transition-colors">
              <svg className="text-lg" fill="currentColor" viewBox="0 0 448 512" width="18" height="18">
                <path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z" />
              </svg>
            </button>
            <button className="bg-earth-100 text-earth-800 px-4 py-2 rounded-lg text-sm font-medium hover:bg-earth-200 transition-colors">
              Sign In
            </button>
            <button className="bg-gradient-to-r from-accent-purple to-accent-teal text-white px-6 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all">
              Get Started
            </button>
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <img src="/professional-woman-avatar.png" alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
