

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products',
  description: 'On this page you have saw our products'
}

import './Products.scss';
import ProductList from "@/components/ProductList/ProductList";
// export const metadata: Metadata = {
//   title: 'AETD Products', 
// }

export default function Products() {

  

  return (
    <ProductList/>
  )
}