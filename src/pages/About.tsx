import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, MapPin, Clock, Heart, Leaf } from 'lucide-react';

// Import images
import selorejo from '@/assets/selorejo.jpg';
import karangkates from '@/assets/karangkates.jpg';

const values = [
  {
    icon: Heart,
    title: 'Kepuasan Tamu',
    description: 'Mengutamakan kenyamanan dan kepuasan setiap tamu dengan pelayanan terbaik'
  },
  {
    icon: Leaf,
    title: 'Kelestarian Alam',
    description: 'Berkomitmen menjaga keindahan alam dan lingkungan sekitar untuk generasi mendatang'
  },
  {
    icon: Users,
    title: 'Keramahan Lokal',
    description: 'Menampilkan kehangatan dan keramahan budaya lokal dalam setiap interaksi'
  }
];

const timeline = [
  {
    year: '2010',
    title: 'Pembangunan Dimulai',
    description: 'Dimulainya pembangunan Hotel Selorejo dengan visi menjadi resort terbaik di kawasan Malang'
  },
  {
    year: '2012',
    title: 'Grand Opening',
    description: 'Hotel Selorejo resmi dibuka dengan 50 kamar dan fasilitas modern pertama'
  },
  {
    year: '2015',
    title: 'Ekspansi Fasilitas',
    description: 'Penambahan restaurant, spa, dan recreational facilities untuk pengalaman menginap yang lengkap'
  },
  {
    year: '2018',
    title: 'Partnership Wisata',
    description: 'Kerjasama dengan pengelola destinasi wisata lokal untuk paket tour terintegrasi'
  },
  {
    year: '2020',
    title: 'Renovasi Besar',
    description: 'Renovasi menyeluruh untuk meningkatkan kualitas akomodasi dan standar internasional'
  },
  {
    year: '2024',
    title: 'Eco-Friendly Initiative',
    description: 'Implementasi program ramah lingkungan dan sertifikasi green hotel'
  }
];

const facilities = [
  'Restaurant dengan Menu Lokal & Internasional',
  'Spa & Wellness Center',
  'Outdoor Swimming Pool',
  'Conference & Meeting Rooms',
  'Fitness Center',
  'Kids Play Area',
  'Garden & Terrace Lounge',
  'Tour & Travel Services'
];

const About = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-primary to-secondary overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${selorejo})` }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Tentang Hotel Selorejo
            </h1>
            <p className="text-xl md:text-2xl">
              Harmoni Alam dan Kenyamanan Modern di Pegunungan Malang
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <Badge variant="secondary" className="mb-4">
                Sejarah Kami
              </Badge>
              <h2 className="text-4xl font-bold text-primary mb-6">
                Perjalanan Menciptakan Pengalaman Tak Terlupakan
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Hotel Selorejo lahir dari visi untuk menghadirkan akomodasi berkualitas tinggi 
                di tengah keindahan alam Selorejo. Sejak tahun 2010, kami telah berkomitmen 
                untuk memberikan pengalaman menginap yang memadukan kenyamanan modern dengan 
                keindahan alam pegunungan.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Terletak strategis dengan akses mudah ke berbagai destinasi wisata air terbaik 
                di kawasan Malang, hotel kami menjadi pilihan utama wisatawan yang mencari 
                ketenangan dan petualangan sekaligus.
              </p>
            </div>
            <div className="relative">
              <img
                src={karangkates}
                alt="Hotel Selorejo"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-secondary text-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">14+</div>
                <div className="text-sm">Tahun Melayani</div>
              </div>
            </div>
          </div>

          {/* Vision & Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">Visi Kami</h3>
                <p className="text-muted-foreground">
                  Menjadi resort terdepan di kawasan wisata Selorejo yang menghadirkan 
                  pengalaman menginap berkelas dunia dengan tetap menjaga kearifan lokal 
                  dan kelestarian alam.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">Misi Kami</h3>
                <p className="text-muted-foreground">
                  Memberikan pelayanan hospitality terbaik, memfasilitasi wisatawan untuk 
                  menikmati keindahan alam Selorejo, dan berkontribusi positif terhadap 
                  pengembangan pariwisata berkelanjutan di wilayah Malang.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Values */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                Nilai-Nilai Kami
              </Badge>
              <h2 className="text-4xl font-bold text-primary mb-4">
                Prinsip yang Kami Junjung
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-8">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-6">
                        <IconComponent className="h-8 w-8 text-secondary" />
                      </div>
                      <h3 className="text-xl font-bold text-primary mb-4">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                Perjalanan Kami
              </Badge>
              <h2 className="text-4xl font-bold text-primary mb-4">
                Timeline Perkembangan Hotel
              </h2>
            </div>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-secondary/20"></div>
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center mb-8 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <Card className="shadow-lg hover:shadow-xl transition-shadow">
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-secondary mb-2">{item.year}</div>
                        <h3 className="text-lg font-semibold text-primary mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-secondary rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Facilities Gallery */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                Fasilitas Hotel
              </Badge>
              <h2 className="text-4xl font-bold text-primary mb-4">
                Fasilitas Lengkap untuk Kenyamanan Anda
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {facilities.map((facility, index) => (
                <Card key={index} className="text-center shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <p className="text-sm font-medium text-foreground">{facility}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <Card className="bg-gradient-to-r from-primary to-secondary text-white shadow-2xl">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold mb-4">
                  Siap Merasakan Pengalaman Menginap Terbaik?
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  Booking sekarang dan nikmati keindahan alam Selorejo dengan kenyamanan hotel berbintang
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                    Booking Sekarang
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Lihat Kamar
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;