import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Clock } from 'lucide-react';
import { useLeadCapture } from '@/hooks/useLeadCapture';
import { toast } from 'sonner';

function Footer() {
  const [email, setEmail] = useState('');
  const { submitLead, isSubmitting } = useLeadCapture();

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    
    if (!email) {
      toast.error('Please enter your email');
      return;
    }

    const result = await submitLead({
      email,
      source: 'newsletter-signup'
    });

    if (result.success) {
      toast.success('Subscribed successfully');
      setEmail('');
    } else {
      toast.error(result.message);
    }
  };

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">S</span>
              </div>
              <span className="font-bold text-xl">Shivshlok Real Estate</span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Your trusted partner for finding dream properties in Panvel and Navi Mumbai. 15+ years of excellence in real estate.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-all duration-200">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-all duration-200">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-all duration-200">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:underline transition-all duration-200">About Us</Link></li>
              <li><Link to="/projects" className="hover:underline transition-all duration-200">Projects</Link></li>
              <li><Link to="/services" className="hover:underline transition-all duration-200">Services</Link></li>
              <li><Link to="/testimonials" className="hover:underline transition-all duration-200">Testimonials</Link></li>
              <li><Link to="/blog" className="hover:underline transition-all duration-200">Blog</Link></li>
              <li><Link to="/contact" className="hover:underline transition-all duration-200">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="tel:+919920081185" className="hover:underline">+91 99200 81185</a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@shivshlok.com" className="hover:underline">info@shivshlok.com</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Panvel, Navi Mumbai, Maharashtra</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
            <p className="text-sm mb-4">Subscribe for property updates and market insights</p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="bg-background text-foreground"
              />
              <Button 
                type="submit" 
                className="w-full transition-all duration-200 active:scale-[0.98]"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>&copy; 2026 Shivshlok Real Estate. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
            <Link to="/terms" className="hover:underline">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
