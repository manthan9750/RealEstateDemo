import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Home } from 'lucide-react';

function ProjectCard({ project }) {
  return (
    <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative h-56 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
          {project.status === 'new-launch' ? 'New Launch' : 'Resale'}
        </Badge>
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{project.name}</CardTitle>
        <CardDescription className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          {project.location}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-sm leading-relaxed mb-4">{project.description}</p>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <Home className="w-4 h-4 text-muted-foreground" />
            <span className="font-medium">{project.priceRange}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex gap-2 mt-auto">
        <Button variant="outline" className="flex-1 transition-all duration-200 active:scale-[0.98]">
          View Details
        </Button>
        <Button className="flex-1 transition-all duration-200 active:scale-[0.98]">
          Book Site Visit
        </Button>
      </CardFooter>
    </Card>
  );
}

export default ProjectCard;
