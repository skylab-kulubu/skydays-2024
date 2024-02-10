import { Urbanist } from 'next/font/google';
import './globals.css';

const urbanist = Urbanist({ subsets: ['latin'] });

export const metadata = {
  title: 'Skydays',
  description: 'Skydays',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${urbanist.className} `}
        style={{
          backgroundImage: "url('/background.png')",
          backgroundSize: 'cover',
          height: '500vh',
          overflowX: 'hidden',
        }}
      >
        {children}
      </body>
    </html>
  );
}
