import './globals.css'
import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
// import dynamic from 'next/dynamic';

// const Header = dynamic(() => import('../components/Header/Header'), {
//   ssr: false,
// });

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AETD',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
