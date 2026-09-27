import React, { useState } from 'react';
import { MapPin, Navigation, ExternalLink, Check, Shield } from 'lucide-react';
import { DISTRICT_MAP_HIGHLIGHTS } from '../data/properties';

interface NeighborhoodExplorerSectionProps {
  onSelectDistrict: (district: string) => void;
}

export const NeighborhoodExplorerSection: React.FC<NeighborhoodExplorerSectionProps> = ({
  onSelectDistrict,
}) => {
  const [activeDistrictIndex, setActiveDistrictIndex] = useState(0);
  const activeDistrict = DISTRICT_MAP_HIGHLIGHTS[activeDistrictIndex];

  return (
    <section id="xarita" className="py-20 lg:py-28 bg-neutral-950 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>Lokatsiya & Hududlar</span>
              <span aria-hidden="true" className="text-neutral-700">·</span>
              <span className="text-neutral-400">Toshkent & Toshkent Viloyati</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display text-balance">
              Nufuzli Tumanlar va Narxlar Tahlili
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 max-w-2xl">
              Qaysi hududda hovli yoki kvartira olish oilangiz yoki investitsiyangiz uchun eng maqbul? Tumanlar bo'yicha amaldagi o'rtacha bozor narxlari.
            </p>
          </div>
        </div>

        {/* Interactive District Navigator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* District Selector Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            {DISTRICT_MAP_HIGHLIGHTS.map((dist, idx) => {
              const isActive = idx === activeDistrictIndex;

              return (
                <div
                  key={dist.name}
                  onClick={() => setActiveDistrictIndex(idx)}
                  className={`p-5 rounded-xl border transition-all cursor-pointer ${
                    isActive
                      ? 'bg-neutral-900 border-amber-400/80 shadow-lg shadow-amber-950/20'
                      : 'bg-neutral-900/40 border-neutral-800 hover:border-neutral-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold text-white font-display flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-amber-400' : 'bg-neutral-600'}`} />
                      {dist.name}
                    </h3>
                    <span className="text-xs font-mono text-neutral-400">
                      {dist.propertiesCount} ta mulk
                    </span>
                  </div>

                  <p className="text-xs text-neutral-400 mt-2 line-clamp-2">
                    {dist.description}
                  </p>

                  <div className="mt-3 pt-3 border-t border-neutral-800/80 flex items-center justify-between text-xs font-mono">
                    <span className="text-neutral-400">Uchastka: <strong className="text-amber-400 font-bold">{dist.avgUchastkaPrice}</strong></span>
                    <span className="text-neutral-400">Dom: <strong className="text-white font-bold">{dist.avgDomPrice}</strong></span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* District Spotlight Visual & Detailed Specs (7 cols) */}
          <div className="lg:col-span-7 bg-neutral-900/70 border border-neutral-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase text-amber-400 tracking-wider">
                  Hudud Ekspert Tahlili
                </span>
                <span className="text-xs font-mono text-neutral-500">
                  GPS: {activeDistrict.coords}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                {activeDistrict.name}
              </h3>

              <p className="text-sm text-neutral-300 leading-relaxed">
                {activeDistrict.description}. Ushbu hudud o'zining qulay transport bog'lamalari, xavfsiz va tinch mahallalari, eng sara litsey va bog'chalari bilan yuqori martabali xaridorlar e'tiborini tortadi.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-neutral-800">
                <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-800">
                  <div className="text-[10px] text-neutral-500 uppercase font-mono">Uchastka (Sotix)</div>
                  <div className="text-lg font-bold text-amber-400 font-mono mt-1 tabular-nums">
                    {activeDistrict.avgUchastkaPrice}
                  </div>
                </div>

                <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-800">
                  <div className="text-[10px] text-neutral-500 uppercase font-mono">Dom (m²)</div>
                  <div className="text-lg font-bold text-white font-mono mt-1 tabular-nums">
                    {activeDistrict.avgDomPrice}
                  </div>
                </div>

                <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-800 col-span-2 sm:col-span-1">
                  <div className="text-[10px] text-neutral-500 uppercase font-mono">Qulayligi</div>
                  <div className="text-xs font-medium text-emerald-400 mt-1">
                    {activeDistrict.popularFor}
                  </div>
                </div>
              </div>

              {/* Infrastructure Tags (Zero-Pill Discipline: unboxed) */}
              <div className="pt-2">
                <div className="text-xs font-semibold text-neutral-400 mb-2">Infratuzilma Afzalliklari:</div>
                <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-neutral-300">
                  <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-400" /> Markaziy gaz va suv ta'minoti</span>
                  <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-400" /> Keng ko'chalar & Asfalt</span>
                  <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-400" /> 10-15 daqiqa aeroportgacha</span>
                  <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-400" /> Yuqori xavfsizlik darajasi</span>
                </div>
              </div>
            </div>

            {/* Direct Action */}
            <div className="pt-6 border-t border-neutral-800 flex items-center justify-between">
              <span className="text-xs text-neutral-400">
                Ushbu hududda {activeDistrict.propertiesCount} ta aktiv taklif mavjud
              </span>
              <button
                onClick={() => onSelectDistrict(activeDistrict.name.split(' ')[0])}
                className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold text-xs rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap"
              >
                <span>Shu hududdagi uylarni ko'rish</span>
                <Navigation className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
