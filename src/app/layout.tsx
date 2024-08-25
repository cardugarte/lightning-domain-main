import React from 'react';
import '~/styles/globals.css';

export const metadata = {
  title: 'De exploradores para exploradores',
  description: 'La herramienta social y de pagos con Bitcoin',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
