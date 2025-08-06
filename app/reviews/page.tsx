'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Star, Play, Quote, MapPin, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function Reviews() {
  const videoTestimonials = [
    {
      id: 1,
      name: 'Maria Rodriguez',
      location: 'Tampa, FL',
      thumbnail: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      situation: 'Avoided Foreclosure',
      amount: '$245,000',
      preview: 'Saved my family home from foreclosure in just 9 days...'
    },
    {
      id: 2,
      name: 'Robert Johnson',
      location: 'St. Petersburg, FL',
      thumbnail: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      situation: 'Job Relocation',
      amount: '$318,500',
      preview: 'Had to move quickly for work. Foxy made it seamless...'
    },
    {
      id: 3,
      name: 'Jennifer Adams',
      location: 'Clearwater, FL',
      thumbnail: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      situation: 'Inherited Property',
      amount: '$189,900',
      preview: 'Inherited grandmas house, they handled everything...'
    }
  ];

  const writtenTestimonials = [
    {
      name: 'Pamela Whitlock',
      location: 'Florida',
      rating: 5,
      date: '3 weeks ago',
      situation: 'Realtor Partnership',
      amount: '',
      text: "As a realtor, I have not worked with an investor in the past and so I was a little hesitant at first. After working with Damon Hart at Foxy Homes, I have a new perspective on working with investor partners. Damon made the transaction go smoothly. He was always available to answer all my questions for my clients and very knowledgeable. In the future, if I have another client in need, I will definitely give Damon at Foxy Homes a call.",
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Patrick Piper',
      location: 'Florida',
      rating: 5,
      date: '1 month ago',
      situation: 'Home Inspection',
      amount: '',
      text: "Damon Hart was an absolute pleasure to work with during their home insurance inspection. His genuine 'Go Getter' work ethics, professionalism, attentiveness, and appreciation for thorough service made the process seamless.",
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Pamela Meyer',
      location: 'Florida',
      rating: 5,
      date: '3 weeks ago',
      situation: 'Property Sale',
      amount: '',
      text: "Had a great experience working with Foxy Home Buyer on selling a property. They were really great and quick to respond to all calls and emails. They had everything put together, and made the process smooth from start to finish. Would definitely recommend working with them if you get the chance!",
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Fanny Horn',
      location: 'Suncoast, FL',
      rating: 5,
      date: '3 weeks ago',
      situation: 'Professional Transaction',
      amount: '',
      text: "Foxy Home Buyer knows what they are doing! They moved quickly, are organized and professionals. We went through every steps smoothly and closing was seamless. It's not every day you get a transaction that goes this well. I am looking forward to the next one! Well done!",
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Jenny Quiceno',
      location: 'Florida',
      rating: 5,
      date: '1 month ago',
      situation: 'Home Purchase',
      amount: '',
      text: "We recently purchased one of their homes through our Realtor and it was an excellent value. The home has become a comfort zone for my mom—she absolutely loves it! On top of that, it's proved to be a fantastic long‑term investment. Highly recommend!",
      image: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Charity Brooks',
      location: 'Florida',
      rating: 5,
      date: '2 months ago',
      situation: 'First Time Seller',
      amount: '',
      text: "As a first time home seller I didn't know where to turn to sell. Had companies sending mail saying they would buy and I was unclear. Foxy home buyers have talked me through steps and made an offer. From day one Damon had been right there to answer any questions I might have and/or something I needed clarifying. I would recommend Foxy to my friends and family. Great team members who are professional, polite, and friendly.",
      image: 'https://images.pexels.com/photos/1181717/pexels-photo-1181717.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  ];

  const stats = [
    { number: '500+', label: 'Houses Bought', icon: DollarSign },
    { number: '4.9/5', label: 'Average Rating', icon: Star },
    { number: '7 Days', label: 'Average Closing', icon: MapPin },
    { number: '100%', label: 'Satisfaction Rate', icon: Quote }
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
                Real Stories from Real Customers
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                See why hundreds of Florida homeowners trust us with their biggest asset.
                These are real customers who sold their houses to us.
              </p>
              <div className="flex items-center justify-center">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="ml-3 text-xl">4.9/5 from 500+ customers</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Video Testimonials */}
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
                Video Testimonials
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Hear directly from our customers about their experience selling their house to us.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {videoTestimonials.map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="relative">
                    <img
                      src={video.thumbnail}
                      alt={video.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 text-blue-600 ml-1" />
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {video.amount}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">{video.name}</h3>
                        <div className="flex items-center text-gray-600">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span className="text-sm">{video.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-3 inline-block">
                      {video.situation}
                    </div>
                    <p className="text-gray-600 italic">"{video.preview}"</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Written Testimonials */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-display font-bold text-4xl md:text-5xl text-gray-900 mb-6">
                Customer Success Stories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real reviews from real customers who sold their Florida houses to us.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {writtenTestimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <Quote className="w-8 h-8 text-blue-300 mb-4" />
                  
                  <div className="flex items-center mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>

                  <div className="flex items-center space-x-4 mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="flex items-center text-gray-600 text-sm">
                        <MapPin className="w-3 h-3 mr-1" />
                        {testimonial.location}
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                      {testimonial.situation}
                    </div>
                    <div className="text-green-600 font-bold">{testimonial.amount}</div>
                  </div>

                  <div className="text-xs text-gray-500 mt-2">{testimonial.date}</div>
                </motion.div>
              ))}
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
                Ready to Join Our Success Stories?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Get your guaranteed cash offer today and see why hundreds of Florida homeowners 
                trust us with their biggest asset.
              </p>
              <Button
                size="lg"
                className="cta-gradient text-white px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 animate-pulse-glow"
              >
                Get My Cash Offer Now
              </Button>
              <div className="mt-6 text-blue-200">
                ⭐ Join 500+ satisfied customers with 4.9/5 rating
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}