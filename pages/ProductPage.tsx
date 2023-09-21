'use client'
import { Suspense, lazy } from "react"

const ProductList = lazy(() => import('@/components/ProductList/ProductList'));

const ProductPage = () => {
  return (
    <Suspense>
      <ProductList/>
    </Suspense>
  )
}

export default ProductPage;