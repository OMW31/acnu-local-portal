import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Eye, EyeOff, LogIn, ArrowLeft, Shield } from 'lucide-react';
import { ThemeSwitcher } from '../components/ThemeSwitcher';

export function LoginPage() {
  const [matricule, setMatricule] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    if (!matricule || !password) {
      setError('Veuillez renseigner tous les champs.');
      return;
    }

    setIsLoading(true);

    // Mock network request
    setTimeout(() => {
      setIsLoading(false);
      
      // Dummy validation rules
      if (matricule.toUpperCase().startsWith('ACNU') && password === 'demo2024') {
        localStorage.setItem('acnu-auth', JSON.stringify({
          matricule: matricule.toUpperCase(),
          role: matricule.toUpperCase().includes('ADMIN') ? 'admin' : 'member',
          name: 'Jean-Paul Nguema'
        }));
        navigate('/portail');
      } else {
        setError('Matricule ou mot de passe incorrect.');
      }
    }, 1200);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center font-sans bg-brand-bg text-brand-text overflow-hidden p-6 selection:bg-brand-accent/30 selection:text-brand-text">
      {/* Noise Overlay */}
      <div className="absolute inset-0 noise-overlay opacity-[var(--noise-opacity)] pointer-events-none z-0" />
      
      {/* African/ACNU Watermark Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-0 ndop-pattern" 
      />

      {/* Premium Lion Filigrane SVG — Inspired by Cameroon Heraldic Heritage */}
      <div className="absolute right-[-5%] bottom-[-5%] pointer-events-none z-0 opacity-[0.04] sm:opacity-[0.06] max-w-[100vw] select-none">
        <svg viewBox="0 0 400 400" className="w-[1000px] h-[1000px] fill-none stroke-brand-primary" xmlns="http://www.w3.org/2000/svg">
          {/* Detailed Heraldic Lion Path (Simplified for performance but styled for majesty) */}
          <path 
            d="M200,100 C180,100 160,110 150,130 C140,150 145,175 160,190 C165,195 175,200 185,202 C180,210 175,225 180,240 C185,255 215,255 220,240 C225,225 220,210 215,202 C225,200 235,195 240,190 C255,175 260,150 250,130 C240,110 220,100 200,100 Z M200,115 C215,115 225,125 230,135 C235,145 232,165 225,175 C218,185 208,188 200,188 C192,188 182,185 175,175 C168,165 165,145 170,135 C175,125 185,115 200,115 Z" 
            strokeWidth="0.5"
          />
          {/* Walking Heraldic Body Outline */}
          <path 
            d="M180,240 Q150,250 130,280 Q110,310 120,340 L140,345 L150,320 L170,330 L165,350 L185,355 L200,320 L215,355 L235,350 L230,330 L250,320 L260,345 L280,340 Q290,310 270,280 Q250,250 220,240" 
            strokeWidth="0.5"
          />
          {/* Decorative circular wreath element */}
          <circle cx="200" cy="200" r="180" strokeWidth="0.2" strokeDasharray="5 10" />
        </svg>
      </div>

      <ThemeSwitcher />

      <div className="relative z-10 w-full max-w-md">
        <Link to="/" className="inline-flex items-center gap-2 mb-8 text-brand-text-muted hover:text-brand-text transition-colors text-sm font-mono uppercase tracking-widest">
          <ArrowLeft className="w-4 h-4" />
          Retour au site
        </Link>
        
        <div className="card-premium p-8 sm:p-12 backdrop-blur-2xl bg-brand-card/70 shadow-2xl" style={{ borderRadius: 'var(--radius-2xl)' }}>
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-primary text-white font-display font-bold text-2xl mb-6 shadow-xl shadow-brand-primary/20">
              AC
            </div>
            <h1 className="font-display text-2xl sm:text-3xl font-bold mb-2">Portail Membre</h1>
            <p className="text-sm text-brand-text-muted">Saisissez vos identifiants ACNU pour continuer.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-mono uppercase tracking-widest text-brand-text-muted">
                Matricule
              </label>
              <input
                type="text"
                placeholder="ACNU-XXXX-XXXX"
                value={matricule}
                onChange={(e) => setMatricule(e.target.value)}
                className="w-full px-4 py-3 bg-brand-secondary/30 border border-brand-border rounded-xl focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all text-brand-text font-mono placeholder:text-brand-text-muted/50"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono uppercase tracking-widest text-brand-text-muted">
                Mot de passe
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-brand-secondary/30 border border-brand-border rounded-xl focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all text-brand-text font-mono placeholder:text-brand-text-muted/50"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-text-muted hover:text-brand-text transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {error && (
              <div className="p-3 text-sm rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 text-center animate-pulse">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full magnetic-btn py-4 rounded-xl bg-brand-accent text-brand-bg font-display font-bold text-[15px] shadow-lg shadow-brand-accent/20 disabled:opacity-70 disabled:pointer-events-none mt-2"
            >
              <span className="flex items-center gap-2">
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-brand-bg/30 border-t-brand-bg rounded-full animate-spin" />
                ) : (
                  <>
                    <LogIn className="w-4 h-4" /> Connectez-vous
                  </>
                )}
              </span>
            </button>
          </form>

          {/* Quick Demo Hint */}
          <div className="mt-8 p-4 rounded-xl bg-brand-primary/5 border border-brand-primary/10">
            <div className="flex items-center gap-2 mb-2 text-brand-primary">
              <Shield className="w-4 h-4" />
              <span className="text-xs font-mono uppercase tracking-wider font-semibold">Accès Démo</span>
            </div>
            <div className="text-xs text-brand-text-muted font-mono leading-relaxed">
              Membre: ACNU-2024-001 / demo2024<br/>
              Admin: ACNU-ADMIN-01 / demo2024
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
