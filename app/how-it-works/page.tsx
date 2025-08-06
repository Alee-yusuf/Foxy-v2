'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle, Phone, FileText, DollarSign, Clock, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      icon: Phone,
      title: 'Contact Us',
      description: 'Call us or fill out our simple form with basic information about your property.',
      details: [
        'Property address and basic details',
        'Current condition assessment',
        'Your timeline and goals',
        'Any specific circumstances'
      ],
      timeframe: '3 minutes'
    },
    {
      number: 2,
      icon: FileText,
      title: 'Property Evaluation',
      description: 'We research your property and local market to prepare a fair cash offer.',
      details: [
        'Market analysis and comparable sales',
        'Property condition assessment',
        'Repair cost calculations',
        'Fair market value determination'
      ],
      timeframe: '24 hours'
    },
    {
      number: 3,
      icon: DollarSign,
      title: 'Cash Offer Presentation',
      description: 'Receive your written cash offer with no obligation to accept.',
      details: [
        'Detailed written offer',
        'Explanation of our process',
        'Flexible closing timeline',
        'No pressure decision making'
      ],
      timeframe: '1-2 days'
    },
    {
      number: 4,
      icon: Shield,
      title: 'Closing & Payment',
      description: 'We handle all paperwork and you get cash at closing - guaranteed.',
      details: [
        'Professional title company closing',
        'All paperwork handled for you',
        'Cash payment guaranteed',
        '$2,500 on-time guarantee'
      ],
      timeframe: '7-30 days'
    }
  ];

  const benefits = [
    'No realtor commissions (save 6%)',
    'No repair costs',
    'No staging or showings',
    'No closing costs',
    'No financing contingencies',
    'Choose your closing date'
  ];

  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 hero-gradient text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="font-display font-bold text-4xl md:text-6xl mb-6">
                How Our Process Works
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                We've streamlined home selling into 4 simple steps. 
                No stress, no complications, just cash in your pocket.
              </p>
              <div className="flex items-center justify-center space-x-6">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>7-Day Closing</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-5 h-5 mr-2" />
                  <span>$2,500 Guarantee</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Detailed Steps */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="space-y-20">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center mr-4">
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-blue-600 mb-1">
                          Step {step.number}
                        </div>
                        <h2 className="font-display font-bold text-2xl text-gray-900">
                          {step.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-lg text-gray-600 mb-6">
                      {step.description}
                    </p>

                    <div className="space-y-3 mb-6">
                      {step.details.map((detail, i) => (
                        <div key={i} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{detail}</span>
                        </div>
                      ))}
                    </div>

                    <div className="inline-flex items-center bg-orange-100 text-orange-800 px-4 py-2 rounded-full">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="font-medium">Typical timeframe: {step.timeframe}</span>
                    </div>
                  </div>

                  {/* Visual */}
                  <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg">
                      <div className="w-24 h-24 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <step.icon className="w-12 h-12 text-blue-600" />
                      </div>
                      <div className="text-center">
                        <div className="text-4xl font-bold text-gray-900 mb-2">
                          Step {step.number}
                        </div>
                        <div className="text-gray-600">{step.title}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-display font-bold text-4xl md:text-5xl text-gray-900 mb-6">
                Why Our Process is Better
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Compare our simple 4-step process to the traditional real estate market.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Traditional Process */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <h3 className="font-display font-bold text-2xl text-red-600 mb-6 text-center">
                  Traditional Real Estate
                </h3>
                <div className="space-y-4">
                  {[
                    'Find and hire a realtor (1-2 weeks)',
                    'Prepare house for market (2-4 weeks)',
                    'List property and wait for buyers (1-6 months)',
                    'Negotiate offers and inspections (2-4 weeks)',
                    'Wait for buyer financing (4-6 weeks)',
                    'Handle repairs and contingencies (2-8 weeks)',
                    'Close and pay commissions (1-2 weeks)'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                        <span className="text-red-600 text-xs font-bold">{index + 1}</span>
                      </div>
                      <span className="text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-red-50 rounded-lg">
                  <div className="text-red-800 font-semibold text-center">
                    Total Time: 3-12+ months
                  </div>
                </div>
              </motion.div>

              {/* Our Process */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg border-2 border-green-200"
              >
                <h3 className="font-display font-bold text-2xl text-green-600 mb-6 text-center">
                  Foxy Home Buyer Process
                </h3>
                <div className="space-y-4">
                  {steps.map((step, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                        <span className="text-green-600 text-xs font-bold">{index + 1}</span>
                      </div>
                      <span className="text-gray-600">{step.title} ({step.timeframe})</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                  <div className="text-green-800 font-semibold text-center">
                    Total Time: 7-30 days
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
                Ready to Start the Process?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Get your cash offer today and see why thousands of Florida homeowners 
                choose our simple, fast process.
              </p>
              <button className="cta-gradient text-white px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity animate-pulse-glow">
                Start Step 1: Get My Offer
              </button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}