import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPin, TrendingUp, Home, ArrowLeft, Phone, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';

// Simple dataset used for both routing and rendering insights
// Keep keys in sync with tiles on /service-areas
const toSlug = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const AREAS = [
  // Primary areas with richer details
  { name: 'Tampa', county: 'Hillsborough County', population: '400,000+', avgHomePrice: '$285,000', highlights: ['Downtown high-rises', 'Historic neighborhoods', 'Waterfront living'] },
  { name: 'St. Petersburg', county: 'Pinellas County', population: '260,000+', avgHomePrice: '$320,000', highlights: ['Waterfront condos', 'Arts district', 'Beach communities'] },
  { name: 'Clearwater', county: 'Pinellas County', population: '115,000+', avgHomePrice: '$295,000', highlights: ['World‑class beaches', 'Family neighborhoods', 'Golf communities'] },
  { name: 'Brandon', county: 'Hillsborough County', population: '115,000+', avgHomePrice: '$275,000', highlights: ['Suburban living', 'Excellent schools', 'Shopping & dining'] },
  { name: 'Riverview', county: 'Hillsborough County', population: '95,000+', avgHomePrice: '$310,000', highlights: ['New developments', 'Master‑planned communities', 'Modern homes'] },
  { name: 'Plant City', county: 'Hillsborough County', population: '40,000+', avgHomePrice: '$225,000', highlights: ['Historic charm', 'Rural properties', 'Agricultural land'] },
  // Additional areas (lighter details)
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
].map(a => ({ ...a, slug: toSlug(a.name) }));

export function generateStaticParams() {
  return AREAS.map(a => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const area = AREAS.find(a => a.slug === params.slug);
  const title = area ? `${area.name} Home Buyers | Foxy` : 'Service Area | Foxy';
  const description = area ? `We buy houses in ${area.name}, ${area.county}. Get a fast, fair cash offer with local expertise.` : 'Local service area insights.';
  const url = area ? `https://www.foxyhomebuyer.com/service-areas/${area.slug}` : 'https://www.foxyhomebuyer.com/service-areas';
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: 'article' }
  };
}

export default function AreaPage({ params }: { params: { slug: string } }) {
  const area = AREAS.find(a => a.slug === params.slug);
  if (!area) return notFound();

  const fallbackInsights = [
    'Cash offers within 24 hours',
    'Close in as little as 7 days',
    'No repairs, fees, or agents',
    'We handle liens, code violations, and probate'
  ];

  const insights = 'highlights' in area && Array.isArray((area as any).highlights)
    ? (area as any).highlights
    : fallbackInsights;

  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-16 hero-gradient text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <Link href="/service-areas" className="inline-flex items-center text-blue-100 hover:text-white mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to service areas
              </Link>
              <h1 className="font-display font-bold text-4xl md:text-6xl mb-4">Sell Your House in {area.name}</h1>
              <p className="text-blue-100 text-lg md:text-xl">We buy houses in {area.name} and surrounding areas of {area.county}. Local experts. Fair cash offers. Fast closings.</p>
              <div className="mt-6 flex flex-wrap gap-4">
                <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                  <MapPin className="w-4 h-4 mr-2" /> {area.county}
                </div>
                <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                  <Home className="w-4 h-4 mr-2" /> Avg. Home Price: {(area as any).avgHomePrice ?? 'Varies by neighborhood'}
                </div>
                <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                  <TrendingUp className="w-4 h-4 mr-2" /> Close in ~7 days
                </div>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button className="cta-gradient text-white px-6 py-3" asChild>
                  <Link href="/sell-your-house">Get my cash offer</Link>
                </Button>
                <Button variant="outline" className="bg-white text-blue-700 border-white hover:bg-blue-50" asChild>
                  <a href="tel:+18664043664" className="flex items-center"><Phone className="w-4 h-4 mr-2" /> Call +1 (866) 404-3664</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Breadcrumbs */}
        <section className="py-3 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4">
            <nav className="text-sm text-gray-600" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2">
                <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
                <li>/</li>
                <li><Link href="/service-areas" className="hover:text-blue-600">Service Areas</Link></li>
                <li>/</li>
                <li className="text-gray-900 font-medium">{area.name}</li>
              </ol>
            </nav>
          </div>
        </section>

        {/* Insights */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="md:col-span-2">
                <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                  <h2 className="font-display font-bold text-2xl md:text-3xl text-gray-900 mb-4">About {area.name}</h2>
                  <p className="text-gray-600 mb-6">Here are quick insights for homeowners in {area.name}. Reach out for a precise, property‑specific offer today.</p>
                  <ul className="space-y-3">
                    {insights.map((item: string) => (
                      <li key={item} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <aside className="space-y-6">
                <div className="bg-blue-50 rounded-2xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Fast Facts</h3>
                  <div className="space-y-2 text-sm text-gray-700">
                    <div className="flex justify-between"><span>County</span><span className="font-medium">{area.county}</span></div>
                    <div className="flex justify-between"><span>Population</span><span className="font-medium">{(area as any).population ?? '—'}</span></div>
                    <div className="flex justify-between"><span>Avg. Home Price</span><span className="font-medium">{(area as any).avgHomePrice ?? '—'}</span></div>
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow">
                  <h3 className="font-semibold text-gray-900 mb-2">Get your cash offer</h3>
                  <p className="text-gray-600 mb-4">Answer a few questions and receive a no‑obligation offer for your {area.name} home.</p>
                  <Button className="w-full cta-gradient text-white" asChild>
                    <Link href="/sell-your-house">Start now</Link>
                  </Button>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Market at a glance */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-display font-bold text-3xl text-gray-900 mb-8">{area.name} market at a glance</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow text-center">
                  <div className="text-3xl font-bold text-gray-900">7 days</div>
                  <div className="text-gray-600 text-sm mt-1">Typical closing</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow text-center">
                  <div className="text-3xl font-bold text-gray-900">24 hrs</div>
                  <div className="text-gray-600 text-sm mt-1">Offer turnaround</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow text-center">
                  <div className="text-3xl font-bold text-gray-900">0 fees</div>
                  <div className="text-gray-600 text-sm mt-1">No commissions</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow text-center">
                  <div className="text-3xl font-bold text-gray-900">As‑is</div>
                  <div className="text-gray-600 text-sm mt-1">No repairs needed</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular neighborhoods */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-display font-bold text-3xl text-gray-900 mb-6">Popular neighborhoods in {area.name}</h2>
              <p className="text-gray-600 mb-6">We buy houses across all neighborhoods — from condos and townhomes to single‑family and multi‑unit properties.</p>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                {(insights as string[]).slice(0,6).map((tag) => (
                  <div key={tag} className="text-sm text-blue-700 bg-blue-50 px-3 py-2 rounded">
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-display font-bold text-3xl text-gray-900 mb-8">How selling in {area.name} works</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[{step:'1',title:'Tell us about the property',desc:'Share the address and a few details. No showings or staging required.'},
                  {step:'2',title:'Get a fair cash offer',desc:'We analyze local comps and your home condition to present a transparent offer.'},
                  {step:'3',title:'Close on your timeline',desc:'Pick a date that works for you. We handle paperwork and closing costs.'}].map(s => (
                  <div key={s.step} className="bg-white rounded-2xl p-6 shadow">
                    <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mb-3">{s.step}</div>
                    <h3 className="font-semibold text-gray-900 mb-1">{s.title}</h3>
                    <p className="text-gray-600 text-sm">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Common seller situations */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow">
                <h2 className="font-display font-bold text-2xl text-gray-900 mb-4">We can help if you’re facing…</h2>
                <ul className="space-y-3 text-gray-700">
                  {['Inherited property','Behind on payments','Major repairs needed','Bad tenants','Relocating or downsizing','Code violations or liens'].map(item => (
                    <li key={item} className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />{item}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-blue-50 rounded-2xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Talk to a local specialist</h3>
                <p className="text-gray-600 mb-4">No pressure. No obligations. Just straight answers for {area.name} homeowners.</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="cta-gradient text-white" asChild>
                    <Link href="/sell-your-house">Request my offer</Link>
                  </Button>
                  <Button variant="outline" className="bg-white text-blue-700 border-white hover:bg-blue-100" asChild>
                    <a href="tel:+18664043664" className="flex items-center"><Phone className="w-4 h-4 mr-2"/>Call us</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nearby areas */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-display font-bold text-3xl text-gray-900 mb-6">Explore nearby areas</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {AREAS.filter(a => a.slug !== (area as any).slug).slice(0,8).map(a => (
                  <Link key={a.slug} href={`/service-areas/${a.slug}`} className="bg-white rounded-lg p-3 shadow hover:shadow-md transition block">
                    <div className="font-semibold text-gray-900 text-sm">{a.name}</div>
                    <div className="text-xs text-gray-500">{a.county}</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* JSON-LD FAQ schema for SEO */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'Will you buy my house as-is?',
                  acceptedAnswer: { '@type': 'Answer', text: 'Yes. You do not need to clean, repair, or stage the property. We handle everything.' }
                },
                {
                  '@type': 'Question',
                  name: 'How fast can we close?',
                  acceptedAnswer: { '@type': 'Answer', text: 'We can close in as little as 7 days, or on your timeline.' }
                },
                {
                  '@type': 'Question',
                  name: 'Are there any fees or commissions?',
                  acceptedAnswer: { '@type': 'Answer', text: 'No. We cover standard closing costs and charge no commissions.' }
                }
              ]
            })
          }}
        />
      </main>
      <Footer />
    </>
  );
}
