import React, { useState } from 'react';
import { Scale, ShieldCheck, Truck, Users, CheckCircle2, ChevronRight, FileText, ArrowRight } from 'lucide-react';
import { CATTLE_PRICE_GRADES, BRANCHES } from '../data/mockData';
import { FarmerHerdSubmission } from '../types';

interface FarmerPortalProps {
  onOpenFarmerModal: () => void;
}

export const FarmerPortal: React.FC<FarmerPortalProps> = ({ onOpenFarmerModal }) => {
  return (
    <section id="farmers" className="py-16 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800 pb-6">
          <div className="space-y-2">
            <span className="text-amber-400 font-bold text-xs uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30 inline-block">
              Cattle Farmer Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Livestock Farmer & Outgrower Portal
            </h2>
            <p className="text-slate-400 text-sm max-w-2xl">
              Partnering with Zimbabwean cattle ranchers, communal farmers, and commercial feedlot operators to rebuild the national herd through transparent livestock purchasing, hygienic slaughtering, and prompt payments.
            </p>
          </div>

          <button
            onClick={onOpenFarmerModal}
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-red-800 to-red-900 hover:from-red-700 hover:to-red-800 text-white font-bold text-sm px-6 py-3 rounded-xl border border-red-700 shadow-xl"
          >
            <FileText className="w-4 h-4 text-amber-400" />
            <span>Register Herd / Schedule Delivery</span>
          </button>
        </div>

        {/* 4 Core Pillars for Cattle Farmers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-3 hover:border-amber-500/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-red-900/80 flex items-center justify-center border border-red-700">
              <Scale className="w-5 h-5 text-amber-400" />
            </div>
            <h3 className="text-lg font-bold text-white">Custom Service Slaughter</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Bring your cattle to Bulawayo HQ, Harare, or Masvingo abattoirs. We provide humane slaughtering, government classification, chilling, and quartering for a standard fixed fee.
            </p>
          </div>

          <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-3 hover:border-amber-500/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-amber-900/80 flex items-center justify-center border border-amber-700">
              <ShieldCheck className="w-5 h-5 text-amber-400" />
            </div>
            <h3 className="text-lg font-bold text-white">Direct Cattle Purchases</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              CSC buys cattle directly from registered farmers based on Cold Dressed Mass (CDM) rates. Guaranteed payment settled upon official veterinary grading.
            </p>
          </div>

          <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-3 hover:border-amber-500/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center border border-slate-700">
              <Users className="w-5 h-5 text-emerald-400" />
            </div>
            <h3 className="text-lg font-bold text-white">Feedlot & Fattening Schemes</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Partner with CSC feedlot programs in Bulawayo and Masvingo to finish lean cattle with high-energy feed ratios prior to slaughter to elevate grading to AAA Prime.
            </p>
          </div>

          <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-3 hover:border-amber-500/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-blue-900/80 flex items-center justify-center border border-blue-700">
              <Truck className="w-5 h-5 text-blue-400" />
            </div>
            <h3 className="text-lg font-bold text-white">Veterinary & Permit Support</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Assistance with Ministry of Agriculture movement permits, Foot-and-Mouth (FMD) zone compliance, brand registration, and ear-tag traceability logs.
            </p>
          </div>

        </div>

        {/* Live Cattle Price Grid Matrix */}
        <div className="bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 border-b border-slate-800 pb-4">
            <div>
              <span className="text-amber-400 font-bold text-[10px] uppercase tracking-widest block">
                Official Ministry Inspected Rates
              </span>
              <h3 className="text-xl font-extrabold text-white">
                Live Cold Dressed Mass (CDM) Price Matrix
              </h3>
            </div>
            <span className="text-xs text-slate-400 font-medium">
              Effective: July 2026 | Currency: USD ($/kg)
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-900 text-slate-300 border-b border-slate-800 uppercase tracking-wider font-bold">
                  <th className="p-3">Grade Code</th>
                  <th className="p-3">Carcass Classification</th>
                  <th className="p-3">Min. Mass (KG)</th>
                  <th className="p-3">Description & Specifications</th>
                  <th className="p-3 text-right">CDM Rate ($/kg)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 text-slate-300">
                {CATTLE_PRICE_GRADES.map((item) => (
                  <tr key={item.code} className="hover:bg-slate-900/60 transition-colors">
                    <td className="p-3 font-mono font-bold text-amber-400">{item.code}</td>
                    <td className="p-3 font-extrabold text-white">{item.grade}</td>
                    <td className="p-3 text-slate-400">{item.minWeightKg} KG</td>
                    <td className="p-3 text-slate-300 max-w-md">{item.description}</td>
                    <td className="p-3 text-right">
                      <span className="text-sm font-black text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded border border-emerald-800">
                        ${item.pricePerKgCDM.toFixed(2)} / kg
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 bg-slate-900/80 rounded-xl border border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Cattle weighing conducted on official government calibrated scales at all CSC branch intake bays.</span>
            </div>
            <button
              onClick={onOpenFarmerModal}
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold px-5 py-2 rounded-lg text-xs transition-colors shrink-0"
            >
              Book Delivery Date
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
