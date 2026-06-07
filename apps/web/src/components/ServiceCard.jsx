import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Home, Building2, TrendingUp, Sparkles, RefreshCw, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const iconMap = {
  Home,
  Building2,
  TrendingUp,
  Sparkles,
  RefreshCw,
  MapPin
};

function ServiceCard({ service }) {
  const IconComponent = iconMap[service.icon] || Home;

  return (
    <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardHeader>
        <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
          <IconComponent className="w-7 h-7 text-accent" />
        </div>
        <CardTitle className="text-xl">{service.name}</CardTitle>
        <CardDescription className="leading-relaxed">{service.description}</CardDescription>
      </CardHeader>
      <CardContent className="mt-auto">
        <Link to={`/services#${service.slug}`}>
          <Button variant="outline" className="w-full transition-all duration-200 active:scale-[0.98]">
            Learn More
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}

export default ServiceCard;
