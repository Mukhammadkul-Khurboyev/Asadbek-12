import React, { useState } from 'react';
import { Calculator, Check, ArrowRight, ShieldCheck, DollarSign, Calendar, Percent } from 'lucide-react';

interface MortgageCalculatorProps {
  currency: 'USD' | 'UZS';
}

export const MortgageCalculatorSection: React.FC<MortgageCalculatorProps> = ({ currency }) => {
  const [propertyPrice, setPropertyPrice] = useState<number>(250000);
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(25);
  const [loanTermYears, setLoanTermYears] = useState<number>(10);
  const [interestRate, setInterestRate] = useState<number>(17.5);
  const [applicantPhone, setApplicantPhone] = useState<string>('');
  const [applicantName, setApplicantName] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Calculations
  const downPaymentAmount = (propertyPrice * downPaymentPercent) / 100;
  const loanPrincipal = propertyPrice - downPaymentAmount;

  // Monthly interest rate
  const monthlyRate = interestRate / 100 / 12;
  const numberOfPayments = loanTermYears * 12;

  let monthlyPayment = 0;
  if (interestRate === 0) {
    monthlyPayment = loanPrincipal / numberOfPayments;
  } else {
    monthlyPayment =
      (loanPrincipal *
        (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
  }

  const totalPayment = monthlyPayment * numberOfPayments + downPaymentAmount;
  const totalInterest = Math.max(0, totalPayment - propertyPrice);
  const recommendedIncome = monthlyPayment * 2.2;

  const formatAmount = (usd: number) => {
    if (currency === 'USD') {
      return `$${Math.round(usd).toLocaleString()}`;
    }
    const uzs = usd * 12850;
    return `${Math.round(uzs).toLocaleString()} so'm`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicantPhone) return;
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setApplicantPhone('');
      setApplicantName('');
    }, 4000);
  };

  return (
    <section id="kalkulyator" className="py-20 lg:py-28 bg-neutral-950 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400">
            <Calculator className="w-4 h-4 text-amber-400" />
            <span>Moliyaviy Hisob-Kitob</span>
            <span aria-hidden="true" className="text-neutral-700">·</span>
            <span className="text-neutral-400">Shaffof va Foizsiz To'lov Rejalari</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display text-balance">
            Ipoteka va Bo'lib To'lash Kalkulyatori
          </h2>
          <p className="text-sm sm:text-base text-neutral-400">
            O'zingizga ma'qul bo'lgan uchastka yoki dom uchun oylik badal va boshlang'ich to'lovni 1 soniyada hisoblang.
          </p>
        </div>

        {/* Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Form Controls (7 cols) */}
          <div className="lg:col-span-7 bg-neutral-900/60 border border-neutral-800 p-6 sm:p-8 rounded-2xl space-y-6">
            
            {/* Quick Presets for Interest */}
            <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
              <span className="text-xs font-semibold text-neutral-300">To'lov Turini Tanlang:</span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setInterestRate(0);
                    setLoanTermYears(3);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                    interestRate === 0
                      ? 'bg-amber-400 text-neutral-950 font-bold'
                      : 'bg-neutral-800 text-neutral-300 hover:text-white'
                  }`}
                >
                  0% Developer Bo'lib To'lash
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setInterestRate(17.5);
                    setLoanTermYears(10);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                    interestRate > 0
                      ? 'bg-amber-400 text-neutral-950 font-bold'
                      : 'bg-neutral-800 text-neutral-300 hover:text-white'
                  }`}
                >
                  Bank Ipotekasi (17.5%)
                </button>
              </div>
            </div>

            {/* Input 1: Mulk Narxi */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-semibold text-neutral-300">
                <label>Mulk Qiymati:</label>
                <span className="text-amber-400 font-mono text-base font-bold tabular-nums">
                  {formatAmount(propertyPrice)}
                </span>
              </div>
              <input
                type="range"
                min="50000"
                max="1000000"
                step="10000"
                value={propertyPrice}
                onChange={(e) => setPropertyPrice(Number(e.target.value))}
                className="w-full accent-amber-400 bg-neutral-800 h-2 rounded cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-neutral-500 font-mono">
                <span>$50,000</span>
                <span>$500,000</span>
                <span>$1,000,000+</span>
              </div>
            </div>

            {/* Input 2: Boshlang'ich To'lov */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-semibold text-neutral-300">
                <label>Boshlang'ich To'lov ({downPaymentPercent}%):</label>
                <span className="text-white font-mono text-sm font-bold tabular-nums">
                  {formatAmount(downPaymentAmount)}
                </span>
              </div>
              <div className="grid grid-cols-4 gap-2 pt-1">
                {[15, 25, 35, 50].map((pct) => (
                  <button
                    key={pct}
                    type="button"
                    onClick={() => setDownPaymentPercent(pct)}
                    className={`py-2 rounded-lg text-xs font-mono font-semibold transition-colors ${
                      downPaymentPercent === pct
                        ? 'bg-amber-400 text-neutral-950'
                        : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
                    }`}
                  >
                    {pct}%
                  </button>
                ))}
              </div>
            </div>

            {/* Input 3: Muddat */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-semibold text-neutral-300">
                <label>To'lov Muddati:</label>
                <span className="text-white font-mono text-sm font-bold tabular-nums">
                  {loanTermYears} Yil ({loanTermYears * 12} oy)
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="20"
                step="1"
                value={loanTermYears}
                onChange={(e) => setLoanTermYears(Number(e.target.value))}
                className="w-full accent-amber-400 bg-neutral-800 h-2 rounded cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-neutral-500 font-mono">
                <span>1 yil</span>
                <span>10 yil</span>
                <span>20 yil</span>
              </div>
            </div>

            {/* Input 4: Yillik Foiz Stavkasi */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-semibold text-neutral-300">
                <label>Yillik Foiz Stavkasi:</label>
                <span className="text-white font-mono text-sm font-bold tabular-nums">
                  {interestRate}%
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="25"
                step="0.5"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full accent-amber-400 bg-neutral-800 h-2 rounded cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-neutral-500 font-mono">
                <span>0% (Muddatli to'lov)</span>
                <span>17.5% (Ipoteka)</span>
                <span>25%</span>
              </div>
            </div>

          </div>

          {/* Right Calculation Results Card (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-neutral-900 to-neutral-950 border border-amber-500/20 p-6 sm:p-8 rounded-2xl shadow-xl space-y-6">
            <div>
              <span className="text-xs uppercase font-semibold tracking-wider text-amber-400">
                Tavsiya Etiladigan Oylik To'lov
              </span>
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono mt-1 tabular-nums">
                {formatAmount(monthlyPayment)} <span className="text-xs text-neutral-400 font-normal">/ oyiga</span>
              </div>
            </div>

            {/* Detailed Financial Breakdown */}
            <div className="space-y-3 pt-4 border-t border-neutral-800 text-xs font-mono">
              <div className="flex items-center justify-between text-neutral-400">
                <span>Mulk narxi:</span>
                <span className="text-white font-bold tabular-nums">{formatAmount(propertyPrice)}</span>
              </div>
              <div className="flex items-center justify-between text-neutral-400">
                <span>Boshlang'ich to'lov ({downPaymentPercent}%):</span>
                <span className="text-white font-bold tabular-nums">{formatAmount(downPaymentAmount)}</span>
              </div>
              <div className="flex items-center justify-between text-neutral-400">
                <span>Kredit summasi:</span>
                <span className="text-white font-bold tabular-nums">{formatAmount(loanPrincipal)}</span>
              </div>
              <div className="flex items-center justify-between text-neutral-400">
                <span>Jami to'lanadigan foiz:</span>
                <span className="text-amber-400 font-bold tabular-nums">{formatAmount(totalInterest)}</span>
              </div>
              <div className="flex items-center justify-between text-neutral-400 pt-2 border-t border-neutral-800">
                <span>Zarur oilaviy daromad:</span>
                <span className="text-emerald-400 font-bold tabular-nums">~{formatAmount(recommendedIncome)} / oy</span>
              </div>
            </div>

            {/* Application Form */}
            <div className="pt-4 border-t border-neutral-800 space-y-3">
              <div className="text-xs font-semibold text-white">
                Bank Ipotekasi yoki Bo'lib To'lashni Tasdiqlash:
              </div>

              {isSubmitted ? (
                <div className="bg-emerald-950/60 border border-emerald-500/40 p-4 rounded-xl text-center space-y-1">
                  <div className="flex items-center justify-center gap-1.5 text-emerald-400 text-xs font-bold">
                    <Check className="w-4 h-4" /> Arizangiz qabul qilindi!
                  </div>
                  <p className="text-[11px] text-neutral-300">
                    Kredit mutaxassisi 15 daqiqa ichida siz bilan bog'lanadi.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-2.5">
                  <input
                    type="text"
                    required
                    placeholder="Ismingiz"
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-neutral-950 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="+998 (90) 123-45-67"
                    value={applicantPhone}
                    onChange={(e) => setApplicantPhone(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-neutral-950 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400"
                  />
                  <button
                    type="submit"
                    className="w-full py-2.5 px-4 bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold text-xs rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Ipotekani Rasmiylashtirishga Ariza</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>

            <div className="text-[10px] text-neutral-500 flex items-center gap-1.5 pt-2">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Ma'lumotlar sir saqlanadi. Rasmiy bank sheriklari: SQB, Ipoteka Bank, Hamkorbank, Kapitalbank.</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
