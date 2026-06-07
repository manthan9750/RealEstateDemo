import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Target, Eye, Users, MapPin, Shield, TrendingUp, Phone } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

function AboutUsPage() {
  const handleCall = () => {
    window.location.href = 'tel:+919920081185';
  };

  const whyChooseUs = [
    {
      icon: 'MapPin',
      title: 'Local expertise',
      description: 'Deep understanding of Panvel and Navi Mumbai real estate market with 15+ years of experience in the region.'
    },
    {
      icon: 'Users',
      title: 'Personalized guidance',
      description: 'Dedicated support tailored to your unique requirements, budget, and investment goals.'
    },
    {
      icon: 'Shield',
      title: 'Verified properties',
      description: 'Every property thoroughly verified for legal clearance, documentation, and ownership.'
    },
    {
      icon: 'CheckCircle',
      title: 'Transparent process',
      description: 'Clear communication, no hidden charges, and complete transparency throughout the transaction.'
    },
    {
      icon: 'Headphones',
      title: 'End-to-end support',
      description: 'Complete assistance from property search to final handover and beyond.'
    }
  ];

  const team = [
    {
      name: 'Rajesh Kumar',
      role: 'Founder & CEO',
      description: 'Real estate veteran with 20+ years of experience in property development and sales.'
    },
    {
      name: 'Priya Sharma',
      role: 'Head of Sales',
      description: 'Expert in residential property sales with a track record of 300+ successful transactions.'
    },
    {
      name: 'Amit Patel',
      role: 'Commercial Property Specialist',
      description: 'Specializes in commercial real estate with deep knowledge of investment opportunities.'
    },
    {
      name: 'Sneha Desai',
      role: 'Customer Relations Manager',
      description: 'Ensures exceptional customer experience and post-purchase support.'
    }
  ];

  const certifications = [
    'RERA Registered Real Estate Agent',
    'Member of National Association of Realtors',
    'ISO 9001:2015 Certified',
    'Verified by Maharashtra Real Estate Regulatory Authority'
  ];

  return (
    <>
      <SEO 
        title="About Shivshlok Real Estate - 15+ Years of Real Estate Excellence"
        description="Learn about Shivshlok Real Estate's journey, mission, and commitment to helping clients find their dream properties in Panvel and Navi Mumbai. 15+ years of trusted service."
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
                About Shivshlok Real Estate
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Your trusted partner in finding the perfect property in Panvel and Navi Mumbai
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ textWrap: 'balance' }}>
                  Our story
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Founded in 2011, Shivshlok Real Estate has been at the forefront of property transactions in Panvel and Navi Mumbai for over 15 years. What started as a small team with a vision to provide transparent and customer-centric real estate services has grown into one of the most trusted names in the region.
                  </p>
                  <p>
                    Our journey has been built on the foundation of trust, integrity, and deep market knowledge. We have witnessed the transformation of Panvel and Navi Mumbai from emerging localities to thriving residential and commercial hubs. This experience gives us unique insights into market trends, growth areas, and investment opportunities.
                  </p>
                  <p>
                    Over the years, we have helped more than 500 families find their dream homes and assisted numerous investors in making profitable real estate investments. Our commitment to excellence, transparency, and customer satisfaction has earned us a reputation as the go-to real estate consultants in the region.
                  </p>
                  <p>
                    Today, Shivshlok Real Estate continues to set benchmarks in the industry with our comprehensive services, verified property listings, and unwavering dedication to our clients' success.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative h-96 rounded-2xl overflow-hidden"
              >
                <img 
                  src="https://images.unsplash.com/photo-1569083676317-dafd0fc965f7" 
                  alt="Shivshlok Real Estate team"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <Card>
                <CardContent className="pt-6">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <Target className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Our mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To simplify the property buying and selling process by providing transparent, reliable, and customer-centric real estate services. We aim to be the most trusted real estate partner in Panvel and Navi Mumbai, helping our clients make informed decisions and achieve their property goals.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <Eye className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Our vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To become the leading real estate consultancy in Navi Mumbai, known for our integrity, market expertise, and exceptional customer service. We envision a future where every property transaction is transparent, efficient, and beneficial for all parties involved.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ textWrap: 'balance' }}>
                Why choose us
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                What sets us apart in the real estate industry
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseUs.map((item, index) => {
                const IconComponent = item.icon === 'MapPin' ? MapPin : 
                                     item.icon === 'Users' ? Users :
                                     item.icon === 'Shield' ? Shield :
                                     item.icon === 'CheckCircle' ? Award :
                                     TrendingUp;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full">
                      <CardContent className="pt-6">
                        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                          <IconComponent className="w-6 h-6 text-accent" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ textWrap: 'balance' }}>
                Meet our team
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Experienced professionals dedicated to your success
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card>
                    <CardContent className="pt-6 text-center">
                      <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-primary to-accent mx-auto mb-4 flex items-center justify-center">
                        <span className="text-3xl font-bold text-white">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                      <p className="text-sm text-accent mb-3">{member.role}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{member.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative h-96 rounded-2xl overflow-hidden"
              >
                <img 
                  src="https://images.unsplash.com/photo-1628542197835-d66a400ad71f" 
                  alt="Panvel and Navi Mumbai cityscape"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ textWrap: 'balance' }}>
                  Market expertise
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Panvel and Navi Mumbai are experiencing unprecedented growth, driven by infrastructure development, connectivity improvements, and increasing demand for quality housing and commercial spaces.
                  </p>
                  <p>
                    With the upcoming Navi Mumbai International Airport, metro connectivity, and improved road networks, the region is poised for significant appreciation in property values. Our team closely monitors these developments and provides clients with data-driven insights on the best investment opportunities.
                  </p>
                  <p>
                    We specialize in identifying emerging localities, understanding micro-market trends, and helping clients make informed decisions that align with their financial goals and lifestyle preferences.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ textWrap: 'balance' }}>
                Certifications & credentials
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Recognized and certified by leading real estate authorities
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3 p-4 bg-card rounded-xl border"
                >
                  <Award className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="font-medium">{cert}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ textWrap: 'balance' }}>
              Schedule your free consultation
            </h2>
            <p className="text-xl mb-8 leading-relaxed">
              Let's discuss your property requirements and find the perfect solution together
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              onClick={handleCall}
              className="text-lg px-8 transition-all duration-200 active:scale-[0.98]"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call +91 99200 81185
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default AboutUsPage;
