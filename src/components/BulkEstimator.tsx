import React, { useState, useMemo } from 'react';
import { Calculator, Truck, Thermometer, ShieldCheck, FileText, ArrowRight, CheckCircle2, Clock, Scale } from 'lucide-react';
import { PRODUCTS, BRANCHES } from '../data/mockData';
import { Product, QuoteItem } from '../types';

interface BulkEstimatorProps {
  onAddEstimateToCart: (quoteItem: QuoteItem) => void;
  onNavigateToCart: () => void;
}

export const BulkEstimator: React.FC<BulkEstimatorProps> = ({
  onAddEstimateToCart,
  onNavigateToCart,
}) => {
  const [selectedProductId, setSelectedProductId] = useState<string>(PRODUCTS[0].id);
  const [quantityKg, setQuantityKg] = useState<number>(500);
  const [selectedBranchId, setSelectedBranchId] = useState<string>(BRANCHES[0].id);
  const [customerType, setCustomerType] = useState<string>('supermarket');
  const [packagingSpec, setPackagingSpec] = useState<string>('primal-vacuum');
  const [frequency, setFrequency] = useState<string>('weekly');
  const [customNotes, setCustomNotes] = useState<string>('');
  const [added, setAdded] = useState<boolean>(false);

  const selectedProduct = useMemo(() => {
    return PRODUCTS.find((p) => p.id === selectedProductId) || PRODUCTS[0];
  }, [selectedProductId]);

  const selectedBranch = useMemo(() => {
    return BRANCHES.find((b) => b.id === selectedBranchId) || BRANCHES[0];
  }, [selectedBranchId]);

  // Real-time calculation logic
  const discountPercentage = useMemo(() => {
    if (quantityKg >= 10000) return 15; // 10 Tons+
    if (quantityKg >= 5000) return 12; // 5 Tons
    if (quantityKg >= 2000) return 10; // 2 Tons
    if (quantityKg >= 500) return 5;   // 500kg
    return 0;
  }, [quantityKg]);

  const baseRatePerKg = selectedProduct.retailPriceKg;
  const discountedRatePerKg = baseRatePerKg * (1 - discountPercentage / 100);
  const estimatedSubtotal = quantityKg * discountedRatePerKg;
  const savingsAmount = (quantityKg * baseRatePerKg) - estimatedSubtotal;

  // Vehicle allocation recommendation based on weight
  const vehicleAllocation = useMemo(() => {
    if (quantityKg >= 10000) {
      return {
        type: '15-Ton Articulated Cold Rig',
        spec: 'Triple-axle ThermoKing Unit (-20°C)',
        leadTime: '24 - 48 Hours Dispatch',
      };
    } else if (quantityKg >= 3000) {
      return {
        type: '7-Ton Heavy Refrigerated Truck',
        spec: 'Dual Temperature Zone Reefer',
        leadTime: '24 Hours Dispatch',
      };
    } else if (quantityKg >= 1000) {
      return {
        type: '3.5-Ton Insulated Cold Van',
        spec: 'GPS Telemetry Temperature Tracked',
        leadTime: '12 - 24 Hours Dispatch',
      };
    } else {
      return {
        type: '1.5-Ton Rapid Dispatch Refrigerated Utility',
        spec: 'Chilled Express Delivery Unit',
        leadTime: 'Same Day / 12 Hours',
      };
    }
  }, [quantityKg]);

  const handleApplyToQuote = () => {
    onAddEstimateToCart({
      product: selectedProduct,
      quantityKg,
      packagingPreference: packagingSpec,
      customNotes: `Frequency: ${frequency} | Client: ${customerType} | Branch: ${selectedBranch.name}`,
    });
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onNavigateToCart();
    }, 1200);
  };

  return (
    <section id="estimator" className="py-16 bg-slate-950 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="space-y-2 border-b border-slate-800 pb-6 text-left">
          <span className="text-amber-400 font-bold text-xs uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30 inline-block">
            Wholesale B2B Order Portal
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Dynamic Bulk Order & Cost Estimator
          </h2>
          <p className="text-slate-400 text-sm max-w-3xl">
            Tailored for supermarket chains, butcheries, hotels, boarding schools, defense forces, and regional exporters. Calculate real-time wholesale discounts, vehicle cold-chain requirements, and dispatch lead times.
          </p>
        </div>

        {/* Main Estimator Layout: Left Controls, Right Output Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Form (7 Cols) */}
          <div className="lg:col-span-7 bg-slate-900/90 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-2xl space-y-6">
            
            <div className="flex items-center gap-2 border-b border-slate-800 pb-4">
              <Calculator className="w-5 h-5 text-amber-400" />
              <h3 className="text-lg font-bold text-white">Order Specifications</h3>
            </div>

            {/* Select Product Cut */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-200 block uppercase tracking-wider">
                1. Select Meat Cut / Product
              </label>
              <select
                value={selectedProductId}
                onChange={(e) => setSelectedProductId(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm font-semibold text-white focus:outline-none focus:border-amber-500"
              >
                {PRODUCTS.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name} ({p.grade}) — ${p.retailPriceKg.toFixed(2)}/kg
                  </option>
                ))}
              </select>
            </div>

            {/* Quantity Slider & Numeric Entry */}
            <div className="space-y-3 bg-slate-950 p-4 rounded-xl border border-slate-800">
              <div className="flex justify-between items-center text-xs font-bold">
                <label className="text-slate-200 uppercase tracking-wider">
                  2. Target Order Quantity (KG / Metric Tons)
                </label>
                <span className="text-amber-400 font-extrabold text-sm">
                  {quantityKg >= 1000 ? `${(quantityKg / 1000).toFixed(1)} Metric Tons` : `${quantityKg} KG`}
                </span>
              </div>

              {/* Slider */}
              <input
                type="range"
                min="100"
                max="20000"
                step="100"
                value={quantityKg}
                onChange={(e) => setQuantityKg(parseInt(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />

              {/* Quick Preset Buttons */}
              <div className="flex flex-wrap gap-2 pt-1">
                {[250, 500, 1000, 2500, 5000, 10000].map((preset) => (
                  <button
                    key={preset}
                    onClick={() => setQuantityKg(preset)}
                    className={`px-3 py-1 rounded-lg text-xs font-bold border transition-colors ${
                      quantityKg === preset
                        ? 'bg-amber-500 text-slate-950 border-amber-400'
                        : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border-slate-700'
                    }`}
                  >
                    {preset >= 1000 ? `${preset / 1000} Ton${preset > 1000 ? 's' : ''}` : `${preset} KG`}
                  </button>
                ))}
              </div>
            </div>

            {/* Preferred Delivery Branch */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-200 block uppercase tracking-wider">
                3. Dispatch Facility Depot
              </label>
              <select
                value={selectedBranchId}
                onChange={(e) => setSelectedBranchId(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm font-semibold text-white focus:outline-none focus:border-amber-500"
              >
                {BRANCHES.map((b) => (
                  <option key={b.id} value={b.id}>
                    {b.name} ({b.city})
                  </option>
                ))}
              </select>
            </div>

            {/* Grid for Packaging Spec & Frequency */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-200 block uppercase tracking-wider">
                  4. Packaging Spec
                </label>
                <select
                  value={packagingSpec}
                  onChange={(e) => setPackagingSpec(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2.5 text-xs font-semibold text-slate-200 focus:outline-none focus:border-amber-500"
                >
                  <option value="primal-vacuum">Primal Vacuum Sealed Cuts</option>
                  <option value="whole-sides">Whole Sides / Hanging Quarters</option>
                  <option value="retail-portioned">Retail Portioned & Tray Packaged</option>
                  <option value="export-cartons">20kg Poly-Lined Master Export Cartons</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-200 block uppercase tracking-wider">
                  5. Supply Frequency
                </label>
                <select
                  value={frequency}
                  onChange={(e) => setFrequency(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2.5 text-xs font-semibold text-slate-200 focus:outline-none focus:border-amber-500"
                >
                  <option value="one-off">One-Off Spot Purchase</option>
                  <option value="weekly">Weekly Standing Order</option>
                  <option value="fortnightly">Fortnightly Supply</option>
                  <option value="monthly">Monthly Contract Schedule</option>
                </select>
              </div>
            </div>

            {/* Customer Type */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-200 block uppercase tracking-wider">
                6. Client Business Sector
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-medium">
                {[
                  { id: 'supermarket', label: 'Supermarket Chain' },
                  { id: 'butchery', label: 'Independent Butchery' },
                  { id: 'hotel', label: 'Hotel & Lodge' },
                  { id: 'institution', label: 'Boarding School / College' },
                  { id: 'defense', label: 'Defense & Mining Mess' },
                  { id: 'exporter', label: 'Regional Commodity Exporter' },
                ].map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setCustomerType(type.id)}
                    className={`py-2 px-3 rounded-lg border text-left transition-colors ${
                      customerType === type.id
                        ? 'bg-red-900/90 text-white border-red-700 font-bold'
                        : 'bg-slate-950 text-slate-300 border-slate-800 hover:bg-slate-800'
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Real-time Calculation Summary Card (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900 border-2 border-amber-500/40 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6 relative overflow-hidden">
              
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl" />

              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block">
                    Estimated B2B Proforma Output
                  </span>
                  <h3 className="text-xl font-extrabold text-white">Order Summary</h3>
                </div>
                <span className="bg-emerald-950 text-emerald-400 font-bold text-xs px-2.5 py-1 rounded-full border border-emerald-800">
                  {discountPercentage}% Tier Discount
                </span>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs text-slate-300">
                  <span>Selected Product Cut:</span>
                  <span className="font-bold text-white">{selectedProduct.name}</span>
                </div>

                <div className="flex justify-between items-center text-xs text-slate-300">
                  <span>Total Order Mass:</span>
                  <span className="font-bold text-amber-400">
                    {quantityKg.toLocaleString()} KG ({(quantityKg / 1000).toFixed(2)} Tons)
                  </span>
                </div>

                <div className="flex justify-between items-center text-xs text-slate-300">
                  <span>Base Rate per KG:</span>
                  <span className="font-medium text-slate-400 line-through">
                    ${baseRatePerKg.toFixed(2)} USD
                  </span>
                </div>

                <div className="flex justify-between items-center text-xs text-slate-300">
                  <span>Tier Discounted Rate:</span>
                  <span className="font-extrabold text-emerald-400 text-sm">
                    ${discountedRatePerKg.toFixed(2)} USD / kg
                  </span>
                </div>

                {savingsAmount > 0 && (
                  <div className="bg-emerald-950/60 p-2.5 rounded-lg border border-emerald-800/80 text-xs text-emerald-300 flex justify-between items-center">
                    <span>Bulk Tier Savings:</span>
                    <span className="font-extrabold text-emerald-400">
                      -${savingsAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} USD
                    </span>
                  </div>
                )}

                <div className="pt-3 border-t border-slate-800 flex justify-between items-baseline">
                  <span className="text-sm font-bold text-slate-200">Estimated Total Cost:</span>
                  <div className="text-right">
                    <span className="text-2xl sm:text-3xl font-black text-amber-400 tracking-tight">
                      ${estimatedSubtotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </span>
                    <span className="text-xs text-slate-400 block font-medium">USD (Excl. VAT & Duties)</span>
                  </div>
                </div>
              </div>

              {/* Vehicle & Logistics Requirement */}
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3 text-xs">
                <div className="flex items-center gap-2 text-amber-400 font-bold uppercase tracking-wider text-[11px]">
                  <Truck className="w-4 h-4 text-amber-400" />
                  <span>Cold-Chain Allocation Spec</span>
                </div>

                <div className="space-y-1.5 text-slate-300">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Vehicle Requirement:</span>
                    <span className="font-bold text-white">{vehicleAllocation.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Reefer Unit:</span>
                    <span className="text-slate-200">{vehicleAllocation.spec}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Dispatch Lead Time:</span>
                    <span className="font-semibold text-emerald-400">{vehicleAllocation.leadTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Dispatch Hub:</span>
                    <span className="font-semibold text-amber-300">{selectedBranch.name}</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={handleApplyToQuote}
                disabled={added}
                className={`w-full py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-xl transition-all ${
                  added
                    ? 'bg-emerald-600 text-white'
                    : 'bg-gradient-to-r from-red-800 to-red-900 hover:from-red-700 hover:to-red-800 text-white border border-red-700'
                }`}
              >
                {added ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-white" />
                    <span>Added to Wholesale Inquiry Cart</span>
                  </>
                ) : (
                  <>
                    <FileText className="w-5 h-5 text-amber-400" />
                    <span>Convert to Official Quote Request</span>
                  </>
                )}
              </button>

              <p className="text-[11px] text-center text-slate-400">
                Guaranteed response within 2 business hours from Bulawayo HQ Commercial Sales Desk.
              </p>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
