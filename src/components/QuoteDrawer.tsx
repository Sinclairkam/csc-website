import React, { useState } from 'react';
import { X, Trash2, ShoppingCart, Send, FileText, CheckCircle2, Building2, Phone, Mail, MapPin, Printer } from 'lucide-react';
import { QuoteItem } from '../types';
import { BRANCHES } from '../data/mockData';

interface QuoteDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: QuoteItem[];
  onUpdateQuantity: (productId: string, newQtyKg: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export const QuoteDrawer: React.FC<QuoteDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  if (!isOpen) return null;

  const [contactForm, setContactForm] = useState({
    fullName: '',
    organization: '',
    phone: '',
    email: '',
    taxId: '',
    preferredBranch: BRANCHES[0].id,
    deliveryAddress: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [quoteRef, setQuoteRef] = useState<string>('');

  const totalEstimatedCost = cart.reduce(
    (sum, item) => sum + item.quantityKg * item.product.retailPriceKg,
    0
  );

  const totalMassKg = cart.reduce((sum, item) => sum + item.quantityKg, 0);

  const handleSubmitQuote = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return;
    const refCode = `CSC-RFQ-2026-${Math.floor(10000 + Math.random() * 90000)}`;
    setQuoteRef(refCode);
    setSubmitted(true);
  };

  const handlePrintQuote = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl bg-slate-900 border-l border-slate-800 h-full shadow-2xl flex flex-col text-white">
        
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-950 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <ShoppingCart className="w-5 h-5 text-amber-400" />
            <span className="font-black text-lg text-white">
              Wholesale Order Inquiry Cart
            </span>
            <span className="bg-red-800 text-white font-bold text-xs px-2 py-0.5 rounded-full border border-red-700">
              {cart.length} {cart.length === 1 ? 'Item' : 'Items'}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Body Scroll Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {submitted ? (
            <div className="text-center py-10 space-y-5">
              <div className="w-16 h-16 bg-emerald-950 text-emerald-400 rounded-full flex items-center justify-center mx-auto border-2 border-emerald-500">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-1">
                <span className="text-xs text-amber-400 font-extrabold uppercase tracking-widest block">
                  Official Proforma Quote Generated
                </span>
                <h3 className="text-2xl font-black text-white">
                  Quote Request Submitted!
                </h3>
                <p className="text-xs text-slate-300">
                  Ref Code: <strong className="text-amber-400 font-mono text-base">{quoteRef}</strong>
                </p>
              </div>

              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-left space-y-2 text-xs">
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-400">Buyer Name:</span>
                  <span className="font-bold text-white">{contactForm.fullName} ({contactForm.organization})</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-400">Total Mass:</span>
                  <span className="font-bold text-amber-400">{totalMassKg.toLocaleString()} KG</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-400">Estimated Value:</span>
                  <span className="font-extrabold text-emerald-400 text-sm">
                    ${totalEstimatedCost.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} USD
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Dispatch Depot:</span>
                  <span className="font-bold text-white">
                    {BRANCHES.find((b) => b.id === contactForm.preferredBranch)?.name}
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-400">
                Our Commercial Accounts Manager will email formal proforma docs and cold-chain truck scheduling to <strong className="text-white">{contactForm.email}</strong> within 2 business hours.
              </p>

              <div className="flex justify-center gap-3 pt-2">
                <button
                  onClick={handlePrintQuote}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-lg flex items-center gap-1.5 border border-slate-700"
                >
                  <Printer className="w-4 h-4 text-amber-400" />
                  <span>Print Summary Sheet</span>
                </button>
                <button
                  onClick={() => {
                    onClearCart();
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-6 py-2 bg-red-800 hover:bg-red-700 text-white font-bold text-xs rounded-lg"
                >
                  Done
                </button>
              </div>
            </div>
          ) : cart.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <ShoppingCart className="w-12 h-12 text-slate-600 mx-auto" />
              <p className="text-slate-400 text-sm font-semibold">
                Your Wholesale Inquiry Cart is currently empty.
              </p>
              <p className="text-xs text-slate-500">
                Browse our Meat Catalog or use the B2B Bulk Estimator to add cuts and products.
              </p>
            </div>
          ) : (
            <>
              {/* Selected Items List */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs text-slate-400 uppercase font-bold tracking-wider">
                  <span>Requested Items ({cart.length})</span>
                  <button
                    onClick={onClearCart}
                    className="text-red-400 hover:underline text-[11px]"
                  >
                    Clear All
                  </button>
                </div>

                <div className="space-y-2">
                  {cart.map((item) => (
                    <div
                      key={item.product.id}
                      className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-2"
                    >
                      <div className="flex justify-between items-start">
                        <div className="space-y-0.5">
                          <span className="text-[9px] font-extrabold uppercase bg-red-900/80 text-white px-2 py-0.5 rounded border border-red-700 inline-block">
                            {item.product.grade}
                          </span>
                          <h4 className="font-bold text-sm text-white">{item.product.name}</h4>
                          <span className="text-[11px] text-slate-400 block">
                            ${item.product.retailPriceKg.toFixed(2)}/kg • {item.packagingPreference}
                          </span>
                        </div>

                        <button
                          onClick={() => onRemoveItem(item.product.id)}
                          className="p-1 rounded text-slate-500 hover:text-red-400 hover:bg-slate-900"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="flex justify-between items-center pt-2 border-t border-slate-900 text-xs">
                        <div className="flex items-center gap-2">
                          <span className="text-slate-400 font-medium">Quantity:</span>
                          <input
                            type="number"
                            min="10"
                            step="10"
                            value={item.quantityKg}
                            onChange={(e) =>
                              onUpdateQuantity(item.product.id, parseInt(e.target.value) || 10)
                            }
                            className="w-20 bg-slate-900 border border-slate-700 rounded px-2 py-1 font-bold text-amber-400 text-center"
                          />
                          <span className="font-bold text-slate-300">KG</span>
                        </div>

                        <div className="text-right font-extrabold text-amber-400">
                          ${(item.quantityKg * item.product.retailPriceKg).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Order Totals Bar */}
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2 text-xs">
                <div className="flex justify-between text-slate-300">
                  <span>Combined Mass:</span>
                  <span className="font-bold text-white">{totalMassKg.toLocaleString()} KG</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Estimated Rate Subtotal:</span>
                  <span className="font-extrabold text-amber-400 text-sm">
                    ${totalEstimatedCost.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} USD
                  </span>
                </div>
                <p className="text-[10px] text-slate-500 italic">
                  *Final proforma invoice includes tiered bulk volume discounts and cold-chain freight.
                </p>
              </div>

              {/* Buyer Contact Form */}
              <form onSubmit={handleSubmitQuote} className="space-y-3 pt-2 border-t border-slate-800 text-xs">
                <h4 className="font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-amber-400" />
                  <span>Wholesale Buyer Information</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="font-bold text-slate-300 block mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Buyer Contact Name"
                      value={contactForm.fullName}
                      onChange={(e) => setContactForm({ ...contactForm, fullName: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-slate-100"
                    />
                  </div>

                  <div>
                    <label className="font-bold text-slate-300 block mb-1">Business / Organization *</label>
                    <input
                      type="text"
                      required
                      placeholder="Supermarket, Butchery, School, etc."
                      value={contactForm.organization}
                      onChange={(e) => setContactForm({ ...contactForm, organization: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-slate-100"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="font-bold text-slate-300 block mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+263..."
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-slate-100"
                    />
                  </div>

                  <div>
                    <label className="font-bold text-slate-300 block mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="orders@company.co.zw"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-slate-100"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="font-bold text-slate-300 block mb-1">Dispatch Depot Facility *</label>
                    <select
                      value={contactForm.preferredBranch}
                      onChange={(e) => setContactForm({ ...contactForm, preferredBranch: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-slate-100"
                    >
                      {BRANCHES.map((b) => (
                        <option key={b.id} value={b.id}>
                          {b.name} ({b.city})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="font-bold text-slate-300 block mb-1">TIN / VAT Tax ID (Optional)</label>
                    <input
                      type="text"
                      placeholder="ZIMRA BP Number"
                      value={contactForm.taxId}
                      onChange={(e) => setContactForm({ ...contactForm, taxId: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-slate-100"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-bold text-slate-300 block mb-1">Delivery Address & Special Instructions</label>
                  <textarea
                    rows={2}
                    placeholder="Physical delivery address, offloading specs, hanging hook requirements..."
                    value={contactForm.deliveryAddress}
                    onChange={(e) => setContactForm({ ...contactForm, deliveryAddress: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-slate-100"
                  />
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-red-800 to-red-900 hover:from-red-700 hover:to-red-800 text-white font-extrabold text-sm rounded-xl shadow-xl flex items-center justify-center gap-2 border border-red-700"
                >
                  <Send className="w-4 h-4 text-amber-400" />
                  <span>Submit Wholesale Proforma Quote Request</span>
                </button>

              </form>
            </>
          )}
        </div>

      </div>
    </div>
  );
};
