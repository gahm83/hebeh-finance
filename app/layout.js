import { Montserrat } from 'next/font/google';
import Navbar from './components/navbar/navbar';
import WhatsappButton from './components/whastapp';
import './globals.css';

const montserrat = Montserrat({
  weight: ['200','300','400','500','700'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar />
        {children}
        <WhatsappButton />
      </body>
    </html>
  )
}