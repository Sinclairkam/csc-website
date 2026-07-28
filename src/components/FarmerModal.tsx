import React, { useState } from 'react';
import { X, Check, FileText, Scale, Phone, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { BRANCHES } from '../data/mockData';
import { FarmerHerdSubmission } from '../types';

interface FarmerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FarmerModal: React.FC<FarmerModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [form, setForm] = useState<FarmerHerdSubmission>({
    farmerName: '',
    farmName: '',
    district: '',
    province: 'Matabeleland North',
    phone: '',
    email: '',
    cattleCount: 15,
    breed: 'Brahman / Mashona Cross',
    preferredBranch: BRANCHES[0].id,
    serviceRequested: 'direct-sale',
    estimatedDeliveryDate: '',
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [bookingRef, setBookingRef] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = `CSC-LIVESTOCK-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(ref);
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl bg-slate-900 border-2 border-slate-700 rounded-2xl shadow-2xl overflow-hidden text-white my-8">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-950 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <Scale className="w-5 h-5 text-amber-400" />
            <span className="font-extrabold text-base text-white">
              Cattle Delivery & Herd Registration Portal
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-950 text-emerald-400 rounded-full flex items-center justify-center mx-auto border-2 border-emerald-500">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-black text-white">
                Cattle Delivery Booking Submitted!
              </h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                Thank you, <strong className="text-amber-400">{form.farmerName}</strong>. Your herd registration has been received by CSC Livestock Operations.
              </p>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 max-w-md mx-auto text-left space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-400">Booking Reference:</span>
                  <span className="font-mono font-bold text-amber-400 text-sm">{bookingRef}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Cattle Head Count:</span>
                  <span className="font-bold text-white">{form.cattleCount} Head ({form.breed})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Target Intake Branch:</span>
                  <span className="font-bold text-white">
                    {BRANCHES.find((b) => b.id === form.preferredBranch)?.name}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Service Type:</span>
                  <span className="font-bold text-emerald-400 uppercase">{form.serviceRequested}</span>
                </div>
              </div>

              <p className="text-xs text-slate-400">
                Our Chief Veterinary Officer at your selected depot will call <strong className="text-white">{form.phone}</strong> within 4 hours to verify movement permits.
              </p>

              <button
                onClick={onClose}
                className="mt-4 px-6 py-2.5 bg-red-800 hover:bg-red-700 text-white font-bold text-xs rounded-xl"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-bold text-slate-200">Farmer / Company Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Tendai Moyo / Bwerani Ranch"
                    value={form.farmerName}
                    onChange={(e) => setForm({ ...form, farmerName: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-slate-100 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-200">Farm / Property Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Shangani Farm, Stand 14"
                    value={form.farmName}
                    onChange={(e) => setForm({ ...form, farmName: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-slate-100 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-bold text-slate-200">Province *</label>
                  <select
                    value={form.province}
                    onChange={(e) => setForm({ ...form, province: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-slate-100 focus:outline-none focus:border-amber-500"
                  >
                    <option value="Matabeleland North">Matabeleland North</option>
                    <option value="Matabeleland South">Matabeleland South</option>
                    <option value="Midlands">Midlands</option>
                    <option value="Masvingo">Masvingo</option>
                    <option value="Mashonaland West">Mashonaland West</option>
                    <option value="Mashonaland East">Mashonaland East</option>
                    <option value="Mashonaland Central">Mashonaland Central</option>
                    <option value="Manicaland">Manicaland</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-200">District *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Umguza, Insiza, Nkayi, Chiredzi"
                    value={form.district}
                    onChange={(e) => setForm({ ...form, district: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-slate-100 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-bold text-slate-200">Contact Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+263 77..."
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-slate-100 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-200">Email Address (Optional)</label>
                  <input
                    type="email"
                    placeholder="farmer@domain.co.zw"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-slate-100 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-slate-950 p-3 rounded-xl border border-slate-800">
                <div className="space-y-1">
                  <label className="font-bold text-slate-200">Head Count *</label>
                  <input
                    type="number"
                    min="1"
                    required
                    value={form.cattleCount}
                    onChange={(e) => setForm({ ...form, cattleCount: parseInt(e.target.value) || 1 })}
                    className="w-full bg-slate-900 border border-slate-700 rounded p-2 text-slate-100 font-bold"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-200">Breed Type</label>
                  <select
                    value={form.breed}
                    onChange={(e) => setForm({ ...form, breed: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded p-2 text-slate-100"
                  >
                    <option value="Brahman / Mashona Cross">Brahman / Mashona Cross</option>
                    <option value="Pure Brahman">Pure Brahman</option>
                    <option value="Nguni / Tuli Heritage">Nguni / Tuli Heritage</option>
                    <option value="Simmental / Beefmaster">Simmental / Beefmaster</option>
                    <option value="Mixed Commercial Herd">Mixed Commercial Herd</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-200">Estimated Delivery Date</label>
                  <input
                    type="date"
                    required
                    value={form.estimatedDeliveryDate}
                    onChange={(e) => setForm({ ...form, estimatedDeliveryDate: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded p-2 text-slate-100"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-bold text-slate-200">Target CSC Intake Facility *</label>
                  <select
                    value={form.preferredBranch}
                    onChange={(e) => setForm({ ...form, preferredBranch: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-slate-100"
                  >
                    {BRANCHES.map((b) => (
                      <option key={b.id} value={b.id}>
                        {b.name} ({b.city})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-200">Requested Service *</label>
                  <select
                    value={form.serviceRequested}
                    onChange={(e) => setForm({ ...form, serviceRequested: e.target.value as any })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-slate-100"
                  >
                    <option value="direct-sale">Direct Sale to CSC (Cold Dressed Mass CDM)</option>
                    <option value="custom-slaughter">Custom Service Slaughter & Carcass Chilling</option>
                    <option value="feedlot-contract">CSC Feedlot Finishing Contract</option>
                  </select>
                </div>
              </div>

              <div className="pt-2 flex justify-end gap-3 border-t border-slate-800">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-red-800 hover:bg-red-700 text-white font-bold rounded-lg shadow-lg border border-red-700"
                >
                  Submit Cattle Booking
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
