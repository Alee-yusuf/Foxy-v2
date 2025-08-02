'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Shield, Heart, TrendingUp, Users, Award, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function About() {
  const teamMembers = [
    {
      name: 'Michael Johnson',
      role: 'Founder & CEO',
      bio: 'Former realtor with 15+ years in Florida real estate. Started Foxy Home Buyer to help homeowners avoid the stress and costs of traditional sales.',
      image: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      quote: 'Every homeowner deserves a fair, fast, and stress-free selling experience.'
    },
    {
      name: 'Sarah Martinez',
      role: 'Head of Acquisitions',
      bio: 'Licensed real estate appraiser and investor with deep knowledge of Florida markets. Ensures every offer is fair and competitive.',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      quote: 'We build our reputation one fair offer at a time.'
    },
    {
      name: 'David Chen',
      role: 'Operations Director',
      bio: 'Former title company executive who streamlines our closing process. Guarantees smooth, on-time closings for every customer.',
      image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      quote: 'Details matter. We handle everything so you don\'t have to worry.'
    }
  ];

  const coreValues = [
    {
      icon: Heart,
      title: 'Integrity First',
      description: 'We do what we say we\'ll do, when we say we\'ll do it. Our word is our bond, and our $2,500 guarantee proves it.',
      color: 'text-red-500',
      bgColor: 'bg-red-100'
    },
    {
      icon: Shield,
      title: 'Transparency',
      description: 'No hidden fees, no surprise costs, no fine print. You get exactly what we promise - nothing more, nothing less.',
      color: 'text-blue-500',
      bgColor: 'bg-blue-100'
    },
    {
      icon: TrendingUp,
      title: 'Fair Offers',
      description: 'We make competitive offers based on real market data. Our goal is win-win deals that work for everyone.',
      color: 'text-green-500',
      bgColor: 'bg-green-100'
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'Your situation is unique, and we treat it that way. Personalized service, not one-size-fits-all solutions.',
      color: 'text-purple-500',
      bgColor: 'bg-purple-100'
    }
  ];

  const achievements = [
    { number: '500+', label: 'Houses Purchased' },
    { number: '4.9/5', label: 'Customer Rating' },
    { number: '7 Days', label: 'Average Closing' },
    { number: 'A+', label: 'BBB Rating' }
  ];

  const whyWeStarted = [
    'Tired of seeing homeowners get taken advantage of by unscrupulous buyers',
    'Frustrated with the slow, expensive traditional real estate process',
    'Wanted to provide a legitimate, trustworthy alternative to lengthy sales',
    'Believed homeowners deserved better - fair offers and guaranteed closings'
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
                About Foxy Home Buyer
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                Florida's most trusted cash home buyer, founded on integrity, 
                transparency, and putting customers first.
              </p>
              <div className="flex items-center justify-center space-x-6">
                <div className="flex items-center">
                  <Award className="w-5 h-5 mr-2 text-yellow-400" />
                  <span>BBB A+ Rating</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-green-400" />
                  <span>Licensed & Insured</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h2 className="font-display font-bold text-4xl text-gray-900 mb-6">
                    Our Story
                  </h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    Founded in 2018 by a group of Florida real estate professionals who were 
                    frustrated with the traditional home selling process. We saw too many 
                    homeowners getting stuck with lengthy sales, expensive repairs, and 
                    uncertain outcomes.
                  </p>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    We decided to create a better way - one that puts homeowners first, 
                    offers fair prices, and guarantees results. Today, we're proud to be 
                    Florida's most trusted cash home buyer with hundreds of satisfied customers.
                  </p>
                  
                  <h3 className="font-display font-bold text-xl text-gray-900 mb-4">
                    Why We Started Foxy Home Buyer:
                  </h3>
                  <ul className="space-y-2">
                    {whyWeStarted.map((reason, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{reason}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <img
                    src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                    alt="Florida home"
                    className="rounded-2xl shadow-lg"
                  />
                  <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                      <div className="text-gray-600">Happy Customers</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
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
                Our Core Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These principles guide every decision we make and every interaction we have with customers.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreValues.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center"
                >
                  <div className={`w-16 h-16 ${value.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <value.icon className={`w-8 h-8 ${value.color}`} />
                  </div>
                  <h3 className="font-display font-bold text-xl text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
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
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Florida real estate experts with decades of combined experience, 
                all committed to providing exceptional service.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="font-display font-bold text-xl text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <div className="text-blue-600 font-medium mb-4">{member.role}</div>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {member.bio}
                    </p>
                    <blockquote className="border-l-4 border-blue-200 pl-4 italic text-gray-700">
                      "{member.quote}"
                    </blockquote>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-display font-bold text-4xl text-gray-900 mb-6">
                Our Track Record
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Numbers don't lie. Here's what we've accomplished since starting our mission 
                to help Florida homeowners.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-gray-600 font-medium">{achievement.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="font-display font-bold text-4xl md:text-5xl mb-8">
                Our Mission
              </h2>
              <blockquote className="text-2xl md:text-3xl font-light leading-relaxed mb-8 italic">
                "To provide Florida homeowners with a trusted, transparent, and stress-free 
                alternative to traditional real estate sales - one fair offer at a time."
              </blockquote>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 inline-block">
                <div className="text-lg font-medium mb-2">Our Promise to You</div>
                <div className="text-blue-100">
                  Fair offers • Fast closings • Zero fees • $2,500 guarantee
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="font-display font-bold text-4xl text-gray-900 mb-6">
                Experience the Foxy Difference
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Join hundreds of satisfied Florida homeowners who chose integrity, 
                transparency, and guaranteed results.
              </p>
              <Button
                size="lg"
                className="cta-gradient text-white px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 animate-pulse-glow"
              >
                Get Your Fair Cash Offer
              </Button>
              <div className="mt-6 text-gray-500">
                🏠 No obligation • ⚡ 24-hour response • 🛡️ $2,500 guarantee
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}