import React, { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const Prototype: React.FC = () => {
    const container = useRef<HTMLElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(true);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const rewind = () => {
        if (videoRef.current) {
            videoRef.current.currentTime = Math.max(0, videoRef.current.currentTime - 5);
        }
    };

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
          <div className="proto-part w-[400px] h-[550px] liquid-glass border-oasis-cyan/30 rounded-[3rem] p-3 absolute z-20 shadow-[0_0_100px_rgba(0,245,255,0.1)] overflow-hidden group">
              <video 
                  ref={videoRef}
                  src="/prototypes/video.mp4" 
                  autoPlay loop muted playsInline 
                  className="w-full h-full object-cover rounded-[2rem] transition-transform duration-500 group-hover:scale-105" 
              />
              
              {/* Video Controls Overlay */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center justify-center gap-6 bg-black/40 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
                  <button 
                      onClick={rewind}
                      className="text-white hover:text-oasis-cyan transition-colors"
                      title="Rewind 5 seconds"
                  >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polygon points="11 19 2 12 11 5 11 19"></polygon>
                          <polygon points="22 19 13 12 22 5 22 19"></polygon>
                      </svg>
                  </button>
                  <button 
                      onClick={togglePlay}
                      className="text-white hover:text-oasis-cyan transition-colors w-8 flex items-center justify-center"
                      title={isPlaying ? "Pause" : "Play"}
                  >
                      {isPlaying ? (
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <rect x="6" y="4" width="4" height="16"/>
                              <rect x="14" y="4" width="4" height="16"/>
                          </svg>
                      ) : (
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <polygon points="5 3 19 12 5 21 5 3"></polygon>
                          </svg>
                      )}
                  </button>
              </div>
          </div>

        </div>
      </section>
    );
};

export default Prototype;
