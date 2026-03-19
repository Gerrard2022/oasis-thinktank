import React, { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import Sections
import Hero from './sections/Hero';
import ProblemSolution from './sections/ProblemSolution';
import Gallery from './sections/Gallery';
import Team from './sections/Team';
import Prototype from './sections/Prototype';
import Footer from './sections/Footer';

gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  // Global animations or scroll behavior could go here
  useLayoutEffect(() => {
    // Refresh ScrollTrigger on mount
    ScrollTrigger.refresh();
  }, []);

  return (
    <main className="bg-oasis-deep text-white selection:bg-oasis-cyan selection:text-oasis-deep font-body">
      <Hero />
      <ProblemSolution />
      <Gallery />
      <Team />
      <Prototype />
      <Footer />
    </main>
  );
};

export default App;
