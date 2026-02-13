import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { SessionProvider } from 'next-auth/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'FlutterOTA Pro - Enterprise Flutter over-the-air update management',
  description: 'Value Proposition: Enables Flutter developers to deploy instant app updates without app store delays, reducing downtime and user churn from critical bug fixes

Target Customer: Flutter development teams at mid-market companies and agencies building customer-facing mobile applications

---
Category: Micro-SaaS
Target Market: Flutter development teams at mid-market companies and agencies building customer-facing mobile applications
Source Hypothesis ID: 5f8b5887-4c3e-45fa-b763-d614cd0de393
Promotion Type: automatic',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <nav className="border-b">
            <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
              <a href="/" className="font-bold text-lg">FlutterOTA Pro - Enterprise Flutter over-the-air update management</a>
              <div className="flex items-center gap-4">
                <a href="/dashboard" className="text-sm hover:text-blue-600">Dashboard</a>
                <a href="/pricing" className="text-sm hover:text-blue-600">Pricing</a>
              </div>
            </div>
          </nav>
          <main>{children}</main>
        </SessionProvider>
      </body>
    </html>
  );
}
