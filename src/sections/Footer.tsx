import React from 'react';
import { NAV_LINKS } from '../constants';

const Footer: React.FC = () => {
    return (  
        <footer className="py-32 border-t border-white/5 bg-oasis-deep relative z-10 overflow-hidden">
        <div className="container mx-auto px-10 flex flex-col items-center justify-center text-center">
          <span className="text-7xl font-bold tracking-[-0.05em] text-oasis-cyan font-heading mb-16 drop-shadow-[0_0_20px_rgba(0,245,255,0.4)]">OASIS</span>
          
          <div className="flex flex-wrap justify-center gap-16 text-[10px] uppercase tracking-[0.5em] font-black mb-20">
            {NAV_LINKS.map(link => (
              <a key={link.name} href={link.href} className="hover:text-oasis-lime transition-all duration-300 relative group">
                {link.name}
                <span className="absolute -bottom-4 left-0 w-0 h-0.5 bg-oasis-lime transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
          
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16"></div>
          
          <div className="flex flex-col md:flex-row justify-between items-center w-full gap-8">
            <p className="text-white/20 text-[10px] tracking-[0.2em] font-bold">© 2026 OASIS DESIGN COLLECTIVE. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-10">
               {['Twitter', 'GitHub', 'Discord'].map(social => (
                  <a key={social} href="#" className="text-white/30 hover:text-oasis-cyan text-[10px] tracking-[0.2em] font-bold transition-colors">{social.toUpperCase()}</a>
               ))}
            </div>
          </div>
        </div>
        
        {/* Foot of the page glow */}
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-full h-[200px] bg-oasis-cyan/5 blur-[100px] rounded-full pointer-events-none"></div>
      </footer>
    );
};

export default Footer;
