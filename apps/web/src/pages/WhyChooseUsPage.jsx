import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, X, MapPin, Users, Shield, TrendingUp, Headphones, Award } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

function WhyChooseUsPage() {
  const features = [
    {
      icon: MapPin,
      title: 'Local market expertise',
      description: 'Over 15 years of experience in Panvel and Navi Mumbai real estate market. We understand micro-market trends, growth areas, and investment hotspots better than anyone else.',
      details: [
        'In-depth knowledge of all localities in Panvel and Navi Mumbai',
        'Real-time market data and price trends',
        'Insights on upcoming infrastructure projects',
        'Accurate property valuations based on market conditions'
      ]
    },
    {
      icon: Users,
      title: 'Personalized guidance',
      description: 'Every client is unique, and so are their property requirements. We provide customized solutions based on your budget, preferences, and investment goals.',
      details: [
        'One-on-one consultation with experienced advisors',
        'Tailored property recommendations',
        'Flexible site visit schedules',
        'Dedicated relationship manager for each client'
      ]
    },
    {
      icon: Shield,
      title: 'Verified properties',
      description: 'We conduct thorough verification of every property before listing. Legal clearance, documentation, and ownership verification are our top priorities.',
      details: [
        'Complete title search and verification',
        'RERA compliance checking',
        'Legal documentation review',
        'Physical property inspection and measurement verification'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Transparent process',
      description: 'No hidden charges, no surprises. We believe in complete transparency throughout the property transaction process.',
      details: [
        'Clear communication at every step',
        'Upfront disclosure of all costs and charges',
        'Detailed property reports and documentation',
        'Regular updates on transaction progress'
      ]
    },
    {
      icon: Headphones,
      title: 'End-to-end support',
      description: 'From property search to final handover and beyond, we provide comprehensive support at every stage of your property journey.',
      details: [
        'Home loan assistance and processing',
        'Legal and registration support',
        'Interior design and renovation guidance',
        'Post-purchase property management services'
      ]
    }
  ];

  const comparisonData = [
    {
      feature: 'Property Verification',
      shivshlok: 'Complete legal and physical verification',
      typical: 'Basic verification only'
    },
    {
      feature: 'Market Knowledge',
      shivshlok: '15+ years local expertise',
      typical: 'Limited local knowledge'
    },
    {
      feature: 'Transparency',
      shivshlok: 'No hidden charges, complete disclosure',
      typical: 'Hidden fees and charges'
    },
    {
      feature: 'Post-Sale Support',
      shivshlok: 'Ongoing support and assistance',
      typical: 'Limited or no support'
    },
    {
      feature: 'Client Relationship',
      shivshlok: 'Dedicated relationship manager',
      typical: 'Generic service'
    },
    {
      feature: 'Documentation',
      shivshlok: 'Complete assistance with all paperwork',
      typical: 'Minimal documentation help'
    }
  ];

  const metrics = [
    { value: '500+', label: 'Happy Families' },
    { value: '15+', label: 'Years Experience' },
    { value: '₹50+ Cr', label: 'Transactions Completed' },
    { value: '100%', label: 'Client Satisfaction' }
  ];

  return (
    <>
      <SEO 
        title="Why Choose Shivshlok Real Estate - Verified Properties, Transparent Process"
        description="Discover why Shivshlok Real Estate is the trusted choice for property buyers in Panvel and Navi Mumbai. Local expertise, verified properties, and transparent process."
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
                Why choose Shivshlok Real Estate
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Your success is our priority. Here's what sets us apart.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card>
                      <CardContent className="pt-6">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                          <div className="lg:col-span-1">
                            <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                              <IconComponent className="w-8 h-8 text-accent" />
                            </div>
                            <h2 className="text-2xl font-bold mb-3">{feature.title}</h2>
                            <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                          </div>
                          <div className="lg:col-span-2">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {feature.details.map((detail, i) => (
                                <div key={i} className="flex items-start gap-2">
                                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                  <span className="text-sm text-muted-foreground leading-relaxed">{detail}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
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
                Shivshlok vs typical agents
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                See the difference for yourself
              </p>
            </div>
            <Card>
              <CardContent className="pt-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-4 px-4 font-semibold">Feature</th>
                        <th className="text-center py-4 px-4 font-semibold">Shivshlok Real Estate</th>
                        <th className="text-center py-4 px-4 font-semibold">Typical Agents</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonData.map((row, index) => (
                        <tr key={index} className="border-b last:border-0">
                          <td className="py-4 px-4 font-medium">{row.feature}</td>
                          <td className="py-4 px-4 text-center">
                            <div className="flex items-center justify-center gap-2">
                              <CheckCircle className="w-5 h-5 text-accent" />
                              <span className="text-sm">{row.shivshlok}</span>
                            </div>
                          </td>
                          <td className="py-4 px-4 text-center">
                            <div className="flex items-center justify-center gap-2">
                              <X className="w-5 h-5 text-destructive" />
                              <span className="text-sm text-muted-foreground">{row.typical}</span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ textWrap: 'balance' }}>
                Our track record
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Numbers that speak for themselves
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card>
                    <CardContent className="pt-6 text-center">
                      <div className="text-4xl font-bold text-accent mb-2" style={{ fontVariantNumeric: 'tabular-nums' }}>
                        {metric.value}
                      </div>
                      <p className="text-sm text-muted-foreground">{metric.label}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ textWrap: 'balance' }}>
                Trust & credentials
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'RERA Registered Real Estate Agent',
                'Member of National Association of Realtors',
                'ISO 9001:2015 Certified',
                'Verified by Maharashtra Real Estate Regulatory Authority'
              ].map((cert, index) => (
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
      </main>

      <Footer />
    </>
  );
}

export default WhyChooseUsPage;
