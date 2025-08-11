'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ChevronDown, Shield, Clock, DollarSign, Home } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function FAQ() {
  const [openItem, setOpenItem] = useState<number | null>(0);

  const faqs = [
    {
      category: 'The Process',
      icon: Home,
      questions: [
        {
          question: 'How does the cash home buying process work?',
          answer: <>
            It's simple:<br /><br />
            • Tell us about your house<br />
            • We make you a fair cash offer within 24 hours<br />
            • You choose the closing date<br />
            • We handle all paperwork and you get cash at closing<br /><br />
            No repairs, no realtor fees, no waiting for buyer financing.
          </>
        },
        {
          question: 'How quickly can you close?',
          answer: "We can close as fast as 7 days, but we're flexible with your timeline. Whether you need to close this week or next month, we work around your schedule. Our $2,500 guarantee ensures we meet the agreed closing date."
        },
        {
          question: 'Do I need to make any repairs to my house?',
          answer: "Absolutely not! We buy houses in ANY condition - from move-in ready to major repair needs. Foundation issues, roof problems, fire damage, outdated kitchens - we've seen it all and buy it all. You can sell exactly as-is."
        },
        {
          question: 'What areas in Florida do you serve?',
          answer: "We buy houses throughout Florida, with a focus on the Tampa Bay area including Tampa, St. Petersburg, Clearwater, Brandon, Riverview, Plant City, and Lakeland. We also work in other Florida markets - just ask!"
        }
      ]
    },
    {
      category: 'Money & Offers',
      icon: DollarSign,
      questions: [
        {
          question: 'How do you determine your cash offer?',
          answer: "We analyze your property's condition, location, recent comparable sales, and current market conditions. Our offers are based on what your house would sell for on the open market, minus the costs and time you'd save by selling to us (repairs, realtor fees, closing costs, carrying costs)."
        },
        {
          question: 'Are there any fees or commissions?',
          answer: "Zero fees! No realtor commissions (save 6%), no closing costs, no repair costs, no staging costs. The cash offer we give you is exactly what you'll receive at closing. We even pay all the typical closing costs."
        },
        {
          question: 'How is your offer different from a realtor sale?',
          answer: "With a realtor, you pay 6% commission, closing costs, make repairs, stage the home, and wait months for a buyer who might still fall through. With us, you get cash in 7-30 days with zero costs or repairs. You might get a higher gross price with a realtor, but often net the same or more with us when you factor in all costs and time."
        },
        {
          question: 'What if I owe more than my house is worth?',
          answer: "We can still help! We've worked with many homeowners in underwater situations. We can discuss options like short sales or other creative solutions. Every situation is different, so let's talk about your specific circumstances."
        }
      ]
    },
    {
      category: 'Trust & Guarantee',
      icon: Shield,
      questions: [
        {
          question: 'What is your $2,500 guarantee?',
          answer: "If we fail to close on the agreed date (for any reason on our end), we pay YOU $2,500. This shows our commitment to keeping our promises. We've paid this guarantee less than 1% of the time because we have systems in place to ensure on-time closings."
        },
        {
          question: 'Are you a legitimate company?',
          answer: "Yes! We’re a registered florida real estate company established in 2014. We've been buying houses in Florida for years and have closed on hundreds of properties. You can verify our credentials and see our reviews online."
        },
        {
          question: 'Is there any obligation when I request an offer?',
          answer: "None whatsoever! Getting a cash offer is completely free with no strings attached. We'll give you a fair written offer, and you can take time to think about it. There's no pressure to accept - the choice is entirely yours."
        },
        {
          question: 'How do I know you\'re not going to lowball me?',
          answer: "We build our business on repeat referrals and reputation. Lowball offers hurt our reputation and waste everyone's time. We make fair offers based on market value and what we can realistically pay while still running a business. Many customers are pleasantly surprised by our offers."
        }
      ]
    },
    {
      category: 'Special Situations',
      icon: Clock,
      questions: [
        {
          question: 'Can you help if I\'m facing foreclosure?',
          answer: "Yes! We specialize in helping homeowners avoid foreclosure. We can often close fast enough to stop the foreclosure process and help you walk away with cash instead of a foreclosure on your credit report. Time is critical, so contact us immediately."
        },
        {
          question: 'What if my house has tenants?',
          answer: "Not a problem! We buy rental properties with tenants in place all the time. We can handle the tenant transition and take over the leases, or help arrange for them to move if needed. You don't need to deal with tenant issues."
        },
        {
          question: 'Do you buy inherited properties?',
          answer: "Absolutely! Inherited properties can be complicated, but we handle them regularly. We understand the probate process and can work with multiple heirs. We make it simple so you don't have to deal with repairs, cleanouts, or lengthy sales processes."
        },
        {
          question: 'Can you help with divorce situations?',
          answer: "Yes, we're experienced with divorce property sales. We understand the sensitivity and urgency often involved. We can work with both parties, attorneys, and courts as needed to facilitate a quick, fair sale that helps everyone move forward."
        }
      ]
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
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
                Frequently Asked Questions
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                Get answers to common questions about selling your house for cash.
                Still have questions? We're here to help 24/7.
              </p>
              <div className="flex items-center justify-center space-x-6">
                <div className="flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-green-400" />
                  <span>BBB A+ Rating</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-blue-300" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {faqs.map((category, categoryIndex) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="mb-12"
                >
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mr-4">
                      <category.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h2 className="font-display font-bold text-2xl text-gray-900">
                      {category.category}
                    </h2>
                  </div>

                  <div className="space-y-4">
                    {category.questions.map((faq, faqIndex) => {
                      const globalIndex = categoryIndex * 10 + faqIndex;
                      return (
                        <motion.div
                          key={faqIndex}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: faqIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
                        >
                          <button
                            onClick={() => toggleItem(globalIndex)}
                            className="w-full px-6 py-6 text-left hover:bg-gray-50 transition-colors"
                          >
                            <div className="flex justify-between items-center">
                              <h3 className="font-semibold text-lg text-gray-900 pr-4">
                                {faq.question}
                              </h3>
                              <ChevronDown
                                className={`w-5 h-5 text-gray-500 transform transition-transform ${
                                  openItem === globalIndex ? 'rotate-180' : ''
                                }`}
                              />
                            </div>
                          </button>
                          
                          <AnimatePresence>
                            {openItem === globalIndex && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <div className="px-6 pb-6">
                                  <div className="pt-4 border-t border-gray-100">
                                    <p className="text-gray-600 leading-relaxed">
                                      {faq.answer}
                                    </p>
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Still Have Questions Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="font-display font-bold text-4xl md:text-5xl text-gray-900 mb-6">
                Still Have Questions?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Every situation is unique. Our team is here to answer your specific questions 
                and provide personalized guidance for your situation.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="font-display font-bold text-xl text-gray-900 mb-4">
                    Call Us Now
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Speak directly with our team. We're available 24/7 to answer your questions.
                  </p>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full"
                    asChild
                  >
                    <a href="tel:+18664043664" className="flex items-center justify-center">
                      <span className="font-semibold text-lg">+1 (866) 404-3664</span>
                    </a>
                  </Button>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="font-display font-bold text-xl text-gray-900 mb-4">
                    Get Your Offer
                  </h3>
                  <p className="text-gray-600 mb-6">
                    The best way to get answers is to see what we can offer for your specific property.
                  </p>
                  <Button
                    size="lg"
                    className="w-full cta-gradient text-white"
                    asChild
                  >
                    <Link href="/sell-your-house" aria-label="Get My Cash Offer">
                      Get My Cash Offer
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="bg-blue-50 rounded-2xl p-8">
                <h3 className="font-display font-bold text-2xl text-gray-900 mb-4">
                  Why Our Customers Choose Us
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <Shield className="w-8 h-8 text-green-500 mx-auto mb-2" />
                    <div className="font-semibold">$2,500 on-time Guarantee</div>
                    <div className="text-sm text-gray-600">On-time closing promise</div>
                  </div>
                  <div className="text-center">
                    <Clock className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                    <div className="font-semibold">7-Day Closing</div>
                    <div className="text-sm text-gray-600">Or on your timeline</div>
                  </div>
                  <div className="text-center">
                    <DollarSign className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                    <div className="font-semibold">No Hidden Fees</div>
                    <div className="text-sm text-gray-600">What you see is what you get</div>
                  </div>
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