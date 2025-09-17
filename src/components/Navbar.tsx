import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Hotel } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Beranda', href: '/' },
    { name: 'Lokasi Wisata', href: '/destinations' },
    { name: 'Tentang Kami', href: '/about' },
    { name: 'Kontak', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className={`p-2 rounded-lg transition-colors ${
              isScrolled ? 'bg-primary' : 'bg-white/20 backdrop-blur-sm'
            }`}>
              <Hotel className={`h-6 w-6 ${isScrolled ? 'text-white' : 'text-white'}`} />
            </div>
            <div>
              <span className={`text-xl font-bold transition-colors ${
                isScrolled ? 'text-primary' : 'text-white'
              }`}>Hotel Selorejo</span>
              <p className={`text-xs transition-colors ${
                isScrolled ? 'text-muted-foreground' : 'text-white/80'
              }`}>Mountain Resort</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`nav-link px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(item.href) 
                    ? (isScrolled ? 'text-secondary' : 'text-accent') 
                    : (isScrolled ? 'text-foreground hover:text-secondary' : 'text-white hover:text-accent')
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className={`btn-hero transition-all ${
              isScrolled ? 'bg-secondary text-white hover:bg-secondary/90' : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
            }`}>
              Booking Sekarang
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className={`transition-colors ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className={`md:hidden ${
            isScrolled ? 'bg-white/95 backdrop-blur-md' : 'bg-primary/95 backdrop-blur-sm'
          }`}>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-colors ${
                    isActive(item.href) 
                      ? (isScrolled ? 'text-secondary' : 'text-accent')
                      : (isScrolled ? 'text-foreground' : 'text-primary-foreground')
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button className="btn-hero w-full">
                  Booking Sekarang
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;