'use client';

import { useRef, useEffect } from 'react';
import { Phone, FileText, DollarSign } from 'lucide-react';
import { motion, useInView, useAnimation } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const steps = [
    {
      number: '01',
      icon: Phone,
      title: 'Tell Us About Your House',
      description: 'Fill out our simple form or give us a call. We need just a few details about your property to get started.',
      time: '3 minutes',
    },
    {
      number: '02',
      icon: FileText,
      title: 'Get Your Cash Offer',
      description: "We'll evaluate your property and present you with a fair, no-obligation cash offer within 24 hours.",
      time: '24 hours',
    },
    {
      number: '03',
      icon: DollarSign,
      title: 'Close & Get Paid',
      description: 'Choose your closing date. We handle all the paperwork and you get cash in hand - guaranteed.',
      time: '7-30 days',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const stepVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1], // Using cubic-bezier values for ease-out
      },
    },
  } as const;

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
          }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-4xl md:text-5xl text-gray-900 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our streamlined process makes selling your house fast and easy. 
            No repairs, no showings, no hassle.
          </p>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid md:grid-cols-3 gap-8 lg:gap-12"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={stepVariants}
              className="relative"
            >
              {/* Connector Line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-blue-300 to-transparent transform translate-x-6 z-0" />
              )}

              {/* Step Card */}
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 z-10">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <step.icon className="w-8 h-8 text-blue-600" />
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="font-display font-bold text-xl text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  <div className="inline-flex items-center bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                    ⏱️ {step.time}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.6 } },
          }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg inline-block">
            <h3 className="font-display font-bold text-2xl text-gray-900 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 mb-6">
              Get your cash offer today - it only takes 3 minutes!
            </p>
            <Button className="cta-gradient text-white px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity animate-pulse-glow" asChild>
              <Link href="/sell-your-house" aria-label="Start Step 1: Get My Offer">
                Start Step 1: Get My Offer
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
