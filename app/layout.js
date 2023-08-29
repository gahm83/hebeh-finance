import { Montserrat } from 'next/font/google';
import Navbar from './components/navbar/navbar';
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
      <body className={`bg-[#051b38] ${montserrat.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}