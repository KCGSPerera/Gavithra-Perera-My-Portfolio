import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Gavithra Perera - Software Engineering Portfolio',
    template: '%s | Gavithra Perera'
  },
  description: 'Software Engineer passionate about creating innovative digital solutions. Specializing in full-stack development with modern technologies.',
  keywords: [
    'Gavithra Perera',
    'Software Engineering',
    'Full Stack Developer', 
    'React.js',
    'Node.js',
    'TypeScript',
    'SLIIT',
    'Portfolio',
    'Web Development',
    'Sri Lanka'
  ],
  authors: [{ name: 'Gavithra Perera' }],
  creator: 'Gavithra Perera',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://gavithra-portfolio.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'Gavithra Perera - Software Engineering Portfolio',
    description: 'Software Engineering undergraduate passionate about creating innovative digital solutions.',
    siteName: 'Gavithra Perera Portfolio',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Gavithra Perera - Software Engineering Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gavithra Perera - Software Engineering Portfolio',
    description: 'Software Engineering undergraduate passionate about creating innovative digital solutions.',
    images: ['/images/twitter-image.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <div className="relative min-h-screen">
          
          {/* Background Pattern */}
          <div className="fixed inset-0 bg-[url('/images/noise.png')] opacity-[0.02] pointer-events-none"></div>
          
          {/* Main Layout */}
          <div className="relative z-10">
            <Navbar />
            <main className="pt-16 md:pt-20">
              {children}
            </main>
            <Footer />
          </div>

          {/* Background Effects */}
          <div className="fixed inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </body>
    </html>
  );
}