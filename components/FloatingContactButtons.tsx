'use client';

import { useState } from 'react';
import { Phone, MessageCircle, X, DollarSign } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingContactButtons = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 space-y-3"
          >
            {/* Get Cash Offer Button */}
            <motion.a
              href="/sell-your-house"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center bg-blue-600 hover:bg-blue-700 text-white rounded-full px-4 py-3 shadow-lg transition-colors min-w-[160px]"
            >
              <DollarSign className="w-6 h-6" />
              <span className="ml-3 font-medium">Get Cash Offer</span>
            </motion.a>

            {/* Phone Button */}
            <motion.a
              href="tel:+18664043664"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center bg-green-500 hover:bg-green-600 text-white rounded-full px-4 py-3 shadow-lg transition-colors min-w-[160px]"
            >
              <Phone className="w-6 h-6" />
              <span className="ml-3 font-medium">Call Now</span>
            </motion.a>

            {/* WhatsApp Button */}
            {/* <motion.a
              href="https://wa.me/18135552274?text=Hi, I'm interested in selling my house for cash"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center bg-green-600 hover:bg-green-700 text-white rounded-full px-4 py-3 shadow-lg transition-colors min-w-[160px]"
            >
              <MessageCircle className="w-6 h-6" />
              <span className="ml-3 font-medium">WhatsApp</span>
            </motion.a> */}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
          isExpanded 
            ? 'bg-white hover:bg-white'
            : 'bg-orange-600 hover:bg-orange-700'
        }`}
      >
        <AnimatePresence mode="wait">
          {isExpanded ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6 text-blue-600" />
            </motion.div>
          ) : (
            <motion.div
              key="contact"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="text-white font-bold text-sm"
            >
              SELL
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default FloatingContactButtons;