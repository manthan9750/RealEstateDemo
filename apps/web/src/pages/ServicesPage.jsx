import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Home, Building2, TrendingUp, Sparkles, RefreshCw, MapPin } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { sampleServices } from '@/data/sampleServices';

const iconMap = {
  Home,
  Building2,
  TrendingUp,
  Sparkles,
  RefreshCw,
  MapPin
};

function ServicesPage() {
  return (
    <>
      <SEO 
        title="Real Estate Services - Property Sales, Investment Advisory, New Launches"
        description="Comprehensive real estate services in Panvel and Navi Mumbai. Residential sales, commercial properties, investment consulting, new launches, resale, and land acquisition."
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
                Our services
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Comprehensive real estate solutions tailored to your needs
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-20">
              {sampleServices.map((service, index) => {
                const IconComponent = iconMap[service.icon] || Home;
                return (
                  <motion.div
                    key={service.id}
                    id={service.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card>
                      <CardHeader>
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                            <IconComponent className="w-8 h-8 text-accent" />
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-3xl mb-2">{service.name}</CardTitle>
                            <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-8">
                        <div>
                          <h3 className="text-xl font-semibold mb-4">Overview</h3>
                          <p className="text-muted-foreground leading-relaxed">{service.overview}</p>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {service.benefits.map((benefit, i) => (
                              <div key={i} className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-muted-foreground">{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-4">Our Process</h3>
                          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                            {service.processSteps.map((step, i) => (
                              <div key={i} className="relative">
                                <div className="flex flex-col items-center text-center">
                                  <div className="w-12 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg mb-3">
                                    {step.step}
                                  </div>
                                  <h4 className="font-semibold text-sm mb-2">{step.title}</h4>
                                  <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
                                </div>
                                {i < service.processSteps.length - 1 && (
                                  <div className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-border -translate-x-1/2"></div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="p-6 bg-muted rounded-xl">
                          <h4 className="font-semibold mb-2">Success Story</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">{service.successStory}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default ServicesPage;
