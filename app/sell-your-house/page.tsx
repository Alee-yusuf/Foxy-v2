'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Shield, Clock, CheckCircle, Upload, Star, Phone, DollarSign } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SellYourHouse() {
  const [currentStep, setCurrentStep] = useState(1);
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    address: '',
    city: '',
    zipCode: '',
    propertyType: '',
    bedrooms: '',
    bathrooms: '',
    sqft: '',
    yearBuilt: '',
    condition: '',
    situation: '',
    timeline: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    additionalInfo: ''
  });

  // Pre-fill address from URL parameters
  useEffect(() => {
    const addressParam = searchParams.get('address');
    if (addressParam) {
      setFormData(prev => ({ ...prev, address: addressParam }));
    }
  }, [searchParams]);

  const totalSteps = 3;

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-12 hero-gradient text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="font-display font-bold text-4xl md:text-5xl mb-4">
                Get Your Cash Offer Today
              </h1>
              <p className="text-xl text-blue-100 mb-6">
                Fill out this simple form to get your guaranteed cash offer in 24 hours
              </p>
              <div className="flex justify-center items-center space-x-6">
                <div className="flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-green-400" />
                  <span>$2,500 Guarantee</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-blue-300" />
                  <span>24-Hour Response</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Form */}
                <div className="lg:col-span-2">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white rounded-2xl shadow-xl p-8"
                  >
                    {/* Progress Bar */}
                    <div className="mb-8">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-600">
                          Step {currentStep} of {totalSteps}
                        </span>
                        <span className="text-sm font-medium text-blue-600">
                          {Math.round((currentStep / totalSteps) * 100)}% Complete
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-600 to-blue-800 h-2 rounded-full transition-all duration-500 ease-out"
                          style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                        />
                      </div>
                    </div>

                    <form onSubmit={handleSubmit}>
                      <AnimatePresence mode="wait">
                        {/* Step 1: Property Information */}
                        {currentStep === 1 && (
                          <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5 }}
                            className="space-y-6"
                          >
                            <h2 className="font-display font-bold text-2xl text-gray-900 mb-6">
                              Tell Us About Your Property
                            </h2>
                            
                            <div className="grid md:grid-cols-2 gap-4">
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                  Property Address *
                                </label>
                                <Input
                                  value={formData.address}
                                  onChange={(e) => handleInputChange('address', e.target.value)}
                                  placeholder="123 Main Street"
                                  required
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                  City *
                                </label>
                                <Input
                                  value={formData.city}
                                  onChange={(e) => handleInputChange('city', e.target.value)}
                                  placeholder="Tampa"
                                  required
                                />
                              </div>
                            </div>

                            <div className="grid md:grid-cols-3 gap-4">
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                  ZIP Code *
                                </label>
                                <Input
                                  value={formData.zipCode}
                                  onChange={(e) => handleInputChange('zipCode', e.target.value)}
                                  placeholder="33578"
                                  required
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                  Bedrooms
                                </label>
                                <Select onValueChange={(value) => handleInputChange('bedrooms', value)}>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="1">1</SelectItem>
                                    <SelectItem value="2">2</SelectItem>
                                    <SelectItem value="3">3</SelectItem>
                                    <SelectItem value="4">4</SelectItem>
                                    <SelectItem value="5+">5+</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                  Bathrooms
                                </label>
                                <Select onValueChange={(value) => handleInputChange('bathrooms', value)}>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="1">1</SelectItem>
                                    <SelectItem value="1.5">1.5</SelectItem>
                                    <SelectItem value="2">2</SelectItem>
                                    <SelectItem value="2.5">2.5</SelectItem>
                                    <SelectItem value="3+">3+</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                  Square Footage (if known)
                                </label>
                                <Input
                                  value={formData.sqft}
                                  onChange={(e) => handleInputChange('sqft', e.target.value)}
                                  placeholder="1,500"
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                  Year Built (if known)
                                </label>
                                <Input
                                  value={formData.yearBuilt}
                                  onChange={(e) => handleInputChange('yearBuilt', e.target.value)}
                                  placeholder="1995"
                                />
                              </div>
                            </div>

                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Property Type
                              </label>
                              <Select onValueChange={(value) => handleInputChange('propertyType', value)}>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select property type" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="single-family">Single Family Home</SelectItem>
                                  <SelectItem value="townhouse">Townhouse</SelectItem>
                                  <SelectItem value="condo">Condominium</SelectItem>
                                  <SelectItem value="duplex">Duplex</SelectItem>
                                  <SelectItem value="mobile">Mobile Home</SelectItem>
                                  <SelectItem value="vacant-land">Vacant Land</SelectItem>
                                  <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>

                            <div className="flex justify-end">
                              <Button
                                type="button"
                                onClick={nextStep}
                                className="cta-gradient text-white px-8 py-3"
                              >
                                Next Step →
                              </Button>
                            </div>
                          </motion.div>
                        )}

                        {/* Step 2: Property Condition */}
                        {currentStep === 2 && (
                          <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5 }}
                            className="space-y-6"
                          >
                            <h2 className="font-display font-bold text-2xl text-gray-900 mb-6">
                              Property Condition & Situation
                            </h2>

                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Property Condition
                              </label>
                              <Select onValueChange={(value) => handleInputChange('condition', value)}>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select condition" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="excellent">Excellent (Move-in ready)</SelectItem>
                                  <SelectItem value="good">Good (Minor updates needed)</SelectItem>
                                  <SelectItem value="fair">Fair (Some repairs needed)</SelectItem>
                                  <SelectItem value="poor">Poor (Major repairs needed)</SelectItem>
                                  <SelectItem value="damaged">Damaged (Fire, flood, etc.)</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>

                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                What's your situation? (This helps us serve you better)
                              </label>
                              <Select onValueChange={(value) => handleInputChange('situation', value)}>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select your situation" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="foreclosure">Avoiding foreclosure</SelectItem>
                                  <SelectItem value="divorce">Divorce settlement</SelectItem>
                                  <SelectItem value="inherited">Inherited property</SelectItem>
                                  <SelectItem value="relocation">Job relocation</SelectItem>
                                  <SelectItem value="downsizing">Downsizing</SelectItem>
                                  <SelectItem value="rental">Tired of being a landlord</SelectItem>
                                  <SelectItem value="financial">Financial hardship</SelectItem>
                                  <SelectItem value="repairs">Can't afford repairs</SelectItem>
                                  <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>

                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                When do you need to sell?
                              </label>
                              <Select onValueChange={(value) => handleInputChange('timeline', value)}>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select timeline" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="asap">ASAP (within 2 weeks)</SelectItem>
                                  <SelectItem value="1-month">Within 1 month</SelectItem>
                                  <SelectItem value="2-months">1-2 months</SelectItem>
                                  <SelectItem value="3-months">2-3 months</SelectItem>
                                  <SelectItem value="flexible">I'm flexible</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>

                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Additional Information (Optional)
                              </label>
                              <Textarea
                                value={formData.additionalInfo}
                                onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                                placeholder="Tell us anything else that would help us provide the best offer..."
                                rows={4}
                              />
                            </div>

                            <div className="flex justify-between">
                              <Button
                                type="button"
                                onClick={prevStep}
                                variant="outline"
                                className="px-8 py-3"
                              >
                                ← Previous
                              </Button>
                              <Button
                                type="button"
                                onClick={nextStep}
                                className="cta-gradient text-white px-8 py-3"
                              >
                                Next Step →
                              </Button>
                            </div>
                          </motion.div>
                        )}

                        {/* Step 3: Contact Information */}
                        {currentStep === 3 && (
                          <motion.div
                            key="step3"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5 }}
                            className="space-y-6"
                          >
                            <h2 className="font-display font-bold text-2xl text-gray-900 mb-6">
                              Get Your Cash Offer
                            </h2>

                            <div className="grid md:grid-cols-2 gap-4">
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                  First Name *
                                </label>
                                <Input
                                  value={formData.firstName}
                                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                                  placeholder="John"
                                  required
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                  Last Name *
                                </label>
                                <Input
                                  value={formData.lastName}
                                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                                  placeholder="Smith"
                                  required
                                />
                              </div>
                            </div>

                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Email Address *
                              </label>
                              <Input
                                type="email"
                                value={formData.email}
                                onChange={(e) => handleInputChange('email', e.target.value)}
                                placeholder="john.smith@email.com"
                                required
                              />
                            </div>

                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Phone Number *
                              </label>
                              <Input
                                type="tel"
                                value={formData.phone}
                                onChange={(e) => handleInputChange('phone', e.target.value)}
                                placeholder="(813) 555-0123"
                                required
                              />
                            </div>

                            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                              <div className="flex items-center">
                                <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                                <div>
                                  <h3 className="font-semibold text-green-800">What happens next?</h3>
                                  <p className="text-green-700 text-sm">
                                    We'll review your information and call you within 24 hours with a fair cash offer.
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div className="flex justify-between">
                              <Button
                                type="button"
                                onClick={prevStep}
                                variant="outline"
                                className="px-8 py-3"
                              >
                                ← Previous
                              </Button>
                              <Button
                                type="submit"
                                className="cta-gradient text-white px-8 py-3 animate-pulse-glow"
                              >
                                Get My Cash Offer
                              </Button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </form>
                  </motion.div>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1">
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="space-y-6"
                  >
                    {/* Trust Badge */}
                    <div className="bg-white rounded-2xl shadow-lg p-6">
                      <h3 className="font-display font-bold text-xl text-gray-900 mb-4">
                        Why Choose Us?
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <Shield className="w-6 h-6 text-green-500 mr-3" />
                          <div>
                            <div className="font-semibold">$2,500 Guarantee</div>
                            <div className="text-sm text-gray-600">If we fail to close on time</div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-6 h-6 text-blue-500 mr-3" />
                          <div>
                            <div className="font-semibold">Close in 7 Days</div>
                            <div className="text-sm text-gray-600">Or on your timeline</div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <DollarSign className="w-6 h-6 text-orange-500 mr-3" />
                          <div>
                            <div className="font-semibold">No Hidden Fees</div>
                            <div className="text-sm text-gray-600">What you see is what you get</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Testimonial */}
                    <div className="bg-white rounded-2xl shadow-lg p-6">
                      <div className="flex items-center mb-4">
                        <img
                          src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop"
                          alt="Customer"
                          className="w-12 h-12 rounded-full object-cover mr-4"
                        />
                        <div>
                          <div className="font-semibold">Sarah M.</div>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600 italic">
                        "Foxy saved me from foreclosure. They closed in 8 days and paid exactly what they promised!"
                      </p>
                    </div>

                    {/* Contact */}
                    <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl shadow-lg p-6 text-white">
                      <h3 className="font-display font-bold text-xl mb-4">
                        Need to Talk Now?
                      </h3>
                      <p className="text-blue-100 mb-4">
                        Our team is standing by to answer your questions.
                      </p>
                      <Button
                        variant="secondary"
                        className="w-full mb-3"
                        asChild
                      >
                        <a href="tel:+18135552274" className="flex items-center justify-center">
                          <Phone className="w-4 h-4 mr-2" />
                          Call (813) 555-CASH
                        </a>
                      </Button>
                      <div className="text-center text-sm text-blue-200">
                        Available 24/7 • Free consultation
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}