import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: 'Sell Your Florida House Fast for Cash | Foxy Home Buyer LLC',
  description: 'Get a guaranteed cash offer for your Florida house in just 3 minutes. No repairs, no fees, close in 7 days. $2,500 guarantee if we fail to close on time.',
  icons: {
    icon: [
      { url: '/images/foxy-logo.svg', type: 'image/svg+xml' }
    ]
  },
  keywords: 'sell house fast Florida, cash home buyer, we buy houses Florida, sell house cash, avoid foreclosure Florida, Tampa cash buyer, St Petersburg house buyer, Clearwater sell house fast',
  openGraph: {
    title: 'Sell Your Florida House Fast for Cash | Foxy Home Buyer LLC',
    description: 'Get a guaranteed cash offer for your Florida house in just 3 minutes. No repairs, no fees, close in 7 days.',
    url: 'https://foxyhomebuyer.com',
    siteName: 'Foxy Home Buyer LLC',
    type: 'website',
    images: [
      {
        url: 'https://foxyhomebuyer.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Foxy Home Buyer - Cash Home Buyers in Florida',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@foxyhomebuyer',
    title: 'Sell Your Florida House Fast for Cash | Foxy Home Buyer LLC',
    description: 'Get a guaranteed cash offer for your Florida house in just 3 minutes. No repairs, no fees, close in 7 days.',
    images: ['https://foxyhomebuyer.com/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}