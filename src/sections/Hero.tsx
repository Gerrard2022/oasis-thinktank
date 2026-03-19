import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const Hero: React.FC = () => {
  const heroContainer = useRef<HTMLElement>(null);

  useGSAP(() => {
    const heroTl = gsap.timeline();
    heroTl.from(".hero-title span", {
      y: 200,
      skewY: 10,
      stagger: 0.1,
      duration: 1.5,
      ease: "power4.out"
    })
    .from(".hero-subtitle", { 
      opacity: 0, 
      y: 20, 
      duration: 1 
    }, "-=1")
    .from(".hero-animate", { 
       scale: 0, 
       opacity: 0, 
       duration: 1.5, 
       ease: "elastic.out(1, 0.75)" 
    }, "-=1");
  }, { scope: heroContainer });

  return (
    <section ref={heroContainer} className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_50%,_#072e33_0%,_#05161a_100%)] opacity-70" />
        
        {/* Glow behind title */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-oasis-cyan/10 blur-[150px] rounded-full"></div>

        <div className="relative z-10 text-center">
          <div className="hero-animate inline-block mb-10">
            <svg width="100" height="100" viewBox="0 0 200 200" fill="none">
              <path d="M100 20L180 60V140L100 180L20 140V60L100 20Z" className="stroke-oasis-cyan stroke-2 fill-oasis-cyan/10" />
              <path d="M100 40L160 70V130L100 160L40 130V70L100 40Z" className="stroke-oasis-lime stroke-2 fill-oasis-lime/20" />
              <circle cx="100" cy="100" r="30" className="fill-oasis-gold shadow-[0_0_20px_rgba(240,195,142,0.5)]" />
            </svg>
          </div>
          <h1 className="hero-title text-[15vw] font-bold leading-none tracking-tighter uppercase overflow-hidden flex justify-center font-heading">
            {"Oasis".split("").map((char, i) => (
              <span key={i} className="inline-block">{char}</span>
            ))}
          </h1>
          <p className="hero-subtitle text-xl md:text-2xl text-oasis-cyan/60 mt-4 tracking-[0.2em] font-light">
            THINKTANK
          </p>
        </div>
      </section>
  );
};

export default Hero;
