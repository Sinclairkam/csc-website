import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Building2, ShieldCheck, ChevronRight, Navigation, Map } from 'lucide-react';
import { BRANCHES } from '../data/mockData';
import { BranchFacility } from '../types';

export const BranchLocator: React.FC = () => {
  const [selectedBranch, setSelectedBranch] = useState<BranchFacility>(BRANCHES[0]);

  return (
    <section id="facilities" className="py-16 bg-slate-950 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="space-y-2 border-b border-slate-800 pb-6 text-left">
          <span className="text-amber-400 font-bold text-xs uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30 inline-block">
            Nationwide Infrastructure
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            National Network & Branch Locator
          </h2>
          <p className="text-slate-400 text-sm max-w-3xl">
            CSC operates strategically positioned industrial abattoirs, tannery works, and cold distribution hubs across Zimbabwe to ensure seamless cold-chain delivery from pastures to urban centers and regional borders.
          </p>
        </div>

        {/* Interactive Layout: Left Selector List, Right Facility Detail & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Branch List Selector (5 Cols) */}
          <div className="lg:col-span-5 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 px-1">
              Select Regional Complex ({BRANCHES.length} Active Hubs)
            </h3>

            <div className="space-y-2 max-h-[560px] overflow-y-auto pr-1">
              {BRANCHES.map((branch) => (
                <div
                  key={branch.id}
                  onClick={() => setSelectedBranch(branch)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer space-y-2 ${
                    selectedBranch.id === branch.id
                      ? 'bg-slate-900 border-amber-500 shadow-xl'
                      : 'bg-slate-900/50 border-slate-800 hover:bg-slate-900 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold text-sm text-white">{branch.city}</span>
                      {branch.isHeadquarters && (
                        <span className="bg-red-800 text-white font-extrabold text-[9px] uppercase px-2 py-0.5 rounded border border-red-700">
                          Bulawayo HQ
                        </span>
                      )}
                    </div>
                    <ChevronRight className={`w-4 h-4 ${selectedBranch.id === branch.id ? 'text-amber-400' : 'text-slate-600'}`} />
                  </div>

                  <p className="text-xs font-semibold text-slate-300">
                    {branch.name}
                  </p>

                  <p className="text-[11px] text-slate-400 flex items-center gap-1.5 truncate">
                    <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span className="truncate">{branch.address}</span>
                  </p>

                  <div className="pt-1 flex items-center justify-between text-[11px]">
                    <span className="text-slate-400">Capacity:</span>
                    <span className="font-bold text-amber-300">{branch.capacity.split('/')[0]}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Branch View & Simulated Map (7 Cols) */}
          <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6">
            
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 border-b border-slate-800 pb-4">
              <div>
                <span className="text-amber-400 font-bold text-xs uppercase tracking-wider block">
                  {selectedBranch.role}
                </span>
                <h3 className="text-2xl font-black text-white">
                  {selectedBranch.name}
                </h3>
              </div>
              <a
                href={`tel:${selectedBranch.phone.split('/')[0].trim()}`}
                className="bg-red-800 hover:bg-red-700 text-white font-bold text-xs px-4 py-2.5 rounded-lg flex items-center gap-2 border border-red-700 self-start sm:self-auto"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Call Branch</span>
              </a>
            </div>

            {/* Interactive Map Representation Card */}
            <div className="relative rounded-xl overflow-hidden bg-slate-950 border border-slate-800 h-52 group">
              <img
                src={selectedBranch.image}
                alt={selectedBranch.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              
              {/* Map Marker Pin Badge */}
              <div className="absolute top-4 left-4 bg-slate-900/90 border border-amber-500/60 p-3 rounded-xl shadow-xl flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-red-900 flex items-center justify-center text-amber-400 font-bold">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">{selectedBranch.city} Coordinates</p>
                  <p className="text-[10px] font-mono text-amber-400">
                    {selectedBranch.coordinates.lat}° S, {selectedBranch.coordinates.lng}° E
                  </p>
                </div>
              </div>

              <div className="absolute bottom-3 left-4 right-4 flex justify-between items-center text-xs">
                <div className="flex items-center gap-2 text-slate-200">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span>{selectedBranch.operatingHours}</span>
                </div>
                <button
                  onClick={() => window.open(`https://maps.google.com/?q=${encodeURIComponent(selectedBranch.name + ' ' + selectedBranch.address)}`, '_blank')}
                  className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-3 py-1.5 rounded-lg text-xs flex items-center gap-1 shadow"
                >
                  <Navigation className="w-3 h-3" />
                  <span>Google Maps</span>
                </button>
              </div>
            </div>

            {/* Address & Direct Contact Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1.5">
                <span className="text-slate-400 font-bold uppercase tracking-wider block text-[10px]">
                  Physical Location
                </span>
                <p className="font-semibold text-white leading-relaxed">
                  {selectedBranch.address}
                </p>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1.5">
                <span className="text-slate-400 font-bold uppercase tracking-wider block text-[10px]">
                  Direct Contact Lines
                </span>
                <p className="font-bold text-amber-400">
                  {selectedBranch.phone}
                </p>
                <p className="text-slate-300 font-mono">
                  {selectedBranch.email}
                </p>
              </div>
            </div>

            {/* Operating Capacity & Services Offered */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs font-bold border-b border-slate-800 pb-2">
                <span className="text-slate-300 uppercase tracking-wider">Facility Capacity:</span>
                <span className="text-amber-400">{selectedBranch.capacity}</span>
              </div>

              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                Services Offered at this Complex:
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {selectedBranch.services.map((service, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-200"
                  >
                    <Building2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
