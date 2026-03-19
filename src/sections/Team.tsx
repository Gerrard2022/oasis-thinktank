import React from 'react';
import { TEAM_MEMBERS } from '../constants';

const Team: React.FC = () => {
    return (
        <section className="py-40 bg-oasis-forest/30 relative">
         <div className="container mx-auto px-10 text-center">
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter font-heading mb-32">The Curators.</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-20 gap-x-12">
               {TEAM_MEMBERS.map((member, i) => (
                  <div key={i} className="group relative flex flex-col items-center">
                     <div className="w-48 h-48 md:w-64 md:h-64 rounded-full liquid-glass mb-8 overflow-hidden relative group-hover:shadow-[0_0_50px_rgba(0,245,255,0.3)] border-2 border-white/10 group-hover:border-oasis-cyan transition-all duration-700">
                        <div className="absolute inset-0 bg-oasis-teal/5 group-hover:bg-oasis-teal/20 transition-all duration-700"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                           <span className="text-[10rem] font-bold text-white/5 select-none">{member.initial}</span>
                        </div>
                        {member.image && (
                          <img 
                            src={member.image} 
                            alt={member.name} 
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                            onError={(e) => {
                              (e.target as HTMLImageElement).style.display = 'none';
                            }}
                          />
                        )}
                        <div className="absolute bottom-0 left-0 right-0 p-4 transition-all duration-500 opacity-0 group-hover:opacity-100">
                           <div className="liquid-glass p-4 rounded-3xl border-oasis-lime/20 bg-oasis-deep/80 backdrop-blur-3xl">
                              <p className="text-oasis-lime text-[8px] tracking-[0.4em] uppercase font-black">{member.role}</p>
                           </div>
                        </div>
                     </div>
                     <h3 className="text-2xl font-bold font-heading group-hover:text-oasis-cyan transition-colors duration-500">{member.name}</h3>
                     <p className="text-sm text-white/40 max-w-[200px] mt-2 font-light">{member.description}</p>
                  </div>
               ))}
            </div>
         </div>
         {/* Ambient background glow */}
         <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-oasis-lime/5 blur-[120px] rounded-full pointer-events-none"></div>
      </section>
    );
};

export default Team;
