import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare, 
  Send,
  Headphones,
  Calendar
} from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Alamat Hotel',
    content: 'Jl. Raya Selorejo No. 123, Ngantang, Malang, Jawa Timur 65392',
    action: 'Lihat di Maps'
  },
  {
    icon: Phone,
    title: 'Telepon & WhatsApp',
    content: '+62 341-555-0123',
    action: 'Hubungi Sekarang'
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'info@hotelselorejo.com',
    action: 'Kirim Email'
  },
  {
    icon: Clock,
    title: 'Jam Operasional',
    content: '24 Jam (Reception) | Check-in: 14:00 | Check-out: 12:00',
    action: 'Info Lengkap'
  }
];

const services = [
  {
    icon: Headphones,
    title: 'Customer Service 24/7',
    description: 'Tim customer service kami siap membantu Anda kapan saja',
    contact: '+62 341-555-0124'
  },
  {
    icon: Calendar,
    title: 'Reservasi & Booking',
    description: 'Khusus untuk reservasi kamar dan paket wisata',
    contact: 'booking@hotelselorejo.com'
  },
  {
    icon: MessageSquare,
    title: 'Live Chat Support',
    description: 'Chat langsung dengan tim kami untuk informasi cepat',
    contact: 'Available 08:00 - 22:00'
  }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Hubungi Kami
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Kami siap membantu merencanakan pengalaman menginap terbaik untuk Anda
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Informasi Kontak
            </Badge>
            <h2 className="text-4xl font-bold text-primary mb-4">
              Cara Menghubungi Hotel Selorejo
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-4">
                      <IconComponent className="h-8 w-8 text-secondary" />
                    </div>
                    <h3 className="text-lg font-semibold text-primary mb-2">{info.title}</h3>
                    <p className="text-muted-foreground mb-4 text-sm">{info.content}</p>
                    <Button size="sm" variant="outline" className="w-full">
                      {info.action}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Google Maps Embed */}
          <div className="mb-16">
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-primary text-center">
                  Lokasi Hotel Selorejo
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="w-full h-96 bg-gradient-to-br from-green-100 to-blue-100 rounded-b-lg flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="h-16 w-16 mx-auto mb-4 text-secondary" />
                    <p className="text-lg font-semibold">Google Maps Embed</p>
                    <p className="text-sm">Lokasi Hotel Selorejo</p>
                    <p className="text-xs mt-2">Jl. Raya Selorejo No. 123, Ngantang, Malang</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form & Services */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">
                  Kirim Pesan Kepada Kami
                </CardTitle>
                <p className="text-muted-foreground">
                  Isi formulir di bawah ini untuk mengirim pesan atau pertanyaan
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Nama Lengkap *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Masukkan nama lengkap"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Nomor Telepon *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+62 xxx-xxxx-xxxx"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="nama@email.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="subject">Subjek *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Subjek pesan Anda"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Pesan *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tulis pesan atau pertanyaan Anda..."
                      rows={5}
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    <Send className="h-4 w-4 mr-2" />
                    Kirim Pesan
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Customer Services */}
            <div className="space-y-6">
              <div>
                <Badge variant="secondary" className="mb-4">
                  Layanan Pelanggan
                </Badge>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Tim Siap Membantu Anda
                </h3>
                <p className="text-muted-foreground mb-6">
                  Hubungi tim customer service kami melalui berbagai channel yang tersedia
                </p>
              </div>

              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                            <IconComponent className="h-6 w-6 text-secondary" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-primary mb-2">
                            {service.title}
                          </h4>
                          <p className="text-muted-foreground mb-3 text-sm">
                            {service.description}
                          </p>
                          <div className="flex items-center text-secondary font-medium">
                            <span className="text-sm">{service.contact}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}

              {/* FAQ Section */}
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-primary mb-4">
                    Pertanyaan yang Sering Diajukan
                  </h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-medium text-foreground">Bagaimana cara melakukan booking?</p>
                      <p className="text-muted-foreground">Anda dapat booking melalui website, telepon, atau langsung di hotel.</p>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Apakah tersedia layanan antar-jemput?</p>
                      <p className="text-muted-foreground">Ya, kami menyediakan layanan antar-jemput dari stasiun dan terminal.</p>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Apakah pet-friendly?</p>
                      <p className="text-muted-foreground">Maaf, untuk saat ini kami belum menerima hewan peliharaan.</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full mt-4">
                    Lihat FAQ Lengkap
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;