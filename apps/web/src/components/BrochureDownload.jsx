import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FileText } from 'lucide-react';
import { useLeadCapture } from '@/hooks/useLeadCapture';
import { toast } from 'sonner';

function BrochureDownload() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: ''
  });
  const { submitLead, isSubmitting } = useLeadCapture();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.project) {
      toast.error('Please fill all fields');
      return;
    }

    const result = await submitLead({
      ...formData,
      source: 'brochure-download'
    });

    if (result.success) {
      toast.success('Brochure will be sent to your email shortly');
      setFormData({ name: '', email: '', phone: '', project: '' });
    } else {
      toast.error(result.message);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="w-5 h-5 text-accent" />
          Request Project Brochure
        </CardTitle>
        <CardDescription>
          Get detailed project information and floor plans
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="brochureName">Full Name</Label>
            <Input
              id="brochureName"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Enter your name"
              required
              className="text-foreground"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="brochureEmail">Email Address</Label>
            <Input
              id="brochureEmail"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="Enter your email"
              required
              className="text-foreground"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="brochurePhone">Phone Number</Label>
            <Input
              id="brochurePhone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="Enter your phone number"
              required
              className="text-foreground"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="brochureProject">Select Project</Label>
            <Select value={formData.project} onValueChange={(value) => setFormData({ ...formData, project: value })}>
              <SelectTrigger id="brochureProject" className="text-foreground">
                <SelectValue placeholder="Choose a project" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Skyline Residency">Skyline Residency</SelectItem>
                <SelectItem value="Business Hub Plaza">Business Hub Plaza</SelectItem>
                <SelectItem value="Green Valley Homes">Green Valley Homes</SelectItem>
                <SelectItem value="Metro Heights">Metro Heights</SelectItem>
                <SelectItem value="Corporate Tower">Corporate Tower</SelectItem>
                <SelectItem value="Riverside Villas">Riverside Villas</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button 
            type="submit" 
            className="w-full transition-all duration-200 active:scale-[0.98]"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Processing...' : 'Get Brochure'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default BrochureDownload;
