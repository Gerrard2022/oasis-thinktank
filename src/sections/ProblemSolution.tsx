import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const ProblemSolution: React.FC = () => {
    const sectionContainer = useRef<HTMLElement>(null);
    
    useGSAP(() => {
        const psTl = gsap.timeline({
            scrollTrigger: {
              trigger: sectionContainer.current,
              start: "top top",
              end: "+=200%",
              pin: true,
              scrub: 1,
            }
          });
      
          psTl.to(".problem-content", { xPercent: -100, opacity: 0, ease: "none" })
              .fromTo(".solution-content", 
                { xPercent: 100, opacity: 0, pointerEvents: "none" },
                { xPercent: 0, opacity: 1, pointerEvents: "auto", ease: "none" }, 
                "<"
              )
              .to(sectionContainer.current, { backgroundColor: "#072e33", ease: "none" }, "<");
    }, { scope: sectionContainer });

    return (
      <section ref={sectionContainer} className="problem-section relative h-screen flex items-center justify-center overflow-hidden bg-[#05161a]">
        {/* Problem State */}
        <div className="problem-content container mx-auto px-10 absolute text-center flex flex-col items-center">
          <h2 className="text-oasis-gold text-sm tracking-[0.5em] uppercase mb-6 font-bold">The Problem</h2>
          <h3 className="text-4xl md:text-7xl font-bold max-w-5xl mx-auto leading-tight font-heading tracking-tighter">
            Low girls participation in school caused by <span className="italic text-white/20">drop-outs.</span>
          </h3>
          <p className="text-xl text-white/40 mt-8 max-w-2xl font-light">Identifying and addressing the core barriers preventing young women from completing their education.</p>
        </div>

        {/* Solution State */}
        <div className="solution-content container mx-auto px-10 absolute text-center flex flex-col items-center opacity-0 pointer-events-none">
          <h2 className="text-oasis-lime text-sm tracking-[0.5em] uppercase mb-6 font-bold">Oasis Program</h2>
          <h3 className="text-4xl md:text-6xl font-bold max-w-5xl mx-auto leading-tight text-white font-heading tracking-tighter">
            A program focused to <span className="text-oasis-cyan drop-shadow-[0_0_15px_rgba(0,245,255,0.4)]">re-introduce academics through life-skills, online education and mentorships</span>
          </h3>
          <p className="text-xl text-white/60 mt-8 max-w-2xl font-light">A holistic ecosystem designed to empower girls to return to the learning path.</p>
        </div>
      </section>
    );
};

export default ProblemSolution;
