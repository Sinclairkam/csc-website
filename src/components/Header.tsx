import React, { useState } from 'react';
import { Phone, ShoppingCart, Menu, X, ShieldCheck, ChevronRight, Building2, FileText } from 'lucide-react';
import { QuoteItem } from '../types';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  cart: QuoteItem[];
  setIsCartOpen: (open: boolean) => void;
  onOpenFarmerModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  cart,
  setIsCartOpen,
  onOpenFarmerModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const totalCartItems = cart.reduce((sum, item) => sum + item.quantityKg, 0);
  const cartCountLabel = cart.length;

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'catalog', label: 'Meat Catalog' },
    { id: 'estimator', label: 'Wholesale & Bulk' },
    { id: 'farmers', label: 'Livestock Farmers' },
    { id: 'facilities', label: 'Facilities & Branches' },
    { id: 'export', label: 'Export Division' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-slate-900 text-white shadow-xl border-b border-slate-800">
      {/* Announcement Bar */}
      <div className="hidden md:block bg-red-900 text-red-100 text-xs py-1.5 px-4 font-medium border-b border-red-800/60">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="inline-flex items-center gap-1 bg-amber-500/20 text-amber-300 px-2.5 py-0.5 rounded-full font-bold text-[10px] uppercase tracking-wider border border-amber-500/30">
              Slogan
            </span>
            <span className="font-bold text-amber-300 italic">"Simply the best beef Worldwide"</span>
            <span className="hidden md:inline text-red-300/60">• Bulawayo Retail Outlet & Abattoir</span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <a
              href="tel:0779897736"
              className="flex items-center gap-1.5 hover:text-amber-300 transition-colors font-bold text-amber-300 bg-red-950/80 px-2.5 py-0.5 rounded border border-amber-500/40"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Hotline: 0779897736</span>
            </a>
            <a
              href="tel:+2639477151"
              className="hidden sm:flex items-center gap-1 hover:text-amber-300 transition-colors font-medium text-slate-200"
            >
              <span>+263 (9) 477151</span>
            </a>
            <span className="hidden lg:inline text-slate-600">|</span>
            <span className="hidden lg:flex items-center gap-1 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Government Vet Inspected
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex items-center justify-between">
          {/* Logo & Emblem */}
          <div
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-11 h-11 bg-gradient-to-br from-red-800 via-red-900 to-slate-950 rounded-lg flex items-center justify-center border-2 border-amber-500/60 shadow-lg group-hover:border-amber-400 transition-colors">
              <span className="text-amber-400 font-extrabold text-xl tracking-tighter">CSC</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-black text-lg sm:text-xl tracking-tight text-white group-hover:text-amber-300 transition-colors">
                  COLD STORAGE COMPANY
                </span>
                <span className="hidden lg:inline-block text-[10px] font-bold uppercase tracking-widest bg-slate-800 text-amber-400 px-2 py-0.5 rounded border border-slate-700">
                  LTD
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span>Bulawayo HQ, Zimbabwe</span>
                <span className="text-slate-600">•</span>
                <span className="text-amber-400/90 font-medium text-[11px] flex items-center gap-1">
                  <Building2 className="w-3 h-3 text-amber-400" />
                  Mutapa Investment Fund
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2 rounded-md text-sm font-semibold transition-all ${
                  activeTab === item.id
                    ? 'bg-red-800 text-white shadow-md shadow-red-900/30 border border-red-700'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Action CTAs & Cart Indicator */}
          <div className="flex items-center gap-3">
            {/* Cart / Inquiry Drawer Trigger */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition-colors flex items-center gap-2"
              title="View Wholesale Inquiry Cart"
            >
              <ShoppingCart className="w-5 h-5 text-amber-400" />
              <span className="hidden sm:inline font-semibold text-xs text-slate-200">
                Inquiry Cart
              </span>
              {cartCountLabel > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-red-600 text-white font-bold text-xs w-5 h-5 rounded-full flex items-center justify-center border-2 border-slate-900 animate-pulse">
                  {cartCountLabel}
                </span>
              )}
            </button>

            {/* Request Quote Primary Button */}
            <button
              onClick={() => handleNavClick('estimator')}
              className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-red-800 to-red-900 hover:from-red-700 hover:to-red-800 text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-lg shadow-lg border border-red-700/80 transition-all hover:shadow-red-900/40"
            >
              <FileText className="w-4 h-4 text-amber-400" />
              <span>Wholesale Quote</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 border border-slate-700"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-slate-900 border-t border-slate-800 px-4 pt-3 pb-6 space-y-2 shadow-2xl">
          <div className="grid grid-cols-1 gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-semibold transition-colors ${
                  activeTab === item.id
                    ? 'bg-red-800 text-white'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <span>{item.label}</span>
                <ChevronRight className="w-4 h-4 opacity-60" />
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenFarmerModal();
              }}
              className="w-full py-2.5 px-4 bg-amber-600/20 text-amber-300 rounded-lg text-xs font-bold border border-amber-500/30 flex items-center justify-center gap-2"
            >
              <span>Register Herd / Schedule Cattle Delivery</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleNavClick('estimator');
              }}
              className="w-full py-2.5 px-4 bg-red-800 text-white rounded-lg text-xs font-bold flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4 text-amber-400" />
              <span>Request B2B Bulk Order Quote</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
