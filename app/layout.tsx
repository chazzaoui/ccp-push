import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { initializeFirebase } from '../pushnotification.js';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Troop',
  description: 'Troop app'
};

initializeFirebase();
export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <link rel='manifest' href='/manifest.json' />
        <link rel='apple-touch-icon' href='image/icon-512x512.png'></link>
        <meta name='theme-color' content='#000' />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
