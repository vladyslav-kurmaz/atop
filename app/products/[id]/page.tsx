// 'use client'
import {useState} from 'react';
import CustomSlider from '@/components/Slider/Slider';
import './product.scss';
import OneProductPage from '@/pages/OneProductPage';


type Props = {
  params: {
    id: string
  }
}

import type { Metadata } from 'next';

const dataProduct = [
  {title: 'Set of toilet elements for diesel trains and electric trains'},
  {title: 'Set of Eco Toilet for Passenger Cars Models 61-779, 47K (D)'},
  {title: 'Rail Transport'},
  {title: 'Underground Transport'},
  {title: 'Training Сomplex for Train Driver'},
  {title: 'Sanitary Module'},
  {title: 'Accessories for Major Repairs of Cars (open-air cart-cars)'},
  {title: 'Accessories for Major Repairs of Subway Cars of Models 81-7021, 81-7022, 81-7036, 81-7037'},
  {title: 'Fittings for Capital & Recovery Repair of Underground Vehicles & Cars Series 714/717'},
  {title: 'Fittings for Capital & Restored Repair Cars Series 47k'},
  {title: 'Fittings for Building New Cars Series 779'},
]


export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {

  const id = params.id
 
  const product =  dataProduct.filter((item, i) => i === +id)[0]
 
  return {
    title: product.title,
    description: `You can read about ${product.title}`

  }
}

export default function ProductPage({params}: Props) {
  

  return (
    <OneProductPage params={params}/>
  )
}