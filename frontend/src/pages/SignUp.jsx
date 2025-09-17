"use client"

import { useState } from "react"

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!")
      return
    }
    console.log("Sign up data:", formData)
    // Add your sign up logic here
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-earth-100 to-earth-200 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-card border border-earth-200 rounded-lg shadow-xl p-8 backdrop-blur-sm">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-earth-800 mb-2">Create Account</h1>
            <p className="text-earth-600">Join ScholarMatch today</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-earth-700 mb-2">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-earth-50 border border-earth-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-coral focus:border-accent-coral text-earth-800 placeholder-earth-500 transition-all duration-200"
                placeholder="Choose a username"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-earth-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-earth-50 border border-earth-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-coral focus:border-accent-coral text-earth-800 placeholder-earth-500 transition-all duration-200"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-earth-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-earth-50 border border-earth-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-coral focus:border-accent-coral text-earth-800 placeholder-earth-500 transition-all duration-200"
                placeholder="Create a password"
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-earth-700 mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-earth-50 border border-earth-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-coral focus:border-accent-coral text-earth-800 placeholder-earth-500 transition-all duration-200"
                placeholder="Confirm your password"
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                required
                className="mr-2 rounded border-earth-300 text-accent-coral focus:ring-accent-coral"
              />
              <label htmlFor="terms" className="text-sm text-earth-600">
                I agree to the{" "}
                <a href="#" className="text-accent-rose hover:text-accent-rose/80 hover:underline transition-colors">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-accent-rose hover:text-accent-rose/80 hover:underline transition-colors">
                  Privacy Policy
                </a>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-accent-coral text-white py-3 px-4 rounded-lg font-medium hover:bg-accent-coral/90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-coral focus:ring-offset-2 shadow-lg"
            >
              Create Account
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-earth-600">
              Already have an account?{" "}
              <a
                href="#"
                className="text-accent-purple hover:text-accent-purple/80 hover:underline font-medium transition-colors"
              >
                Sign in here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
