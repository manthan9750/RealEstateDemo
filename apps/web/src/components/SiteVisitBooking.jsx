import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarPlus as CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { useLeadCapture } from '@/hooks/useLeadCapture';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

function SiteVisitBooking({ projectName = '' }) {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const { submitLead, isSubmitting } = useLeadCapture();
  const [date, setDate] = useState();
  const [timeSlot, setTimeSlot] = useState('');
  const [selectedProject, setSelectedProject] = useState(projectName);

  const onSubmit = async (data) => {
    if (!date || !timeSlot || !selectedProject) {
      toast.error('Please fill all required fields');
      return;
    }

    const result = await submitLead({
      ...data,
      visitDate: format(date, 'PPP'),
      timeSlot,
      project: selectedProject,
      source: 'site-visit-booking'
    });

    if (result.success) {
      toast.success('Site visit booked successfully! We will contact you shortly.');
      reset();
      setDate(undefined);
      setTimeSlot('');
      setSelectedProject('');
    } else {
      toast.error(result.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="visitName">Full Name *</Label>
        <Input
          id="visitName"
          {...register('name', { required: 'Name is required' })}
          placeholder="Enter your full name"
          className="text-foreground"
        />
        {errors.name && (
          <p className="text-sm text-destructive">{errors.name.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="visitPhone">Phone Number *</Label>
        <Input
          id="visitPhone"
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
        <Label htmlFor="visitEmail">Email Address *</Label>
        <Input
          id="visitEmail"
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
        <Label>Select Project *</Label>
        <Select value={selectedProject} onValueChange={setSelectedProject}>
          <SelectTrigger className="text-foreground">
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

      <div className="space-y-2">
        <Label>Preferred Date *</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "w-full justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, 'PPP') : 'Pick a date'}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              disabled={(date) => date < new Date()}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>

      <div className="space-y-2">
        <Label>Preferred Time Slot *</Label>
        <Select value={timeSlot} onValueChange={setTimeSlot}>
          <SelectTrigger className="text-foreground">
            <SelectValue placeholder="Choose a time slot" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="10:00 AM - 12:00 PM">10:00 AM - 12:00 PM</SelectItem>
            <SelectItem value="12:00 PM - 2:00 PM">12:00 PM - 2:00 PM</SelectItem>
            <SelectItem value="2:00 PM - 4:00 PM">2:00 PM - 4:00 PM</SelectItem>
            <SelectItem value="4:00 PM - 6:00 PM">4:00 PM - 6:00 PM</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button 
        type="submit" 
        className="w-full transition-all duration-200 active:scale-[0.98]"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Booking...' : 'Book Site Visit'}
      </Button>
    </form>
  );
}

export default SiteVisitBooking;
