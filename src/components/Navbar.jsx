import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { User, Menu, X } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const NAV_LINKS = [
  { label: 'À propos', href: '/a-propos' },
  { label: 'Programmes', href: '/programmes' },
  { label: 'Projets', href: '/projets' },
  { label: 'Actualités', href: '/actualites' },
];

export function Navbar() {
  const navRef = useRef(null);
  const containerRef = useRef(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(containerRef.current, {
        y: -80,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.4,
      });

      ScrollTrigger.create({
        start: 'top -60',
        end: 99999,
        onEnter: () => navRef.current?.classList.add('nav-scrolled'),
        onLeaveBack: () => navRef.current?.classList.remove('nav-scrolled'),
      });
    }, navRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 flex justify-center mt-5 px-4">
        <div
          ref={containerRef}
          className="w-full max-w-5xl px-6 py-3 rounded-full flex items-center justify-between transition-all duration-500 bg-transparent text-white"
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 flex-shrink-0">
            <div className="w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center border border-brand-accent/30">
              <span className="text-white font-display font-bold text-xs tracking-tighter">UN</span>
            </div>
            <span className="font-display font-bold tracking-tight text-lg">ACNU</span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-7 text-sm font-medium">
            {NAV_LINKS.map(link => (
              <NavLink 
                key={link.href} 
                to={link.href}
                className={({ isActive }) => `
                  hover:-translate-y-px transition-all duration-300 whitespace-nowrap relative
                  ${isActive ? 'text-brand-accent opacity-100 font-bold' : 'opacity-80 hover:opacity-100'}
                `}
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-brand-accent rounded-full animate-in fade-in slide-in-from-left-2 duration-500" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <Link to="/connexion" className="hidden sm:flex items-center gap-1.5 text-sm font-medium hover:text-brand-accent transition-colors">
              <User className="w-4 h-4" />
              <span>Portail</span>
            </Link>
            <Link to="/don" className="magnetic-btn bg-brand-accent text-brand-primary px-5 py-2 rounded-full font-bold text-sm shadow-lg">
              <span>Soutenir</span>
            </Link>
            {/* Mobile burger */}
            <button onClick={() => setMobileOpen(true)} className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[200]" onClick={() => setMobileOpen(false)}>
          <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(6px)' }} />
          <div className="absolute inset-y-0 right-0 w-72 p-7 flex flex-col shadow-2xl"
               style={{ background: 'var(--bg-card)' }}
               onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-10">
              <span className="font-display font-bold text-xl">ACNU</span>
              <button onClick={() => setMobileOpen(false)} style={{ color: 'var(--text-muted)' }}>
                <X size={22} />
              </button>
            </div>
            <nav className="space-y-2 flex-1">
              {NAV_LINKS.map(link => (
                <Link key={link.href} to={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-4 py-3 rounded-xl font-body font-medium text-base transition-colors hover:text-brand-accent"
                      style={{ color: 'var(--text-secondary)' }}>
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="pt-4 border-t space-y-2" style={{ borderColor: 'var(--border)' }}>
              <Link to="/connexion" onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-2 px-4 py-3 rounded-xl font-body font-medium text-sm"
                    style={{ color: 'var(--primary)' }}>
                <User size={16} /> Espace Membre
              </Link>
              <Link to="/don" onClick={() => setMobileOpen(false)}
                    className="block text-center px-4 py-3 rounded-full font-display font-bold text-sm"
                    style={{ background: 'var(--accent)', color: 'var(--bg)' }}>
                Soutenir l'ACNU
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
