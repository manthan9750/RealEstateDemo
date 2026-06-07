import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Phone, MessageCircle, Award, Shield, CheckCircle, TrendingUp, Home, Building2, Sparkles, RefreshCw, MapPin } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import ServiceCard from '@/components/ServiceCard';
import ProjectCard from '@/components/ProjectCard';
import TestimonialCard from '@/components/TestimonialCard';
import TrustBadge from '@/components/TrustBadge';
import LeadForm from '@/components/LeadForm';
import { sampleProjects } from '@/data/sampleProjects';
import { sampleTestimonials } from '@/data/sampleTestimonials';
import { sampleServices } from '@/data/sampleServices';

function HomePage() {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'm interested in properties in Panvel. Can you help?");
    window.open(`https://wa.me/919920081185?text=${message}`, '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+919920081185';
  };

  const trustBadges = [
    { icon: 'Award', label: '15+ Years Experience', description: 'Trusted expertise' },
    { icon: 'Shield', label: '100% Verified Properties', description: 'Complete transparency' },
    { icon: 'CheckCircle', label: 'Transparent Process', description: 'No hidden charges' }
  ];

  const benefits = [
    {
      icon: 'MapPin',
      title: 'Local market expertise',
      description: 'Deep knowledge of Panvel and Navi Mumbai real estate market with insights on growth areas and investment opportunities.'
    },
    {
      icon: 'Users',
      title: 'Personalized guidance',
      description: 'Dedicated support throughout your property journey, from initial search to final handover and beyond.'
    },
    {
      icon: 'Shield',
      title: 'Verified properties',
      description: 'Every property thoroughly verified for legal clearance, documentation, and ownership to ensure safe transactions.'
    },
    {
      icon: 'TrendingUp',
      title: 'Investment advisory',
      description: 'Data-driven insights on ROI, rental yields, and market trends to help you make informed investment decisions.'
    },
    {
      icon: 'Headphones',
      title: 'End-to-end support',
      description: 'Complete assistance with documentation, loan processing, registration, and post-purchase services.'
    }
  ];

  const faqs = [
    {
      question: 'What areas do you cover in Navi Mumbai?',
      answer: 'We specialize in Panvel, New Panvel, Kharghar, Kamothe, Taloja, Vashi, and surrounding areas in Navi Mumbai. Our team has extensive knowledge of these localities and can help you find the perfect property.'
    },
    {
      question: 'How do you verify properties?',
      answer: 'We conduct thorough verification including title search, legal documentation review, RERA compliance check, property measurement verification, and ownership confirmation. We only list properties with clear titles and proper documentation.'
    },
    {
      question: 'Do you assist with home loans?',
      answer: 'Yes, we provide complete assistance with home loan processing. We have tie-ups with major banks and financial institutions to help you get the best interest rates and loan terms.'
    },
    {
      question: 'What is your commission structure?',
      answer: 'Our commission is transparent and competitive. We charge a standard brokerage fee which is clearly communicated upfront with no hidden charges. The exact percentage depends on the property type and transaction value.'
    },
    {
      question: 'Can you help with property resale?',
      answer: 'Absolutely! We offer comprehensive resale services including property valuation, buyer matching, documentation, and transaction support. We have a strong network of genuine buyers looking for resale properties.'
    },
    {
      question: 'How long does the property buying process take?',
      answer: 'The timeline varies based on property type and documentation. Typically, ready-to-move properties can be closed in 30-45 days, while under-construction projects follow the builder\'s timeline. We ensure smooth and timely completion of all formalities.'
    }
  ];

  const featuredProjects = sampleProjects.slice(0, 3);
  const featuredTestimonials = sampleTestimonials.slice(0, 4);
  const services = sampleServices.slice(0, 6);

  return (
    <>
      <SEO 
        title="Find Your Dream Property in Panvel & Navi Mumbai"
        description="Expert Real Estate Guidance for Residential, Commercial & Investment Properties in Panvel and Navi Mumbai. 15+ Years Experience, 100% Verified Properties, Transparent Process."
      />
      <Header />
      
      <main>
        <section 
          className="relative min-h-[100dvh] flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1506851321937-51fff21bc9a0)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}
            >
              Find your dream property in Panvel & Navi Mumbai
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Expert real estate guidance for residential, commercial & investment properties
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button 
                size="lg" 
                onClick={handleCall}
                className="text-lg px-8 transition-all duration-200 active:scale-[0.98]"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={handleWhatsApp}
                className="text-lg px-8 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-200 active:scale-[0.98]"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Book Site Visit
              </Button>
            </motion.div>
          </div>
        </section>

        <section className="py-12 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {trustBadges.map((badge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <TrustBadge badge={badge} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ textWrap: 'balance' }}>
                Our services
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Comprehensive real estate solutions tailored to your needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={index % 2 === 0 ? '' : 'md:mt-12'}
                >
                  <ServiceCard service={service} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ textWrap: 'balance' }}>
                Why choose Shivshlok Real Estate
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Your success is our priority
              </p>
            </div>
            <div className="space-y-12">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex gap-6 items-start">
                    <div className="flex-shrink-0">
                      <div className="text-6xl font-bold text-primary/10" style={{ letterSpacing: '-0.02em' }}>
                        {String(index + 1).padStart(2, '0')}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2" style={{ textWrap: 'balance' }}>{benefit.title}</h3>
                      <p className="leading-relaxed text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ textWrap: 'balance' }}>
                Featured projects
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Handpicked properties with excellent investment potential
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={index === 0 ? 'lg:col-span-2' : ''}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ textWrap: 'balance' }}>
                What our clients say
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Real stories from satisfied property buyers
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredTestimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <TestimonialCard testimonial={testimonial} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ textWrap: 'balance' }}>
                Frequently asked questions
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Get answers to common questions about our services
              </p>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="py-20 bg-muted">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ textWrap: 'balance' }}>
                Get in touch with us
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Share your requirements and we'll help you find the perfect property
              </p>
            </div>
            <Card>
              <CardContent className="pt-6">
                <LeadForm source="homepage-contact" />
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-20 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ textWrap: 'balance' }}>
              Ready to find your perfect property?
            </h2>
            <p className="text-xl mb-8 leading-relaxed">
              Connect with our expert team today for personalized property guidance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                onClick={handleCall}
                className="text-lg px-8 transition-all duration-200 active:scale-[0.98]"
              >
                <Phone className="w-5 h-5 mr-2" />
                +91 99200 81185
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={handleWhatsApp}
                className="text-lg px-8 bg-white/10 backdrop-blur-sm border-white/20 text-primary-foreground hover:bg-white/20 transition-all duration-200 active:scale-[0.98]"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat on WhatsApp
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default HomePage;
