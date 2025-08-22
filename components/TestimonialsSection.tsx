'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah M.',
      location: 'Tampa, FL',
      rating: 5,
      text: "Foxy Home Buyer saved me from foreclosure. They closed in just 8 days and paid exactly what they promised. I can't thank them enough!",
      situation: 'Avoided Foreclosure',
      amount: '$245,000',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    },
    {
      id: 2,
      name: 'Mike R.',
      location: 'St. Petersburg, FL',
      rating: 5,
      text: "My house needed $30k in repairs. These guys bought it as-is for a fair price. No stress, no repairs, just cash in my pocket.",
      situation: 'As-Is Sale',
      amount: '$189,500',
      image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    },
    {
      id: 3,
      name: 'Jennifer L.',
      location: 'Clearwater, FL',
      rating: 5,
      text: "Inherited my grandmother's house and didn't know what to do. Foxy made it simple and stress-free. Closed in 2 weeks!",
      situation: 'Inherited Property',
      amount: '$298,000',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    },
    {
      id: 4,
      name: 'Robert D.',
      location: 'Riverview, FL',
      rating: 5,
      text: "Job relocation meant I had to sell fast. Foxy bought my house in 10 days - exactly when I needed it. Professional and reliable.",
      situation: 'Quick Relocation',
      amount: '$356,700',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    },
  ];

  // Auto-advance testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-white">
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
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what real Florida homeowners 
            say about selling their houses to us.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-white p-8 shadow-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-2 gap-8 items-center"
              >
                {/* Testimonial Content */}
                <div>
                  <Quote className="w-12 h-12 text-blue-300 ml-10 mb-6" />
                  
                  {/* Rating */}
                  <div className="flex items-center ml-10 mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-lg md:text-xl text-gray-700 ml-10 mb-6 leading-relaxed">
                    "{testimonials[currentIndex].text}"
                  </blockquote>

                  {/* Customer Info */}
                  <div className="flex items-center space-x-4 ml-10">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-gray-600">
                        {testimonials[currentIndex].location}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stats Card */}
                <div className="bg-white rounded-2xl mr-10 p-8 shadow-lg">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">
                      {testimonials[currentIndex].amount}
                    </div>
                    <div className="text-gray-600 mb-4">Cash Received</div>
                    <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                      {testimonials[currentIndex].situation}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 rounded-full p-3 shadow-lg transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 rounded-full p-3 shadow-lg transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
        >
          {[
            { number: '500+', label: 'Houses Bought' },
            { number: '4.9/5', label: 'Customer Rating' },
            { number: '7 Days', label: 'Average Closing' },
            { number: '100%', label: 'Satisfaction Rate' },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;