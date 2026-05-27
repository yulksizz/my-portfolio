import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Testimonials } from "@/sections/Testimonials";
import { Contacts } from "@/sections/Contacts";
import { Footer } from "./layout/Footer";

// import your new page
import Activity from "@/sections/Activity";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Testimonials />
      <Contacts />
    </>
  );
}

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="min-h-screen overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/activity" element={<Activity />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;