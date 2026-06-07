import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { ClipboardCheck } from 'lucide-react';
import { useLeadCapture } from '@/hooks/useLeadCapture';
import { toast } from 'sonner';

function InvestmentAssessment() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    investmentGoal: '',
    budget: '',
    timeline: '',
    propertyType: '',
    location: ''
  });
  const { submitLead, isSubmitting } = useLeadCapture();

  const handleSubmit = async () => {
    const result = await submitLead({
      ...formData,
      source: 'investment-assessment'
    });

    if (result.success) {
      toast.success('Assessment submitted! Our team will contact you with personalized recommendations.');
      setStep(1);
      setFormData({
        name: '',
        email: '',
        phone: '',
        investmentGoal: '',
        budget: '',
        timeline: '',
        propertyType: '',
        location: ''
      });
    } else {
      toast.error(result.message);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ClipboardCheck className="w-5 h-5 text-accent" />
          Investment Assessment Questionnaire
        </CardTitle>
        <CardDescription>
          Help us understand your investment goals for personalized recommendations
        </CardDescription>
      </CardHeader>
      <CardContent>
        {step === 1 && (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="assessName">Full Name</Label>
              <Input
                id="assessName"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Enter your name"
                className="text-foreground"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="assessEmail">Email Address</Label>
              <Input
                id="assessEmail"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Enter your email"
                className="text-foreground"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="assessPhone">Phone Number</Label>
              <Input
                id="assessPhone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="Enter your phone number"
                className="text-foreground"
              />
            </div>

            <Button 
              onClick={() => setStep(2)} 
              className="w-full transition-all duration-200 active:scale-[0.98]"
              disabled={!formData.name || !formData.email || !formData.phone}
            >
              Continue
            </Button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <div className="space-y-3">
              <Label>What is your primary investment goal?</Label>
              <RadioGroup value={formData.investmentGoal} onValueChange={(value) => setFormData({ ...formData, investmentGoal: value })}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="rental-income" id="rental-income" />
                  <Label htmlFor="rental-income" className="font-normal cursor-pointer">Generate rental income</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="capital-appreciation" id="capital-appreciation" />
                  <Label htmlFor="capital-appreciation" className="font-normal cursor-pointer">Long-term capital appreciation</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="own-use" id="own-use" />
                  <Label htmlFor="own-use" className="font-normal cursor-pointer">Own use (residence/business)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="diversification" id="diversification" />
                  <Label htmlFor="diversification" className="font-normal cursor-pointer">Portfolio diversification</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label>Investment Budget</Label>
              <Select value={formData.budget} onValueChange={(value) => setFormData({ ...formData, budget: value })}>
                <SelectTrigger className="text-foreground">
                  <SelectValue placeholder="Select budget range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="below-50">Below ₹50 Lakhs</SelectItem>
                  <SelectItem value="50-75">₹50 Lakhs - ₹75 Lakhs</SelectItem>
                  <SelectItem value="75-100">₹75 Lakhs - ₹1 Crore</SelectItem>
                  <SelectItem value="100-150">₹1 Crore - ₹1.5 Crores</SelectItem>
                  <SelectItem value="above-150">Above ₹1.5 Crores</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Investment Timeline</Label>
              <Select value={formData.timeline} onValueChange={(value) => setFormData({ ...formData, timeline: value })}>
                <SelectTrigger className="text-foreground">
                  <SelectValue placeholder="Select timeline" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="immediate">Immediate (0-3 months)</SelectItem>
                  <SelectItem value="short">Short-term (3-6 months)</SelectItem>
                  <SelectItem value="medium">Medium-term (6-12 months)</SelectItem>
                  <SelectItem value="long">Long-term (1+ years)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex gap-2">
              <Button 
                variant="outline" 
                onClick={() => setStep(1)} 
                className="flex-1 transition-all duration-200 active:scale-[0.98]"
              >
                Back
              </Button>
              <Button 
                onClick={() => setStep(3)} 
                className="flex-1 transition-all duration-200 active:scale-[0.98]"
                disabled={!formData.investmentGoal || !formData.budget || !formData.timeline}
              >
                Continue
              </Button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <div className="space-y-3">
              <Label>Preferred Property Type</Label>
              <RadioGroup value={formData.propertyType} onValueChange={(value) => setFormData({ ...formData, propertyType: value })}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="residential" id="residential" />
                  <Label htmlFor="residential" className="font-normal cursor-pointer">Residential (Apartments/Villas)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="commercial" id="commercial" />
                  <Label htmlFor="commercial" className="font-normal cursor-pointer">Commercial (Offices/Shops)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="land" id="land" />
                  <Label htmlFor="land" className="font-normal cursor-pointer">Land/Plots</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="mixed" id="mixed" />
                  <Label htmlFor="mixed" className="font-normal cursor-pointer">Open to all types</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label>Preferred Location</Label>
              <Select value={formData.location} onValueChange={(value) => setFormData({ ...formData, location: value })}>
                <SelectTrigger className="text-foreground">
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="panvel">Panvel</SelectItem>
                  <SelectItem value="new-panvel">New Panvel</SelectItem>
                  <SelectItem value="kharghar">Kharghar</SelectItem>
                  <SelectItem value="kamothe">Kamothe</SelectItem>
                  <SelectItem value="taloja">Taloja</SelectItem>
                  <SelectItem value="vashi">Vashi</SelectItem>
                  <SelectItem value="any">Any location in Navi Mumbai</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex gap-2">
              <Button 
                variant="outline" 
                onClick={() => setStep(2)} 
                className="flex-1 transition-all duration-200 active:scale-[0.98]"
              >
                Back
              </Button>
              <Button 
                onClick={handleSubmit} 
                className="flex-1 transition-all duration-200 active:scale-[0.98]"
                disabled={isSubmitting || !formData.propertyType || !formData.location}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Assessment'}
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default InvestmentAssessment;
