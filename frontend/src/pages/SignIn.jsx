import { Link } from "react-router-dom";

"use client"

import { useState } from "react"

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Sign in data:", formData)
    // Add your sign in logic here
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-earth-50 to-earth-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-card border border-earth-200 rounded-lg shadow-xl p-8 backdrop-blur-sm">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-earth-800 mb-2">Welcome Back</h1>
            <p className="text-earth-600">Sign in to your ScholarMatch account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
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
                className="w-full px-4 py-3 bg-earth-50 border border-earth-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-accent-teal text-earth-800 placeholder-earth-500 transition-all duration-200"
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
                className="w-full px-4 py-3 bg-earth-50 border border-earth-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-accent-teal text-earth-800 placeholder-earth-500 transition-all duration-200"
                placeholder="Enter your password"
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2 rounded border-earth-300 text-accent-teal focus:ring-accent-teal"
                />
                <span className="text-sm text-earth-600">Remember me</span>
              </label>
              <a
                href="#"
                className="text-sm text-accent-coral hover:text-accent-coral/80 hover:underline transition-colors"
              >
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-accent-teal text-white py-3 px-4 rounded-lg font-medium hover:bg-accent-teal/90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-teal focus:ring-offset-2 shadow-lg"
            >
              Sign In
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-earth-600">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-accent-purple hover:text-accent-purple/80 hover:underline font-medium transition-colors"
              >
                Sign up here
              </Link>
            </p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn
