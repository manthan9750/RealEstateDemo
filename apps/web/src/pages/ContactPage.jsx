import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import LeadForm from '@/components/LeadForm';

function ContactPage() {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'm interested in properties in Panvel. Can you help?");
    window.open(`https://wa.me/919920081185?text=${message}`, '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+919920081185';
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call us',
      content: '+91 99200 81185',
      action: handleCall,
      buttonText: 'Call Now'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      content: 'Chat with us instantly',
      action: handleWhatsApp,
      buttonText: 'Open WhatsApp'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@shivshlok.com',
      action: () => window.location.href = 'mailto:info@shivshlok.com',
      buttonText: 'Send Email'
    }
  ];

  const officeInfo = [
    {
      icon: MapPin,
      title: 'Office Location',
      content: 'Panvel, Navi Mumbai, Maharashtra'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Monday - Saturday: 9:00 AM - 7:00 PM\nSunday: By Appointment'
    }
  ];

  return (
    <>
      <SEO 
        title="Contact Shivshlok Real Estate - Panvel, Navi Mumbai"
        description="Get in touch with Shivshlok Real Estate for property inquiries in Panvel and Navi Mumbai. Call +91 99200 81185 or visit our office for expert real estate guidance."
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
                Get in touch
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                We're here to help you find your perfect property
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full">
                      <CardContent className="pt-6 text-center">
                        <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                          <IconComponent className="w-7 h-7 text-accent" />
                        </div>
                        <h3 className="font-semibold text-lg mb-2">{method.title}</h3>
                        <p className="text-muted-foreground mb-4">{method.content}</p>
                        <Button 
                          onClick={method.action}
                          className="w-full transition-all duration-200 active:scale-[0.98]"
                        >
                          {method.buttonText}
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Send us a message</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <LeadForm source="contact-page" />
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                {officeInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <Card key={index}>
                      <CardContent className="pt-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                            <IconComponent className="w-6 h-6 text-accent" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-2">{info.title}</h3>
                            <p className="text-muted-foreground whitespace-pre-line leading-relaxed">{info.content}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}

                <Card>
                  <CardContent className="pt-6">
                    <div className="aspect-video bg-muted rounded-xl flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                        <p className="text-sm text-muted-foreground">Map placeholder</p>
                        <p className="text-xs text-muted-foreground mt-1">Panvel, Navi Mumbai</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default ContactPage;
