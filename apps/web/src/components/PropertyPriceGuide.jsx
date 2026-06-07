import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Download } from 'lucide-react';
import { useLeadCapture } from '@/hooks/useLeadCapture';
import { toast } from 'sonner';

function PropertyPriceGuide() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const { submitLead, isSubmitting } = useLeadCapture();

  const handleDownload = async (e) => {
    e.preventDefault();
    
    if (!email || !name) {
      toast.error('Please enter your name and email');
      return;
    }

    const result = await submitLead({
      name,
      email,
      source: 'price-guide-download'
    });

    if (result.success) {
      toast.success('Price guide will be sent to your email shortly');
      setEmail('');
      setName('');
    } else {
      toast.error(result.message);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Download className="w-5 h-5 text-accent" />
          Download Property Price Guide 2026
        </CardTitle>
        <CardDescription>
          Get comprehensive price ranges for Panvel & Navi Mumbai properties
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleDownload} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="guideName">Full Name</Label>
            <Input
              id="guideName"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
              className="text-foreground"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="guideEmail">Email Address</Label>
            <Input
              id="guideEmail"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="text-foreground"
            />
          </div>

          <Button 
            type="submit" 
            className="w-full transition-all duration-200 active:scale-[0.98]"
            disabled={isSubmitting}
          >
            <Download className="w-4 h-4 mr-2" />
            {isSubmitting ? 'Processing...' : 'Download Free Guide'}
          </Button>
        </form>

        <div className="mt-6 p-4 bg-muted rounded-xl">
          <p className="text-sm font-medium mb-2">What's included:</p>
          <ul className="text-sm space-y-1 text-muted-foreground">
            <li>• Area-wise property rates in Panvel</li>
            <li>• Navi Mumbai locality price comparison</li>
            <li>• New launch vs resale price analysis</li>
            <li>• Investment hotspots for 2026</li>
            <li>• Price trend forecasts</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}

export default PropertyPriceGuide;
