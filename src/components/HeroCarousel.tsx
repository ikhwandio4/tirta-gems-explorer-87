import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import destination images
import selorejo from '@/assets/selorejo.jpg';
import karangkates from '@/assets/karangkates.jpg';
import lahor from '@/assets/lahor.jpg';
import tamanSelorejo from '@/assets/taman-selorejo.jpg';
import bening from '@/assets/bening.jpg';
import waruturi from '@/assets/waruturi.jpg';
import wlingiLodoyo from '@/assets/wlingi-lodoyo.jpg';

const destinations = [
  {
    id: 1,
    name: 'Exotic Selorejo',
    tagline: 'Keindahan Danau yang Memukau',
    image: selorejo,
    description: 'Nikmati ketenangan dan keindahan alam di danau Selorejo'
  },
  {
    id: 2,
    name: 'Beautiful Karangkates',
    tagline: 'Bendungan Spektakuler',
    image: karangkates,
    description: 'Pesona bendungan dengan pemandangan yang menakjubkan'
  },
  {
    id: 3,
    name: 'Amazing Wisata Lahor',
    tagline: 'Wahana Air Terlengkap',
    image: lahor,
    description: 'Serunya bermain air dengan fasilitas modern'
  },
  {
    id: 4,
    name: 'Taman Wisata Waduk Selorejo',
    tagline: 'Rekreasi Keluarga Ideal',
    image: tamanSelorejo,
    description: 'Tempat wisata yang sempurna untuk keluarga'
  },
  {
    id: 5,
    name: 'Waduk Bening',
    tagline: 'Kejernihan Air Alami',
    image: bening,
    description: 'Air jernih seperti kristal di tengah alam'
  },
  {
    id: 6,
    name: 'Taman Wisata Waruturi',
    tagline: 'Ekosistem Lahan Basah',
    image: waruturi,
    description: 'Wisata edukasi alam yang mempesona'
  },
  {
    id: 7,
    name: 'Taman Wisata Wlingi-Lodoyo',
    tagline: 'Danau Kembar Eksotis',
    image: wlingiLodoyo,
    description: 'Keajaiban dua danau yang saling terhubung'
  }
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % destinations.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % destinations.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + destinations.length) % destinations.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Slides */}
      <div className="relative h-full">
        {destinations.map((destination, index) => (
          <div
            key={destination.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${destination.image})` }}
            >
              <div className="hero-overlay" />
              
              {/* Content */}
              <div className="relative z-10 h-full flex items-center justify-center">
                <div className="text-center text-white px-4 max-w-4xl">
                  <h1 className="text-5xl md:text-7xl font-bold mb-6 fade-in">
                    {destination.name}
                  </h1>
                  <p className="text-xl md:text-2xl mb-4 text-accent slide-up">
                    {destination.tagline}
                  </p>
                  <p className="text-lg mb-8 max-w-2xl mx-auto slide-up">
                    {destination.description}
                  </p>
                  <Button className="btn-explore text-lg px-8 py-4">
                    Jelajahi Sekarang
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {destinations.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-accent scale-125' : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;