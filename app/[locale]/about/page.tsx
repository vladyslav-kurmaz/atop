import './About.scss';

import AboutUs from '@/pages/AboutPage';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About A.E.T.D.',
  description: 'About A.E.T.D.'
}

export default function About() {

  return (
    <AboutUs/>
  )
}