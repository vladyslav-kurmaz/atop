import MainPage from '@/pages/MainPage';

import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'AETD',
}


import '../fonts/fonts.css';  
import './mainPage.scss';


export default function Home() {
  return (
    <MainPage/>
  )
}
