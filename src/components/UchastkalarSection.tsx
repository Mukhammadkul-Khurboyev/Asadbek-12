import React, { useState } from 'react';
import { Home, MapPin, Maximize, Bed, Bath, Car, ArrowRight, Eye, Phone, Heart } from 'lucide-react';
import { Property } from '../data/properties';

interface UchastkalarSectionProps {
  properties: Property[];
  currency: 'USD' | 'UZS';
  onSelectProperty: (property: Property) => void;
  onBookViewing: (propertyName: string) => void;
  favorites: string[];
  onToggleFavorite: (id: string) => void;
}

export const UchastkalarSection: React.FC<UchastkalarSectionProps> = ({
  properties,
  currency,
  onSelectProperty,
  onBookViewing,
  favorites,
  onToggleFavorite,
}) => {
  const uchastkalar = properties.filter((p) => p.category === 'uchastka' || p.category === 'villa');

  const formatPrice = (usd: number) => {
    if (currency === 'USD') {
      return `$${usd.toLocaleString()}`;
    }
    // 1 USD approx 12,850 UZS
    const uzs = usd * 12850;
    return `${uzs.toLocaleString()} so'm`;
  };

  return (
    <section id="uchastkalar" className="py-20 lg:py-28 bg-neutral-950 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400">
              <Home className="w-4 h-4 text-amber-400" />
              <span>Hovli & Shahar Hovlilari</span>
              <span aria-hidden="true" className="text-neutral-700">·</span>
              <span className="text-neutral-400">5 – 12 Sotixli Maydonlar</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display text-balance">
              Saralangan Hashamatli Uchastkalar
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 max-w-2xl">
              Toshkentning nufuzli mahallalaridagi to'liq tayyor, zamonaviy me'moriy loyihaga ega uchastkalar. 100% yuridik toza kadastr hujjatlari bilan.
            </p>
          </div>

          <div className="text-right hidden md:block">
            <p className="text-xs text-neutral-400 font-mono">Umumiy ro'yxat:</p>
            <p className="text-2xl font-bold font-mono text-white tabular-nums">{uchastkalar.length} ta Uchastka</p>
          </div>
        </div>

        {/* Uchastkalar Cards Grid (Large format cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {uchastkalar.map((prop) => {
            const isFav = favorites.includes(prop.id);

            return (
              <div
                key={prop.id}
                className="group relative bg-neutral-900/60 border border-neutral-800 rounded-2xl overflow-hidden hover:border-neutral-700 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Visual Media Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-950">
                  <img
                    src={prop.mainImage}
                    alt={prop.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Subtle contrast scrim for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-black/30" />

                  {/* Top Floating Controls */}
                  <div className="absolute top-4 inset-x-4 flex items-center justify-between z-10">
                    <span className="text-xs font-semibold text-neutral-100 bg-neutral-950/80 backdrop-blur-md px-3 py-1 rounded border border-neutral-700">
                      {prop.badge || prop.categoryLabel}
                    </span>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onToggleFavorite(prop.id)}
                        className={`p-2 rounded-full backdrop-blur-md border transition-colors ${
                          isFav
                            ? 'bg-rose-500/90 text-white border-rose-400'
                            : 'bg-neutral-950/70 text-neutral-300 border-neutral-700 hover:text-white'
                        }`}
                        title="Saralanganlarga qo'shish"
                      >
                        <Heart className="w-4 h-4" fill={isFav ? 'currentColor' : 'none'} />
                      </button>

                      {prop.has3DTour && (
                        <button
                          onClick={() => onSelectProperty(prop)}
                          className="flex items-center gap-1 text-xs font-medium text-amber-300 bg-neutral-950/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-amber-500/30 hover:bg-neutral-900"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>3D Tur</span>
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Bottom Image Stats (Zero-Pill Discipline: unboxed metadata) */}
                  <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-xs text-white drop-shadow">
                    <div className="flex items-center gap-2 font-medium">
                      <span className="text-amber-400 font-bold">{prop.specs.sotix} Sotix</span>
                      <span aria-hidden="true" className="text-neutral-400">·</span>
                      <span>{prop.specs.areaM2} m² Yashash Maydoni</span>
                    </div>
                    <div className="flex items-center gap-1 text-neutral-300 text-[11px]">
                      <MapPin className="w-3 h-3 text-amber-400" />
                      <span>{prop.location.district}</span>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    {/* Location & Title */}
                    <div className="text-xs text-neutral-400">
                      <span>{prop.location.mahalla}</span>
                      <span className="mx-1.5 text-neutral-600">/</span>
                      <span>{prop.location.landmark}</span>
                    </div>

                    <h3
                      onClick={() => onSelectProperty(prop)}
                      className="text-xl sm:text-2xl font-bold text-white group-hover:text-amber-400 transition-colors cursor-pointer font-display"
                    >
                      {prop.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-neutral-300 line-clamp-2 leading-relaxed">
                      {prop.description}
                    </p>
                  </div>

                  {/* Technical Specifications Row */}
                  <div className="grid grid-cols-4 gap-2 py-3 border-y border-neutral-800/80 text-center font-mono">
                    <div className="space-y-1">
                      <div className="text-[10px] text-neutral-500 uppercase">Sotix</div>
                      <div className="text-xs sm:text-sm font-bold text-white tabular-nums">{prop.specs.sotix}</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-[10px] text-neutral-500 uppercase">Xonalar</div>
                      <div className="text-xs sm:text-sm font-bold text-white tabular-nums">{prop.specs.rooms} xona</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-[10px] text-neutral-500 uppercase">Hammom</div>
                      <div className="text-xs sm:text-sm font-bold text-white tabular-nums">{prop.specs.bathrooms} ta</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-[10px] text-neutral-500 uppercase">Garaj</div>
                      <div className="text-xs sm:text-sm font-bold text-white tabular-nums">{prop.specs.parkingSpaces} avto</div>
                    </div>
                  </div>

                  {/* Highlights Bullet Line (Zero-Pill unboxed) */}
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-neutral-400">
                    {prop.features.slice(0, 3).map((feat, idx) => (
                      <span key={idx} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                        <span>{feat}</span>
                      </span>
                    ))}
                  </div>

                  {/* Price and Action Footer */}
                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-neutral-800/60">
                    <div>
                      <div className="text-[10px] uppercase font-semibold text-neutral-400 tracking-wider">
                        To'liq Narxi:
                      </div>
                      <div className="text-2xl font-extrabold text-amber-400 font-mono tabular-nums">
                        {formatPrice(prop.priceUSD)}
                      </div>
                      {currency === 'UZS' && (
                        <div className="text-[10px] text-neutral-500 font-mono">
                          (${prop.priceUSD.toLocaleString()} USD)
                        </div>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onBookViewing(prop.title)}
                        className="px-3.5 py-2.5 text-xs font-semibold rounded bg-neutral-800 hover:bg-neutral-700 text-neutral-200 transition-colors flex items-center gap-1.5 whitespace-nowrap"
                      >
                        <Phone className="w-3.5 h-3.5 text-amber-400" />
                        <span>Ko'rishga Yozilish</span>
                      </button>

                      <button
                        onClick={() => onSelectProperty(prop)}
                        className="px-4 py-2.5 text-xs font-semibold rounded bg-amber-400 hover:bg-amber-300 text-neutral-950 transition-colors flex items-center gap-1.5 font-bold whitespace-nowrap"
                      >
                        <span>4K Galereya</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
