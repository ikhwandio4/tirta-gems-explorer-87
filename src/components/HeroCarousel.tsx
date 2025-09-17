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
    name: 'Selorejo',
    tagline: 'The Stunning Selorejo Lake',
    image: selorejo,
    description: 'Nikmati ketenangan dan keindahan alam di danau Selorejo'
  },
  {
    id: 2,
    name: 'Karangkates',
    tagline: 'Spectacular Dam Panorama',
    image: karangkates,
    description: 'Pesona bendungan dengan pemandangan yang menakjubkan'
  },
  {
    id: 3,
    name: 'Lahor',
    tagline: 'Water Adventure Paradise',
    image: lahor,
    description: 'Serunya bermain air dengan fasilitas modern'
  },
  {
    id: 4,
    name: 'Taman Selorejo',
    tagline: 'Family Recreation Haven',
    image: tamanSelorejo,
    description: 'Tempat wisata yang sempurna untuk keluarga'
  },
  {
    id: 5,
    name: 'Waduk Bening',
    tagline: 'Crystal Clear Waters',
    image: bening,
    description: 'Air jernih seperti kristal di tengah alam'
  },
  {
    id: 6,
    name: 'Waruturi',
    tagline: 'Wetland Ecosystem Wonders',
    image: waruturi,
    description: 'Wisata edukasi alam yang mempesona'
  },
  {
    id: 7,
    name: 'Wlingi-Lodoyo',
    tagline: 'Twin Lakes Experience',
    image: wlingiLodoyo,
    description: 'Keajaiban dua danau yang saling terhubung'
  }
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isAnimating) {
        setIsAnimating(true);
        setCurrentSlide((prev) => (prev + 1) % destinations.length);
        setTimeout(() => setIsAnimating(false), 1000);
      }
    }, 8000);

    return () => clearInterval(timer);
  }, [isAnimating]);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % destinations.length);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + destinations.length) % destinations.length);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      <div className="relative h-full w-full">
        {destinations.map((destination, index) => (
          <div
            key={destination.id}
            className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
            style={{ zIndex: index === currentSlide ? 1 : 0 }}
          >
            {/* Full-screen image */}
            <img 
              src={destination.image} 
              alt={destination.name} 
              className="w-full h-full object-cover"
            />
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/40" />
            
            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-center z-10">
              <div className="text-center text-white px-4 max-w-5xl">
                <h2 className="text-xl md:text-2xl font-medium mb-4 opacity-90 tracking-wide">
                  THE MAGNIFICENT
                </h2>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight fade-in">
                  {destination.tagline}
                </h1>
                <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto opacity-90 slide-up">
                  {destination.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm border border-white/20 px-8">
                    Explore Now
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8">
                    Watch Video
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows - More subtle */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300"
        disabled={isAnimating}
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300"
        disabled={isAnimating}
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Location indicator like the reference - bottom center */}
      <div className="absolute bottom-10 left-0 right-0 z-20">
        <div className="flex justify-center items-center">
          <div className="bg-black/30 backdrop-blur-sm px-6 py-3 rounded-full flex gap-4 md:gap-8">
            {destinations.map((destination, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 text-sm md:text-base ${
                  index === currentSlide 
                    ? 'text-white font-medium' 
                    : 'text-white/60 hover:text-white/80'
                }`}
              >
                {destination.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;