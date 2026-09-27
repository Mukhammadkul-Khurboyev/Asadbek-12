import React, { useState } from 'react';
import { X, CheckCircle, Home, Building2, UploadCloud, ShieldCheck, Sparkles } from 'lucide-react';

interface ListPropertyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ListPropertyModal: React.FC<ListPropertyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [propertyType, setPropertyType] = useState<'uchastka' | 'dom'>('uchastka');
  const [district, setDistrict] = useState("Mirzo Ulug'bek");
  const [sotixOrArea, setSotixOrArea] = useState('');
  const [rooms, setRooms] = useState('4');
  const [expectedPrice, setExpectedPrice] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [ownerPhone, setOwnerPhone] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ownerPhone) return;
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 3500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-xl bg-neutral-950 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl p-6 sm:p-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-900 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-2 mb-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            Mulkdorlar Uchun Xizmat
          </span>
          <h3 className="text-2xl font-bold text-white font-display">
            Uyingizni Sotish yoki Bepul Baholatish
          </h3>
          <p className="text-xs sm:text-sm text-neutral-400">
            SAROY ESTATE platformasida uchastka va domingizni 4K professional fotosessiya bilan tez va bozor bahosida soting.
          </p>
        </div>

        {isSuccess ? (
          <div className="bg-emerald-950/80 border border-emerald-500/40 p-6 rounded-xl text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-white">Muvaffaqiyatli Qabul Qilindi!</h4>
            <p className="text-xs text-neutral-300 leading-relaxed">
              Mulk baholash bo'yicha ekspertimiz 15 daqiqa ichida siz bilan bog'lanib, bepul professional 4K suratga olish va kadastr ekspertizasi vaqtini belgilaydi.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Property Category selector */}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setPropertyType('uchastka')}
                className={`p-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                  propertyType === 'uchastka'
                    ? 'bg-amber-400/10 border-amber-400 text-amber-300 font-bold'
                    : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white'
                }`}
              >
                <Home className="w-4 h-4" />
                <span>Uchastka (Hovli)</span>
              </button>

              <button
                type="button"
                onClick={() => setPropertyType('dom')}
                className={`p-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                  propertyType === 'dom'
                    ? 'bg-amber-400/10 border-amber-400 text-amber-300 font-bold'
                    : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white'
                }`}
              >
                <Building2 className="w-4 h-4" />
                <span>Kvartira / Dom</span>
              </button>
            </div>

            {/* District & Maydon */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-neutral-400 block mb-1">Tuman</label>
                <select
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-neutral-900 border border-neutral-800 rounded-lg text-white focus:outline-none focus:border-amber-400"
                >
                  <option value="Mirzo Ulug'bek">Mirzo Ulug'bek</option>
                  <option value="Yunusobod">Yunusobod</option>
                  <option value="Shayxontohur">Shayxontohur</option>
                  <option value="Chilonzor">Chilonzor</option>
                  <option value="Yakkasaroy">Yakkasaroy</option>
                  <option value="Yashnobod">Yashnobod</option>
                  <option value="Qibray">Qibray tumani</option>
                  <option value="Boshqa hudud">Boshqa hudud</option>
                </select>
              </div>

              <div>
                <label className="text-xs text-neutral-400 block mb-1">
                  {propertyType === 'uchastka' ? 'Yer maydoni (Sotix)' : 'Maydoni (m²)'}
                </label>
                <input
                  type="text"
                  required
                  placeholder={propertyType === 'uchastka' ? 'Masalan: 6 sotix' : 'Masalan: 120 m²'}
                  value={sotixOrArea}
                  onChange={(e) => setSotixOrArea(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-neutral-900 border border-neutral-800 rounded-lg text-white focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>

            {/* Xonalar & Narx */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-neutral-400 block mb-1">Xonalar Soni</label>
                <input
                  type="number"
                  min="1"
                  max="20"
                  value={rooms}
                  onChange={(e) => setRooms(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-neutral-900 border border-neutral-800 rounded-lg text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="text-xs text-neutral-400 block mb-1">Kutilayotgan Narx ($ USD)</label>
                <input
                  type="text"
                  placeholder="Masalan: 250,000"
                  value={expectedPrice}
                  onChange={(e) => setExpectedPrice(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-neutral-900 border border-neutral-800 rounded-lg text-white focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>

            {/* Contact details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-neutral-800">
              <div>
                <label className="text-xs text-neutral-400 block mb-1">Ismingiz</label>
                <input
                  type="text"
                  required
                  placeholder="Ism Familiya"
                  value={ownerName}
                  onChange={(e) => setOwnerName(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-neutral-900 border border-neutral-800 rounded-lg text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="text-xs text-neutral-400 block mb-1">Telefon Raqamingiz</label>
                <input
                  type="tel"
                  required
                  placeholder="+998 (90) 123-45-67"
                  value={ownerPhone}
                  onChange={(e) => setOwnerPhone(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-neutral-900 border border-neutral-800 rounded-lg text-white focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold text-xs sm:text-sm rounded-lg transition-colors flex items-center justify-center gap-2 mt-4"
            >
              <UploadCloud className="w-4 h-4" />
              <span>Mulkni Sotuvga Qo'yish & Baholash</span>
            </button>

            <div className="text-[11px] text-neutral-500 flex items-center justify-center gap-1.5 pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>100% maxfiylik va qonuniy rasmiylashtirish kafolati.</span>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
