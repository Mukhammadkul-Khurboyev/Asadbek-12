import React, { useState } from 'react';
import {
  X,
  MapPin,
  Maximize2,
  Minimize2,
  Calendar,
  Phone,
  Send,
  CheckCircle,
  Eye,
  ShieldCheck,
  Check,
  Building,
  Home
} from 'lucide-react';
import { Property } from '../data/properties';

interface PropertyDetailModalProps {
  property: Property | null;
  currency: 'USD' | 'UZS';
  onClose: () => void;
  onOpenTour: () => void;
}

export const PropertyDetailModal: React.FC<PropertyDetailModalProps> = ({
  property,
  currency,
  onClose,
  onOpenTour,
}) => {
  if (!property) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isFullscreenImage, setIsFullscreenImage] = useState(false);
  const [visitorName, setVisitorName] = useState('');
  const [visitorPhone, setVisitorPhone] = useState('');
  const [visitDate, setVisitDate] = useState('');
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const formatPrice = (usd: number) => {
    if (currency === 'USD') {
      return `$${usd.toLocaleString()}`;
    }
    const uzs = usd * 12850;
    return `${uzs.toLocaleString()} so'm`;
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!visitorPhone) return;
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
      setVisitorName('');
      setVisitorPhone('');
      setVisitDate('');
    }, 4000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-neutral-950 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl my-8">
        
        {/* Modal Top Bar */}
        <div className="sticky top-0 z-30 flex items-center justify-between px-6 py-4 bg-neutral-950/95 backdrop-blur-md border-b border-neutral-800">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded border border-amber-400/20">
              {property.categoryLabel}
            </span>
            <div className="text-xs text-neutral-400 hidden sm:flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>{property.location.city}, {property.location.district}</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-900 transition-colors"
            title="Yopish"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content Scrollable Area */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[85vh] overflow-y-auto">
          
          {/* Main 4K Image Carousel & Viewport */}
          <div className="space-y-3">
            <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800 group">
              <img
                src={property.images[activeImageIndex] || property.mainImage}
                alt={property.title}
                className="w-full h-full object-cover transition-all duration-500"
                referrerPolicy="no-referrer"
              />

              {/* Fullscreen Button */}
              <button
                onClick={() => setIsFullscreenImage(!isFullscreenImage)}
                className="absolute top-4 right-4 p-2 rounded-lg bg-neutral-950/80 backdrop-blur-md text-white hover:bg-neutral-900 border border-neutral-700 transition-colors"
                title="To'liq ekranda ko'rish"
              >
                <Maximize2 className="w-4 h-4" />
              </button>

              {/* 3D Tour Overlay Trigger */}
              {property.has3DTour && (
                <button
                  onClick={() => {
                    onClose();
                    onOpenTour();
                  }}
                  className="absolute bottom-4 left-4 flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-950/90 backdrop-blur-md text-amber-400 border border-amber-400/40 text-xs font-semibold hover:bg-neutral-900 transition-colors"
                >
                  <Eye className="w-4 h-4" />
                  <span>Cinematic 3D Turda Ko'rish</span>
                </button>
              )}
            </div>

            {/* Thumbnail selector */}
            <div className="flex items-center gap-3 overflow-x-auto pb-2">
              {property.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative w-24 h-16 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                    activeImageIndex === idx ? 'border-amber-400 scale-105' : 'border-neutral-800 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`Rasm ${idx + 1}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </button>
              ))}
            </div>
          </div>

          {/* Title and Key Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left 8 cols: Specs, Floor plan, Description */}
            <div className="lg:col-span-8 space-y-6">
              
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                  {property.title}
                </h2>
                <p className="text-xs sm:text-sm text-neutral-400 mt-2 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{property.location.address} ({property.location.landmark})</span>
                </p>
              </div>

              {/* Core Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-neutral-900/60 p-4 rounded-xl border border-neutral-800 text-center font-mono">
                {property.specs.sotix && (
                  <div className="p-2 border-r border-neutral-800 last:border-none">
                    <span className="text-[10px] text-neutral-500 uppercase">Yer Maydoni</span>
                    <div className="text-base font-bold text-amber-400 tabular-nums">{property.specs.sotix} Sotix</div>
                  </div>
                )}
                <div className="p-2 border-r border-neutral-800 last:border-none">
                  <span className="text-[10px] text-neutral-500 uppercase">Yashash Maydoni</span>
                  <div className="text-base font-bold text-white tabular-nums">{property.specs.areaM2} m²</div>
                </div>
                <div className="p-2 border-r border-neutral-800 last:border-none">
                  <span className="text-[10px] text-neutral-500 uppercase">Xonalar</span>
                  <div className="text-base font-bold text-white tabular-nums">{property.specs.rooms} xona</div>
                </div>
                <div className="p-2">
                  <span className="text-[10px] text-neutral-500 uppercase">Shift Balandligi</span>
                  <div className="text-base font-bold text-white tabular-nums">{property.specs.ceilingHeight}</div>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider text-neutral-300">
                  Obyekt Haqida To'liq Ma'lumot
                </h4>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  {property.description}
                </p>
              </div>

              {/* Amenities & Features */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider text-neutral-300">
                  Qulayliklar va Muhandislik
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-300">
                  {property.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2 rounded bg-neutral-900/40 border border-neutral-800/80">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floor Plan Breakdown Table */}
              {property.floorPlanRooms && (
                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider text-neutral-300">
                    Xonalar Maydoni Rejalashtiruvi (Eksplikatsiya)
                  </h4>
                  <div className="border border-neutral-800 rounded-xl overflow-hidden divide-y divide-neutral-800 text-xs">
                    {property.floorPlanRooms.map((room, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-neutral-900/30">
                        <span className="text-neutral-300 font-medium">{room.name}</span>
                        <span className="font-mono text-amber-400 font-bold tabular-nums">{room.size}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Right 4 cols: Price, VIP Agent, Viewing Form */}
            <div className="lg:col-span-4 bg-neutral-900/80 border border-neutral-800 p-6 rounded-2xl space-y-6">
              
              <div>
                <span className="text-[10px] uppercase font-semibold text-neutral-400 tracking-wider">
                  Mulk Narxi
                </span>
                <div className="text-3xl font-extrabold text-amber-400 font-mono tabular-nums mt-1">
                  {formatPrice(property.priceUSD)}
                </div>
                {currency === 'UZS' && (
                  <div className="text-xs text-neutral-400 font-mono mt-1">
                    (${property.priceUSD.toLocaleString()} USD)
                  </div>
                )}
                {property.installmentOption && (
                  <div className="mt-2 text-xs text-emerald-400 font-medium">
                    ✓ {property.installmentOption}
                  </div>
                )}
              </div>

              {/* Agent card */}
              <div className="p-4 bg-neutral-950 rounded-xl border border-neutral-800 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-400/20 border border-amber-400/40 flex items-center justify-center font-bold text-amber-400 text-sm">
                    {property.agent.name.charAt(0)}
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white">{property.agent.name}</h5>
                    <p className="text-[11px] text-neutral-400">{property.agent.role}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-2 border-t border-neutral-800">
                  <a
                    href={`tel:${property.agent.phone}`}
                    className="flex-1 py-2 text-center text-xs font-semibold rounded bg-neutral-800 hover:bg-neutral-700 text-white transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-400" />
                    <span>Qo'ng'iroq</span>
                  </a>
                  <a
                    href={`https://t.me/${property.agent.telegram.replace('@', '')}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-2 text-center text-xs font-semibold rounded bg-amber-400 hover:bg-amber-300 text-neutral-950 transition-colors flex items-center justify-center gap-1.5 font-bold"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Telegram</span>
                  </a>
                </div>
              </div>

              {/* Schedule Private VIP Visit Form */}
              <div className="space-y-3">
                <h5 className="text-xs font-bold text-white uppercase tracking-wider">
                  Uyni Borib Ko'rishga Yozilish
                </h5>

                {bookingSuccess ? (
                  <div className="bg-emerald-950/80 border border-emerald-500/40 p-4 rounded-xl text-center space-y-1">
                    <div className="flex items-center justify-center gap-1 text-emerald-400 text-xs font-bold">
                      <CheckCircle className="w-4 h-4" /> Muvaffaqiyatli!
                    </div>
                    <p className="text-[11px] text-neutral-300">
                      Ekspertimiz 10 daqiqa ichida siz bilan bog'lanib, bepul VIP transfer vaqtini belgilaydi.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleBookingSubmit} className="space-y-2.5">
                    <input
                      type="text"
                      required
                      placeholder="Ismingiz"
                      value={visitorName}
                      onChange={(e) => setVisitorName(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-neutral-950 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="+998 (90) 123-45-67"
                      value={visitorPhone}
                      onChange={(e) => setVisitorPhone(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-neutral-950 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400"
                    />
                    <input
                      type="date"
                      value={visitDate}
                      onChange={(e) => setVisitDate(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-neutral-950 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400"
                    />
                    <button
                      type="submit"
                      className="w-full py-2.5 bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold text-xs rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Uchrashuv Vaqtini Belgilash</span>
                    </button>
                  </form>
                )}
              </div>

              <div className="text-[11px] text-neutral-500 flex items-center gap-1.5 pt-2 border-t border-neutral-800">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>100% kadastr hujjatlari yuridik tekshirilgan.</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
