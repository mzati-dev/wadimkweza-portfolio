import React from 'react';
// import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
// import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900">

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />

    </div>
  );
};

export default HomePage;
