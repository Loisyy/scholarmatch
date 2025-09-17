import { FaGraduationCap, FaBell } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link"; // Smooth scroll

export default function Header() {
  const navigate = useNavigate();

  const handleLogoClick = (e) => {
    e.preventDefault();
    // Navigate to home first
    navigate("/");

    // Scroll to hero after a short delay
    setTimeout(() => {
      const heroSection = document.getElementById("hero");
      heroSection?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  return (
    <header className="bg-white shadow-sm border-b border-earth-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo + Nav */}
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <a
              href="/#hero"
              onClick={handleLogoClick}
              className="flex items-center space-x-2"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-accent-purple to-accent-teal rounded-xl flex items-center justify-center">
                <FaGraduationCap className="text-white text-lg w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-earth-900">
                ScholarMatch
              </span>
            </a>

            {/* Nav Links */}
            <nav className="hidden md:flex space-x-8">
              <HashLink smooth to="#opportunities" className="text-earth-700 hover:text-accent-purple transition-colors font-medium">
                Opportunities
              </HashLink>
              <HashLink smooth to="#community" className="text-earth-700 hover:text-accent-purple transition-colors font-medium">
                Community
              </HashLink>
              <HashLink smooth to="#resources" className="text-earth-700 hover:text-accent-purple transition-colors font-medium">
                Resources
              </HashLink>
              <HashLink smooth to="#success-stories" className="text-earth-700 hover:text-accent-purple transition-colors font-medium">
                Success Stories
              </HashLink>
              <HashLink smooth to="#about" className="text-earth-700 hover:text-accent-purple transition-colors font-medium">
                About
              </HashLink>
            </nav>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button aria-label="Notifications" className="text-earth-700 hover:text-accent-purple transition-colors">
              <FaBell className="text-lg text-gray-800" />
            </button>

            <Link to="/signin" className="bg-gradient-to-r from-accent-purple to-accent-teal text-white px-6 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all">
              Sign In
            </Link>

            <Link to="/register" className="bg-gradient-to-r from-accent-purple to-accent-teal text-white px-6 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all">
              Register/Sign Up 
            </Link>

            {/* Profile Avatar */}
            <Link to="/profile" className="w-8 h-8 rounded-full overflow-hidden">
              <img
                src="/professional-woman-avatar.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
