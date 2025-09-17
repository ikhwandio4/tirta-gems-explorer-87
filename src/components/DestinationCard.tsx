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
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-slate-900 dark:text-white font-bold text-xl leading-tight group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors">
            {name}
          </h3>
          <div className="flex items-center space-x-1">
            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-bold text-slate-900 dark:text-white">{rating}</span>
          </div>
        </div>

        <div className="flex items-center mb-4">
          <MapPin className="h-4 w-4 mr-2 text-slate-500 dark:text-slate-400" />
          <span className="text-sm font-medium text-slate-600 dark:text-slate-300">{location}</span>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {facilities.slice(0, 3).map((facility, index) => (
            <Badge key={index} variant="outline" className="text-xs font-medium border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200">
              {facility}
            </Badge>
          ))}
          {facilities.length > 3 && (
            <Badge variant="outline" className="text-xs font-medium border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200">
              +{facilities.length - 3} lainnya
            </Badge>
          )}
        </div>

        <div className="flex justify-end">
          <Button className="btn-explore w-full">
            Lihat Detail
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;