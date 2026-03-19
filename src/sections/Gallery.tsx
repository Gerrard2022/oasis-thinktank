import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { GALLERY_VIDEOS } from '../constants';
import { getYouTubeThumbnail } from '../utils/getYouTubeId';

const Gallery: React.FC = () => {
    const videoWrapper = useRef<HTMLDivElement>(null);
    const container = useRef<HTMLElement>(null);

    useGSAP(() => {
        if (videoWrapper.current) {
            gsap.to(videoWrapper.current, {
              x: () => -(videoWrapper.current!.scrollWidth - window.innerWidth),
              ease: "none",
              scrollTrigger: {
                trigger: container.current,
                start: "top top",
                end: () => `+=${videoWrapper.current!.scrollWidth}`,
                pin: true,
                scrub: 1,
                invalidateOnRefresh: true,
              }
            });
          }
    }, { scope: container });

    return (
        <section ref={container} className="video-section h-screen bg-oasis-deep overflow-hidden flex flex-col justify-center">
        <div ref={videoWrapper} className="video-wrapper flex items-center gap-16 px-[10vw]">
          <div className="flex-none w-[400px]">
             <span className="text-oasis-cyan text-xs tracking-[0.4em] uppercase font-bold mb-4 block">Impact</span>
             <h2 className="text-7xl font-bold tracking-tighter font-heading">Our<br/>Challenges.</h2>
             <div className="w-16 h-1 bg-oasis-teal mt-8"></div>
          </div>
          {GALLERY_VIDEOS.map((video) => {
            const thumbnail = getYouTubeThumbnail(video.videoUrl);
            return (
              <div key={video.id} className="flex-none w-[700px] h-[450px] liquid-glass rounded-[3rem] relative overflow-hidden group cursor-pointer border-white/5 hover:border-oasis-cyan/30 transition-all duration-500 shadow-2xl">
                 <div className="absolute inset-0 bg-oasis-teal/10 opacity-50 group-hover:opacity-100 group-hover:bg-oasis-teal/20 transition-all duration-500" />
                 
                 {/* YouTube Thumbnail Background */}
                 {thumbnail && (
                   <div className="absolute inset-0 z-0">
                     <img 
                       src={thumbnail} 
                       alt={video.title} 
                       className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-1000" 
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-oasis-deep via-oasis-deep/40 to-transparent" />
                   </div>
                 )}

                 <div className="absolute top-12 right-12 z-10">
                    <div className="w-12 h-12 rounded-full border border-white/10 backdrop-blur-md flex items-center justify-center group-hover:bg-oasis-cyan group-hover:border-oasis-cyan transition-all duration-500">
                       <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="group-hover:text-oasis-deep text-oasis-cyan">
                          <path d="M5 15L15 5M15 5H7M15 5V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                       </svg>
                    </div>
                 </div>
                 <div className="absolute bottom-12 left-12 z-10">
                    <p className="text-oasis-lime text-xs font-bold tracking-widest uppercase mb-3">{video.subtitle}</p>
                    <h4 className="text-4xl font-bold font-heading tracking-tight">{video.title}</h4>
                 </div>
                 {/* Decorative elements inside card */}
                 <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-oasis-cyan/20 blur-[60px] rounded-full group-hover:bg-oasis-cyan/40 transition-colors"></div>
              </div>
            );
          })}
        </div>
      </section>
    );
};

export default Gallery;
