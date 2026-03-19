import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const Prototype: React.FC = () => {
    const container = useRef<HTMLElement>(null);

    useGSAP(() => {
        gsap.from(".proto-part", {
            scrollTrigger: {
              trigger: container.current,
              start: "top center",
              end: "bottom center",
              scrub: 1.5,
            },
            scale: 0.2,
            opacity: 0,
            x: (i) => [ -400, 0, 400 ][i % 3],
            y: (i) => [ 100, -100, 100 ][i % 3],
            rotationZ: (i) => [ -20, 0, 20 ][i % 3],
            stagger: 0.1
          });
    }, { scope: container });

    return (
        <section ref={container} className="prototype-section min-h-screen py-40 flex flex-col items-center justify-center bg-oasis-deep relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(12,112,117,0.1)_0%,transparent_70%)] opacity-30"></div>
        
        <h2 className="text-4xl md:text-8xl font-bold mb-32 tracking-[0.2em] text-white/20 uppercase italic font-heading text-center">Prototype</h2>
        
        <div className="relative w-full max-w-6xl h-[700px] flex items-center justify-center">
          {/* Part 1: Main Panel */}
          <div className="proto-part w-[400px] h-[550px] liquid-glass border-oasis-cyan/30 rounded-[3rem] p-10 absolute z-20 shadow-[0_0_100px_rgba(0,245,255,0.1)]">
             <div className="w-20 h-2 bg-oasis-cyan/40 rounded-full mb-12"></div>
             <div className="flex gap-4 mb-10">
                <div className="w-12 h-12 rounded-2xl bg-oasis-cyan/20 border border-oasis-cyan/40"></div>
                <div className="flex-1 space-y-3 py-2">
                   <div className="w-full h-2 bg-white/10 rounded-full"></div>
                   <div className="w-2/3 h-2 bg-white/10 rounded-full"></div>
                </div>
             </div>
             <div className="w-full h-64 rounded-3xl bg-oasis-teal/10 border border-white/5 mb-10 flex items-center justify-center p-8">
                <div className="w-24 h-24 rounded-full border-4 border-oasis-cyan/20 border-t-oasis-cyan animate-spin opacity-50"></div>
             </div>
             <div className="flex gap-4 justify-between">
                <div className="h-10 w-1/2 rounded-2xl bg-oasis-cyan/20"></div>
                <div className="h-10 w-1/3 rounded-2xl bg-white/5"></div>
             </div>
          </div>

          {/* Part 2: Neural Flow */}
          <div className="proto-part w-[380px] h-[520px] liquid-glass border-oasis-lime/30 rounded-[3rem] bg-oasis-forest/20 p-10 absolute z-10">
             <div className="w-20 h-2 bg-oasis-lime/40 rounded-full mb-12"></div>
             <div className="space-y-6">
                <div className="w-full h-40 rounded-3xl bg-oasis-lime/5 border border-oasis-lime/20 flex flex-col items-center justify-center text-center p-8">
                   <div className="w-16 h-16 rounded-xl bg-oasis-lime/20 rotate-45 mb-6"></div>
                   <span className="text-[10px] tracking-[0.5em] text-oasis-lime font-black uppercase">Sync Active</span>
                </div>
                <div className="space-y-4 pt-4">
                   <div className="w-full h-2 bg-white/5 rounded-full"></div>
                   <div className="w-full h-2 bg-white/5 rounded-full"></div>
                   <div className="w-5/6 h-2 bg-white/5 rounded-full"></div>
                   <div className="w-4/6 h-2 bg-white/5 rounded-full"></div>
                </div>
             </div>
          </div>

          {/* Part 3: Analytics Sanctuary */}
          <div className="proto-part w-[350px] h-[480px] liquid-glass border-oasis-gold/30 rounded-[2.5rem] p-10 absolute z-0">
             <div className="w-20 h-2 bg-oasis-gold/40 rounded-full mb-12"></div>
             <div className="w-full h-48 rounded-3xl bg-oasis-gold/5 border border-oasis-gold/20 mb-10 flex items-end gap-3 p-6 justify-center">
                <div className="w-4 bg-oasis-gold/30 rounded-t-lg" style={{ height: '40%' }}></div>
                <div className="w-4 bg-oasis-gold/30 rounded-t-lg" style={{ height: '70%' }}></div>
                <div className="w-4 bg-oasis-gold/30 rounded-t-lg" style={{ height: '90%' }}></div>
                <div className="w-4 bg-oasis-gold/30 rounded-t-lg" style={{ height: '60%' }}></div>
                <div className="w-4 bg-oasis-gold/30 rounded-t-lg" style={{ height: '80%' }}></div>
             </div>
             <div className="space-y-4">
                <div className="w-full h-2 bg-white/5 rounded-full"></div>
                <div className="w-3/4 h-2 bg-white/5 rounded-full"></div>
             </div>
          </div>
        </div>
      </section>
    );
};

export default Prototype;
