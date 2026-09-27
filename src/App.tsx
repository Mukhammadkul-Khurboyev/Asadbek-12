/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CinematicTourSection } from './components/CinematicTourSection';
import { UchastkalarSection } from './components/UchastkalarSection';
import { DomlarSection } from './components/DomlarSection';
import { MortgageCalculatorSection } from './components/MortgageCalculatorSection';
import { NeighborhoodExplorerSection } from './components/NeighborhoodExplorerSection';
import { PropertyDetailModal } from './components/PropertyDetailModal';
import { ListPropertyModal } from './components/ListPropertyModal';
import { Footer } from './components/Footer';
import { PROPERTIES, Property } from './data/properties';

export default function App() {
  const [currency, setCurrency] = useState<'USD' | 'UZS'>('USD');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDistrict, setSelectedDistrict] = useState<string>('Barcha tumanlar');
  const [selectedRooms, setSelectedRooms] = useState<string>('all');
  const [maxPrice, setMaxPrice] = useState<number>(1000000);
  const [favorites, setFavorites] = useState<string[]>(['uchastka-mirzoulugbek-01']);
  
  // Modals
  const [selectedPropertyModal, setSelectedPropertyModal] = useState<Property | null>(null);
  const [isListPropertyModalOpen, setIsListPropertyModalOpen] = useState<boolean>(false);

  // Toggle Currency
  const handleToggleCurrency = () => {
    setCurrency((prev) => (prev === 'USD' ? 'UZS' : 'USD'));
  };

  // Toggle Favorite
  const handleToggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Filter properties
  const filteredProperties = useMemo(() => {
    return PROPERTIES.filter((item) => {
      // Category filter
      if (selectedCategory !== 'all') {
        if (selectedCategory === 'uchastka' && item.category !== 'uchastka') return false;
        if (selectedCategory === 'dom' && item.category !== 'dom') return false;
        if (selectedCategory === 'villa' && item.category !== 'villa') return false;
      }

      // District filter
      if (selectedDistrict !== 'Barcha tumanlar') {
        if (!item.location.district.toLowerCase().includes(selectedDistrict.toLowerCase())) {
          return false;
        }
      }

      // Rooms filter
      if (selectedRooms !== 'all') {
        if (selectedRooms === '3' && item.specs.rooms > 3) return false;
        if (selectedRooms === '4-5' && (item.specs.rooms < 4 || item.specs.rooms > 5)) return false;
        if (selectedRooms === '6+' && item.specs.rooms < 6) return false;
      }

      // Price filter
      if (item.priceUSD > maxPrice) return false;

      return true;
    });
  }, [selectedCategory, selectedDistrict, selectedRooms, maxPrice]);

  const handleScrollToCatalog = () => {
    const el = document.getElementById('uchastkalar');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToTour = () => {
    const el = document.getElementById('cinematic-3d');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookViewingForProperty = (propertyName: string) => {
    // Find matching property or open the first one
    const found = PROPERTIES.find((p) => p.title.includes(propertyName)) || PROPERTIES[0];
    setSelectedPropertyModal(found);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans selection:bg-amber-400/20 selection:text-amber-300">
      
      {/* Navigation */}
      <Navbar
        currency={currency}
        onToggleCurrency={handleToggleCurrency}
        onOpenListPropertyModal={() => setIsListPropertyModalOpen(true)}
      />

      <main className="flex-1">
        
        {/* 1. Cinematic 4K Hero Section */}
        <HeroSection
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          selectedDistrict={selectedDistrict}
          onSelectDistrict={setSelectedDistrict}
          selectedRooms={selectedRooms}
          onSelectRooms={setSelectedRooms}
          maxPrice={maxPrice}
          onSelectMaxPrice={setMaxPrice}
          currency={currency}
          matchingCount={filteredProperties.length}
          onScrollToCatalog={handleScrollToCatalog}
          onOpenFeaturedTour={handleScrollToTour}
        />

        {/* 2. Cinematic 3D Virtual Tour & Walkthrough Section */}
        <CinematicTourSection
          onBookViewing={handleBookViewingForProperty}
        />

        {/* 3. Saralangan Hashamatli Uchastkalar & Hovlilar Section */}
        <UchastkalarSection
          properties={filteredProperties}
          currency={currency}
          onSelectProperty={(prop) => setSelectedPropertyModal(prop)}
          onBookViewing={handleBookViewingForProperty}
          favorites={favorites}
          onToggleFavorite={handleToggleFavorite}
        />

        {/* 4. Zamonaviy Ko'p Qavatli Domlar & Novostroyka Kvartiralari Section */}
        <DomlarSection
          properties={filteredProperties}
          currency={currency}
          onSelectProperty={(prop) => setSelectedPropertyModal(prop)}
          onBookViewing={handleBookViewingForProperty}
          favorites={favorites}
          onToggleFavorite={handleToggleFavorite}
        />

        {/* 5. Real-Time Ipoteka & Bo'lib To'lash Kalkulyatori Section */}
        <MortgageCalculatorSection
          currency={currency}
        />

        {/* 6. Interaktiv Tumanlar & Lokatsiya Xaritasi Section */}
        <NeighborhoodExplorerSection
          onSelectDistrict={(dist) => {
            setSelectedDistrict(dist);
            handleScrollToCatalog();
          }}
        />

      </main>

      {/* Footer */}
      <Footer
        onOpenListPropertyModal={() => setIsListPropertyModalOpen(true)}
      />

      {/* Property Detail & 4K Viewer Modal */}
      <PropertyDetailModal
        property={selectedPropertyModal}
        currency={currency}
        onClose={() => setSelectedPropertyModal(null)}
        onOpenTour={handleScrollToTour}
      />

      {/* List Property / Seller Modal */}
      <ListPropertyModal
        isOpen={isListPropertyModalOpen}
        onClose={() => setIsListPropertyModalOpen(false)}
      />

    </div>
  );
}
