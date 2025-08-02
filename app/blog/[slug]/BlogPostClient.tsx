'use client';

import { useState, useEffect } from 'react';
import { Calendar, Clock, User, ArrowLeft, ArrowRight, Share2, BookOpen, List, Facebook, Twitter, Linkedin, Copy, CheckCircle, Eye, Heart, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

interface BlogPost {
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  slug: string;
}

interface BlogPostClientProps {
  post: BlogPost;
  allPosts: BlogPost[];
}

export default function BlogPostClient({ post, allPosts }: BlogPostClientProps) {
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const [showTableOfContents, setShowTableOfContents] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(156);
  const [viewCount] = useState(2847);

  // Extract headings for table of contents
  const extractHeadings = (content: string) => {
    const headingRegex = /<h([2-6])>(.*?)<\/h[2-6]>/g;
    const headings = [];
    let match;
    
    while ((match = headingRegex.exec(content)) !== null) {
      headings.push({
        level: parseInt(match[1]),
        text: match[2],
        id: match[2].toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
      });
    }
    
    return headings;
  };

  const headings = extractHeadings(post.content);

  // Handle scroll spy for table of contents
  useEffect(() => {
    const handleScroll = () => {
      const sections = headings.map(h => document.getElementById(h.id)).filter(Boolean);
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(headings[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [headings]);

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareTitle = post.title;

  const handleShare = (platform: string) => {
    const url = encodeURIComponent(shareUrl);
    const title = encodeURIComponent(shareTitle);
    
    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      twitter: `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`
    };

    if (shareUrls[platform as keyof typeof shareUrls]) {
      window.open(shareUrls[platform as keyof typeof shareUrls], '_blank', 'width=600,height=400');
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  // Process content to add IDs to headings
  const processedContent = post.content.replace(
    /<h([2-6])>(.*?)<\/h[2-6]>/g,
    (match, level, text) => {
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      return `<h${level} id="${id}">${text}</h${level}>`;
    }
  );

  // Get related posts (exclude current post)
  const relatedPosts = allPosts.filter(p => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      <main className="pt-20">
        {/* Hero Section */}
        <div className="relative h-[60vh] overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${post.image})` }}
          >
            <div className="absolute inset-0 bg-black/50" />
          </div>
          
          <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-6"
              >
                <Link 
                  href="/blog"
                  className="inline-flex items-center text-white/80 hover:text-white transition-colors mb-4"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Blog
                </Link>
                
                <div className="flex items-center gap-4 text-white/80 text-sm mb-4">
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {post.author}
                  </div>
                </div>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              >
                {post.title}
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-white/90 max-w-3xl"
              >
                {post.excerpt}
              </motion.p>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex gap-8">
              {/* Table of Contents - Desktop */}
              <div className="hidden lg:block w-64 flex-shrink-0">
                <div className="sticky top-24">
                  <div className="bg-white rounded-lg shadow-lg p-6 border">
                    <div className="flex items-center gap-2 mb-4">
                      <List className="w-5 h-5 text-blue-600" />
                      <h3 className="font-semibold text-gray-900">Table of Contents</h3>
                    </div>
                    <nav className="space-y-2">
                      {headings.map((heading, index) => (
                        <a
                          key={index}
                          href={`#${heading.id}`}
                          className={`block text-sm py-1 px-2 rounded transition-colors ${
                            activeSection === heading.id
                              ? 'bg-blue-100 text-blue-700 font-medium'
                              : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                          }`}
                          style={{ paddingLeft: `${(heading.level - 2) * 12 + 8}px` }}
                        >
                          {heading.text}
                        </a>
                      ))}
                    </nav>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1">
                {/* Article Stats and Actions */}
                <div className="flex items-center justify-between mb-8 pb-6 border-b">
                  <div className="flex items-center gap-6 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      {viewCount.toLocaleString()} views
                    </div>
                    <button
                      onClick={handleLike}
                      className={`flex items-center gap-1 transition-colors ${
                        isLiked ? 'text-red-500' : 'hover:text-red-500'
                      }`}
                    >
                      <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
                      {likeCount} likes
                    </button>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="w-4 h-4" />
                      12 comments
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    {/* Table of Contents - Mobile */}
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setShowTableOfContents(!showTableOfContents)}
                      className="lg:hidden"
                    >
                      <List className="w-4 h-4 mr-2" />
                      Contents
                    </Button>

                    {/* Share Button */}
                    <div className="relative">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setShowShareMenu(!showShareMenu)}
                      >
                        <Share2 className="w-4 h-4 mr-2" />
                        Share
                      </Button>

                      <AnimatePresence>
                        {showShareMenu && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: -10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -10 }}
                            className="absolute right-0 top-full mt-2 bg-white rounded-lg shadow-lg border p-4 z-50 min-w-[200px]"
                          >
                            <div className="space-y-2">
                              <button
                                onClick={() => handleShare('facebook')}
                                className="flex items-center gap-3 w-full p-2 text-left hover:bg-gray-50 rounded"
                              >
                                <Facebook className="w-4 h-4 text-blue-600" />
                                Facebook
                              </button>
                              <button
                                onClick={() => handleShare('twitter')}
                                className="flex items-center gap-3 w-full p-2 text-left hover:bg-gray-50 rounded"
                              >
                                <Twitter className="w-4 h-4 text-blue-400" />
                                Twitter
                              </button>
                              <button
                                onClick={() => handleShare('linkedin')}
                                className="flex items-center gap-3 w-full p-2 text-left hover:bg-gray-50 rounded"
                              >
                                <Linkedin className="w-4 h-4 text-blue-700" />
                                LinkedIn
                              </button>
                              <button
                                onClick={handleCopyLink}
                                className="flex items-center gap-3 w-full p-2 text-left hover:bg-gray-50 rounded"
                              >
                                {copySuccess ? (
                                  <CheckCircle className="w-4 h-4 text-green-500" />
                                ) : (
                                  <Copy className="w-4 h-4 text-gray-600" />
                                )}
                                {copySuccess ? 'Copied!' : 'Copy Link'}
                              </button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>

                {/* Mobile Table of Contents */}
                <AnimatePresence>
                  {showTableOfContents && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="lg:hidden mb-8 bg-white rounded-lg shadow-lg p-6 border"
                    >
                      <div className="flex items-center gap-2 mb-4">
                        <List className="w-5 h-5 text-blue-600" />
                        <h3 className="font-semibold text-gray-900">Table of Contents</h3>
                      </div>
                      <nav className="space-y-2">
                        {headings.map((heading, index) => (
                          <a
                            key={index}
                            href={`#${heading.id}`}
                            onClick={() => setShowTableOfContents(false)}
                            className={`block text-sm py-1 px-2 rounded transition-colors ${
                              activeSection === heading.id
                                ? 'bg-blue-100 text-blue-700 font-medium'
                                : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                            }`}
                            style={{ paddingLeft: `${(heading.level - 2) * 12 + 8}px` }}
                          >
                            {heading.text}
                          </a>
                        ))}
                      </nav>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Article Content */}
                <motion.article
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-strong:text-gray-900"
                  dangerouslySetInnerHTML={{ __html: processedContent }}
                />

                {/* CTA Section */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="mt-12 p-8 bg-gradient-to-r from-blue-600 to-orange-500 rounded-lg text-white text-center"
                >
                  <h3 className="text-2xl font-bold mb-4">Ready to Sell Your House Fast?</h3>
                  <p className="text-lg mb-6 opacity-90">
                    Get a no-obligation cash offer for your Florida property today. We buy houses in any condition!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                      Get Cash Offer
                    </Button>
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                      Call (555) 123-4567
                    </Button>
                  </div>
                </motion.div>

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-16"
                  >
                    <h3 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      {relatedPosts.map((relatedPost, index) => (
                        <Link
                          key={index}
                          href={`/blog/${relatedPost.slug}`}
                          className="group block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                        >
                          <div className="aspect-video overflow-hidden">
                            <img
                              src={relatedPost.image}
                              alt={relatedPost.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <div className="p-6">
                            <div className="text-sm text-orange-600 font-medium mb-2">
                              {relatedPost.category}
                            </div>
                            <h4 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                              {relatedPost.title}
                            </h4>
                            <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                              {relatedPost.excerpt}
                            </p>
                            <div className="flex items-center text-xs text-gray-500">
                              <Calendar className="w-3 h-3 mr-1" />
                              {new Date(relatedPost.date).toLocaleDateString()}
                              <span className="mx-2">•</span>
                              <Clock className="w-3 h-3 mr-1" />
                              {relatedPost.readTime}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
