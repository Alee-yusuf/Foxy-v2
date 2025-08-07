'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CheckCircle, Star, Shield, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [address, setAddress] = useState('');
  const router = useRouter();

  const trustBadges = [
    { icon: Star, text: 'BBB A+ Rating', color: 'text-yellow-500' },
    { icon: Shield, text: '$2,500 On-Time Guarantee', color: 'text-green-500' },
    { icon: Clock, text: '7-Day Closing', color: 'text-blue-500' },
  ];

  const benefits = [
    'No repairs needed',
    'No realtor fees',
    'No closing costs',
    'Cash in 7 days',
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 hero-gradient">
        <div className="absolute inset-0 bg-black/20"></div>
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container top-20 bottom-20  mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
            >
              <Shield className="w-4 h-4 mr-2 text-green-400" />
              <span className="text-sm font-medium">$2,500 On-Time Guarantee</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6"
            >
              Sell Your Florida House{' '}
              <span className="text-yellow-400">for Cash</span>
              <br />
              Fast & Guaranteed
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl mb-8 text-blue-100"
            >
              No Repairs. No Fees. Get a Cash Offer in 3 Minutes
            </motion.p>

            {/* Benefits List */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-2 gap-4 mb-8"
            >
              {benefits.map((benefit, index) => (
                <div key={benefit} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-blue-100">{benefit}</span>
                </div>
              ))}
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="flex justify-between gap-4 mb-8"
            >
              {trustBadges.map((badge, index) => (
                <div key={badge.text} className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <badge.icon className={`w-5 h-5 mr-2 ${badge.color}`} />
                  <span className="text-sm font-medium">{badge.text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <Button
                size="lg"
                className="cta-gradient text-white text-lg px-8 py-4 rounded-full hover:opacity-90 animate-pulse-glow"
                onClick={() => {
                  router.push('/sell-your-house');
                }}
              >
                Get My Cash Offer Now
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Lead Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-2xl shadow-2xl p-8"
          >
            <div className="text-center mb-6">
              <h2 className="font-display font-bold text-2xl text-gray-900 mb-2">
                Get Your Cash Offer
              </h2>
              <p className="text-gray-600">
                Enter your address below for an instant estimate
              </p>
            </div>

            <form className="space-y-4" onSubmit={(e) => {
              e.preventDefault();
              if (address.trim()) {
                router.push(`/sell-your-house?address=${encodeURIComponent(address.trim())}`);
              }
            }}>
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                  Property Address
                </label>
                <Input
                  id="address"
                  type="text"
                  placeholder="123 Main St, Tampa, FL"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="text-lg py-3"
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full cta-gradient text-white text-lg py-4 rounded-full hover:opacity-90"
                disabled={!address.trim()}
              >
                Get My Cash Offer
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">
                No obligation • Free consultation • Quick response
              </p>
              <div className="flex justify-center items-center mt-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">4.9/5 from 500+ customers</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;