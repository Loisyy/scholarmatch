import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useRef } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import AuthForm from "./pages/AuthForm"; 
import DashboardPreview from "./components/DashboardPreview";
import OpportunityCategories from "./components/OpportunityCategories";
import SkillMatching from "./components/SkillMatching";
import UserProfiles from "./components/UserProfiles";
import ResourcesPreparation from "./components/ResourcesPreparation";
import SuccessStories from "./components/SuccessStories";

import "./App.css";

function App() {
  // Refs for each section
  const opportunitiesRef = useRef(null);
  const resourcesRef = useRef(null);
  const communityRef = useRef(null);
  const storiesRef = useRef(null);
  const aboutRef = useRef(null);

  // Scroll handler
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="bg-earth-50 font-sans min-h-screen scroll-smooth">
     <Router>
  <Header
    onNavClick={(section) => {
      if (section === "opportunities") scrollToSection(opportunitiesRef);
      if (section === "resources") scrollToSection(resourcesRef);
      if (section === "community") scrollToSection(communityRef);
      if (section === "stories") scrollToSection(storiesRef);
      if (section === "about") scrollToSection(aboutRef);
    }}
  />

  <Routes>
    {/* Homepage */}
    <Route
      path="/"
      element={
        <>
          <HeroSection />

          <section ref={opportunitiesRef} id="opportunities">
            <DashboardPreview />
            <OpportunityCategories />
            <SkillMatching />
          </section>

          <section ref={communityRef} id="community">
            <UserProfiles />
          </section>

          <section ref={resourcesRef} id="resources">
            <ResourcesPreparation />
          </section>

          <section ref={storiesRef} id="stories">
            <SuccessStories />
          </section>

          <section
            ref={aboutRef}
            id="about"
            className="py-20 text-center bg-earth-100"
          >
            <h2 className="text-3xl font-bold text-earth-800">About Us</h2>
            <p className="mt-4 max-w-2xl mx-auto text-earth-600">
              This platform connects learners with opportunities, resources,
              and a supportive community to help them succeed.
            </p>
            <Link
              to="/register"
              className="px-4 py-2 bg-primary text-purple-800 font-bold rounded-lg hover:bg-primary/90"
            >
              Register
            </Link>
          </section>
        </>
      }
    />

    {/* Auth routes: merged Register & SignUp */}
    <Route path="/signup" element={<AuthForm />} />
    <Route path="/register" element={<AuthForm />} />
    <Route path="/signin" element={<SignIn />} />

    {/* Profile */}
    <Route path="/profile" element={<Profile />} />
  </Routes>
</Router>

    </div>
  );
}

export default App;
