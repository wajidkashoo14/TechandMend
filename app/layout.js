
import ContactStrip from '@/components/ContactStrip'
import './globals.css'
import { Montserrat } from 'next/font/google'
import Navbar from '@/components/Nav'
import Footer from '@/components/Footer'

const Mont = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Tech and Mend',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={Mont.className}>
       <ContactStrip />
       <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
