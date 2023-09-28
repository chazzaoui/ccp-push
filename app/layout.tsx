import { app } from '@/firebase';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { initializeFirebase } from '../pushnotification.tsx';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Troop',
  description: 'Troop app'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  initializeFirebase();

  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
