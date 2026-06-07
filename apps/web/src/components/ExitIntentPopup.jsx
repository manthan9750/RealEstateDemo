import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useExitIntent } from '@/hooks/useExitIntent';
import { useLeadCapture } from '@/hooks/useLeadCapture';
import { toast } from 'sonner';
import { useState } from 'react';

function ExitIntentPopup() {
  const { showExitIntent, closeExitIntent } = useExitIntent();
  const { submitLead, isSubmitting } = useLeadCapture();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !name) {
      toast.error('Please enter your name and email');
      return;
    }

    const result = await submitLead({
      name,
      email,
      source: 'exit-intent-popup'
    });

    if (result.success) {
      toast.success('Thank you! We will contact you shortly with exclusive property deals.');
      setEmail('');
      setName('');
      closeExitIntent();
    } else {
      toast.error(result.message);
    }
  };

  return (
    <Dialog open={showExitIntent} onOpenChange={closeExitIntent}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl" style={{ textWrap: 'balance' }}>
            Don't miss out on exclusive property deals
          </DialogTitle>
          <DialogDescription>
            Get free property consultation and access to off-market listings
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="exitName">Full Name</Label>
            <Input
              id="exitName"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="text-foreground"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="exitEmail">Email Address</Label>
            <Input
              id="exitEmail"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="text-foreground"
            />
          </div>

          <Button 
            type="submit" 
            className="w-full transition-all duration-200 active:scale-[0.98]"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Processing...' : 'Get Free Consultation'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default ExitIntentPopup;
