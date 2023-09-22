'use client';
import Preloader from "@/components/Preloader/Preloader";
import { Suspense, lazy } from "react"


const OneProduct = lazy(() => import('@/components/OneProduct/OneProduct'));

type Props = {
  params: {
    id: string
  }
}

const OneProductPage = ({params}: Props) => {
  return (
    <Suspense fallback={<Preloader/>}>
      <OneProduct params={params}/>
    </Suspense>
    
  )
}

export default OneProductPage;