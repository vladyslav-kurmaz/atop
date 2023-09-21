import ProductPage from "@/pages/ProductPage"

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products',
  description: 'On this page you have saw our products'
}

import './Products.scss';
// export const metadata: Metadata = {
//   title: 'AETD Products', 
// }

export default function Products() {

  

  return (
    <ProductPage/>
  )
}