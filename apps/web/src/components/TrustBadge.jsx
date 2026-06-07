import React from 'react';
import { Award, Shield, CheckCircle } from 'lucide-react';

const iconMap = {
  Award,
  Shield,
  CheckCircle
};

function TrustBadge({ badge }) {
  const IconComponent = iconMap[badge.icon] || Award;

  return (
    <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-muted">
      <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
        <IconComponent className="w-8 h-8 text-accent" />
      </div>
      <h3 className="font-semibold mb-1">{badge.label}</h3>
      <p className="text-sm text-muted-foreground">{badge.description}</p>
    </div>
  );
}

export default TrustBadge;
