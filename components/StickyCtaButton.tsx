'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, MessageSquare } from 'lucide-react';

const StickyCtaButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const threshold = window.innerHeight * 0.5; // Show after scrolling 50% of viewport
      setIsVisible(scrolled > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 md:hidden">
      <div className="flex flex-col gap-2">
        <Button
          size="lg"
          className="bg-green-600 hover:bg-green-700 text-white shadow-lg rounded-full w-14 h-14 p-0"
          onClick={() => window.open('tel:+1234567890', '_self')}
        >
          <Phone className="h-6 w-6" />
        </Button>
        <Button
          size="lg"
          className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg rounded-full w-14 h-14 p-0"
          onClick={() => window.open('sms:+1234567890', '_self')}
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
};

export default StickyCtaButton;