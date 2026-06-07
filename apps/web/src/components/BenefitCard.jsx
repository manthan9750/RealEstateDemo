import React from 'react';
import { MapPin, Users, Shield, TrendingUp, Headphones, CheckCircle } from 'lucide-react';

const iconMap = {
  MapPin,
  Users,
  Shield,
  TrendingUp,
  Headphones,
  CheckCircle
};

function BenefitCard({ benefit, index }) {
  const IconComponent = iconMap[benefit.icon] || CheckCircle;

  return (
    <div className="flex gap-6 items-start">
      <div className="flex-shrink-0">
        <div className="text-6xl font-bold text-primary/10" style={{ letterSpacing: '-0.02em' }}>
          {String(index + 1).padStart(2, '0')}
        </div>
      </div>
      <div className="flex-1">
        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
          <IconComponent className="w-6 h-6 text-accent" />
        </div>
        <h3 className="text-xl font-semibold mb-2" style={{ textWrap: 'balance' }}>{benefit.title}</h3>
        <p className="leading-relaxed text-muted-foreground">{benefit.description}</p>
      </div>
    </div>
  );
}

export default BenefitCard;
