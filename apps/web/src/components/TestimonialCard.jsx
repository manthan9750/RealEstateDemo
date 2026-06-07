import React from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

function TestimonialCard({ testimonial }) {
  const initials = testimonial.name.split(' ').map(n => n[0]).join('');
  
  const avatarColors = [
    'bg-blue-500',
    'bg-green-500',
    'bg-purple-500',
    'bg-orange-500',
    'bg-pink-500',
    'bg-teal-500'
  ];
  
  const colorIndex = testimonial.id % avatarColors.length;

  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="flex items-start gap-4">
          <Avatar className={`${avatarColors[colorIndex]} rounded-xl`}>
            <AvatarFallback className="bg-transparent text-white font-semibold rounded-xl">
              {initials}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h3 className="font-semibold text-lg">{testimonial.name}</h3>
            <p className="text-sm text-muted-foreground">{testimonial.propertyType}</p>
            <div className="flex gap-1 mt-2">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-sm leading-relaxed italic">"{testimonial.testimonial}"</p>
        <div className="mt-4 pt-4 border-t">
          <p className="text-sm font-medium text-primary">{testimonial.investmentAmount}</p>
          <p className="text-xs text-muted-foreground">{testimonial.location}</p>
        </div>
      </CardContent>
    </Card>
  );
}

export default TestimonialCard;
