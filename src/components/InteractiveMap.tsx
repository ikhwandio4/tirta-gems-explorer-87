import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, X } from 'lucide-react';

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
    image: selorejo,
    description: 'Danau indah dengan pemandangan pegunungan yang menakjubkan, perfect untuk aktivitas water sports dan fotografi.',
    position: { x: 45, y: 30 },
    category: 'Danau Wisata'
  },
  {
    id: 2,
    name: 'Beautiful Karangkates',
    image: karangkates,
    description: 'Bendungan spektakuler yang menawarkan pemandangan luas dan spot foto Instagram-worthy.',
    position: { x: 60, y: 45 },
    category: 'Bendungan'
  },
  {
    id: 3,
    name: 'Amazing Wisata Lahor',
    image: lahor,
    description: 'Water park lengkap dengan wahana air modern dan fasilitas rekreasi keluarga.',
    position: { x: 35, y: 55 },
    category: 'Water Park'
  },
  {
    id: 4,
    name: 'Taman Wisata Waduk Selorejo',
    image: tamanSelorejo,
    description: 'Taman wisata keluarga dengan area piknik yang luas dan pemandangan waduk yang indah.',
    position: { x: 25, y: 35 },
    category: 'Taman Wisata'
  },
  {
    id: 5,
    name: 'Waduk Bening',
    image: bening,
    description: 'Air jernih seperti kristal di tengah alam yang masih asri dan udara pegunungan yang segar.',
    position: { x: 70, y: 25 },
    category: 'Waduk'
  },
  {
    id: 6,
    name: 'Taman Wisata Waruturi',
    image: waruturi,
    description: 'Wisata edukasi alam dengan ekosistem lahan basah yang unik dan beragam flora fauna.',
    position: { x: 50, y: 65 },
    category: 'Taman Wisata'
  },
  {
    id: 7,
    name: 'Taman Wisata Wlingi-Lodoyo',
    image: wlingiLodoyo,
    description: 'Keajaiban dua danau kembar yang saling terhubung dengan pemandangan yang eksotis.',
    position: { x: 80, y: 50 },
    category: 'Danau Kembar'
  }
];

const InteractiveMap = () => {
  const [selectedDestination, setSelectedDestination] = useState<typeof destinations[0] | null>(null);

  const handlePinClick = (destination: typeof destinations[0]) => {
    setSelectedDestination(destination);
  };

  const closePopup = () => {
    setSelectedDestination(null);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-background to-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Peta Lokasi Wisata
          </Badge>
          <h2 className="text-4xl font-bold text-primary mb-4">
            Jelajahi Destinasi Wisata Kami
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Klik pada pin lokasi untuk melihat informasi detail setiap destinasi wisata yang dapat Anda kunjungi
          </p>
        </div>

        <div className="relative w-full h-[500px] bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl overflow-hidden shadow-2xl">
          {/* Background Map Illustration */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <pattern id="topo" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="10" cy="10" r="8" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                    <circle cx="10" cy="10" r="4" fill="none" stroke="currentColor" strokeWidth="0.3"/>
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#topo)" className="text-primary/20"/>
              </svg>
            </div>
          </div>

          {/* Destination Pins */}
          {destinations.map((destination) => (
            <button
              key={destination.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
              style={{
                left: `${destination.position.x}%`,
                top: `${destination.position.y}%`,
              }}
              onClick={() => handlePinClick(destination)}
            >
              <div className="relative">
                <div className="w-8 h-8 bg-secondary rounded-full shadow-lg border-4 border-white group-hover:scale-110 transition-all duration-300 flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-accent rounded-full animate-pulse"></div>
                
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-black/80 text-white text-xs rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  {destination.name}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-black/80"></div>
                </div>
              </div>
            </button>
          ))}

          {/* Hotel Location - Central Pin */}
          <div className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10"
               style={{ left: '50%', top: '40%' }}>
            <div className="relative">
              <div className="w-12 h-12 bg-primary rounded-full shadow-xl border-4 border-white flex items-center justify-center animate-pulse">
                <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                  <span className="text-primary font-bold text-xs">H</span>
                </div>
              </div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-primary text-white text-sm rounded-lg whitespace-nowrap font-semibold">
                Hotel Selorejo
              </div>
            </div>
          </div>
        </div>

        {/* Popup Modal */}
        {selectedDestination && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl animate-scale-in">
              <div className="relative">
                <img
                  src={selectedDestination.image}
                  alt={selectedDestination.name}
                  className="w-full h-48 object-cover rounded-t-2xl"
                />
                <button
                  onClick={closePopup}
                  className="absolute top-4 right-4 w-8 h-8 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
                <div className="absolute bottom-4 left-4">
                  <Badge variant="secondary" className="bg-white/90 text-primary">
                    {selectedDestination.category}
                  </Badge>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-3">
                  {selectedDestination.name}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {selectedDestination.description}
                </p>
                <div className="flex gap-3">
                  <Button size="sm" className="flex-1">
                    Lihat Detail
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    Rute Maps
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default InteractiveMap;