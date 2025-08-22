'use client';

import { } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPin, Star, Phone, CheckCircle, TrendingUp, Home, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function ServiceAreas() {
  const router = useRouter();

  // Helper to convert city names to URL slugs
  const toSlug = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  const primaryAreas = [
    {
      name: 'Tampa',
      county: 'Hillsborough County',
      population: '400,000+',
      avgHomePrice: '$285,000',
      description: 'Florida\'s third-largest city with a thriving downtown and diverse neighborhoods.',
      testimonial: {
        name: 'Maria R.',
        text: 'Sold my Tampa house in 8 days. Professional and fair offer!',
        rating: 5
      },
      features: ['Downtown High-Rises', 'Historic Neighborhoods', 'Waterfront Properties', 'Investment Properties']
    },
    {
      name: 'St. Petersburg',
      county: 'Pinellas County',
      population: '260,000+',
      avgHomePrice: '$320,000',
      description: 'Beautiful waterfront city known for arts, culture, and stunning sunsets.',
      testimonial: {
        name: 'Robert J.',
        text: 'Needed to relocate quickly. Foxy made it seamless and stress-free.',
        rating: 5
      },
      features: ['Waterfront Condos', 'Historic Homes', 'Arts District', 'Beach Communities']
    },
    {
      name: 'Clearwater',
      county: 'Pinellas County',
      population: '115,000+',
      avgHomePrice: '$295,000',
      description: 'Home to world-famous Clearwater Beach and family-friendly communities.',
      testimonial: {
        name: 'Jennifer L.',
        text: 'Inherited grandma\'s house. They handled everything perfectly.',
        rating: 5
      },
      features: ['Beach Properties', 'Family Neighborhoods', 'Golf Communities', 'Vacation Rentals']
    },
    {
      name: 'Brandon',
      county: 'Hillsborough County',
      population: '115,000+',
      avgHomePrice: '$275,000',
      description: 'Growing suburban community with excellent schools and family amenities.',
      testimonial: {
        name: 'Mike T.',
        text: 'House needed major repairs. Got a fair cash offer as-is.',
        rating: 5
      },
      features: ['Suburban Homes', 'New Construction', 'Family Communities', 'Shopping Centers']
    },
    {
      name: 'Riverview',
      county: 'Hillsborough County',
      population: '95,000+',
      avgHomePrice: '$310,000',
      description: 'Fast-growing community with new developments and modern amenities.',
      testimonial: {
        name: 'Lisa C.',
        text: 'Divorce situation made easy. Professional and discreet service.',
        rating: 5
      },
      features: ['New Developments', 'Master-Planned Communities', 'Modern Homes', 'Family-Friendly']
    },
    {
      name: 'Plant City',
      county: 'Hillsborough County',
      population: '40,000+',
      avgHomePrice: '$225,000',
      description: 'Historic city known for strawberries and small-town charm.',
      testimonial: {
        name: 'David M.',
        text: 'Tired of being a landlord. Sold rental property with tenants in place.',
        rating: 5
      },
      features: ['Historic Homes', 'Rural Properties', 'Agricultural Land', 'Small Town Living']
    }
  ];

  const additionalAreas = [
    { name: 'Lakeland', county: 'Polk County' },
    { name: 'Sarasota', county: 'Sarasota County' },
    { name: 'Bradenton', county: 'Manatee County' },
    { name: 'Ocala', county: 'Marion County' },
    { name: 'Gainesville', county: 'Alachua County' },
    { name: 'Jacksonville', county: 'Duval County' },
    { name: 'Orlando', county: 'Orange County' },
    { name: 'Miami', county: 'Miami-Dade County' },
    { name: 'Fort Lauderdale', county: 'Broward County' },
    { name: 'West Palm Beach', county: 'Palm Beach County' },
    { name: 'Fort Myers', county: 'Lee County' },
    { name: 'Naples', county: 'Collier County' }
  ];

  const stats = [
    { number: '67', label: 'Florida Counties Served', icon: MapPin },
    { number: '500+', label: 'Houses Purchased', icon: CheckCircle },
    { number: '7', label: 'Average Days to Close', icon: TrendingUp },
    { number: '4.9/5', label: 'Customer Rating', icon: Star }
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
                We Buy Houses Across Florida
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                From Tampa Bay to Miami, Jacksonville to Naples - we're your local cash home buyers
              </p>
              <div className="flex items-center justify-center space-x-6">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-green-400" />
                  <span>67 Counties</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-blue-300" />
                  <span>500+ Houses Bought</span>
                </div>
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
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
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

        {/* Primary Service Areas */}
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
                Primary Service Areas
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We specialize in these key Florida markets where we have the most experience 
                and local knowledge to provide the best service.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {primaryAreas.map((area, index) => (
                <motion.div
                  key={area.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer"
                  onClick={() => router.push(`/service-areas/${toSlug(area.name)}`)}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-display font-bold text-xl text-gray-900">
                        {area.name}
                      </h3>
                      <p className="text-gray-600 text-sm">{area.county}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500">Avg. Home Price</div>
                      <div className="font-bold text-green-600">{area.avgHomePrice}</div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">{area.description}</p>

                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {area.features.map((feature) => (
                      <div key={feature} className="text-sm text-blue-600 bg-blue-50 px-2 py-1 rounded">
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="mb-4">
                    <Button size="sm" variant="outline" className="text-blue-700 border-blue-200 hover:bg-blue-50" asChild>
                      <Link href={`/service-areas/${toSlug(area.name)}`}>View insights for {area.name}</Link>
                    </Button>
                  </div>

                  {/* Testimonial */}
                  <div className="border-t pt-4">
                    <div className="flex items-center mb-2">
                      <div className="flex">
                        {[...Array(area.testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="ml-2 font-semibold text-sm">{area.testimonial.name}</span>
                    </div>
                    <p className="text-sm text-gray-600 italic">"{area.testimonial.text}"</p>
                  </div>

                  {/* The detailed content now lives on the city insights page */}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Florida Map Section */}
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
                Statewide Coverage
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We buy houses throughout Florida. Even if your city isn't listed above, 
                we likely service your area.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              {/* Florida Map Placeholder */}
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg mb-12">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-6" />
                  <h3 className="font-display font-bold text-2xl text-gray-900 mb-4">
                    Interactive Florida Map
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Click on any region to see if we service your area and get local market insights.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {additionalAreas.map((area) => (
                      <Link
                        key={area.name}
                        href={`/service-areas/${toSlug(area.name)}`}
                        className="bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow cursor-pointer block"
                        aria-label={`View insights for ${area.name}`}
                      >
                        <div className="font-semibold text-gray-900 text-sm">{area.name}</div>
                        <div className="text-xs text-gray-500">{area.county}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Local Expertise Section */}
        <section className="py-20 bg-gray-50">
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
                  Why Choose Local Florida Experts?
                </h2>
                <p className="text-xl text-gray-600">
                  We're not just cash buyers - we're Florida real estate specialists who understand 
                  your local market inside and out.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="font-display font-bold text-xl text-gray-900 mb-4">
                    Local Market Knowledge
                  </h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Current market values and trends
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Neighborhood-specific pricing
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Local regulatory knowledge
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Hurricane and flood zone expertise
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="font-display font-bold text-xl text-gray-900 mb-4">
                    Florida-Specific Services
                  </h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Homestead exemption guidance
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Hurricane damage assessments
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      HOA and condo association experience
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Vacation rental property expertise
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
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
                Ready to Sell Your Florida House?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Whether you're in Miami or Jacksonville, Tampa or Orlando - we're here to help. 
                Get your cash offer today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="cta-gradient text-white px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 animate-pulse-glow"
                  asChild
                >
                  <Link href="/sell-your-house" aria-label="Get My Cash Offer">
                    Get My Cash Offer
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white text-blue-600 border-white hover:bg-blue-50 px-8 py-4 rounded-full font-semibold text-lg"
                  asChild
                >
                  <a href="tel:+18664043664" className="flex items-center">
                    <Phone className="w-5 h-5 mr-2" />
                    Call +1 (866) 404-3664
                  </a>
                </Button>
              </div>
              <div className="mt-6 text-blue-200 flex items-center justify-center gap-2">
                <Home className="w-4 h-4 text-white" />
                <span>Serving all 67 Florida counties</span>
                <span>•</span>
                <Star className="w-4 h-4 text-white" />
                <span>4.9/5 rating</span>
                <span>•</span>
                <Zap className="w-4 h-4 text-white" />
                <span>24/7 available</span>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}