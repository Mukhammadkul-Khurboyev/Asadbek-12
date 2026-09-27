import React, { useState, useEffect } from 'react';
import {
  Compass,
  Maximize2,
  Minimize2,
  ZoomIn,
  ZoomOut,
  RotateCw,
  Sun,
  Moon,
  Info,
  CheckCircle,
  Play,
  Pause,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { TOUR_VIEWPOINTS } from '../data/properties';

interface CinematicTourSectionProps {
  onBookViewing: (propertyName: string) => void;
}

export const CinematicTourSection: React.FC<CinematicTourSectionProps> = ({ onBookViewing }) => {
  const [activeViewpointId, setActiveViewpointId] = useState('facade');
  const [selectedHotspot, setSelectedHotspot] = useState<any | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isAutoPanning, setIsAutoPanning] = useState(true);
  const [panOffset, setPanOffset] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const currentViewpoint =
    TOUR_VIEWPOINTS.find((v) => v.id === activeViewpointId) || TOUR_VIEWPOINTS[0];

  // Auto-pan slow cinematic camera effect
  useEffect(() => {
    if (!isAutoPanning) return;
    const interval = setInterval(() => {
      setPanOffset((prev) => (prev >= 20 ? -20 : prev + 0.3));
    }, 100);
    return () => clearInterval(interval);
  }, [isAutoPanning]);

  const handleZoom = (direction: 'in' | 'out') => {
    if (direction === 'in') {
      setZoomLevel((prev) => Math.min(prev + 0.25, 2.0));
    } else {
      setZoomLevel((prev) => Math.max(prev - 0.25, 1.0));
    }
  };

  const handleToggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <section id="cinematic-3d" className="py-20 lg:py-28 bg-neutral-950 border-b border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400">
              <Compass className="w-4 h-4 animate-spin text-amber-400" style={{ animationDuration: '10s' }} />
              <span>Interaktiv 3D Tajriba</span>
              <span aria-hidden="true" className="text-neutral-700">·</span>
              <span className="text-neutral-400">4K Ultra-HD Arxitektura</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display text-balance">
              Cinematic 3D Virtual Tur & Arxitektura Ko'rinishi
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 max-w-2xl">
              Uylarni joyiga bormasdan oldin 360° virtual arxitektura va 4K burchaklardan o'rganing. Interaktiv nuqtalar orqali muhandislik yechimlari bilan tanishing.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onBookViewing("Mirzo Ulug'bek 8 Sotix Rezidensiya")}
              className="px-5 py-3 text-xs sm:text-sm font-semibold rounded bg-amber-400 hover:bg-amber-300 text-neutral-950 transition-colors whitespace-nowrap"
            >
              VIP Ko'rishga Yozilish
            </button>
          </div>
        </div>

        {/* Viewpoint Navigation Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-4 border-b border-neutral-900">
          {TOUR_VIEWPOINTS.map((vp) => (
            <button
              key={vp.id}
              onClick={() => {
                setActiveViewpointId(vp.id);
                setSelectedHotspot(null);
                setZoomLevel(1);
              }}
              className={`px-4 py-2.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap flex items-center gap-2 ${
                activeViewpointId === vp.id
                  ? 'bg-amber-400 text-neutral-950 shadow-md font-bold'
                  : 'bg-neutral-900 text-neutral-300 hover:bg-neutral-800 hover:text-white border border-neutral-800'
              }`}
            >
              <span>{vp.name}</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded ${
                  activeViewpointId === vp.id ? 'bg-amber-500 text-neutral-950' : 'bg-neutral-800 text-neutral-400'
                }`}
              >
                {vp.time}
              </span>
            </button>
          ))}
        </div>

        {/* 3D / 4K Interactive Viewer Stage */}
        <div
          className={`relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 shadow-2xl transition-all duration-300 ${
            isFullscreen ? 'fixed inset-0 z-50 rounded-none border-none' : 'aspect-[16/9] min-h-[500px]'
          }`}
        >
          {/* Main 4K Render Image with Zoom & Pan */}
          <div
            className="w-full h-full relative overflow-hidden cursor-grab active:cursor-grabbing"
            style={{
              transform: `scale(${zoomLevel}) translate(${panOffset * 0.4}px, 0px)`,
              transition: isAutoPanning ? 'transform 0.1s linear' : 'transform 0.3s ease-out',
            }}
          >
            <img
              src={currentViewpoint.image}
              alt={currentViewpoint.name}
              className="w-full h-full object-cover select-none pointer-events-none"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Interactive Hotspot Radar Pins */}
          {currentViewpoint.hotspots.map((hotspot) => (
            <div
              key={hotspot.id}
              style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
              className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
            >
              <button
                onClick={() => setSelectedHotspot(hotspot)}
                className="group relative flex items-center justify-center w-8 h-8 rounded-full bg-amber-400/90 text-neutral-950 shadow-lg hover:scale-125 transition-transform"
                title={hotspot.title}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-neutral-950" />
                <span className="absolute -inset-2 rounded-full border border-amber-400 animate-ping opacity-60" />
                <span className="absolute -inset-1 rounded-full border border-amber-300/40" />
              </button>
            </div>
          ))}

          {/* Hotspot Info Flyout Card */}
          {selectedHotspot && (
            <div className="absolute top-6 left-6 z-30 max-w-sm w-full bg-neutral-950/95 backdrop-blur-md border border-neutral-700 p-5 rounded-xl shadow-2xl animate-fade-in text-neutral-100">
              <div className="flex items-center justify-between pb-2 border-b border-neutral-800">
                <span className="text-xs font-semibold text-amber-400 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Arxitektura Tafsiloti
                </span>
                <button
                  onClick={() => setSelectedHotspot(null)}
                  className="text-neutral-400 hover:text-white text-xs px-2 py-1 rounded hover:bg-neutral-800"
                >
                  ✕ Yopish
                </button>
              </div>
              <h4 className="text-base font-bold text-white mt-3 font-display">
                {selectedHotspot.title}
              </h4>
              <p className="text-xs sm:text-sm text-neutral-300 mt-2 leading-relaxed">
                {selectedHotspot.desc}
              </p>
              <div className="mt-4 pt-3 border-t border-neutral-800/80 flex items-center justify-between text-xs">
                <span className="text-neutral-400">Muhandislik sifati:</span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5" /> Premium Standart
                </span>
              </div>
            </div>
          )}

          {/* Bottom Overlay Info & Controls Bar */}
          <div className="absolute bottom-4 inset-x-4 z-20 flex flex-wrap items-center justify-between gap-3 bg-neutral-950/80 backdrop-blur-md border border-neutral-800/80 p-3 rounded-xl">
            <div className="flex items-center gap-3">
              <div className="hidden sm:block">
                <p className="text-xs font-bold text-white">{currentViewpoint.name}</p>
                <p className="text-[11px] text-neutral-400">{currentViewpoint.description}</p>
              </div>
            </div>

            {/* Viewer Action Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsAutoPanning(!isAutoPanning)}
                className={`p-2 rounded-lg border text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                  isAutoPanning
                    ? 'bg-amber-400 text-neutral-950 border-amber-400 font-bold'
                    : 'bg-neutral-900 text-neutral-300 border-neutral-700 hover:bg-neutral-800'
                }`}
                title={isAutoPanning ? 'Panoramatik aylanishni to\'xtatish' : 'Avtomatik aylanishni boshlash'}
              >
                {isAutoPanning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                <span className="hidden sm:inline">3D Harakat</span>
              </button>

              <button
                onClick={() => handleZoom('in')}
                disabled={zoomLevel >= 2.0}
                className="p-2 rounded-lg bg-neutral-900 border border-neutral-700 text-neutral-300 hover:text-white hover:bg-neutral-800 disabled:opacity-40"
                title="Kattalashtirish (Zoom in)"
              >
                <ZoomIn className="w-4 h-4" />
              </button>

              <button
                onClick={() => handleZoom('out')}
                disabled={zoomLevel <= 1.0}
                className="p-2 rounded-lg bg-neutral-900 border border-neutral-700 text-neutral-300 hover:text-white hover:bg-neutral-800 disabled:opacity-40"
                title="Kichiklashtirish (Zoom out)"
              >
                <ZoomOut className="w-4 h-4" />
              </button>

              <button
                onClick={handleToggleFullscreen}
                className="p-2 rounded-lg bg-neutral-900 border border-neutral-700 text-neutral-300 hover:text-white hover:bg-neutral-800"
                title={isFullscreen ? 'To\'liq ekrandan chiqish' : '4K To\'liq ekranda ko\'rish'}
              >
                {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>
            </div>
          </div>

        </div>

        {/* Architectural Technical Standards Bento */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          <div className="bg-neutral-900/60 border border-neutral-800/80 p-5 rounded-xl space-y-2">
            <span className="text-xs font-semibold text-amber-400">01. Poydevor & Konstruktsiya</span>
            <h4 className="text-sm font-bold text-white">Monolit M-400 & Pishiq G'isht</h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              9 ballik seysmik chidamlilik talablariga mos monolit temir-beton karkas va 1.5 g'isht qalinligidagi devorlar.
            </p>
          </div>

          <div className="bg-neutral-900/60 border border-neutral-800/80 p-5 rounded-xl space-y-2">
            <span className="text-xs font-semibold text-amber-400">02. Fasad & Izolyatsiya</span>
            <h4 className="text-sm font-bold text-white">Tabiiy Eron Travertini</h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Ventilyatsiyalanuvchi fasad, mineral paxta tovush va issiqlik izolyatsiyasi, Thermo-Wood dekor elementlari.
            </p>
          </div>

          <div className="bg-neutral-900/60 border border-neutral-800/80 p-5 rounded-xl space-y-2">
            <span className="text-xs font-semibold text-amber-400">03. Muhandislik Tizimlari</span>
            <h4 className="text-sm font-bold text-white">Viessmann & REHAU Tizimlari</h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Germaniya kondensatsion qozonlari, poldan isitish, xonalar bo'yicha mustaqil harorat nazoratchilari.
            </p>
          </div>

          <div className="bg-neutral-900/60 border border-neutral-800/80 p-5 rounded-xl space-y-2">
            <span className="text-xs font-semibold text-amber-400">04. Xavfsizlik & Smart Home</span>
            <h4 className="text-sm font-bold text-white">Hikvision 4K & Aqlli Uy</h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Smartfon orqali yoritish, darvoza, xavfsizlik datchiklari va basseyn haroratini masofadan boshqarish.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
