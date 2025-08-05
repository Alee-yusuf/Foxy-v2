'use client';

import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Phone, Mail, MapPin, Clock, MessageCircle, CheckCircle, Loader2, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    propertyAddress: '',
    contactMethod: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('fnFfz0JfF_jUR96K6'); // Public Key
  }, []);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      // EmailJS configuration
      const templateParams = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        propertyAddress: formData.propertyAddress,
        contactMethod: formData.contactMethod,
        message: formData.message,
        submission_time: new Date().toLocaleString('en-US', {
          timeZone: 'America/New_York',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      };

      await emailjs.send(
        'service_wp3vz56', // Service ID
        'template_gyp5hi3', // Template ID for quick contact
        templateParams
      );

      setSubmitStatus('success');
      // Reset form after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        propertyAddress: '',
        contactMethod: '',
        message: ''
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
      setErrorMessage('Failed to send message. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      subtitle: 'Speak with our team',
      info: '(813) 555-CASH',
      description: 'Available 24/7 for immediate assistance',
      action: 'tel:+18135552274',
      buttonText: 'Call Now'
    },
    {
      icon: MessageCircle,
      title: 'Text Us',
      subtitle: 'Quick text message',
      info: '(813) 555-2274',
      description: 'Fast response via SMS',
      action: 'sms:+18135552274',
      buttonText: 'Send Text'
    },
    {
      icon: Mail,
      title: 'Email Us',
      subtitle: 'Send us a message',
      info: 'offers@foxyhomebuyer.com',
      description: 'We respond within 2 hours',
      action: 'mailto:offers@foxyhomebuyer.com',
      buttonText: 'Send Email'
    }
  ];

  const officeInfo = [
    {
      icon: MapPin,
      title: 'Service Area',
      info: 'All of Florida',
      description: 'Tampa Bay, Orlando, Jacksonville, Miami, and everywhere in between'
    },
    {
      icon: Clock,
      title: 'Hours',
      info: '24/7 Available',
      description: 'Call, text, or email anytime - even weekends and holidays'
    },
    {
      icon: CheckCircle,
      title: 'Response Time',
      info: 'Within 24 Hours',
      description: 'We respond to all inquiries within 24 hours, usually much faster'
    }
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
                Contact Us Today
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                Ready to sell your house for cash? Have questions about our process? 
                We're here to help 24/7.
              </p>
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                <span>Free consultation • No obligation • Quick response</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-4">
                Get In Touch
              </h2>
              <p className="text-lg text-gray-600">
                Choose the method that works best for you
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <method.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-gray-900 mb-2">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{method.subtitle}</p>
                  <div className="font-semibold text-lg text-blue-600 mb-2">
                    {method.info}
                  </div>
                  <p className="text-sm text-gray-500 mb-6">
                    {method.description}
                  </p>
                  <Button
                    asChild
                    className="w-full cta-gradient text-white"
                  >
                    <a href={method.action}>{method.buttonText}</a>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h2 className="font-display font-bold text-3xl text-gray-900 mb-6">
                    Send Us a Message
                  </h2>
                  <p className="text-gray-600 mb-8">
                    Fill out the form below and we'll get back to you within 24 hours with answers 
                    to your questions or a cash offer for your property.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
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

                    <div className="grid md:grid-cols-2 gap-4">
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
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Property Address (if applicable)
                      </label>
                      <Input
                        value={formData.propertyAddress}
                        onChange={(e) => handleInputChange('propertyAddress', e.target.value)}
                        placeholder="123 Main Street, Tampa, FL 33601"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Contact Method
                      </label>
                      <Select onValueChange={(value) => handleInputChange('contactMethod', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="How would you like us to contact you?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="phone">Phone Call</SelectItem>
                          <SelectItem value="text">Text Message</SelectItem>
                          <SelectItem value="email">Email</SelectItem>
                          <SelectItem value="any">Any Method</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Tell us about your situation, ask questions, or request a cash offer..."
                        rows={4}
                      />
                    </div>

                    {/* Success Message */}
                    {submitStatus === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4"
                      >
                        <div className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                          <div>
                            <h4 className="font-semibold text-green-800">Message Sent Successfully!</h4>
                            <p className="text-green-700 text-sm">We'll contact you within 24 hours using your preferred method.</p>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Error Message */}
                    {submitStatus === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4"
                      >
                        <div className="flex items-center">
                          <AlertCircle className="w-5 h-5 text-red-500 mr-3" />
                          <div>
                            <h4 className="font-semibold text-red-800">Message Failed to Send</h4>
                            <p className="text-red-700 text-sm">{errorMessage}</p>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full cta-gradient text-white py-4 text-lg animate-pulse-glow disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </Button>

                    <p className="text-sm text-gray-500 text-center">
                      We respect your privacy and will never share your information with third parties.
                    </p>
                  </form>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="space-y-8"
                >
                  <div>
                    <h2 className="font-display font-bold text-3xl text-gray-900 mb-6">
                      Our Office Information
                    </h2>
                    <div className="space-y-6">
                      {officeInfo.map((info, index) => (
                        <div key={info.title} className="flex items-start">
                          <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mr-4 flex-shrink-0">
                            <info.icon className="w-6 h-6 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                            <div className="font-medium text-blue-600 mb-1">{info.info}</div>
                            <p className="text-gray-600 text-sm">{info.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Map Placeholder */}
                  <div className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <h3 className="font-semibold text-gray-600 mb-2">Serving All of Florida</h3>
                      <p className="text-gray-500">
                        We buy houses throughout the entire state of Florida
                      </p>
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6">
                    <h3 className="font-display font-bold text-xl text-gray-900 mb-4">
                      Why Call Us?
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        <span className="text-gray-700">Free, no-obligation consultation</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        <span className="text-gray-700">Cash offer within 24 hours</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        <span className="text-gray-700">Close in as little as 7 days</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        <span className="text-gray-700">$2,500 on-time guarantee</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="py-16 bg-red-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="font-display font-bold text-3xl text-gray-900 mb-4">
                Facing Foreclosure or Need to Sell ASAP?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                If you're in a time-sensitive situation, don't wait. Call us immediately for 
                emergency assistance. We can often help even with very short timelines.
              </p>
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg mr-4"
                asChild
              >
                <a href="tel:+18135552274">Emergency Hotline: (813) 555-CASH</a>
              </Button>
              <div className="mt-4 text-red-700 font-medium">
                ⚡ Available 24/7 for urgent situations
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}