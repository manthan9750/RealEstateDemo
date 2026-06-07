import { useState } from 'react';
import { useLocalStorage } from './useLocalStorage';

export function useLeadCapture() {
  const [leads, setLeads] = useLocalStorage('shivshlok_leads', []);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitLead = async (leadData) => {
    setIsSubmitting(true);
    
    try {
      const newLead = {
        ...leadData,
        id: Date.now(),
        timestamp: new Date().toISOString(),
        source: window.location.pathname
      };

      setLeads([...leads, newLead]);
      
      await new Promise(resolve => setTimeout(resolve, 800));
      
      setIsSubmitting(false);
      return { success: true, message: 'Thank you! We will contact you shortly.' };
    } catch (error) {
      setIsSubmitting(false);
      return { success: false, message: 'Something went wrong. Please try again.' };
    }
  };

  return { submitLead, isSubmitting, leads };
}
