import React, { useState } from 'react';
import { Phone, Mail, MapPin, Building2, ShieldCheck, ChevronRight, Send, Check } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenFarmerModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenFarmerModal }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail('');
    }, 3000);
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Footer Banner: Mutapa Sovereign Fund & Bulawayo HQ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-800/80 items-start">
          
          {/* CSC Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-red-800 to-slate-900 rounded-lg flex items-center justify-center border border-amber-500/60">
                <span className="text-amber-400 font-black text-lg">CSC</span>
              </div>
              <div>
                <h3 className="font-black text-xl text-white tracking-tight">
                  COLD STORAGE COMPANY LTD
                </h3>
                <p className="text-xs text-amber-400/90 font-medium flex items-center gap-1">
                  <Building2 className="w-3.5 h-3.5 text-amber-400" />
                  State-Backed Enterprise • Mutapa Investment Fund
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              Established in 1937, Cold Storage Company Ltd is Zimbabwe's sovereign livestock processor, operating national abattoirs, cold chain logistics depots, and tannery works headquartered in Bulawayo.
            </p>

            <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 space-y-1">
              <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider block">Official Brand Slogan</span>
              <p className="text-xs font-black text-amber-300 italic">"Simply the best beef Worldwide"</p>
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
              <span className="bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-800 font-semibold text-emerald-400 flex items-center gap-1 text-[11px]">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Government Vet Inspected
              </span>
              <span className="bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-800 font-semibold text-amber-300 text-[11px]">
                Halal Certified
              </span>
            </div>

            {/* Social Media Handles */}
            <div className="pt-2 border-t border-slate-800/80 space-y-1.5 text-xs">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Connect With CSC</span>
              <div className="flex flex-wrap items-center gap-3 text-slate-300 font-medium">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 px-2.5 py-1 rounded-md border border-slate-800 transition-colors hover:text-amber-300"
                >
                  <span className="w-2 h-2 rounded-full bg-blue-500 inline-block" />
                  <span>Facebook: Cold Storage Company</span>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 px-2.5 py-1 rounded-md border border-slate-800 transition-colors hover:text-amber-300"
                >
                  <span className="w-2 h-2 rounded-full bg-pink-500 inline-block" />
                  <span>Instagram: Cold Storage Company</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3 text-xs">
            <h4 className="font-extrabold text-white uppercase tracking-wider text-[11px] text-amber-400">
              Core Divisions
            </h4>
            <ul className="space-y-2">
              {[
                { id: 'home', label: 'Bulawayo HQ Overview' },
                { id: 'catalog', label: 'Interactive Meat Catalog' },
                { id: 'estimator', label: 'B2B Wholesale Estimator' },
                { id: 'farmers', label: 'Livestock Farmer Portal' },
                { id: 'facilities', label: 'National Branch Network' },
                { id: 'export', label: 'Export & Quality Division' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="hover:text-amber-300 transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Headquarters Contact & Auction Alert Subscription */}
          <div className="lg:col-span-4 space-y-4 text-xs">
            <h4 className="font-extrabold text-white uppercase tracking-wider text-[11px] text-amber-400">
              Bulawayo Retail Outlet & HQ
            </h4>

            <div className="space-y-2 text-slate-300">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span><strong>Bulawayo Retail Outlet:</strong> 61-69 Birkenhead Road, Belmont Industrial Area, P.O. Box 953, Bulawayo, Zimbabwe</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>
                  <strong className="text-amber-300">Hotline / Direct Call: 0779897736</strong> | +263 (9) 477151
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="font-mono text-slate-300">hq.bulawayo@csc.co.zw</span>
              </p>
            </div>

            {/* Newsletter Subscription */}
            <div className="pt-2 space-y-2">
              <span className="font-bold text-white block text-[11px]">
                Subscribe for Livestock Price Updates & Auction Alerts
              </span>
              <form onSubmit={handleNewsletter} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 flex-1"
                />
                <button
                  type="submit"
                  className="bg-red-800 hover:bg-red-700 text-white font-bold px-3 py-2 rounded-lg transition-colors flex items-center justify-center shrink-0 border border-red-700"
                >
                  {subscribed ? <Check className="w-4 h-4 text-emerald-400" /> : <Send className="w-4 h-4 text-amber-400" />}
                </button>
              </form>
              {subscribed && (
                <p className="text-[10px] text-emerald-400 font-semibold">
                  Subscribed to CSC Commercial Updates!
                </p>
              )}
            </div>
          </div>

        </div>

        {/* Bottom Legal & Executive Note */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500 border-t border-slate-900 pt-8">
          <p>
            © {new Date().getFullYear()} Cold Storage Company Ltd (CSC). All Rights Reserved. Operating under Mutapa Investment Fund.
          </p>
          <div className="flex items-center gap-4 text-[11px]">
            <a href="#home" className="hover:text-slate-300">Terms of Supply</a>
            <span>•</span>
            <a href="#home" className="hover:text-slate-300">Veterinary Compliance</a>
            <span>•</span>
            <button onClick={onOpenFarmerModal} className="hover:text-amber-300 text-amber-400 font-semibold">
              Farmer Delivery Portal
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
