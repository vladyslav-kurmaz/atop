

import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';


export const metadata: Metadata = {
  title: 'A.E.T.D.',
  description: 'Aerospace technologies of equipment and development'
}

export default function RootLayout({
  children,
  modal
}: {
  children: React.ReactNode,
  modal: React.ReactNode
}) {

  return (
    <html lang="en">
      <body>

        {modal}
        <Header/>

          <main>
            {children}
          </main>
          
        <Footer/>
      </body>
    </html>
  )
}
