import React from 'react';
import { Link } from 'react-router-dom';
import { Waves, Instagram, Facebook, Youtube, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Beranda', href: '/' },
    { name: 'Destinasi', href: '/destinations' },
    { name: 'Tentang Kami', href: '/about' },
    { name: 'Kontak', href: '/contact' },
  ];

  const destinations = [
    'Exotic Selorejo',
    'Beautiful Karangkates',
    'Amazing Wisata Lahor',
    'Taman Wisata Waduk Selorejo',
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-secondary p-2 rounded-lg">
                <Waves className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold">Jasa Tirta</span>
                <p className="text-sm text-accent">Water Tourism</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Menjelajahi keindahan alam Indonesia melalui wisata air yang memukau dan berkesan.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-accent hover:text-secondary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-accent hover:text-secondary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-accent hover:text-secondary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Navigasi</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Destinasi Populer</h3>
            <ul className="space-y-2">
              {destinations.map((destination) => (
                <li key={destination}>
                  <Link
                    to="/destinations"
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    {destination}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Kontak</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-sm text-muted-foreground">+62 21 1234 5678</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-sm text-muted-foreground">info@jasatirta.co.id</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-accent mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  Jl. Pattimura No. 20<br />
                  Jakarta Selatan, Indonesia
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-accent/20 mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Jasa Tirta. Semua hak dilindungi undang-undang.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;