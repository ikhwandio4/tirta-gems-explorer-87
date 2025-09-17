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
    position: { x: 23, y: 30 }, // Near water body on left
    category: 'Danau Wisata',
    distance: '5 km dari hotel'
  },
  {
    id: 2,
    name: 'Beautiful Karangkates',
    image: karangkates,
    description: 'Bendungan spektakuler yang menawarkan pemandangan luas dan spot foto Instagram-worthy.',
    position: { x: 60, y: 45 }, // Central-right area
    category: 'Bendungan',
    distance: '12 km dari hotel'
  },
  {
    id: 3,
    name: 'Amazing Wisata Lahor',
    image: lahor,
    description: 'Water park lengkap dengan wahana air modern dan fasilitas rekreasi keluarga.',
    position: { x: 25, y: 58 }, // Lower left near water
    category: 'Water Park',
    distance: '8 km dari hotel'
  },
  {
    id: 4,
    name: 'Taman Wisata Waduk Selorejo',
    image: tamanSelorejo,
    description: 'Taman wisata keluarga dengan area piknik yang luas dan pemandangan waduk yang indah.',
    position: { x: 35, y: 25 }, // Upper central area
    category: 'Taman Wisata',
    distance: '3 km dari hotel'
  },
  {
    id: 5,
    name: 'Waduk Bening',
    image: bening,
    description: 'Air jernih seperti kristal di tengah alam yang masih asri dan udara pegunungan yang segar.',
    position: { x: 80, y: 33 }, // Right side near water
    category: 'Waduk',
    distance: '15 km dari hotel'
  },
  {
    id: 6,
    name: 'Taman Wisata Waruturi',
    image: waruturi,
    description: 'Wisata edukasi alam dengan ekosistem lahan basah yang unik dan beragam flora fauna.',
    position: { x: 70, y: 67 }, // Lower right
    category: 'Taman Wisata',
    distance: '18 km dari hotel'
  },
  {
    id: 7,
    name: 'Taman Wisata Wlingi-Lodoyo',
    image: wlingiLodoyo,
    description: 'Keajaiban dua danau kembar yang saling terhubung dengan pemandangan yang eksotis.',
    position: { x: 85, y: 55 }, // Far right
    category: 'Danau Kembar',
    distance: '22 km dari hotel'
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

        <div className="relative w-full h-[600px] bg-gradient-to-br from-emerald-50 via-blue-50 to-cyan-50 rounded-2xl overflow-hidden shadow-2xl border border-emerald-100">
          {/* Realistic Map Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-emerald-100 to-blue-100">
            {/* Mountain Ranges */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 600" preserveAspectRatio="none">
              <defs>
                <linearGradient id="mountain1" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{stopColor:'#22c55e', stopOpacity:0.3}} />
                  <stop offset="100%" style={{stopColor:'#16a34a', stopOpacity:0.5}} />
                </linearGradient>
                <linearGradient id="mountain2" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{stopColor:'#059669', stopOpacity:0.4}} />
                  <stop offset="100%" style={{stopColor:'#047857', stopOpacity:0.6}} />
                </linearGradient>
                <linearGradient id="water" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{stopColor:'#0ea5e9', stopOpacity:0.3}} />
                  <stop offset="50%" style={{stopColor:'#06b6d4', stopOpacity:0.4}} />
                  <stop offset="100%" style={{stopColor:'#0891b2', stopOpacity:0.3}} />
                </linearGradient>
              </defs>
              
              {/* Mountain ranges for depth */}
              <path d="M0,300 Q200,180 400,220 T800,200 L800,600 L0,600 Z" fill="url(#mountain1)" />
              <path d="M0,350 Q150,250 350,280 T800,260 L800,600 L0,600 Z" fill="url(#mountain2)" />
              
              {/* Water bodies */}
              <ellipse cx="180" cy="180" rx="60" ry="35" fill="url(#water)" />
              <ellipse cx="480" cy="270" rx="80" ry="45" fill="url(#water)" />
              <ellipse cx="640" cy="200" rx="70" ry="40" fill="url(#water)" />
              <ellipse cx="200" cy="350" rx="90" ry="50" fill="url(#water)" />
              <ellipse cx="560" cy="400" rx="75" ry="42" fill="url(#water)" />
              
              {/* Rivers connecting water bodies */}
              <path d="M240,180 Q300,200 400,220 Q450,240 480,270" stroke="url(#water)" strokeWidth="8" fill="none" opacity="0.6" />
              <path d="M560,270 Q580,280 600,290 Q620,300 640,200" stroke="url(#water)" strokeWidth="6" fill="none" opacity="0.5" />
            </svg>
            
            {/* Topographic lines */}
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <pattern id="topo" x="0" y="0" width="15" height="15" patternUnits="userSpaceOnUse">
                    <circle cx="7.5" cy="7.5" r="6" fill="none" stroke="currentColor" strokeWidth="0.3"/>
                    <circle cx="7.5" cy="7.5" r="3" fill="none" stroke="currentColor" strokeWidth="0.2"/>
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#topo)" className="text-emerald-600"/>
              </svg>
            </div>
          </div>

          {/* Destination Pins */}
          {destinations.map((destination) => (
            <button
              key={destination.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 group z-10"
              style={{
                left: `${destination.position.x}%`,
                top: `${destination.position.y}%`,
              }}
              onClick={() => handlePinClick(destination)}
            >
              <div className="relative">
                {/* Pin shadow */}
                <div className="absolute top-1 left-1 w-8 h-8 bg-black/20 rounded-full blur-sm"></div>
                
                {/* Main pin */}
                <div className="relative w-8 h-8 bg-gradient-to-br from-secondary to-secondary/80 rounded-full shadow-xl border-3 border-white group-hover:scale-125 transition-all duration-300 flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-white drop-shadow-sm" />
                </div>
                
                {/* Pulsing indicator */}
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse shadow-sm"></div>
                
                {/* Enhanced Tooltip */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-4 py-3 bg-white rounded-xl shadow-2xl border border-gray-200 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none min-w-max">
                  <div className="text-center">
                    <p className="font-semibold text-primary text-sm">{destination.name}</p>
                    <p className="text-xs text-muted-foreground mt-1">{destination.distance}</p>
                    <div className="mt-2">
                      <span className="inline-block bg-secondary/10 text-secondary px-2 py-1 rounded-full text-xs font-medium">
                        {destination.category}
                      </span>
                    </div>
                  </div>
                  {/* Arrow */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-t-6 border-transparent border-t-white drop-shadow-sm"></div>
                </div>
              </div>
            </button>
          ))}

          {/* Hotel Location - Central Pin */}
          <div className="absolute transform -translate-x-1/2 -translate-y-1/2 z-20"
               style={{ left: '50%', top: '40%' }}>
            <div className="relative">
              {/* Pulsing rings around hotel */}
              <div className="absolute inset-0 w-12 h-12 bg-primary/20 rounded-full animate-ping"></div>
              <div className="absolute inset-0 w-12 h-12 bg-primary/30 rounded-full animate-pulse"></div>
              
              {/* Main hotel pin */}
              <div className="relative w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-full shadow-2xl border-4 border-white flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center shadow-lg">
                  <span className="text-primary font-bold text-xs">H</span>
                </div>
              </div>
              
              {/* Hotel label */}
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-gradient-to-r from-primary to-primary/90 text-white text-sm rounded-xl whitespace-nowrap font-bold shadow-lg border border-white/20">
                Hotel Selorejo
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-primary"></div>
              </div>
            </div>
          </div>

          {/* Connecting lines from hotel to destinations */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {destinations.map((dest) => (
              <line
                key={`line-${dest.id}`}
                x1="50%"
                y1="40%"
                x2={`${dest.position.x}%`}
                y2={`${dest.position.y}%`}
                stroke="rgba(59, 130, 246, 0.2)"
                strokeWidth="2"
                strokeDasharray="5,5"
                className="animate-pulse"
              />
            ))}
          </svg>
        </div>

        {/* Enhanced Popup Modal */}
        {selectedDestination && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl max-w-lg w-full shadow-2xl animate-scale-in overflow-hidden">
              <div className="relative">
                <img
                  src={selectedDestination.image}
                  alt={selectedDestination.name}
                  className="w-full h-56 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                
                <button
                  onClick={closePopup}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300"
                >
                  <X className="h-5 w-5" />
                </button>
                
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between">
                    <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30">
                      {selectedDestination.category}
                    </Badge>
                    <div className="text-white text-sm font-medium bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      {selectedDestination.distance}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-3">
                  {selectedDestination.name}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {selectedDestination.description}
                </p>
                
                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <Button className="flex-1 rounded-xl">
                    <MapPin className="h-4 w-4 mr-2" />
                    Lihat Detail
                  </Button>
                  <Button variant="outline" className="flex-1 rounded-xl">
                    Rute Maps
                  </Button>
                </div>
                
                {/* Additional Info */}
                <div className="border-t pt-4 mt-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Estimasi waktu:</span>
                    <span className="font-medium">15-25 menit berkendara</span>
                  </div>
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