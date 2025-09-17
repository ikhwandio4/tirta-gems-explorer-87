import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, Camera } from 'lucide-react';

interface DestinationCardProps {
  id: number;
  name: string;
  image: string;
  rating: number;
  price: string;
  location: string;
  category: string;
  facilities: string[];
  onClick?: () => void;
}

const DestinationCard: React.FC<DestinationCardProps> = ({
  name,
  image,
  rating,
  price,
  location,
  category,
  facilities,
  onClick
}) => {
  return (
    <div className="destination-card cursor-pointer" onClick={onClick}>
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="destination-card-image"
        />
        <div className="absolute top-4 left-4">
          <Badge variant="secondary" className="bg-secondary/90 text-white">
            {category}
          </Badge>
        </div>
        <div className="absolute top-4 right-4">
          <Button size="icon" variant="ghost" className="bg-black/30 hover:bg-black/50 text-white">
            <Camera className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
            {name}
          </h3>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
        </div>

        <div className="flex items-center text-muted-foreground mb-3">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{location}</span>
        </div>

        <div className="flex flex-wrap gap-1 mb-4">
          {facilities.slice(0, 3).map((facility, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {facility}
            </Badge>
          ))}
          {facilities.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{facilities.length - 3} lainnya
            </Badge>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-sm text-muted-foreground">Mulai dari</span>
            <p className="text-lg font-bold text-primary">{price}</p>
          </div>
          <Button className="btn-explore">
            Lihat Detail
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;