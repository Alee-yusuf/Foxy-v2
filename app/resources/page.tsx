'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Download, FileText, Calculator, CheckCircle, Star, Play, BookOpen, Gift, Phone, MessageCircle, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

export default function Resources() {
  const [email, setEmail] = useState('');

  const leadMagnets = [
    {
      title: 'The Complete Florida Home Seller\'s Guide',
      description: 'Everything you need to know about selling your house in Florida, including cash buyers vs. realtors, tax implications, and timing strategies.',
      type: 'PDF Guide',
      pages: '24 pages',
      icon: FileText,
      image: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      features: [
        'Market analysis techniques',
        'Pricing strategies',
        'Legal requirements',
        'Tax implications',
        'Closing process walkthrough'
      ]
    },
    {
      title: 'Foreclosure Prevention Toolkit',
      description: 'Step-by-step action plan to avoid foreclosure in Florida. Includes templates, contact lists, and legal guidance.',
      type: 'Action Kit',
      pages: '18 pages',
      icon: CheckCircle,
      image: 'https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      features: [
        'Emergency action checklist',
        'Lender negotiation scripts',
        'Legal resource directory',
        'Government assistance programs',
        'Alternative solution strategies'
      ]
    },
    {
      title: 'Cash Offer Calculator & Worksheet',
      description: 'Interactive calculator to estimate what cash buyers will offer for your house, plus worksheets to compare all your selling options.',
      type: 'Calculator Tool',
      pages: 'Interactive',
      icon: Calculator,
      image: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      features: [
        'Market value estimator',
        'Repair cost calculator',
        'Net proceeds comparison',
        'Timeline analysis',
        'Decision-making framework'
      ]
    },
    {
      title: 'Inherited Property Action Plan',
      description: 'Navigate the complex process of inheriting Florida real estate. Covers probate, taxes, multiple heirs, and selling strategies.',
      type: 'Step-by-Step Guide',
      pages: '20 pages',
      icon: BookOpen,
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      features: [
        'Probate process explained',
        'Tax implications guide',
        'Multiple heir negotiations',
        'Property preparation tips',
        'Selling timeline strategies'
      ]
    }
  ];

  const videos = [
    {
      title: 'How Cash Home Buying Really Works',
      description: 'Behind-the-scenes look at our process, from initial contact to closing day.',
      duration: '8:32',
      thumbnail: 'https://images.pexels.com/photos/1239146/pexels-photo-1239146.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      category: 'Process'
    },
    {
      title: 'Real Customer Success Stories',
      description: 'Hear from actual customers about their experience selling to us.',
      duration: '12:45',
      thumbnail: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      category: 'Testimonials'
    },
    {
      title: 'Florida Market Update 2025',
      description: 'Current market conditions and what they mean for home sellers.',
      duration: '6:18',
      thumbnail: 'https://images.pexels.com/photos/273209/pexels-photo-273209.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      category: 'Market Insights'
    }
  ];

  const handleDownload = (title: string) => {
    console.log(`Downloading: ${title} for email: ${email}`);
    // Handle download logic here
  };

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
                Free Resources for Florida Homeowners
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                Download expert guides, tools, and checklists to help you make informed decisions 
                about selling your house.
              </p>
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                <Gift className="w-5 h-5 mr-2 text-white" />
                <span>All resources are completely free • No strings attached</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Lead Magnets */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-display font-bold text-4xl md:text-5xl text-gray-900 mb-6">
                Expert Guides & Tools
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need to navigate the Florida real estate market with confidence.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {leadMagnets.map((resource, index) => (
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="relative">
                    <img
                      src={resource.image}
                      alt={resource.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {resource.type}
                    </div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-900">
                      {resource.pages}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mr-4">
                        <resource.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-xl text-gray-900">
                          {resource.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4">
                      {resource.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">What's Included:</h4>
                      <ul className="space-y-1">
                        {resource.features.map((feature) => (
                          <li key={feature} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <Input
                        type="email"
                        placeholder="Enter your email to download"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <Button
                        onClick={() => handleDownload(resource.title)}
                        className="w-full cta-gradient text-white"
                        disabled={!email}
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download Free {resource.type}
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Resources */}
        {/* <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-display font-bold text-4xl md:text-5xl text-gray-900 mb-6">
                Educational Videos
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Watch our expert videos to learn about the cash home buying process and Florida real estate market.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {videos.map((video, index) => (
                <motion.div
                  key={video.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
                >
                  <div className="relative">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 text-blue-600 ml-1" />
                      </div>
                    </div>
                    <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {video.category}
                    </div>
                    <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display font-bold text-lg text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-gray-600">{video.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section> */}

        {/* FAQ Quick Reference */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="font-display font-bold text-4xl text-gray-900 mb-6">
                  Quick Reference Guide
                </h2>
                <p className="text-xl text-gray-600">
                  Common questions and quick answers for Florida homeowners
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-blue-50 rounded-2xl p-6">
                  <h3 className="font-display font-bold text-xl text-gray-900 mb-4">
                    Selling Timeline
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Cash Offer:</span>
                      <span className="font-semibold">24-48 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Inspection:</span>
                      <span className="font-semibold">3-5 days</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Closing:</span>
                      <span className="font-semibold">7-30 days</span>
                    </div>
                    <div className="flex justify-between border-t pt-2">
                      <span className="text-gray-900 font-semibold">Total Time:</span>
                      <span className="font-bold text-green-600">2-5 weeks</span>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 rounded-2xl p-6">
                  <h3 className="font-display font-bold text-xl text-gray-900 mb-4">
                    Cost Comparison
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Realtor Commission:</span>
                      <span className="font-semibold text-red-600">6%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Closing Costs:</span>
                      <span className="font-semibold text-red-600">2-3%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Repairs/Staging:</span>
                      <span className="font-semibold text-red-600">$5-15k</span>
                    </div>
                    <div className="flex justify-between border-t pt-2">
                      <span className="text-gray-900 font-semibold">Cash Sale Fees:</span>
                      <span className="font-bold text-green-600">$0</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center mt-12">
                <Button
                  size="lg"
                  className="cta-gradient text-white px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 animate-pulse-glow"
                  asChild
                >
                  <Link href="/sell-your-house" aria-label="Get My Free Cash Offer">
                    Get My Free Cash Offer
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
                Still Have Questions?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Our team of Florida real estate experts is here to help. Get personalized advice 
                for your specific situation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white text-blue-600 border-white hover:bg-blue-50 px-8 py-4 rounded-full font-semibold text-lg"
                  asChild
                >
                  <Link href="/sell-your-house" aria-label="Schedule Free Consultation">
                    Schedule Free Consultation
                  </Link>
                </Button>
                <Button
                  size="lg"
                  className="cta-gradient text-white px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90"
                  asChild
                >
                  <a href="tel:+18664043664" className="flex items-center" aria-label="Call +1 (866) 404-3664">
                    Call +1 (866) 404-3664
                  </a>
                </Button>
              </div>
              <div className="mt-6 text-blue-200 flex items-center justify-center gap-4">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 text-white mr-1" />
                  <span>Available 24/7</span>
                </div>
                <span>•</span>
                <div className="flex items-center">
                  <MessageCircle className="w-4 h-4 text-white mr-1" />
                  <span>Free consultation</span>
                </div>
                <span>•</span>
                <div className="flex items-center">
                  <Zap className="w-4 h-4 text-white mr-1" />
                  <span>Quick response</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}