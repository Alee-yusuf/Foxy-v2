'use client';

import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Star } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">F</span>
              </div>
              <div>
                <div className="font-display font-bold text-xl">
                  Foxy Home Buyer
                </div>
                <div className="text-sm text-gray-400">Florida Cash Buyers</div>
              </div>
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
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/how-it-works', label: 'How It Works' },
                { href: '/get-cash-offer', label: 'Get Cash Offer' },
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
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <div>
                  <div className="font-semibold">(813) 555-CASH</div>
                  <div className="text-sm text-gray-300">24/7 Hotline</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <div>
                  <div>offers@foxyhomebuyer.com</div>
                  <div className="text-sm text-gray-300">Fast Response</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <div>
                  <div>Riverview, FL 33578</div>
                  <div className="text-sm text-gray-300">Serving All Florida</div>
                </div>
              </div>
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
              2024 Foxy Home Buyer LLC. All rights reserved. Licensed Real Estate Investor.
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