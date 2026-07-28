import React from 'react';
import { Award, ShieldCheck, Truck, ArrowRight, Building2, Scale, FileText } from 'lucide-react';
import { TRUST_METRICS } from '../data/mockData';

interface HeroProps {
  onExploreCatalog: () => void;
  onOpenEstimator: () => void;
  onOpenFarmerModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreCatalog,
  onOpenEstimator,
  onOpenFarmerModal,
}) => {
  return (
    <section id="home" className="relative text-white overflow-hidden border-b border-slate-800 bg-[url('https://i.8upload.com/image/d97dc5457a9d1a95/csc-background.png')] bg-cover bg-[left_center] md:bg-center bg-no-repeat">
      {/* Semi-transparent dark overlay */}
      <div className="absolute inset-0 bg-slate-950/75 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-20 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Main Hero Copy & CTAs */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left">
            {/* Sovereign Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/40 text-amber-300 text-xs font-semibold shadow-lg backdrop-blur-md max-w-full">
              <Building2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span className="truncate">A Mutapa Investment Fund Sovereign Enterprise</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping shrink-0" />
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-6xl font-black tracking-tight text-white leading-[1.15] sm:leading-[1.1]">
              Zimbabwe's Premier Beef Authority{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-red-500">
                Since 1937.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
              From our flagship <strong className="text-white font-semibold">Bulawayo headquarters</strong> to nationwide cold-chain distribution—delivering AAA Grade pasture-raised beef, processed meats, and bulk livestock services to supermarkets, hotels, institutions, and regional export markets.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={onExploreCatalog}
                className="group flex items-center justify-center gap-2 bg-gradient-to-r from-red-800 to-red-900 hover:from-red-700 hover:to-red-800 text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-lg shadow-xl shadow-red-950/60 border border-red-700/80 transition-all transform hover:-translate-y-0.5"
              >
                <span>Explore Meat Catalog</span>
                <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenEstimator}
                className="flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-amber-300 font-bold text-sm sm:text-base px-6 py-3.5 rounded-lg border border-amber-500/40 shadow-lg transition-all hover:border-amber-400"
              >
                <FileText className="w-4 h-4 text-amber-400" />
                <span>B2B Bulk Order Portal</span>
              </button>

              <button
                onClick={onOpenFarmerModal}
                className="sm:hidden flex items-center justify-center gap-2 bg-slate-800 text-slate-200 font-semibold text-xs py-3 px-4 rounded-lg border border-slate-700"
              >
                <span>Farmers: Schedule Cattle Delivery</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-slate-300 font-medium">
              <div className="flex items-center gap-2 bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Vet Inspected</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
                <Award className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Certified Halal Line</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
                <Truck className="w-4 h-4 text-blue-400 shrink-0" />
                <span>-18°C Cold Telemetry</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
                <Scale className="w-4 h-4 text-red-400 shrink-0" />
                <span>Official Weight & Grade</span>
              </div>
            </div>

          </div>

          {/* Hero Feature Card: Bulawayo HQ Spotlight */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900/90 border-2 border-slate-800 rounded-2xl p-6 shadow-2xl backdrop-blur-xl relative space-y-5">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block">
                    Flagship Facility
                  </span>
                  <h3 className="text-xl font-extrabold text-white">
                    Bulawayo Main Works
                  </h3>
                </div>
                <span className="inline-flex items-center gap-1 bg-emerald-950 text-emerald-400 text-xs font-bold px-2.5 py-1 rounded-full border border-emerald-800">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Active Operations
                </span>
              </div>

              {/* Photo & Quick Info */}
              <div className="relative rounded-lg overflow-hidden h-44 bg-slate-950 border border-slate-800 group">
                <img
                  src="https://i.8upload.com/image/cd6b4979459155ab/cscimage.jpg"
                  alt="Bulawayo HQ Cold Storage Processing Plant"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-xs text-slate-200 flex justify-between items-end">
                  <div>
                    <p className="font-bold text-white text-sm">Belmont Industrial Area</p>
                    <p className="text-slate-300">J. Chinamano Road, Bulawayo</p>
                  </div>
                  <span className="bg-red-800 text-white font-bold text-[10px] px-2 py-0.5 rounded border border-red-700">
                    HQ Depot
                  </span>
                </div>
              </div>

              {/* Key Capacity Highlights */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-slate-950/80 p-3 rounded-lg border border-slate-800">
                  <p className="text-slate-400 text-[11px]">Daily Slaughter Capacity</p>
                  <p className="text-amber-400 font-extrabold text-base">800 Head / Day</p>
                </div>
                <div className="bg-slate-950/80 p-3 rounded-lg border border-slate-800">
                  <p className="text-slate-400 text-[11px]">Cold Store Storage</p>
                  <p className="text-white font-extrabold text-base">2,500 Tonnes</p>
                </div>
              </div>

              {/* Direct Call to Action */}
              <div className="pt-2 flex items-center justify-between text-xs text-slate-300 bg-slate-950 p-3 rounded-xl border border-slate-800">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-amber-400" />
                  <span>Wholesale Order Desk:</span>
                </div>
                <a
                  href="tel:+2639477151"
                  className="font-bold text-amber-300 hover:underline"
                >
                  +263 (9) 477151
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Live Metrics Strip */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-slate-800">
          {TRUST_METRICS.map((metric, idx) => (
            <div key={idx} className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 text-left space-y-1 hover:border-amber-500/40 transition-colors">
              <p className="text-2xl sm:text-3xl font-black text-amber-400 tracking-tight">
                {metric.value}
              </p>
              <p className="text-xs sm:text-sm font-bold text-white">
                {metric.label}
              </p>
              <p className="text-[11px] text-slate-400">
                {metric.subtext}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
