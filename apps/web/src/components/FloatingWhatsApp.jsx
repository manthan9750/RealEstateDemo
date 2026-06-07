import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

function FloatingWhatsApp() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'm interested in properties in Panvel. Can you help?");
    window.open(`https://wa.me/919920081185?text=${message}`, '_blank');
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white transition-all duration-200 active:scale-[0.98]"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </Button>
  );
}

export default FloatingWhatsApp;
