import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BTC One AI - Revolutionize Your Bitcoin Journey',
  description: 'Harness the power of artificial intelligence to maximize your Bitcoin investments. Get real-time insights, predictive analytics, and automated trading strategies.',
  keywords: 'Bitcoin, AI, trading, cryptocurrency, artificial intelligence, blockchain',
  authors: [{ name: 'BTC One AI Team' }],
  creator: 'BTC One AI',
  publisher: 'BTC One AI',
  openGraph: {
    title: 'BTC One AI - Revolutionize Your Bitcoin Journey',
    description: 'Harness the power of artificial intelligence to maximize your Bitcoin investments.',
    url: 'https://btconeai.com',
    siteName: 'BTC One AI',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BTC One AI - Revolutionize Your Bitcoin Journey',
    description: 'Harness the power of artificial intelligence to maximize your Bitcoin investments.',
    creator: '@btconeai',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
