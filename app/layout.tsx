import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import Navigation from './components/navigation';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
