import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import SideBar from './components/SideBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mastering Tailwind CSS',
  description: 'Project to practice Tailwind CSS'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body className={inter.className}>
        <div className="grid min-h-screen grid-cols-app">
          <aside>
            <SideBar />
          </aside>
          <main className="px-8 pb-12 pt-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
