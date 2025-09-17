import React, { useState } from 'react';
import DestinationCard from '@/components/DestinationCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter } from 'lucide-react';

// Import destination images
import selorejo from '@/assets/selorejo.jpg';
import karangkates from '@/assets/karangkates.jpg';
import lahor from '@/assets/lahor.jpg';
import tamanSelorejo from '@/assets/taman-selorejo.jpg';
import bening from '@/assets/bening.jpg';
import waruturi from '@/assets/waruturi.jpg';
import wlingiLodoyo from '@/assets/wlingi-lodoyo.jpg';

const allDestinations = [
  {
    id: 1,
    name: 'Exotic Selorejo',
    image: selorejo,
    rating: 4.8,
    price: 'Rp 15.000',
    location: 'Malang, Jawa Timur',
    category: 'Danau Wisata',
    facilities: ['Parkir', 'Toilet', 'Mushola', 'Food Court', 'Gazebo', 'Spot Foto']
  },
  {
    id: 2,
    name: 'Beautiful Karangkates',
    image: karangkates,
    rating: 4.7,
    price: 'Rp 20.000',
    location: 'Malang, Jawa Timur',
    category: 'Bendungan',
    facilities: ['Boat Ride', 'Gazebo', 'Camping', 'Fotografi', 'Parkir', 'Toilet']
  },
  {
    id: 3,
    name: 'Amazing Wisata Lahor',
    image: lahor,
    rating: 4.9,
    price: 'Rp 25.000',
    location: 'Malang, Jawa Timur',
    category: 'Water Park',
    facilities: ['Kolam Renang', 'Flying Fox', 'Playground', 'Restoran', 'Parkir', 'Toilet']
  },
  {
    id: 4,
    name: 'Taman Wisata Waduk Selorejo',
    image: tamanSelorejo,
    rating: 4.6,
    price: 'Rp 18.000',
    location: 'Malang, Jawa Timur',
    category: 'Taman Wisata',
    facilities: ['Picnic Area', 'Children Park', 'Cycling', 'Reflexology', 'Parkir', 'Toilet']
  },
  {
    id: 5,
    name: 'Waduk Bening',
    image: bening,
    rating: 4.5,
    price: 'Rp 12.000',
    location: 'Malang, Jawa Timur',
    category: 'Danau Wisata',
    facilities: ['Parkir', 'Toilet', 'Spot Foto', 'Gazebo', 'Memancing']
  },
  {
    id: 6,
    name: 'Taman Wisata Waruturi',
    image: waruturi,
    rating: 4.4,
    price: 'Rp 16.000',
    location: 'Malang, Jawa Timur',
    category: 'Ekowisata',
    facilities: ['Bird Watching', 'Walking Trail', 'Edukatif', 'Parkir', 'Toilet', 'Gazebo']
  },
  {
    id: 7,
    name: 'Taman Wisata Wlingi-Lodoyo',
    image: wlingiLodoyo,
    rating: 4.7,
    price: 'Rp 22.000',
    location: 'Blitar, Jawa Timur',
    category: 'Danau Kembar',
    facilities: ['Boat Ride', 'Camping', 'Cycling', 'Memancing', 'Parkir', 'Toilet']
  }
];

const categories = ['Semua', 'Danau Wisata', 'Bendungan', 'Water Park', 'Taman Wisata', 'Ekowisata', 'Danau Kembar'];
const priceRanges = ['Semua', 'Di bawah Rp 15.000', 'Rp 15.000 - Rp 20.000', 'Di atas Rp 20.000'];

const Destinations = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [selectedPriceRange, setSelectedPriceRange] = useState('Semua');
  const [filteredDestinations, setFilteredDestinations] = useState(allDestinations);

  React.useEffect(() => {
    let filtered = allDestinations;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(dest =>
        dest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dest.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== 'Semua') {
      filtered = filtered.filter(dest => dest.category === selectedCategory);
    }

    // Filter by price range
    if (selectedPriceRange !== 'Semua') {
      filtered = filtered.filter(dest => {
        const price = parseInt(dest.price.replace(/\D/g, ''));
        switch (selectedPriceRange) {
          case 'Di bawah Rp 15.000':
            return price < 15000;
          case 'Rp 15.000 - Rp 20.000':
            return price >= 15000 && price <= 20000;
          case 'Di atas Rp 20.000':
            return price > 20000;
          default:
            return true;
        }
      });
    }

    setFilteredDestinations(filtered);
  }, [searchTerm, selectedCategory, selectedPriceRange]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-hero-gradient text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Destinasi Wisata Air</h1>
          <p className="text-xl text-accent max-w-2xl mx-auto">
            Jelajahi 7 destinasi wisata air terbaik yang dikelola Jasa Tirta dengan fasilitas lengkap dan pemandangan memukau
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-card border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Cari destinasi atau lokasi..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">Filter:</span>
              </div>
              
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Kategori" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedPriceRange} onValueChange={setSelectedPriceRange}>
                <SelectTrigger className="w-56">
                  <SelectValue placeholder="Rentang Harga" />
                </SelectTrigger>
                <SelectContent>
                  {priceRanges.map((range) => (
                    <SelectItem key={range} value={range}>
                      {range}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Active Filters */}
      {(selectedCategory !== 'Semua' || selectedPriceRange !== 'Semua' || searchTerm) && (
        <section className="py-4 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-sm text-muted-foreground">Filter aktif:</span>
              {searchTerm && (
                <Badge variant="secondary" className="gap-1">
                  Pencarian: "{searchTerm}"
                </Badge>
              )}
              {selectedCategory !== 'Semua' && (
                <Badge variant="secondary" className="gap-1">
                  Kategori: {selectedCategory}
                </Badge>
              )}
              {selectedPriceRange !== 'Semua' && (
                <Badge variant="secondary" className="gap-1">
                  Harga: {selectedPriceRange}
                </Badge>
              )}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('Semua');
                  setSelectedPriceRange('Semua');
                }}
                className="text-xs"
              >
                Hapus Semua
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Results */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-primary">
              {filteredDestinations.length} Destinasi Ditemukan
            </h2>
          </div>

          {filteredDestinations.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredDestinations.map((destination) => (
                <DestinationCard
                  key={destination.id}
                  {...destination}
                  onClick={() => console.log(`Navigate to ${destination.name} detail`)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Tidak Ada Destinasi Ditemukan
              </h3>
              <p className="text-muted-foreground mb-6">
                Coba ubah filter atau kata kunci pencarian Anda
              </p>
              <Button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('Semua');
                  setSelectedPriceRange('Semua');
                }}
              >
                Reset Filter
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Destinations;