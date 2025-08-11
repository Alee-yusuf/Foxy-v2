'use client';

import { Shield, Clock, Home, DollarSign, CheckCircle, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const USPSection = () => {
  const usps = [
    {
      icon: Shield,
      title: '$2,500 On-Time Guarantee',
      description: 'If we fail to close on time, we pay YOU $2,500. That\'s how confident we are in our process.',
      color: 'text-green-500',
      bgColor: 'bg-green-100',
    },
    {
      icon: Clock,
      title: 'Close in 7 Days',
      description: 'No waiting months for a buyer. We can close as fast as 7 days or on your timeline.',
      color: 'text-blue-500',
      bgColor: 'bg-blue-100',
    },
    {
      icon: Home,
      title: 'Any Condition',
      description: 'Fire damage, foundation issues, bad tenants - we buy houses in ANY condition.',
      color: 'text-purple-500',
      bgColor: 'bg-purple-100',
    },
    {
      icon: DollarSign,
      title: 'No Hidden Fees',
      description: 'No realtor commissions, no closing costs, no repairs. The offer you get is what you keep.',
      color: 'text-orange-500',
      bgColor: 'bg-orange-100',
    },
    {
      icon: CheckCircle,
      title: 'Fair Cash Offers',
      description: 'We make competitive offers based on current market value and condition of your property.',
      color: 'text-teal-500',
      bgColor: 'bg-teal-100',
    },
    {
      icon: Users,
      title: 'Local Experts',
      description: 'Florida-based team with deep knowledge of local markets and property values.',
      color: 'text-red-500',
      bgColor: 'bg-red-100',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-4xl md:text-5xl text-gray-900 mb-6">
            Why Choose Foxy Home Buyer?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We're more than a typical house-buying company, we're a Google Verified, trusted name in Florida. Homeowners choose us when it's time to handle their most important asset with care, integrity, and professionalism.
          </p>
        </motion.div>

        {/* USP Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {usps.map((usp, index) => (
            <motion.div
              key={usp.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: 'easeOut'
              }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              {/* Icon */}
              <div className={`w-16 h-16 ${usp.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <usp.icon className={`w-8 h-8 ${usp.color}`} />
              </div>

              {/* Content */}
              <h3 className="font-display font-bold text-xl text-gray-900 mb-4">
                {usp.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {usp.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
            <h3 className="font-display font-bold text-2xl md:text-3xl mb-4">
              Ready to Experience the Difference?
            </h3>
            <p className="text-xl text-blue-100 mb-8">
              Join hundreds of satisfied Florida homeowners who chose the smart way to sell.
            </p>
            <Button className="cta-gradient text-white px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity animate-pulse-glow" asChild>
              <Link href="/sell-your-house" aria-label="Get My Guaranteed Offer">
                Get My Guaranteed Offer
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default USPSection;