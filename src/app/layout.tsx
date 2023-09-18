import React from 'react';
import Head from 'next/head';
import { Inter } from 'next/font/google';
import './globals.css'

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Vinod Kumar - Full Stack Web Developer',
  description: 'Front-end, Back-end, and Full Stack Developer specializing in Mern Stack.',
  siteUrl: 'https://your-website-url.com', // Replace with your actual website URL
  imageUrl: '/link', // Replace with a link to your website's image
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="robots" content="index, follow" />

        {/* Open Graph (OG) tags for social sharing */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content={metadata.siteUrl} />
        <meta property="og:image" content={metadata.imageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card tags for Twitter sharing */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.imageUrl} />

        {/* Canonical URL to prevent duplicate content */}
        <link rel="canonical" href={metadata.siteUrl} />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

        {/* CSS or JavaScript files */}
        {/* Include any external CSS or JavaScript files here */}
      </Head>
      <body className={inter.className}>{children}</body>
    </>
  );
}
