import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

function FloatingPhone() {
  const handlePhoneClick = () => {
    window.location.href = 'tel:+919920081185';
  };

  return (
    <Button
      onClick={handlePhoneClick}
      className="fixed bottom-6 left-6 w-14 h-14 rounded-full shadow-lg z-50 transition-all duration-200 active:scale-[0.98]"
      aria-label="Call Now"
    >
      <Phone className="w-6 h-6" />
    </Button>
  );
}

export default FloatingPhone;
