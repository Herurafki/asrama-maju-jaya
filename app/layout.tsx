import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Asrama Nurul Hikmah - Asrama Terpadu Islami',
  description: 'Asrama terpadu yang mengembangkan akhlak mulia, prestasi akademik, dan kemandirian santri dalam lingkungan Islami yang kondusif',
  keywords: 'asrama, pesantren, pendidikan islam, santri, tahfidz',
  authors: [{ name: 'Asrama Nurul Hikmah' }],
  openGraph: {
    title: 'Asrama Nurul Hikmah - Asrama Terpadu Islami',
    description: 'Asrama terpadu yang mengembangkan akhlak mulia, prestasi akademik, dan kemandirian santri dalam lingkungan Islami yang kondusif',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://asrama.local',
    siteName: 'Asrama Nurul Hikmah',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Asrama Nurul Hikmah',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Asrama Nurul Hikmah - Asrama Terpadu Islami',
    description: 'Asrama terpadu yang mengembangkan akhlak mulia, prestasi akademik, dan kemandirian santri dalam lingkungan Islami yang kondusif',
    images: ['/og-image.jpg'],
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
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          {children}
          <Toaster />
          <Sonner />
        </Providers>
      </body>
    </html>
  );
}