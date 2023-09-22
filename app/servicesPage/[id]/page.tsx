
import OneServicePage from '@/pages/OneServicePage';
import './servicePage.scss';
import { Service } from "@/types/type";

type Props = {
  params: {
    id: string,

  }
}

const dataServices: Service[] = [
  {src: '/servicesPage/alectrical_application.webp', title: 'Electrical Application', description: 'Home Electrical equipment kitSTC 3x8 voltage converter APS Energia SA'},
  {src: '/servicesPage/development_of_construction_documentation.webp', title: 'Construction Documentation', description: 'Company combined warehouse design and technological division.'},
  {src: '/servicesPage/develop_desctop.webp', title: 'Desktop Applications', description: 'One of the areas of software development is the development of software applications.'},
  {src: '/servicesPage/software_development.webp', title: 'Software Development', description: 'Software that fully meets the requirements of customers and provides qualified assistance at all stages.'},
  {src: '/servicesPage/it-autsorsing.webp', title: 'IT-outsourcing', description: 'Transfer to a specialized company of fullness or private functions related to information technology.'},
  {src: '/servicesPage/web_dev.webp', title: 'Web Development', description: 'Web development of products of any difficulty.'},
  {src: '/servicesPage/metalloobrabotka.webp', title: 'Metalworking', description: 'Our production uses zinc plating, chromium plating, cadmium, chemical oxidation'},
  {src: '/servicesPage/kompozit-materials.webp', title: 'Composite Materials', description: 'Molding under pressure of plastic is carried out on thermoplastics machines in a new specially equipped modern building.'},
  {src: '/servicesPage/appliance_development.webp', title: 'Appliance Development', description: 'We specialize in the development and manufacture of electronic devices of various complexity, testing equipment for rail transport.'},
  {src: '/servicesPage/construction_manufacturing.webp', title: 'Construction Manufacturing', description: 'Section of folding of furniture frames; area of ​​tightening of furniture; assembly area for furniture; assembly of locks.'},
  {src: '/servicesPage/painting_manufacturing.webp', title: 'Painting Manufacturing', description: 'Section of folding of furniture frames; area of ​​tightening of furniture; assembly area for furniture; assembly of locks.'},
  {src: '/servicesPage/legal_and_brokerage_services.webp', title: 'Legal & Brokerage Services', description: 'We povides quality legal services to organizations that will help management to better focus on important things.'}
]

import type { Metadata } from 'next';


export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {

  const id = params.id
 
  const product =  dataServices.filter((item, i) => i === +id)[0]
 
  return {
    title: product.title,
    description: `You can read about ${product.title}`

  }
}

export default function ServicePage({params}: Props) {

  return (
   <OneServicePage params={params}/>
  )
}
