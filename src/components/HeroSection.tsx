import React, { useState } from 'react';
import { Search, MapPin, SlidersHorizontal, Eye, ShieldCheck, Sparkles, Layers } from 'lucide-react';
import { DISTRICTS, Property } from '../data/properties';

interface HeroSectionProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  selectedDistrict: string;
  onSelectDistrict: (district: string) => void;
  selectedRooms: string;
  onSelectRooms: (rooms: string) => void;
  maxPrice: number;
  onSelectMaxPrice: (price: number) => void;
  currency: 'USD' | 'UZS';
  matchingCount: number;
  onScrollToCatalog: () => void;
  onOpenFeaturedTour: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  selectedCategory,
  onSelectCategory,
  selectedDistrict,
  onSelectDistrict,
  selectedRooms,
  onSelectRooms,
  maxPrice,
  onSelectMaxPrice,
  currency,
  matchingCount,
  onScrollToCatalog,
  onOpenFeaturedTour,
}) => {
  const [ambientMood, setAmbientMood] = useState<'twilight' | 'day' | 'night'>('twilight');

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden bg-neutral-950 border-b border-neutral-900">
      
      {/* Background 4K Visual Container */}
      <div className="absolute inset-0 z-0">
        <img
          src={
            ambientMood === 'night'
              ? '/src/assets/images/cinematic_3d_estate_night_1790354817023.jpg'
              : ambientMood === 'day'
              ? '/src/assets/images/uchastka_modern_courtyard_1790354770585.jpg'
              : '/src/assets/images/hero_cinematic_mansion_1790354752721.jpg'
          }
          alt="SAROY ESTATE Cinematic Luxury House"
          className="w-full h-full object-cover object-center transition-all duration-1000 scale-[1.02] filter brightness-[0.85]"
          referrerPolicy="no-referrer"
        />
        {/* Cinematic Scrim Gradient (WCAG AA compliant contrast) */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/70 to-neutral-950/40" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/30 to-black/80" />
      </div>

      {/* Top Banner Control: Ambience Mood Switcher */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-8 flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs text-neutral-400">
          <span className="inline-block w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span className="tracking-wide">Toshkent & Toshkent viloyati bo'yicha premium mulklar</span>
        </div>

        {/* Ambience Control Switcher */}
        <div className="flex items-center gap-1 bg-neutral-950/80 backdrop-blur-md p-1 rounded-lg border border-neutral-800 text-xs">
          <button
            onClick={() => setAmbientMood('twilight')}
            className={`px-3 py-1 rounded transition-colors whitespace-nowrap ${
              ambientMood === 'twilight'
                ? 'bg-amber-500/20 text-amber-300 font-semibold border border-amber-500/30'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Oltin Shom
          </button>
          <button
            onClick={() => setAmbientMood('day')}
            className={`px-3 py-1 rounded transition-colors whitespace-nowrap ${
              ambientMood === 'day'
                ? 'bg-amber-500/20 text-amber-300 font-semibold border border-amber-500/30'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Kunduzgi
          </button>
          <button
            onClick={() => setAmbientMood('night')}
            className={`px-3 py-1 rounded transition-colors whitespace-nowrap ${
              ambientMood === 'night'
                ? 'bg-amber-500/20 text-amber-300 font-semibold border border-amber-500/30'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            3D Tungi Yoritish
          </button>
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 lg:py-16 my-auto">
        <div className="max-w-3xl space-y-6">
          
          {/* Metadata Bar (Zero-Pill Discipline) */}
          <div className="flex items-center flex-wrap gap-2 text-xs sm:text-sm font-medium text-amber-300/90 tracking-wide">
            <span>4K Cinematic Arxitektura</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span>100% Toza Kadastr</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span>To'g'ridan-To'g'ri Egasidan & Nufuzli Quruvchilardan</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] font-display text-balance">
            Orzuingizdagi Uchastka va Zamonaviy Domlar
          </h1>

          {/* Concrete Value Proposition */}
          <p className="text-base sm:text-lg text-neutral-300 max-w-2xl leading-relaxed">
            Toshkentning nufuzli tumanlaridagi 6–15 sotixli mualliflik hovlilari, shinam villalari va eng so'nggi zamonaviy osmono'par turar-joy majmualaridagi panoramik xonadonlar.
          </p>

          {/* Quick Action CTA buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={onScrollToCatalog}
              className="px-6 py-3.5 text-sm font-semibold rounded bg-amber-400 hover:bg-amber-300 text-neutral-950 transition-colors shadow-lg shadow-amber-950/40 flex items-center gap-2 whitespace-nowrap"
            >
              <Search className="w-4 h-4 text-neutral-950" />
              Katalogni Ko'rish ({matchingCount} ta mulk)
            </button>

            <button
              onClick={onOpenFeaturedTour}
              className="px-6 py-3.5 text-sm font-semibold rounded bg-neutral-900/90 hover:bg-neutral-800 text-white border border-neutral-700/80 transition-colors flex items-center gap-2 backdrop-blur-sm whitespace-nowrap"
            >
              <Eye className="w-4 h-4 text-amber-400" />
              3D Virtual Sayr Qilish
            </button>
          </div>
        </div>
      </div>

      {/* Floating Comprehensive Search & Filter Bar */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-10">
        <div className="bg-neutral-900/95 backdrop-blur-xl border border-neutral-800 p-4 sm:p-6 rounded-xl shadow-2xl space-y-4">
          
          {/* Filter Categories Tabs */}
          <div className="flex items-center gap-1 sm:gap-2 border-b border-neutral-800/80 pb-3 overflow-x-auto">
            <button
              onClick={() => onSelectCategory('all')}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap ${
                selectedCategory === 'all'
                  ? 'bg-neutral-800 text-white shadow'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Barcha Mulklar
            </button>
            <button
              onClick={() => onSelectCategory('uchastka')}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap ${
                selectedCategory === 'uchastka'
                  ? 'bg-neutral-800 text-white shadow'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Uchastkalar & Hovlilar
            </button>
            <button
              onClick={() => onSelectCategory('dom')}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap ${
                selectedCategory === 'dom'
                  ? 'bg-neutral-800 text-white shadow'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Zamonaviy Domlar (Novostroyka)
            </button>
            <button
              onClick={() => onSelectCategory('villa')}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap ${
                selectedCategory === 'villa'
                  ? 'bg-neutral-800 text-white shadow'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Grand Villalar & Dachalar
            </button>
          </div>

          {/* Filter Inputs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Tuman / Hudud */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-neutral-400 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                Shahar / Tuman
              </label>
              <select
                value={selectedDistrict}
                onChange={(e) => onSelectDistrict(e.target.value)}
                className="w-full bg-neutral-950 border border-neutral-800 text-white text-xs sm:text-sm rounded-lg px-3 py-2.5 focus:outline-none focus:border-amber-400 transition-colors"
              >
                {DISTRICTS.map((dist) => (
                  <option key={dist} value={dist} className="bg-neutral-950 text-white">
                    {dist}
                  </option>
                ))}
              </select>
            </div>

            {/* Xonalar Soni */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-neutral-400 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-amber-400" />
                Xonalar Soni
              </label>
              <select
                value={selectedRooms}
                onChange={(e) => onSelectRooms(e.target.value)}
                className="w-full bg-neutral-950 border border-neutral-800 text-white text-xs sm:text-sm rounded-lg px-3 py-2.5 focus:outline-none focus:border-amber-400 transition-colors"
              >
                <option value="all">Barchasi (1 - 9+ xona)</option>
                <option value="3">3 xonagacha</option>
                <option value="4-5">4 – 5 xona</option>
                <option value="6+">6 va undan ortiq xona</option>
              </select>
            </div>

            {/* Maksimal Narx */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs font-semibold text-neutral-400">
                <span>Maksimal Narx:</span>
                <span className="text-amber-400 font-mono tabular-nums font-bold">
                  {currency === 'USD'
                    ? `$${maxPrice.toLocaleString()}`
                    : `${(maxPrice * 12850).toLocaleString()} so'm`}
                </span>
              </div>
              <input
                type="range"
                min="100000"
                max="1000000"
                step="25000"
                value={maxPrice}
                onChange={(e) => onSelectMaxPrice(Number(e.target.value))}
                className="w-full accent-amber-400 bg-neutral-800 h-2 rounded cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-neutral-500 font-mono">
                <span>$100k</span>
                <span>$500k</span>
                <span>$1M+</span>
              </div>
            </div>

            {/* Submit / Natijalar tugmasi */}
            <div className="flex items-end">
              <button
                onClick={onScrollToCatalog}
                className="w-full py-2.5 px-4 bg-amber-400 hover:bg-amber-300 text-neutral-950 font-semibold rounded-lg text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <Search className="w-4 h-4 text-neutral-950" />
                <span>Natijalarni ko'rish ({matchingCount})</span>
              </button>
            </div>

          </div>

          {/* Trust Indicators bar */}
          <div className="pt-2 flex flex-wrap items-center justify-between border-t border-neutral-800/60 text-xs text-neutral-400 gap-4">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Har bir hovli va dom yuridik ekspertizadan o'tkazilgan</span>
            </div>
            <div className="flex items-center gap-6 font-mono tabular-nums text-neutral-300">
              <div><strong className="text-white">85+</strong> Uchastka</div>
              <div><strong className="text-white">140+</strong> Domlar</div>
              <div><strong className="text-white">100%</strong> Kadastr kafolati</div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
