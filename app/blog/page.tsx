'use client';

import { useState, useMemo } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, Clock, User, ArrowRight, TrendingUp, Search, Filter, Eye, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All Posts');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const featuredPost = {
    title: 'Complete Guide to Selling Your House Fast in Florida 2024',
    excerpt: 'Everything you need to know about selling your Florida house quickly, including cash buyers, traditional sales, and avoiding common pitfalls.',
    image: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
    author: 'Foxy Home Buyer Team',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'Selling Tips',
    slug: 'complete-guide-selling-house-fast-florida-2024'
  };

  const blogPosts = [
    {
      title: 'How to Avoid Foreclosure in Florida: 5 Options That Work',
      excerpt: 'Facing foreclosure? Learn about 5 proven strategies to avoid foreclosure and protect your credit score.',
      image: 'https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      author: 'Legal Team',
      date: '2024-01-10',
      readTime: '6 min read',
      category: 'Foreclosure Help',
      slug: 'avoid-foreclosure-florida-5-options'
    },
    {
      title: 'Cash Buyers vs Realtors: Which is Better for Florida Sellers?',
      excerpt: 'Compare the pros and cons of selling to cash buyers versus using a realtor in today\'s Florida market.',
      image: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      author: 'Market Analysis Team',
      date: '2024-01-08',
      readTime: '7 min read',
      category: 'Market Insights',
      slug: 'cash-buyers-vs-realtors-florida-sellers'
    },
    {
      title: 'Inherited Property in Florida: Your Complete Action Plan',
      excerpt: 'Step-by-step guide to handling inherited property, from probate to selling, with tips to maximize value.',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      author: 'Estate Team',
      date: '2024-01-05',
      readTime: '9 min read',
      category: 'Inherited Property',
      slug: 'inherited-property-florida-action-plan'
    },
    {
      title: 'Tampa Real Estate Market Update: What Sellers Need to Know',
      excerpt: 'Latest trends, prices, and forecasts for Tampa Bay area homeowners considering selling in 2024.',
      image: 'https://images.pexels.com/photos/273209/pexels-photo-273209.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      author: 'Market Research',
      date: '2024-01-03',
      readTime: '5 min read',
      category: 'Market Updates',
      slug: 'tampa-real-estate-market-update-2024'
    },
    {
      title: 'Divorce and Real Estate: How to Handle Your Florida Home',
      excerpt: 'Navigate property division during divorce with expert advice on timing, valuation, and sale strategies.',
      image: 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      author: 'Legal Advisors',
      date: '2023-12-28',
      readTime: '8 min read',
      category: 'Legal Guidance',
      slug: 'divorce-real-estate-florida-home'
    },
    {
      title: 'Fix and Sell vs Sell As-Is: Which Saves More Money?',
      excerpt: 'Detailed cost analysis to help you decide whether to repair your house or sell it as-is to cash buyers.',
      image: 'https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      author: 'Construction Team',
      date: '2023-12-25',
      readTime: '6 min read',
      category: 'Cost Analysis',
      slug: 'fix-sell-vs-sell-as-is-cost-analysis'
    }
  ];

  const categories = [
    'All Posts',
    'Selling Tips',
    'Market Insights',
    'Foreclosure Help',
    'Inherited Property',
    'Legal Guidance',
    'Cost Analysis'
  ];

  // Filter posts based on active category and search query
  const filteredPosts = useMemo(() => {
    let posts = activeCategory === 'All Posts' 
      ? blogPosts 
      : blogPosts.filter(post => post.category === activeCategory);
    
    if (searchQuery.trim()) {
      posts = posts.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    return posts;
  }, [activeCategory, searchQuery]);

  // Popular posts (mock data - in real app would come from analytics)
  const popularPosts = blogPosts.slice(0, 3).map((post, index) => ({
    ...post,
    views: [2847, 3521, 1892][index] || 2000,
    likes: [156, 203, 89][index] || 100
  }));

  // Recent posts
  const recentPosts = [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 4);

  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-16 hero-gradient text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="font-display font-bold text-4xl md:text-5xl mb-6">
                Florida Real Estate Insights
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Expert advice, market insights, and practical tips for Florida homeowners
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 py-3 w-full border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <Button
                  variant="outline"
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2 px-6 py-3"
                >
                  <Filter className="w-4 h-4" />
                  Filters
                </Button>
              </div>
              
              <AnimatePresence>
                {showFilters && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 overflow-hidden"
                  >
                    <div className="flex flex-wrap gap-2">
                      {categories.map((category) => (
                        <button
                          key={category}
                          onClick={() => setActiveCategory(category)}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                            activeCategory === category
                              ? 'bg-blue-600 text-white shadow-lg'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Article</h2>
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="grid lg:grid-cols-2">
                  <div className="relative group">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover min-h-[300px] group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                      ⭐ Featured
                    </div>
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="text-sm text-blue-600 font-medium mb-3">
                      {featuredPost.category}
                    </div>
                    <h2 className="font-display font-bold text-2xl md:text-3xl text-gray-900 mb-4">
                      {featuredPost.title}
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center text-sm text-gray-500 mb-6">
                      <User className="w-4 h-4 mr-2" />
                      <span className="mr-4">{featuredPost.author}</span>
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="mr-4">{featuredPost.date}</span>
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                    <Button asChild className="self-start">
                      <Link href={`/blog/${featuredPost.slug}`}>
                        Read Full Article
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Popular Posts */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-4">
                  🔥 Popular Articles
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Most read articles by Florida homeowners this month
                </p>
              </motion.div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {popularPosts.map((post, index) => (
                  <motion.div
                    key={post.slug}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-2xl font-bold text-blue-600 bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                          <div className="flex items-center">
                            <Eye className="w-4 h-4 mr-1" />
                            <span>{post.views.toLocaleString()}</span>
                          </div>
                          <div className="flex items-center">
                            <Heart className="w-4 h-4 mr-1" />
                            <span>{post.likes}</span>
                          </div>
                        </div>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center group-hover:translate-x-1 transition-transform"
                        >
                          Read Article
                          <ArrowRight className="w-3 h-3 ml-1" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Recent Posts */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-4">
                  📰 Latest Updates
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Fresh insights and tips from our real estate experts
                </p>
              </motion.div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {recentPosts.map((post, index) => (
                  <motion.article
                    key={post.slug}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="relative mb-4">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-40 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-gray-700">
                        {post.readTime}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <span className="text-xs text-blue-600 font-medium">{post.category}</span>
                      <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center justify-between pt-2">
                        <span className="text-xs text-gray-500">
                          {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                        </span>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                        >
                          Read →
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Search Results Info */}
              {searchQuery && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center mb-8"
                >
                  <p className="text-gray-600">
                    Found <span className="font-semibold text-blue-600">{filteredPosts.length}</span> article{filteredPosts.length !== 1 ? 's' : ''} 
                    {searchQuery && ` for "${searchQuery}"`}
                    {activeCategory !== 'All Posts' && ` in ${activeCategory}`}
                  </p>
                </motion.div>
              )}

              {/* Categories Filter */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-8">
                  {searchQuery ? 'Search Results' : 'All Articles'}
                </h2>
                {!showFilters && (
                  <div className="flex flex-wrap justify-center gap-3">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                          category === activeCategory
                            ? 'bg-blue-600 text-white'
                            : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                )}
              </motion.div>

              {/* Blog Posts Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <motion.article
                    key={post.slug}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
                  >
                    <div className="relative">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-display font-bold text-xl text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <User className="w-4 h-4 mr-1" />
                        <span className="mr-3">{post.author}</span>
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-blue-600 hover:text-blue-800 font-medium flex items-center group-hover:translate-x-1 transition-transform"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto"
            >
              <TrendingUp className="w-12 h-12 mx-auto mb-6 text-blue-200" />
              <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
                Stay Informed
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Get the latest Florida real estate insights, market updates, and expert tips 
                delivered straight to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-full text-gray-900 placeholder-gray-500"
                />
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full">
                  Subscribe
                </Button>
              </div>
              <p className="text-sm text-blue-200 mt-4">
                No spam. Unsubscribe anytime. Weekly market insights only.
              </p>
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
                Ready to Sell Your House?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Stop reading about it and start doing it. Get your cash offer today 
                and see why hundreds of Florida homeowners choose us.
              </p>
              <Button
                size="lg"
                className="cta-gradient text-white px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 animate-pulse-glow"
              >
                Get My Cash Offer Now
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}