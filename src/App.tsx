import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductCatalog } from './components/ProductCatalog';
import { ProductModal } from './components/ProductModal';
import { BulkEstimator } from './components/BulkEstimator';
import { FarmerPortal } from './components/FarmerPortal';
import { FarmerModal } from './components/FarmerModal';
import { BranchLocator } from './components/BranchLocator';
import { ExportDivision } from './components/ExportDivision';
import { QuoteDrawer } from './components/QuoteDrawer';
import { Footer } from './components/Footer';
import { Product, QuoteItem } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<QuoteItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isFarmerModalOpen, setIsFarmerModalOpen] = useState<boolean>(false);

  // Cart operations
  const handleAddToCart = (product: Product, quantityKg: number, packaging: string) => {
    setCart((prevCart) => {
      const existingIdx = prevCart.findIndex((item) => item.product.id === product.id);
      if (existingIdx > -1) {
        const updated = [...prevCart];
        updated[existingIdx].quantityKg += quantityKg;
        updated[existingIdx].packagingPreference = packaging;
        return updated;
      } else {
        return [
          ...prevCart,
          {
            product,
            quantityKg,
            packagingPreference: packaging,
          },
        ];
      }
    });
  };

  const handleUpdateQuantity = (productId: string, newQtyKg: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.product.id === productId ? { ...item, quantityKg: Math.max(10, newQtyKg) } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleAddEstimateToCart = (quoteItem: QuoteItem) => {
    setCart((prevCart) => {
      const existingIdx = prevCart.findIndex((item) => item.product.id === quoteItem.product.id);
      if (existingIdx > -1) {
        const updated = [...prevCart];
        updated[existingIdx] = quoteItem;
        return updated;
      } else {
        return [...prevCart, quoteItem];
      }
    });
  };

  const handleScrollToSection = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-100 antialiased selection:bg-amber-500 selection:text-slate-950">
      
      {/* Header & Announcement Bar */}
      <Header
        activeTab={activeTab}
        setActiveTab={handleScrollToSection}
        cart={cart}
        setIsCartOpen={setIsCartOpen}
        onOpenFarmerModal={() => setIsFarmerModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          onExploreCatalog={() => handleScrollToSection('catalog')}
          onOpenEstimator={() => handleScrollToSection('estimator')}
          onOpenFarmerModal={() => setIsFarmerModalOpen(true)}
        />

        {/* 2. Interactive Product Catalog & Cut Explorer */}
        <ProductCatalog
          onSelectProduct={(product) => setSelectedProduct(product)}
          onAddToCart={handleAddToCart}
        />

        {/* 3. B2B Bulk Order & Cost Estimator */}
        <BulkEstimator
          onAddEstimateToCart={handleAddEstimateToCart}
          onNavigateToCart={() => setIsCartOpen(true)}
        />

        {/* 4. Livestock Farmer & Outgrower Portal */}
        <FarmerPortal
          onOpenFarmerModal={() => setIsFarmerModalOpen(true)}
        />

        {/* 5. National Branch Network & Locator */}
        <BranchLocator />

        {/* 6. Export & Quality Assurance Division */}
        <ExportDivision />
      </main>

      {/* Executive Footer */}
      <Footer
        onNavigate={handleScrollToSection}
        onOpenFarmerModal={() => setIsFarmerModalOpen(true)}
      />

      {/* Quick View Spec Sheet Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Farmer Cattle Delivery Modal */}
      <FarmerModal
        isOpen={isFarmerModalOpen}
        onClose={() => setIsFarmerModalOpen(false)}
      />

      {/* Wholesale Quote / Cart Slide-Over Drawer */}
      <QuoteDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

    </div>
  );
}
