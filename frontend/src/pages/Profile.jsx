"use client"

import { useState } from "react"
import { Link } from "react-router-dom"

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false)
  const [profileData, setProfileData] = useState({
    username: "Loisana",
    email: "lois.ana@example.com",
    gender: "female",
    interests: ["React", "Node.js", "Machine Learning", "UI/UX Design"],
    bio: "Passionate frontend developer with 2 years of experience in React and Node.js. Always eager to learn new technologies and collaborate on innovative projects.",
    location: "Abuja, Nigeria",
    website: "https://loisana.dev",
    joinDate: "January 2024",
  })

  const techStacks = [
    "React","Vue.js","Angular","Node.js","Python","Java","JavaScript","TypeScript",
    "PHP","Ruby","Go","Rust","Machine Learning","Data Science","DevOps",
    "Mobile Development","UI/UX Design","Cybersecurity","Blockchain","Cloud Computing",
  ]

  const handleChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    })
  }

  const handleInterestChange = (e) => {
    const value = e.target.value
    const isChecked = e.target.checked

    if (isChecked) {
      setProfileData({
        ...profileData,
        interests: [...profileData.interests, value],
      })
    } else {
      setProfileData({
        ...profileData,
        interests: profileData.interests.filter((interest) => interest !== value),
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Updated profile data:", profileData)
    setIsEditing(false)
  }

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-card border border-border rounded-lg shadow-lg overflow-hidden">

          {/* Back to Home */}
          <div className="p-4 bg-white border-b border-border flex justify-end">
            <Link
              to="/"
              className="px-4 py-2 bg-gradient-to-r from-accent-purple to-accent-teal text-white rounded-lg font-medium hover:shadow-md transition-all"
            >
              ← Back to Home
            </Link>
          </div>

          {/* Profile Header */}
          <div className="bg-gradient-to-r from-accent-purple to-accent-teal p-8 text-white relative">
            <div className="flex items-center space-x-6">
              <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-3xl font-bold text-white">
                {profileData.username.charAt(0).toUpperCase()}
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">{profileData.username}</h1>
                <p className="text-white/90 text-lg">{profileData.email}</p>
                <p className="text-white/80">Member since {profileData.joinDate}</p>
              </div>
            </div>
          </div>

          {/* Profile Content */}
          <div className="p-8">
           <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-foreground">Profile Information</h2>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"
              >
                {isEditing ? "Cancel" : "Edit Profile"}
              </button>
            </div>

            {isEditing ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="username" className="block text-sm font-medium text-foreground mb-2">
                      Username
                    </label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      value={profileData.username}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent text-foreground"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={profileData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent text-foreground"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="gender" className="block text-sm font-medium text-foreground mb-2">
                      Gender
                    </label>
                    <select
                      id="gender"
                      name="gender"
                      value={profileData.gender}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent text-foreground"
                    >
                      <option value="">Select your gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                      <option value="prefer-not-to-say">Prefer not to say</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-foreground mb-2">
                      Location
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={profileData.location}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent text-foreground"
                      placeholder="City, State/Country"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="website" className="block text-sm font-medium text-foreground mb-2">
                    Website
                  </label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    value={profileData.website}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent text-foreground"
                    placeholder="https://yourwebsite.com"
                  />
                </div>

                <div>
                  <label htmlFor="bio" className="block text-sm font-medium text-foreground mb-2">
                    Bio
                  </label>
                  <textarea
                    id="bio"
                    name="bio"
                    value={profileData.bio}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent text-foreground resize-none"
                    placeholder="Tell us about yourself..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-4">Tech Interests</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-h-64 overflow-y-auto p-4 bg-muted/20 rounded-lg border border-border">
                    {techStacks.map((tech) => (
                      <label key={tech} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          value={tech}
                          checked={profileData.interests.includes(tech)}
                          onChange={handleInterestChange}
                          className="rounded border-border text-accent-purple focus:ring-accent-purple"
                        />
                        <span className="text-sm text-foreground">{tech}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button
                    type="submit"
                    className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  >
                    Save Changes
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/80 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            ) : (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">Username</h3>
                    <p className="text-foreground">{profileData.username}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">Email</h3>
                    <p className="text-foreground">{profileData.email}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">Gender</h3>
                    <p className="text-foreground capitalize">{profileData.gender || "Not specified"}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">Location</h3>
                    <p className="text-foreground">{profileData.location || "Not specified"}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Website</h3>
                  <a
                    href={profileData.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-purple hover:underline"
                  >
                    {profileData.website}
                  </a>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Bio</h3>
                  <p className="text-foreground leading-relaxed">{profileData.bio}</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-3">Tech Interests</h3>
                  <div className="flex flex-wrap gap-2">
                    {profileData.interests.map((interest) => (
                      <span
                        key={interest}
                        className="px-3 py-1 bg-accent-purple/10 text-accent-purple rounded-full text-sm font-medium"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
