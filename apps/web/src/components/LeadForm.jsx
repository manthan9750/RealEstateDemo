import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useLeadCapture } from '@/hooks/useLeadCapture';
import { toast } from 'sonner';

function LeadForm({ source = 'contact-form' }) {
  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm();
  const { submitLead, isSubmitting } = useLeadCapture();
  const [propertyInterest, setPropertyInterest] = useState('');

  const onSubmit = async (data) => {
    const result = await submitLead({
      ...data,
      propertyInterest,
      source
    });

    if (result.success) {
      toast.success(result.message);
      reset();
      setPropertyInterest('');
    } else {
      toast.error(result.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Full Name *</Label>
        <Input
          id="name"
          {...register('name', { required: 'Name is required' })}
          placeholder="Enter your full name"
          className="text-foreground"
        />
        {errors.name && (
          <p className="text-sm text-destructive">{errors.name.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number *</Label>
        <Input
          id="phone"
          type="tel"
          {...register('phone', { 
            required: 'Phone number is required',
            pattern: {
              value: /^[0-9]{10}$/,
              message: 'Please enter a valid 10-digit phone number'
            }
          })}
          placeholder="Enter your phone number"
          className="text-foreground"
        />
        {errors.phone && (
          <p className="text-sm text-destructive">{errors.phone.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email Address *</Label>
        <Input
          id="email"
          type="email"
          {...register('email', { 
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Please enter a valid email address'
            }
          })}
          placeholder="Enter your email"
          className="text-foreground"
        />
        {errors.email && (
          <p className="text-sm text-destructive">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="propertyInterest">Property Interest *</Label>
        <Select value={propertyInterest} onValueChange={setPropertyInterest}>
          <SelectTrigger id="propertyInterest" className="text-foreground">
            <SelectValue placeholder="Select property type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="residential">Residential Property</SelectItem>
            <SelectItem value="commercial">Commercial Property</SelectItem>
            <SelectItem value="investment">Investment Property</SelectItem>
            <SelectItem value="new-launch">New Launch Projects</SelectItem>
            <SelectItem value="resale">Resale Property</SelectItem>
            <SelectItem value="land">Land Acquisition</SelectItem>
          </SelectContent>
        </Select>
        {!propertyInterest && errors.propertyInterest && (
          <p className="text-sm text-destructive">Please select a property type</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          {...register('message')}
          placeholder="Tell us about your requirements..."
          rows={4}
          className="text-foreground resize-none"
        />
      </div>

      <Button 
        type="submit" 
        className="w-full transition-all duration-200 active:scale-[0.98]"
        disabled={isSubmitting || !propertyInterest}
      >
        {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
      </Button>
    </form>
  );
}

export default LeadForm;
