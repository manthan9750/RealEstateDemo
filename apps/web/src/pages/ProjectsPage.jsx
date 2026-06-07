import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Home, TrendingUp, Download } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import SiteVisitBooking from '@/components/SiteVisitBooking';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { sampleProjects } from '@/data/sampleProjects';

function ProjectsPage() {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? sampleProjects 
    : sampleProjects.filter(p => p.type === filter || p.status === filter);

  return (
    <>
      <SEO 
        title="Real Estate Projects in Panvel & Navi Mumbai - Residential & Commercial"
        description="Explore premium residential and commercial projects in Panvel and Navi Mumbai. New launches, resale properties, and investment opportunities with verified listings."
      />
      <Header />
      
      <main>
        <section className="py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}>
                Featured projects
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Discover premium properties across Panvel and Navi Mumbai
              </p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <Button
                variant={filter === 'all' ? 'default' : 'outline'}
                onClick={() => setFilter('all')}
                className="transition-all duration-200 active:scale-[0.98]"
              >
                All Projects
              </Button>
              <Button
                variant={filter === 'residential' ? 'default' : 'outline'}
                onClick={() => setFilter('residential')}
                className="transition-all duration-200 active:scale-[0.98]"
              >
                Residential
              </Button>
              <Button
                variant={filter === 'commercial' ? 'default' : 'outline'}
                onClick={() => setFilter('commercial')}
                className="transition-all duration-200 active:scale-[0.98]"
              >
                Commercial
              </Button>
              <Button
                variant={filter === 'new-launch' ? 'default' : 'outline'}
                onClick={() => setFilter('new-launch')}
                className="transition-all duration-200 active:scale-[0.98]"
              >
                New Launch
              </Button>
              <Button
                variant={filter === 'resale' ? 'default' : 'outline'}
                onClick={() => setFilter('resale')}
                className="transition-all duration-200 active:scale-[0.98]"
              >
                Resale
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                      <div className="relative h-80 lg:h-auto">
                        <img 
                          src={project.image} 
                          alt={project.name}
                          className="w-full h-full object-cover"
                        />
                        <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                          {project.status === 'new-launch' ? 'New Launch' : 'Resale'}
                        </Badge>
                      </div>
                      <div className="p-8">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h2 className="text-2xl font-bold mb-2">{project.name}</h2>
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <MapPin className="w-4 h-4" />
                              <span>{project.location}</span>
                            </div>
                          </div>
                          <Badge variant="outline" className="text-lg font-semibold">
                            {project.priceRange}
                          </Badge>
                        </div>

                        <p className="text-muted-foreground leading-relaxed mb-6">
                          {project.overview}
                        </p>

                        <div className="space-y-4 mb-6">
                          <div>
                            <h3 className="font-semibold mb-2">Location Benefits</h3>
                            <ul className="text-sm space-y-1 text-muted-foreground">
                              {project.locationBenefits.slice(0, 3).map((benefit, i) => (
                                <li key={i}>• {benefit}</li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h3 className="font-semibold mb-2">Key Amenities</h3>
                            <div className="flex flex-wrap gap-2">
                              {project.amenities.slice(0, 6).map((amenity, i) => (
                                <Badge key={i} variant="secondary" className="text-xs">
                                  {amenity}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className="p-4 bg-muted rounded-xl">
                            <div className="flex items-start gap-2">
                              <TrendingUp className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                              <div>
                                <h4 className="font-semibold text-sm mb-1">Investment Potential</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                  {project.investmentPotential}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-3">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="outline" className="flex-1 transition-all duration-200 active:scale-[0.98]">
                                <Download className="w-4 h-4 mr-2" />
                                Get Brochure
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-md">
                              <DialogHeader>
                                <DialogTitle>Book Site Visit - {project.name}</DialogTitle>
                              </DialogHeader>
                              <SiteVisitBooking projectName={project.name} />
                            </DialogContent>
                          </Dialog>

                          <Dialog>
                            <DialogTrigger asChild>
                              <Button className="flex-1 transition-all duration-200 active:scale-[0.98]">
                                <Home className="w-4 h-4 mr-2" />
                                Book Site Visit
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-md">
                              <DialogHeader>
                                <DialogTitle>Book Site Visit - {project.name}</DialogTitle>
                              </DialogHeader>
                              <SiteVisitBooking projectName={project.name} />
                            </DialogContent>
                          </Dialog>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default ProjectsPage;
