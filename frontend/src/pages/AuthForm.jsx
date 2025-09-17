import { useState } from "react";
import { Link } from "react-router-dom";


const AuthForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    interests: [],
  });

  const [isRegister, setIsRegister] = useState(true); // toggle between register/sign-up

  const techStacks = [
    "React", "Vue.js", "Angular", "Node.js", "Python", "Java", "JavaScript", "TypeScript",
    "PHP", "Ruby", "Go", "Rust", "Machine Learning", "Data Science", "DevOps",
    "Mobile Development", "UI/UX Design", "Cybersecurity", "Blockchain", "Cloud Computing",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleInterestChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setFormData({ ...formData, interests: [...formData.interests, value] });
    } else {
      setFormData({
        ...formData,
        interests: formData.interests.filter((i) => i !== value),
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log(isRegister ? "Registration data:" : "Sign up data:", formData);
    // Add your backend API call here
  };

  return (
    <div className="min-h-screen bg-background py-8 px-4 flex items-center justify-center">
      <div className="max-w-2xl w-full bg-card border border-border rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            {isRegister ? "Complete Registration" : "Create Account"}
          </h1>
          <p className="text-muted-foreground">
            {isRegister
              ? "Tell us more about yourself to get personalized matches"
              : "Join ScholarMatch today"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Username *
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 text-foreground"
                placeholder="Choose a username"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 text-foreground"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Password *
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 text-foreground"
                placeholder="Create a password"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Confirm Password *
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 text-foreground"
                placeholder="Confirm your password"
              />
            </div>
          </div>

          {isRegister && (
            <>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Gender
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 text-foreground"
                >
                  <option value="">Select your gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                  <option value="prefer-not-to-say">Prefer not to say</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-4">
                  Tech Interests
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-h-64 overflow-y-auto p-4 bg-muted/20 rounded-lg border border-border">
                  {techStacks.map((tech) => (
                    <label key={tech} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        value={tech}
                        checked={formData.interests.includes(tech)}
                        onChange={handleInterestChange}
                        className="rounded border-border text-accent-purple focus:ring-accent-purple"
                      />
                      <span className="text-sm text-foreground">{tech}</span>
                    </label>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Selected: {formData.interests.length} interests
                </p>
              </div>
            </>
          )}

          <div className="flex items-center">
            <input type="checkbox" id="terms" required className="mr-2 rounded border-border" />
            <label className="text-sm text-muted-foreground">
              I agree to the <a href="#" className="text-accent-purple">Terms of Service</a> and{" "}
              <a href="#" className="text-accent-purple">Privacy Policy</a>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground py-3 px-4 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            {isRegister ? "Complete Registration" : "Create Account"}
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-muted-foreground">
            Already have an account?{" "}
            <Link
              to="/signin"
              className="text-accent-purple hover:underline font-medium"
            >
              Sign in here
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
};

export default AuthForm;
