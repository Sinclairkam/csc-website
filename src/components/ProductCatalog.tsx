import React, { useState, useMemo } from 'react';
import { Search, Filter, ShoppingCart, Eye, Flame, Award, ChevronRight, Check, ShieldCheck, Snowflake, Sparkles, Phone, MapPin, Tag } from 'lucide-react';
import { PRODUCTS } from '../data/mockData';
import { Product, ProductCategory, CutGrade } from '../types';

interface ProductCatalogProps {
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product, quantityKg: number, packaging: string) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  onSelectProduct,
  onAddToCart,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'all'>('all');
  const [selectedGrade, setSelectedGrade] = useState<CutGrade | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [addedItems, setAddedItems] = useState<{ [key: string]: boolean }>({});

  const categories: { id: ProductCategory | 'all'; label: string }[] = [
    { id: 'all', label: 'All CSC Products' },
    { id: 'prime', label: 'Prime Cuts' },
    { id: 'offals', label: 'Specialty & Offals' },
    { id: 'processed', label: 'Processed & Sausages' },
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
      const matchesGrade = selectedGrade === 'all' || p.grade === selectedGrade;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        p.name.toLowerCase().includes(query) ||
        (p.localName && p.localName.toLowerCase().includes(query)) ||
        p.description.toLowerCase().includes(query) ||
        p.tags.some((t) => t.toLowerCase().includes(query));

      return matchesCategory && matchesGrade && matchesSearch;
    });
  }, [selectedCategory, selectedGrade, searchQuery]);

  const handleQuickAdd = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product, product.minBulkOrderKg || 50, product.packagingFormat);
    setAddedItems((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedItems((prev) => ({ ...prev, [product.id]: false }));
    }, 1500);
  };

  return (
    <section id="catalog" className="py-16 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800 pb-6">
          <div className="space-y-2">
            <span className="text-amber-400 font-bold text-xs uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30 inline-block">
              Official CSC Store Flyer & Catalog
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Interactive Cut & Meat Catalog
            </h2>
            <p className="text-slate-400 text-sm max-w-2xl">
              Discover official CSC Special Cuts promotional pricing, AAA Prime steak cuts, traditional Zimbabwean offals, and cold-chain wholesale packages.
            </p>
          </div>

          <div className="flex items-center gap-3 text-xs text-slate-400">
            <span className="font-bold text-white bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700">
              Showing {filteredProducts.length} Products
            </span>
          </div>
        </div>

        {/* Highlighted Special Cuts Promotional Banner */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-red-950 via-slate-950 to-red-950 border-2 border-amber-500/50 p-6 sm:p-8 shadow-2xl">
          <div className="absolute top-0 right-0 -mt-8 -mr-8 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 space-y-6">
            {/* Banner Title & Badge */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-black uppercase tracking-wider">
                  <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
                  <span>Official CSC Flyer Promo</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
                  Weekly Special Cuts — <span className="text-amber-400">Perfect for Family Meals & Braais!</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
                  Visit our official Bulawayo Retail Outlet at <strong>61-69 Birkenhead Road</strong> or place wholesale bulk orders directly online.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 shrink-0">
                <a
                  href="tel:0779897736"
                  className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-4 py-2.5 rounded-xl transition-all shadow-lg text-xs flex items-center gap-2 border border-amber-400"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Hotline: 0779897736</span>
                </a>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  61-69 Birkenhead Rd, Byo
                </span>
              </div>
            </div>

            {/* Three Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-3.5 flex items-center gap-3 shadow-md">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-white uppercase tracking-wider">Top Quality Beef</h4>
                  <p className="text-[11px] text-slate-400">Pasture-finished & Vet Inspected</p>
                </div>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-3.5 flex items-center gap-3 shadow-md">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-red-400" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-white uppercase tracking-wider">Expertly Processed</h4>
                  <p className="text-[11px] text-slate-400">Precision Butchery Cuts</p>
                </div>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-3.5 flex items-center gap-3 shadow-md">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0">
                  <Snowflake className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-white uppercase tracking-wider">Keeping It Fresh</h4>
                  <p className="text-[11px] text-slate-400">National Cold-Chain Logistics</p>
                </div>
              </div>
            </div>

            {/* Quick Special Cuts Flyer Price Strip */}
            <div className="pt-2 border-t border-slate-800/80">
              <span className="text-[11px] font-extrabold uppercase text-amber-400 tracking-wider block mb-2">
                Featured Promotional Cuts & Price per KG:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 text-xs">
                {[
                  { name: 'Blade Steak', price: '$5.50' },
                  { name: 'Sirloin Steak', price: '$5.90' },
                  { name: 'T-Bone Steak', price: '$6.00' },
                  { name: 'Rump Steak', price: '$5.95' },
                  { name: 'Brisket', price: '$4.90' },
                  { name: 'Beef Ribs', price: '$4.75' },
                  { name: 'Steak on Bone', price: '$5.85' },
                ].map((cut) => (
                  <div
                    key={cut.name}
                    onClick={() => {
                      const found = PRODUCTS.find((p) => p.name.toLowerCase().includes(cut.name.toLowerCase()));
                      if (found) onSelectProduct(found);
                    }}
                    className="bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-amber-500/50 p-2 rounded-xl transition-all cursor-pointer flex flex-col justify-between"
                  >
                    <span className="text-[11px] font-bold text-slate-300 truncate">{cut.name}</span>
                    <span className="text-xs font-black text-amber-400">{cut.price} /kg</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="space-y-4 bg-slate-950 p-4 rounded-2xl border border-slate-800 shadow-xl">
          
          {/* Search Input & Grade Filter Row */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            
            {/* Search Bar */}
            <div className="relative flex-1 w-full">
              <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="text"
                placeholder="Search cuts (e.g. T-Bone, Boerewors, Ox Tail, Mazondo, Hides)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-11 pr-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Grade Filter Dropdown */}
            <div className="flex items-center gap-2 w-full md:w-auto shrink-0">
              <Filter className="w-4 h-4 text-amber-400 shrink-0" />
              <select
                value={selectedGrade}
                onChange={(e) => setSelectedGrade(e.target.value as CutGrade | 'all')}
                className="w-full md:w-48 bg-slate-900 border border-slate-700 text-slate-200 text-xs font-semibold rounded-xl px-3 py-2.5 focus:outline-none focus:border-amber-500"
              >
                <option value="all">All Meat Grades</option>
                <option value="AAA Prime">AAA Prime Grade</option>
                <option value="Super Grade">Super Grade</option>
                <option value="Choice Grade">Choice Grade</option>
                <option value="Commercial">Commercial Grade</option>
                <option value="Industrial">Industrial By-Products</option>
              </select>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pt-2 pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-red-800 text-white shadow-lg border border-red-700'
                    : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-slate-950 rounded-2xl border border-slate-800 space-y-3">
            <p className="text-slate-400 text-base font-semibold">
              No products found matching "{searchQuery}"
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedGrade('all');
              }}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-amber-300 text-xs font-bold rounded-lg"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => onSelectProduct(product)}
                className="group bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden hover:border-amber-500/50 transition-all duration-300 shadow-xl hover:shadow-2xl flex flex-col justify-between cursor-pointer"
              >
                {/* Image & Badges */}
                <div>
                  <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                    
                    {/* Grade Tag */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      <span className="bg-red-900/90 text-white font-extrabold text-[10px] uppercase px-2.5 py-1 rounded border border-red-700 shadow">
                        {product.grade}
                      </span>
                      {product.featured && (
                        <span className="bg-amber-500 text-slate-950 font-black text-[10px] uppercase px-2 py-1 rounded shadow">
                          Flagship
                        </span>
                      )}
                    </div>

                    {/* Quick View Floating Trigger */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectProduct(product);
                      }}
                      className="absolute bottom-3 right-3 p-2 bg-slate-900/90 text-slate-200 hover:text-white hover:bg-slate-800 rounded-lg border border-slate-700 text-xs font-semibold flex items-center gap-1 opacity-90 group-hover:opacity-100 transition-opacity"
                    >
                      <Eye className="w-3.5 h-3.5 text-amber-400" />
                      <span>Quick Spec</span>
                    </button>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 space-y-3">
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                        {product.name}
                      </h3>
                      {product.localName && (
                        <p className="text-xs font-semibold text-amber-400 italic">
                          {product.localName}
                        </p>
                      )}
                    </div>

                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Usage / Cooking Badge */}
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-300 font-medium bg-slate-900/80 p-2 rounded-lg border border-slate-800/80">
                      <Flame className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span className="truncate">{product.cookingMethod}</span>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 pt-1">
                      {product.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-medium bg-slate-900 text-slate-300 px-2 py-0.5 rounded border border-slate-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer: Pricing & Action */}
                <div className="p-5 pt-0 border-t border-slate-900 mt-2 space-y-3">
                  <div className="flex items-baseline justify-between pt-3">
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase font-medium block">
                        Retail Rate
                      </span>
                      <span className="text-xl font-black text-amber-400">
                        ${product.retailPriceKg.toFixed(2)}
                      </span>
                      <span className="text-xs text-slate-400"> / kg</span>
                    </div>

                    <div className="text-right">
                      <span className="text-[10px] text-slate-400 uppercase font-medium block">
                        Bulk Ton Rate
                      </span>
                      <span className="text-sm font-bold text-emerald-400">
                        ${product.bulkPriceTon.toLocaleString()} / Ton
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onSelectProduct(product)}
                      className="w-full py-2 bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-bold rounded-lg border border-slate-800"
                    >
                      View Specs
                    </button>

                    <button
                      onClick={(e) => handleQuickAdd(product, e)}
                      disabled={addedItems[product.id]}
                      className={`w-full py-2 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                        addedItems[product.id]
                          ? 'bg-emerald-600 text-white'
                          : 'bg-red-800 hover:bg-red-700 text-white border border-red-700'
                      }`}
                    >
                      {addedItems[product.id] ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-white" />
                          <span>Added</span>
                        </>
                      ) : (
                        <>
                          <ShoppingCart className="w-3.5 h-3.5 text-amber-300" />
                          <span>+ Add Bulk</span>
                        </>
                      )}
                    </button>
                  </div>

                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
