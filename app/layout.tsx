

import './globals.css';
import type { Metadata } from 'next'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import WriteUs from '@/components/WriteUs/WriteUs';
import {useState} from 'react';

export const metadata: Metadata = {
  title: 'AETD',
}

export default function RootLayout({
  children,

}: {
  children: React.ReactNode
}) {

  // const [modal, setModal] = useState(false);
  let openModal = false;
  return (
    <html lang="en">
      <body>

        
        <Header 
          // open={() => setModal(true)}
          // open={openModal}
          />
          {/* {modal ? <WriteUs close={() => setModal(false)}/> : null} */}

          <main>
            {children}
          </main>
          
        <Footer 
          // open={() => setModal(true)}
        />
      </body>
    </html>
  )
}
