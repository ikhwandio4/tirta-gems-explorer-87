import React from 'react';
import HeroCarousel from '@/components/HeroCarousel';
import InteractiveMap from '@/components/InteractiveMap';
import DestinationCard from '@/components/DestinationCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Users, Award, Clock } from 'lucide-react';

// Import destination images
import selorejo from '@/assets/selorejo.jpg';
import karangkates from '@/assets/karangkates.jpg';
import lahor from '@/assets/lahor.jpg';
import tamanSelorejo from '@/assets/taman-selorejo.jpg';

const featuredDestinations = [
  {
    id: 1,
    name: 'Exotic Selorejo',
    image: selorejo,
    rating: 4.8,
    price: 'Rp 15.000',
    location: 'Malang, Jawa Timur',
    category: 'Danau Wisata',
    facilities: ['Parkir', 'Toilet', 'Mushola', 'Food Court']
  },
  {
    id: 2,
    name: 'Beautiful Karangkates',
    image: karangkates,
    rating: 4.7,
    price: 'Rp 20.000',
    location: 'Malang, Jawa Timur',
    category: 'Bendungan',
    facilities: ['Boat Ride', 'Gazebo', 'Camping', 'Fotografi']
  },
  {
    id: 3,
    name: 'Amazing Wisata Lahor',
    image: lahor,
    rating: 4.9,
    price: 'Rp 25.000',
    location: 'Malang, Jawa Timur',
    category: 'Water Park',
    facilities: ['Kolam Renang', 'Flying Fox', 'Playground', 'Restoran']
  },
  {
    id: 4,
    name: 'Taman Wisata Waduk Selorejo',
    image: tamanSelorejo,
    rating: 4.6,
    price: 'Rp 18.000',
    location: 'Malang, Jawa Timur',
    category: 'Taman Wisata',
    facilities: ['Picnic Area', 'Children Park', 'Cycling', 'Reflexology']
  }
];

const stats = [
  {
    icon: MapPin,
    value: '7+',
    label: 'Destinasi Wisata',
    description: 'Lokasi pilihan terbaik'
  },
  {
    icon: Users,
    value: '500K+',
    label: 'Pengunjung per Tahun',
    description: 'Kepercayaan wisatawan'
  },
  {
    icon: Award,
    value: '15+',
    label: 'Penghargaan',
    description: 'Prestasi tourism'
  },
  {
    icon: Clock,
    value: '20+',
    label: 'Tahun Pengalaman',
    description: 'Melayani dengan dedikasi'
  }
];

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Carousel */}
      <HeroCarousel />

      {/* Interactive Map Section */}
      <InteractiveMap />

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-4">
                    <IconComponent className="h-8 w-8 text-secondary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-lg font-semibold text-foreground mb-1">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Destinasi Populer
            </Badge>
            <h2 className="text-4xl font-bold text-primary mb-4">
              Jelajahi Keindahan Wisata Air
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Temukan pengalaman wisata air yang tak terlupakan di destinasi-destinasi pilihan terbaik kami
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredDestinations.map((destination) => (
              <DestinationCard
                key={destination.id}
                {...destination}
                onClick={() => console.log(`Navigate to ${destination.name}`)}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="btn-explore px-8 py-4">
              Lihat Semua Destinasi
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                Tentang Hotel Selorejo
              </Badge>
              <h2 className="text-4xl font-bold text-primary mb-6">
                Pengalaman Menginap di Tengah Keindahan Alam
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Hotel Selorejo menawarkan pengalaman menginap yang tak terlupakan dengan 
                pemandangan danau yang memukau dan udara pegunungan yang sejuk. Terletak 
                strategis di kawasan wisata Selorejo yang terkenal dengan keindahan alamnya.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Nikmati kenyamanan akomodasi modern dengan akses langsung ke berbagai 
                destinasi wisata air terbaik, fasilitas lengkap, dan pelayanan prima 
                untuk menjadikan liburan Anda istimewa.
              </p>
              <Button size="lg" className="btn-hero">
                Pelajari Lebih Lanjut
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-card">
                <img
                  src={selorejo}
                  alt="About Jasa Tirta"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-secondary text-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">20+</div>
                <div className="text-sm">Tahun Pengalaman</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-hero-gradient text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Siap Memulai Petualangan Anda?
          </h2>
          <p className="text-xl mb-8 text-accent">
            Rencanakan perjalanan wisata air yang tak terlupakan bersama keluarga dan teman-teman
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-4">
              Hubungi Kami
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4">
              Lihat Peta Lokasi
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;