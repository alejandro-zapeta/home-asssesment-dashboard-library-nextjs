// app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';
import Providers from '@/components/Providers'; 

export const metadata = {
  title: 'Library Dashboard',
  description: 'Mock assessment dashboard'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-theme="light">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
