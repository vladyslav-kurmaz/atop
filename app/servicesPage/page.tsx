
import ServicesPage from '@/pages/ServicesPage';

import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Services',
  description: 'On this page you have saw our services'
}

import './servicesPage.scss';

export default function MainServicesPage() {
  return (
   <>
      <ServicesPage/>
   </>
  )
}