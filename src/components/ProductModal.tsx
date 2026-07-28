import React, { useState } from 'react';
import { X, ShoppingCart, ShieldCheck, Flame, Thermometer, Box, Award, Check } from 'lucide-react';
import { Product } from '../types';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantityKg: number, packaging: string) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  if (!product) return null;

  const [quantityKg, setQuantityKg] = useState<number>(product.minBulkOrderKg || 50);
  const [packagingPreference, setPackagingPreference] = useState<string>(product.packagingFormat);
  const [added, setAdded] = useState<boolean>(false);

  const handleAdd = () => {
    onAddToCart(product, quantityKg, packagingPreference);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl bg-slate-900 border-2 border-slate-700 rounded-2xl shadow-2xl overflow-hidden text-white my-8">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-950 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase bg-red-800 text-red-100 border border-red-700">
              {product.grade}
            </span>
            <span className="text-xs text-slate-400 uppercase font-semibold tracking-wider">
              CSC Official Specification Sheet
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
        <div className="p-6 max-h-[80vh] overflow-y-auto space-y-6">
          
          {/* Main Visual & Titles */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start">
            <div className="sm:col-span-5 rounded-xl overflow-hidden bg-slate-950 border border-slate-800 h-48 relative">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 left-2 flex flex-wrap gap-1">
                {product.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-slate-900/90 text-amber-300 font-bold text-[10px] px-2 py-0.5 rounded border border-amber-500/40"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="sm:col-span-7 space-y-3">
              <div>
                <h3 className="text-xl font-extrabold text-white">{product.name}</h3>
                {product.localName && (
                  <p className="text-sm font-bold text-amber-400 italic">
                    {product.localName}
                  </p>
                )}
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                {product.description}
              </p>

              {/* Price Badges */}
              <div className="grid grid-cols-2 gap-2 pt-2 text-xs">
                <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                  <span className="text-slate-400 text-[10px] block font-medium">Retail Rate</span>
                  <span className="text-amber-400 font-extrabold text-base">
                    ${product.retailPriceKg.toFixed(2)}
                  </span>
                  <span className="text-slate-400 text-[10px]"> / kg</span>
                </div>
                <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                  <span className="text-slate-400 text-[10px] block font-medium">Wholesale Rate</span>
                  <span className="text-emerald-400 font-extrabold text-base">
                    ${product.bulkPriceTon.toLocaleString()}
                  </span>
                  <span className="text-slate-400 text-[10px]"> / Metric Ton</span>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Cut Specifications */}
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              Technical & Cold Chain Specifications
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <Flame className="w-4 h-4 text-red-400 shrink-0" />
                <div>
                  <span className="font-semibold text-slate-200">Recommended Preparation: </span>
                  <span className="text-slate-300">{product.cookingMethod}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-slate-300">
                <Thermometer className="w-4 h-4 text-blue-400 shrink-0" />
                <div>
                  <span className="font-semibold text-slate-200">Storage Temperature: </span>
                  <span className="text-slate-300">{product.storageTemp}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-slate-300">
                <Box className="w-4 h-4 text-amber-400 shrink-0" />
                <div>
                  <span className="font-semibold text-slate-200">Standard Packaging: </span>
                  <span className="text-slate-300">{product.packagingFormat}</span>
                </div>
              </div>

              {product.marblingScore && (
                <div className="flex items-center gap-2 text-slate-300">
                  <Award className="w-4 h-4 text-amber-300 shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-200">Marbling Score: </span>
                    <span className="text-slate-300">{product.marblingScore}</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Quantity & Order Configuration */}
          <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700 space-y-4">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3">
              <div>
                <label className="text-xs font-bold text-slate-200 block">
                  Target Quantity (KG)
                </label>
                <span className="text-[11px] text-slate-400">
                  Minimum Bulk Order: {product.minBulkOrderKg} kg
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setQuantityKg(Math.max(product.minBulkOrderKg, quantityKg - 50))}
                  className="w-8 h-8 rounded bg-slate-900 border border-slate-700 font-bold text-slate-200 hover:bg-slate-700"
                >
                  -
                </button>
                <input
                  type="number"
                  value={quantityKg}
                  onChange={(e) => setQuantityKg(Math.max(10, parseInt(e.target.value) || 0))}
                  className="w-24 bg-slate-950 border border-slate-700 rounded px-2 py-1 text-center font-bold text-amber-400 text-sm focus:outline-none focus:border-amber-500"
                />
                <button
                  type="button"
                  onClick={() => setQuantityKg(quantityKg + 50)}
                  className="w-8 h-8 rounded bg-slate-900 border border-slate-700 font-bold text-slate-200 hover:bg-slate-700"
                >
                  +
                </button>
                <span className="text-xs font-bold text-slate-300">KG</span>
              </div>
            </div>

            {/* Packaging Preference selection */}
            <div>
              <label className="text-xs font-bold text-slate-200 block mb-1">
                Packaging Format Preference
              </label>
              <select
                value={packagingPreference}
                onChange={(e) => setPackagingPreference(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs font-medium text-slate-200 focus:outline-none focus:border-amber-500"
              >
                <option value={product.packagingFormat}>Standard ({product.packagingFormat})</option>
                <option value="Cryovac Vacuum Sealed Retail Portions">Cryovac Vacuum Sealed Retail Portions</option>
                <option value="20kg Poly-Lined Master Export Boxes">20kg Poly-Lined Master Export Boxes</option>
                <option value="Quarters / Whole Sides (Cold Chain Hanging)">Quarters / Whole Sides (Cold Chain Hanging)</option>
              </select>
            </div>

            {/* Total Estimated Subtotal */}
            <div className="flex justify-between items-center pt-2 border-t border-slate-700/80 text-sm">
              <span className="font-semibold text-slate-300">Estimated Line Subtotal:</span>
              <span className="font-extrabold text-amber-400 text-base">
                ${(quantityKg * product.retailPriceKg).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} USD
              </span>
            </div>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="px-6 py-4 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row justify-end items-center gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2.5 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 text-xs font-bold"
          >
            Close Sheet
          </button>
          
          <button
            onClick={handleAdd}
            disabled={added}
            className={`w-full sm:w-auto px-6 py-2.5 rounded-lg font-bold text-xs flex items-center justify-center gap-2 transition-all ${
              added
                ? 'bg-emerald-600 text-white'
                : 'bg-gradient-to-r from-red-800 to-red-900 hover:from-red-700 hover:to-red-800 text-white shadow-lg'
            }`}
          >
            {added ? (
              <>
                <Check className="w-4 h-4 text-white" />
                <span>Added to Wholesale Inquiry</span>
              </>
            ) : (
              <>
                <ShoppingCart className="w-4 h-4 text-amber-400" />
                <span>Add {quantityKg} KG to Bulk Order Inquiry</span>
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
};
