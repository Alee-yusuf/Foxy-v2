'use client';

import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Star, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-30 h-10 flex items-center justify-center">
                <img 
                  src="/images/foxy-logo.svg" 
                  alt="Foxy Home Buyer Logo" 
                  className="h-full w-50"
                />
              </div>
              {/* <div>
                <div className="font-display font-bold text-xl">
                  Foxy Home Buyer
                </div>
                <div className="text-sm text-gray-400">Florida Cash Buyers</div>
              </div> */}
            </div>
            <p className="text-gray-300 mb-4">
              Florida's most trusted cash home buyer. We buy houses in any condition, 
              close fast, and guarantee our promises with real money.
            </p>
            <div className="flex items-center space-x-1">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-gray-300 ml-2">BBB A+ Rating</span>
            </div>
            <div className="mt-6">
              <h4 className="text-sm font-medium text-gray-200 mb-3">Connect With Us</h4>
              <div className="flex space-x-2">
                {[ 
                  { 
                    href: 'https://www.facebook.com/FoxyHomeBuyer', 
                    icon: <Facebook className="w-5 h-5" />, 
                    label: 'Facebook',
                    color: 'hover:bg-blue-600 hover:border-blue-600 hover:scale-110',
                    border: 'border-blue-500/20',
                    text: 'text-blue-400 hover:text-white'
                  },
                  { 
                    href: 'https://www.instagram.com/foxyhomebuyer/', 
                    icon: <Instagram className="w-5 h-5" />, 
                    label: 'Instagram',
                    color: 'hover:bg-gradient-to-r hover:from-pink-600 hover:to-purple-600 hover:border-pink-600 hover:scale-110',
                    border: 'border-pink-500/20',
                    text: 'text-pink-400 hover:text-white'
                  },
                  { 
                    href: 'https://www.youtube.com/@FoxyHomeBuyer', 
                    icon: <Youtube className="w-5 h-5" />, 
                    label: 'YouTube',
                    color: 'hover:bg-red-600 hover:border-red-600 hover:scale-110',
                    border: 'border-red-500/20',
                    text: 'text-red-500 hover:text-white'
                  },
                  { 
                    href: '#', 
                    icon: <Linkedin className="w-5 h-5" />, 
                    label: 'LinkedIn',
                    color: 'hover:bg-blue-700 hover:border-blue-700 hover:scale-110',
                    border: 'border-blue-600/20',
                    text: 'text-blue-500 hover:text-white'
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit our ${social.label} page`}
                    className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${social.border} ${social.text} ${social.color} transition-all duration-300 transform hover:shadow-lg`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/how-it-works', label: 'How It Works' },
                { href: '/sell-your-house', label: 'Sell Your House' },
                { href: '/service-areas', label: 'Service Areas' },
                { href: '/reviews', label: 'Customer Reviews' },
                { href: '/faq', label: 'FAQ' },
                { href: '/about', label: 'About Us' },
                { href: '/blog', label: 'Blog' },
                { href: '/resources', label: 'Resources' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Service Areas</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Tampa Bay</li>
              <li>St. Petersburg</li>
              <li>Clearwater</li>
              <li>Brandon</li>
              <li>Riverview</li>
              <li>Plant City</li>
              <li>Lakeland</li>
              <li>+ All of Florida</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a
                href="tel:+18664043664"
                aria-label="Call Foxy Home Buyer at +1 (866) 404-3664"
                className="flex items-center space-x-3 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5 text-blue-400" />
                <div>
                  <div className="font-semibold">+1 (866) 404-3664</div>
                  <div className="text-sm text-gray-300">24/7 Hotline</div>
                </div>
              </a>
              <a
                href="mailto:info@foxyhomebuyer.com"
                aria-label="Email Foxy Home Buyer at info@foxyhomebuyer.com"
                className="flex items-center space-x-3 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5 text-blue-400" />
                <div>
                  <div>info@foxyhomebuyer.com</div>
                  <div className="text-sm text-gray-300">Fast Response</div>
                </div>
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=2908+W+Bay+to+Bay+Blvd%2C+Tampa%2C+FL+33629"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open address in Google Maps"
                className="flex items-center space-x-3 hover:text-white transition-colors"
              >
                <MapPin className="w-5 h-5 text-blue-400" />
                <div>
                  <div>2908 W Bay to Bay Blvd, Tampa, FL 33629</div>
                  <div className="text-sm text-gray-300">Serving All Florida</div>
                </div>
              </a>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-blue-400" />
                <div>
                  <div>24/7 Available</div>
                  <div className="text-sm text-gray-300">Even Weekends</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; 2025 Foxy Home Buyer LLC. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/disclaimer" className="text-gray-400 hover:text-white transition-colors">
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;