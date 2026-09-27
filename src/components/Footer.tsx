import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenListPropertyModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenListPropertyModal }) => {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="inline-block">
              <span className="text-xl font-bold font-display text-white tracking-tight">
                SAROY<span className="text-amber-400 font-light">ESTATE</span>
              </span>
            </a>
            <p className="text-neutral-400 max-w-sm leading-relaxed text-xs sm:text-sm">
              O'zbekistondagi premium uchastkalar, hashamatli shahar hovlilari va zamonaviy osmono'par domlar platformasi. 4K Cinematic arxitektura va to'liq yuridik toza kadastr kafolati.
            </p>
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-medium">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>O'zbekiston Respublikasi Ko'chmas Mulk Litsenziyasi № 7741-2024</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Mulk Turlari</h4>
            <ul className="space-y-2 text-neutral-400">
              <li><a href="#uchastkalar" className="hover:text-amber-400 transition-colors">6 Sotixli Hovlilar</a></li>
              <li><a href="#uchastkalar" className="hover:text-amber-400 transition-colors">8–12 Sotixli Villalar</a></li>
              <li><a href="#domlar" className="hover:text-amber-400 transition-colors">Tashkent City Penthauslari</a></li>
              <li><a href="#domlar" className="hover:text-amber-400 transition-colors">Novostroyka Kvartiralari</a></li>
              <li><a href="#cinematic-3d" className="hover:text-amber-400 transition-colors">3D Virtual Sayohat</a></li>
            </ul>
          </div>

          {/* Districts */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Nufuzli Hududlar</h4>
            <ul className="space-y-2 text-neutral-400">
              <li><a href="#xarita" className="hover:text-amber-400 transition-colors">Mirzo Ulug'bek (Oltintepa)</a></li>
              <li><a href="#xarita" className="hover:text-amber-400 transition-colors">Yunusobod (Hasanboy)</a></li>
              <li><a href="#xarita" className="hover:text-amber-400 transition-colors">Shayxontohur (Boulevard)</a></li>
              <li><a href="#xarita" className="hover:text-amber-400 transition-colors">Chilonzor (Dombrabod)</a></li>
              <li><a href="#xarita" className="hover:text-amber-400 transition-colors">Qibray & Chorvoq Zonalari</a></li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Aloqa & Markaz</h4>
            <div className="space-y-2 text-neutral-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Toshkent sh., Mirzo Ulug'bek tumani, Mustaqillik shoh ko'chasi 105</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="tel:+998712000099" className="hover:text-white">+998 71 200-00-99</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>info@saroyrealty.uz</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenListPropertyModal}
                className="w-full py-2 px-3 text-xs font-semibold rounded bg-neutral-900 border border-neutral-800 text-amber-400 hover:bg-neutral-800 transition-colors text-center block"
              >
                Mulkni Sotuvga Qo'yish
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <div>
            © {new Date().getFullYear()} SAROY ESTATE. Barcha huquqlar himoyalangan.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-neutral-400">Maxfiylik siyosati</a>
            <a href="#" className="hover:text-neutral-400">Foydalanish shartlari</a>
            <a href="#" className="hover:text-neutral-400">Kadastr va litsenziya</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
