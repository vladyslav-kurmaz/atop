'use client'

import Preloader from "@/components/Preloader/Preloader";
import { Suspense, lazy } from "react"

const OneService = lazy(() => import('@/components/OneService/OneService'));

type Props = {
  params: {
    id: string
  }
}



const OneServicePage = ({params}: Props) => {
  return (
    <Suspense fallback={<Preloader/>}>
      <OneService params={params}/>
    </Suspense>
  )
}

export default OneServicePage