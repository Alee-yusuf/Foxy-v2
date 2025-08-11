'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Copy, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';
import Image from 'next/image';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Essential navigation links only (no wrapping)
  const navItems = [
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/sell-your-house', label: 'Sell Your House' },
    { href: '/reviews', label: 'Reviews' },
    { href: '/contact', label: 'Contact' },
  ];

  // All links for mobile menu
  const allNavItems = [
    { href: '/', label: 'Home' },
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/sell-your-house', label: 'Sell Your House' },
    { href: '/reviews', label: 'Reviews' },
    { href: '/service-areas', label: 'Service Areas' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact' },
  ];

  const phoneNumber = '+1 (866) 404-3664';

  const copyPhoneNumber = async () => {
    try {
      await navigator.clipboard.writeText(phoneNumber);
      setPhoneCopied(true);
      toast.success('Phone number copied!', {
        position: 'bottom-left',
        duration: 2000,
      });
      setTimeout(() => setPhoneCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy phone number:', err);
      toast.error('Failed to copy phone number');
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
          : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Always clickable home navigation */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 hover:opacity-90 transition-opacity group"
          >
            <div className="w-30 h-10 flex items-center justify-center group-hover:scale-105 transition-transform">
              <Image 
                src="/images/foxy-logo.svg" 
                alt="Foxy Home Buyer Logo" 
                width={160}
                height={40}
                priority
                className="h-10 w-auto"
              />
            </div>
            {/* <div className="hidden sm:block">
              <div className="font-display font-bold text-xl text-gray-900">
                FOXY
              </div>
              <div className="text-xs text-gray-600">Home Buyer</div>
            </div> */}
          </Link>

          {/* Desktop Navigation - Essential links only (no wrapping) */}
          <nav className="hidden xl:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 transition-all duration-200 font-medium relative group px-2 py-1"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden xl:flex items-center space-x-3">
            {/* Phone CTA - Desktop only with copy functionality */}
            <Button 
              variant="outline" 
              size="sm" 
              onClick={copyPhoneNumber}
              className="flex items-center gap-2 hover:bg-blue-50 hover:border-blue-300 transition-all duration-200 hover:scale-105"
            >
              {phoneCopied ? (
                <Check className="w-4 h-4 text-green-600" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
              <span className="font-semibold">{phoneNumber}</span>
            </Button>
            
            {/* Primary CTA */}
            <Link href="/sell-your-house">
              <Button 
                size="sm" 
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 transition-all duration-200 hover:scale-105 hover:shadow-lg"
              >
                Get Cash Offer
              </Button>
            </Link>
          </div>

          {/* Mobile/Tablet - CTA + Menu */}
          <div className="xl:hidden flex items-center space-x-3">
            {/* Always visible CTA on mobile/tablet */}
            <Link href="/sell-your-house">
              <Button 
                size="sm" 
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-3 py-2 text-sm transition-all duration-200 hover:scale-105"
              >
                Get Cash Offer
              </Button>
            </Link>
            
            {/* Hamburger Menu */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6 text-gray-700" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6 text-gray-700" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu Slide-in */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="xl:hidden border-t border-gray-200 bg-white/95 backdrop-blur-sm"
            >
              <div className="py-6 space-y-2">
                {allNavItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 rounded-lg mx-2 font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                
                {/* Mobile Phone CTA */}
                <div className="px-2 pt-4 border-t border-gray-200">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => window.open(`tel:${phoneNumber}`, '_self')}
                    className="w-full flex items-center justify-center gap-2 hover:bg-blue-50 hover:border-blue-300 transition-all duration-200"
                  >
                    <Phone className="w-4 h-4" />
                    <span className="font-semibold">Call {phoneNumber}</span>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;