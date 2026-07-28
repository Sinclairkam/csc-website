import React, { useState } from 'react';
import { Globe, Award, ShieldCheck, Thermometer, CheckCircle2, FileText, Send, X, ArrowRight } from 'lucide-react';

export const ExportDivision: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [exportForm, setExportForm] = useState({
    country: 'United Arab Emirates',
    organization: '',
    contactName: '',
    phone: '',
    email: '',
    targetVolumeTons: 20,
    requestedCut: 'AAA Prime Beef Fillet & Striploin',
  });

  const handleExportSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="export" className="py-16 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-2 border-b border-slate-800 pb-6 text-left">
          <div className="flex items-center gap-2">
            <Globe className="w-5 h-5 text-amber-400" />
            <span className="text-amber-400 font-bold text-xs uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
              International Trade & Quality Standards
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Export & Quality Assurance Division
          </h2>
          <p className="text-slate-400 text-sm max-w-3xl">
            Building upon a historic legacy of supplying prime Zimbabwean pasture beef to European Union quota markets, CSC is expanding export corridors across the SADC region and Middle Eastern Halal commodity channels.
          </p>
        </div>

        {/* 3 Core Quality Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-4 hover:border-amber-500/40 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-red-900/80 flex items-center justify-center border border-red-700">
              <Award className="w-6 h-6 text-amber-400" />
            </div>
            <h3 className="text-xl font-extrabold text-white">EU Standards Legacy</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              CSC facilities were historically constructed to strict European Union veterinary requirements, featuring sanitary stainless steel slaughter corridors, de-boning plants, and blast freezers operating at -40°C.
            </p>
            <ul className="text-xs text-slate-400 space-y-2 pt-2 border-t border-slate-800">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>ISO 22000 Food Safety System</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Full HACCP Hazard Analysis Certification</span>
              </li>
            </ul>
          </div>

          <div className="bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-4 hover:border-amber-500/40 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-amber-900/80 flex items-center justify-center border border-amber-700">
              <ShieldCheck className="w-6 h-6 text-amber-400" />
            </div>
            <h3 className="text-xl font-extrabold text-white">100% Certified Halal Line</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Supervised and certified by the Supreme Islamic Council of Zimbabwe. Dedicated slaughter lines adhere strictly to Islamic dietary laws, making CSC beef a trusted supplier for UAE, Qatar, and Kuwait importers.
            </p>
            <ul className="text-xs text-slate-400 space-y-2 pt-2 border-t border-slate-800">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Supreme Islamic Council Supervised</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Batch Halal Certificates Issued</span>
              </li>
            </ul>
          </div>

          <div className="bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-4 hover:border-amber-500/40 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-blue-900/80 flex items-center justify-center border border-blue-700">
              <Thermometer className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-extrabold text-white">SADC Cold Corridor Logistics</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Export logistics corridors servicing South Africa, Mozambique (Beira/Maputo ports), Democratic Republic of Congo (DRC), and Zambia via continuous GPS temperature-monitored refrigerated containers.
            </p>
            <ul className="text-xs text-slate-400 space-y-2 pt-2 border-t border-slate-800">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Continuous Cold Chain Telemetry</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Beira & Durban Port Export Clearances</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Global Trade Callout Banner */}
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-8 rounded-2xl border-2 border-amber-500/30 flex flex-col md:flex-row justify-between items-center gap-6 shadow-2xl">
          <div className="space-y-2 text-left">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
              International Commodity Traders & Wholesalers
            </span>
            <h3 className="text-2xl font-black text-white">
              Interested in Bulk Beef Export Shipments?
            </h3>
            <p className="text-xs text-slate-300 max-w-2xl">
              Connect directly with Bulawayo HQ Export Sales Directorate to discuss container-load pricing, shipping schedules, and sanitary certificate requirements.
            </p>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm px-6 py-3.5 rounded-xl flex items-center gap-2 shadow-xl shrink-0 transition-transform hover:scale-105"
          >
            <Globe className="w-4 h-4" />
            <span>Submit Export Trade Inquiry</span>
          </button>
        </div>

      </div>

      {/* Export Inquiry Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="relative w-full max-w-xl bg-slate-900 border-2 border-slate-700 rounded-2xl shadow-2xl overflow-hidden text-white my-8">
            <div className="flex items-center justify-between px-6 py-4 bg-slate-950 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-amber-400" />
                <span className="font-extrabold text-base">CSC Export Division Inquiry</span>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              {submitted ? (
                <div className="text-center py-8 space-y-3">
                  <div className="w-12 h-12 bg-emerald-950 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Export Inquiry Submitted</h4>
                  <p className="text-xs text-slate-300">
                    Thank you. The CSC International Trade Division will email you proforma terms and sanitary specifications within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setIsModalOpen(false);
                    }}
                    className="px-5 py-2 bg-slate-800 hover:bg-slate-700 text-xs font-bold rounded-lg"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleExportSubmit} className="space-y-3 text-xs">
                  <div className="space-y-1">
                    <label className="font-bold text-slate-200">Destination Country *</label>
                    <select
                      value={exportForm.country}
                      onChange={(e) => setExportForm({ ...exportForm, country: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-slate-100"
                    >
                      <option value="United Arab Emirates">United Arab Emirates (UAE)</option>
                      <option value="Qatar">Qatar</option>
                      <option value="South Africa">South Africa</option>
                      <option value="Mozambique">Mozambique</option>
                      <option value="Democratic Republic of Congo">DR Congo</option>
                      <option value="Angola">Angola</option>
                      <option value="Zambia">Zambia</option>
                      <option value="Other SADC / International">Other SADC / International</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="font-bold text-slate-200">Company Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Importer / Trade Entity"
                        value={exportForm.organization}
                        onChange={(e) => setExportForm({ ...exportForm, organization: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-slate-100"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="font-bold text-slate-200">Contact Person *</label>
                      <input
                        type="text"
                        required
                        placeholder="Full Name"
                        value={exportForm.contactName}
                        onChange={(e) => setExportForm({ ...exportForm, contactName: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-slate-100"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="font-bold text-slate-200">Phone (with country code) *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+971..."
                        value={exportForm.phone}
                        onChange={(e) => setExportForm({ ...exportForm, phone: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-slate-100"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="font-bold text-slate-200">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="trade@company.com"
                        value={exportForm.email}
                        onChange={(e) => setExportForm({ ...exportForm, email: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-slate-100"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 bg-slate-950 p-3 rounded-xl border border-slate-800">
                    <div className="space-y-1">
                      <label className="font-bold text-slate-200">Target Container Mass (Tons)</label>
                      <input
                        type="number"
                        min="5"
                        value={exportForm.targetVolumeTons}
                        onChange={(e) => setExportForm({ ...exportForm, targetVolumeTons: parseInt(e.target.value) || 20 })}
                        className="w-full bg-slate-900 border border-slate-700 rounded p-2 text-amber-400 font-bold"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="font-bold text-slate-200">Primary Product</label>
                      <input
                        type="text"
                        value={exportForm.requestedCut}
                        onChange={(e) => setExportForm({ ...exportForm, requestedCut: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-700 rounded p-2 text-slate-100"
                      />
                    </div>
                  </div>

                  <div className="pt-2 flex justify-end gap-2 border-t border-slate-800">
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      className="px-4 py-2 bg-slate-800 text-slate-300 rounded-lg font-bold"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2 bg-red-800 hover:bg-red-700 text-white font-bold rounded-lg flex items-center gap-1.5"
                    >
                      <Send className="w-3.5 h-3.5 text-amber-400" />
                      <span>Send Trade RFP</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
