import React, { useState } from 'react';
import { Phone, Building2, Home, Compass, Calculator, Menu, X, PlusCircle } from 'lucide-react';

interface NavbarProps {
  currency: 'USD' | 'UZS';
  onToggleCurrency: () => void;
  onOpenListPropertyModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currency,
  onToggleCurrency,
  onOpenListPropertyModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-800/80 bg-neutral-950/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Zone 1: Single text wordmark */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="text-xl sm:text-2xl font-bold tracking-tight font-display text-white group-hover:text-amber-400 transition-colors">
            SAROY<span className="text-amber-400 font-light">ESTATE</span>
          </span>
          <span className="text-[10px] uppercase tracking-widest text-neutral-400 border border-neutral-800 px-1.5 py-0.5 rounded">
            4K CINEMATIC
          </span>
        </a>

        {/* Zone 2: Navigation Links (Clean text links) */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-neutral-300">
          <a href="#uchastkalar" className="hover:text-amber-400 transition-colors">
            Uchastkalar
          </a>
          <a href="#domlar" className="hover:text-amber-400 transition-colors">
            Zamonaviy Domlar
          </a>
          <a href="#cinematic-3d" className="flex items-center gap-1.5 hover:text-amber-400 transition-colors">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            3D Virtual Tur
          </a>
          <a href="#kalkulyator" className="hover:text-amber-400 transition-colors">
            Ipoteka Kalkulyatori
          </a>
          <a href="#xarita" className="hover:text-amber-400 transition-colors">
            Tumanlar Xaritasi
          </a>
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Currency Toggle */}
          <button
            onClick={onToggleCurrency}
            className="px-3 py-1.5 text-xs font-semibold rounded border border-neutral-700 bg-neutral-900 text-neutral-200 hover:border-amber-400/60 hover:text-amber-400 transition-colors tabular-nums"
            title="Valyutani o'zgartirish"
          >
            {currency === 'USD' ? 'USD ($)' : 'UZS (So\'m)'}
          </button>

          {/* Sell / List Property Button */}
          <button
            onClick={onOpenListPropertyModal}
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-neutral-300 hover:text-white rounded border border-neutral-800 bg-neutral-900/80 hover:bg-neutral-800 transition-colors whitespace-nowrap"
          >
            <PlusCircle className="w-3.5 h-3.5 text-amber-400" />
            Uy Sotish
          </button>

          {/* Hotline Call Button */}
          <a
            href="tel:+998712000099"
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded transition-colors whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>+998 71 200-00-99</span>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onToggleCurrency}
            className="px-2 py-1 text-xs font-semibold rounded border border-neutral-700 bg-neutral-900 text-neutral-200"
          >
            {currency}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-400 hover:text-white"
            aria-label="Menyu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-neutral-800 bg-neutral-950 px-4 py-6 space-y-4">
          <nav className="flex flex-col gap-4 text-base font-medium text-neutral-200">
            <a
              href="#uchastkalar"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 py-1 hover:text-amber-400"
            >
              <Home className="w-4 h-4 text-amber-400" />
              Uchastkalar & Hovlilar
            </a>
            <a
              href="#domlar"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 py-1 hover:text-amber-400"
            >
              <Building2 className="w-4 h-4 text-amber-400" />
              Zamonaviy Domlar
            </a>
            <a
              href="#cinematic-3d"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 py-1 hover:text-amber-400"
            >
              <Compass className="w-4 h-4 text-amber-400" />
              3D Virtual Tur (Cinematic)
            </a>
            <a
              href="#kalkulyator"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 py-1 hover:text-amber-400"
            >
              <Calculator className="w-4 h-4 text-amber-400" />
              Ipoteka Kalkulyatori
            </a>
          </nav>

          <div className="pt-4 border-t border-neutral-800 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenListPropertyModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-semibold rounded bg-neutral-800 text-neutral-200"
            >
              <PlusCircle className="w-4 h-4 text-amber-400" />
              Uy Sotish / Baholatish
            </button>
            <a
              href="tel:+998712000099"
              className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-semibold rounded bg-amber-400 text-neutral-950 font-bold"
            >
              <Phone className="w-4 h-4" />
              +998 71 200-00-99
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
