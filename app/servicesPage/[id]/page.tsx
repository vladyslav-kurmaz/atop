'use client'

import Image from 'next/image';
import {useState} from 'react';
import './servicePage.scss';
import ServiceProductSlider from '@/components/ServiceProductSlider/ServiceProductSlider';

type Props = {
  params: {
    id: string
  }
}

type AllServiceInfo = {
  src: string, 
  title: string, 
  description: string, 
  subTitle?: string, 
  subDescription?: string[], 
  subListTitle?: string,
  subListTitle3?: string,
  subListTitle4?: string,
  subListTitle5?: string,
  subList?: string[], 
  subTitle2?: string, 
  subDescription2?: string[],
  subList2?: string[],
  subListTitle2?: string,
  subList3?: string[],
  subTitle3?: string,
  subDescription3?: string[],
  subList4?: string[],
  subTitle4?: string,
  subTitle5?: string,
  subDescription4?: string[], 
  subDescription5?: string[], 
}

const allServiceData: AllServiceInfo[] = [
  {
    src: '/servicesPage/alectrical_application.webp', 
    title: 'Electrical Application', 
    description: 'Electrical equipment is intended for management, control and diagnostics of power supply systems, climate control and lighting of passenger cars.', 
    subListTitle: 'Control panel', 
    subDescription: ['The nominal voltage is 110 V.', 'The remote control provides control, control and diagnostics of the following car systems in automatic and manual modes:'], 
    subList: ['energy supply;' , 'lighting;', 'climate system - heating (H/V and H/V), (monoblock attic air conditioner);', 'special consumers.'], 
    subTitle2: 'High-voltage box', 
    subListTitle2: 'Nominal voltage:',
    subList2: ['control circuits, constant - 110 V', 'high-voltage circuits, constant or variable - 3000 V'],
    subListTitle3: 'The high-voltage box provides:',
    subList3: ['reception and switching of electricity from the undercarriage main line;', 'protection of heating circuits from overloads and short circuits;', 'protection against insulation breakdown of boiler electric heaters;', 'protection of personnel from high voltage, including when opening the box cover;', 'sending signals to the control panel about the presence of voltage in the undercarriage line and about the breakdown of the insulation of the electric heaters of the boiler', 'control of two groups of boiler heaters with a capacity of 24 kW each.'],
    subTitle3: 'External power supply box',
    subDescription3: ['It provides power supply to the car from the three-phase voltage of the industrial network 380 V 50 Hz in the places where the cars are standing, as well as from the undercar generator when the car is moving. At the same time, the external power supply box also provides a charge mode for the battery with regulation of the charging current. The composition includes rectifier bridges from the generator and transformer and control, control and protection bodies.'],
    subList4: ['input voltage - ~380 V 50 Hz', 'the number of phases is 3', 'the output voltage is constant - 120 V ... 145 V', 'nominal output power – 36 kW']
  },
  {
    src: '/servicesPage/development_of_construction_documentation.webp',
    title: 'Development of construction documentation',
    description: 'LLC “A.T.O.R.” is a production and engineering company with a combined warehouse design and technological division, which is engaged in the creation of new types of products for passenger cars, motorized wagons (diesel trains and electric trains), locomotives , subway cars, specially equipped caravans. Our company carries out the process of modernization of the existing car park, ensuring high technical level, competitive patentability, compliance with modern achievements of science and technology, the requirements of technical aesthetics and the eco-friendly technologies.',
    subDescription: ['The design begins with the development of a design project and a detailed elaboration of each element of the designer with the further implementation of it in three-blended models and drawings.', 'The design and technological division carries out works on certification, support of certificates in the current state and obtaining permits for materials and components used in the construction of cars.', 'Some of  LLC “A.T.O.R.” developments are protected by patents in the spheare of passenger railway transport.', 'The presence in the unit designers, engineers, electronic engineers, programmers and technologists allows to complete the cycle of the project, starting with the development of design documentation and electrical schemes, running production to fulfill the certification of products.', 'The design and technological unit is a combination of youth and experience in the development of products for railway. Long-term experience of design works, high potential of professionally trained and skilled designers guarantees the continuous development of products and the production of a complete set of design documentation. In the process of making designing and engineering documentation, our employees will help you to find the best way to solve any technical problem, embodying the most daring and unusual ideas of our clients.'],
    subListTitle: 'We offer:',
    subList: ['Development of design documentation', 'Reverse engineering of products', 'Development the design documentation on the details provided by the sample', 'Development of documentation for non-standard designs, mechanisms'],
    subListTitle2: 'How we work:',
    subList2: ['Our specialist attends customer to perform all necessary measurements in order to evaluate the fraud.', 'The technical task is developed, with the direct participation of the customer.', 'According to technical task, three-dimensional modeling and drawing of drawings are carried out.', 'At the stage of production, our specialists consult the customer.']
  },
  {
    src: '/servicesPage/develop_desctop.webp',
    title: 'Development of desktop applications',
    description: 'One of the areas of software development is the development of software applications in the field of software development. Despite the ever-increasing influence of web technologies, classic desktop applications still remain in demand in cases where it is necessary to provide maximum user experience. We offer custom development services. Our specialists have vast experience in developing flexible, multifunctional software solutions for different operating systems: Windows, Linux and Mac OS X.',
    subDescription: ['You get the excellent quality of the final product, which makes our company the best partner.', 'We will always offer the most necessary and effective solutions for your business. We believe that all the technical and information resources at your office should help you and your staff solve current tasks, work more productively and achieve great results.'],
    subList: ['development', 'creating a concept', 'testing', 'support'],
  },
  {
    src: '/servicesPage/software_development.webp',
    title: 'Software development',
    description: 'Enterprise LLC “NVO” ATO.R “makes software that fully meets the requirements of customers, provides qualified assistance at all stages of creation: from a technical description to decisions on after-sales support. Optimal solutions through which our customers will significantly reduce their costs and time to achieve your business goal.',
    subListTitle: 'We offer the following types of software:',
    subList: ['Web application development', 'Development of desktop applications', 'E-Commerce Solutions', 'Software for built-in high-capacity systems', 'IT outsourcing'],
    subDescription: ['Specialists of our company create a product that meets certain requirements of the customer. Most modern technologies allow you to use several types of information processing at once. Today, we offer multi-purpose solutions that will solve complex tasks that require non-standard approaches. Our professional team guarantees more effective implementation of the company’s projects for our partners.'],
    subList2: ['C / C ++', 'C #', 'Java', 'Visual Basic', 'Scripting languages', 'The reliability of the proposed solutions', 'Simulation at all stages of the software lifecycle.', 'Minimum deadlines', 'Efficient and flexible solutions with minimal cost', 'Qualified team of specialists'],
    subDescription2: ['We believe that all the technical and informational tools in your office should help you and your staff solve current tasks, work more productively and achieve great results.'],
    subTitle2: 'Do not know where to start?',
    subDescription3: ['Trust us, take the first step towards developing your business, describe your requirements and our manager will tell you how to order our software development.']
  },
  {
    src: '/servicesPage/it-autsorsing.webp',
    title: 'IT-outsourcing',
    description: 'IT (Information Technologies) outsourcing is a transfer to a specialized company of fullness or private functions related to information technology',
    subList: ['full service and maintenance of IT infrastructure (computing equipment, network equipment, office equipment, etc.);', 'design and development of automated business systems with further continuous improvement and maintenance', 'creation, maintenance and support of web-servers;'],
    subListTitle: 'Information systems management. IT outsourcing can be divided into three types:',
    subList2: ['professorial (the outsourcer has specialists of a higher professional level than you have);', 'production-technological (the outsourcer has the necessary capacities, both hardware and professional);', 'financial and administrative (the outsourcer can manage active projects to root their implementation and alleviate costs).'],
    subDescription: ['IT outsourcing allows the customer company to save costs and significantly reduce the complexity and cost of operating IT systems, concentrating all resources on the main business processes without distracting from the auxiliary.', 'We offer integrated IT outsourcing services, assuming all the functions of the IT department of the customer.'],
    

  },
  {
    src: '/servicesPage/web_dev.webp',
    title: 'Web development',
    description: 'WEB-development is one of the directions of activity of LLC ” ATO.R. “Using our life experience and professional knowledge in the field of web coding and programming, design and marketing, our developers will create a site of any complexity with the use of modern languages ​​and technologies such as Java, PHP, MySQL, JavaScript, CSS and HTML5, or ready-made CMS. Our specialists quickly, and qualitatively, will develop the site, taking into account all the requirements and wishes of the customers.',
    subListTitle: 'To date, there are several stages of developing a website:',
    subList: ['site design (technical assignment)', 'site design', 'programming', 'HTML layout'],
    subTitle: 'Website Designing:',
    subDescription: ['It is important to immediately note that the stages of designing websites depend on many factors, such as the size of the site, functionality, tasks to be performed by the future resource, and more.'],
    subTitle2: 'Site design:',
    subDescription2: ['We will create a modern site with a unique design and convenient functions that will emphasize and highlight you among your competitive environment.'],
    subTitle3: 'Programming:',
    subDescription3: ['Programming is one of the most important and complex parts, because – this is the stage at which the design, interface and control system are designed to be integrated into one. At this stage, the logic of the user’s work with the website is implemented, and all necessary interactions with other programs, sites and services are established. Programming of sites can take from several days to several months. During this time, components and modules can be tested, debugged and tuned multiple times.'],
    subTitle4: 'HTML layout:',
    subDescription4: ['HTML layout in the simplest sense is the process of transforming a designer’s work into a webpage that is displayed in a browser. The process is complex and has a creative foundation. Although the designer’s job is hidden from the eyes, it provides uninterrupted work on various devices and browsers, as well as the speed of downloading each page of the site.', 'Based on our experience and knowledge of the market, we can say with certainty what will work and what does not.', 'Our specialists will create a flexible and at the same time a simple interface that will become an effective tool for your business!']
  },
  {
    src: '/servicesPage/metalloobrabotka.webp',
    title: 'Metalworking',
    description: 'To improve the protective and decorative properties of metal products, our production uses zinc plating, chromium plating, cadmium, chemical oxidation. To improve the decorative properties of stainless steel products, the method of electric polishing is used.',
    subTitle: 'Welding unit of the enterprise.',
    subDescription: ['On our welding unit we manufacture complex welded structures made of parts and billets coming from the mechanized-forging site. The welding area is equipped with special welding tables with systems to exhaust gases. For welding we prefer modern welding inverters (MIG-MAG, TIG) which use argon or a gas mixture of argon with carbon dioxide as a protective gas, which ensures the obtaining of a quality weld, both strength and good appearance.'],
  },
  {
    src: '/servicesPage/kompozit-materials.webp',
    title: 'Production of composite materials',
    description: 'Molding under pressure of plastic is carried out on thermoplastics machines in a new specially equipped modern building. Enterprise LLC “A.T.O.R.” has its own equipment, has its own approaches to the manufacture of plastic products, constantly improves the production process.',
    subDescription: ['LLC “A.T.O.R.” is ready to cooperate with customers for whom it is necessary to realize the manufacture of parts, components, articles weighing no more than 1.5 kilograms. We satisfy the customer’s need with the use of plastic, polystyrene, polyamides, polypropylene, polyethylene, etc. It is also possible to develop and manufacture molds on special orders, production of products in different colors.', 'Thermoforming is a process of producing complex plastic products, such as volumetric letters with complex surface relief, bulky light logos, elements of end plates, and more.'],
    subListTitle: 'Creation of molded elements involves two stages of production:',
    subList: ['Making equipment, through which thermoforming will be carried out. Equipments are made on high-precision milling machine.', 'The plastic for molding is softened by warming up in the molding machine, after which it is placed on pre-prepared equipment and pumped air between the plastic and the equipment, giving the plastic the desired shape.'],
    subDescription2: ['Our equipment allows to make molding of any complexity in the size up to 1500х2500 mm. We can produce vacuum-molding with the provision of equipment to the customer, or making the equipment on their own.']
  },
  {
    src: '/servicesPage/appliance_development.webp',
    title: 'Appliance development',
    description: 'LLC “A.T.O.R” specializes in the development and manufacture of electronic devices of various complexity, testing equipment for rail transport and aviation industry.',
  },
  {
    src: '/servicesPage/construction_manufacturing.webp',
    title: 'Construction manufacturing',
    description: 'The qualification of the workers allows to carry out assembly and further verification of complex knots and mechanisms on specialized stands. Component parts for cars are created using economic materials, light alloys, welded structures. Standardization and unification of parts and assembly units ensures their interchangeability.',
    subList: ['Section of folding of furniture frames;', 'Area of ​​tightening of furniture;', 'Assembly area for furniture;', 'assembly of locks.'],
    subDescription: ['The production is equipped with all necessary equipment and tools for collecting, packing and shipment of products to the customer.']
  },
  {
    src: '/servicesPage/painting_manufacturing.webp',
    title: 'Painting manufacturing',
    description: 'The enterprise LLC “A.T.O.R.” offers services for powder painting of metal and metal structures. So, having only drawings on our hands, we can create and paint for you any product of any form.',
 },
 {
  src: '/servicesPage/legal_and_brokerage_services.webp',
  title: 'Legal and brokerage services',
  description: 'The company “ATOR CONSULTING” is a member of LLC “A.TO.R. “. Provides quality legal services to organizations that will help management to better focus on the peculiarities of registration, development and promotion of business in the market. Legal support of the company’s activities is necessary at each stage of its development: initial, medium and large, when the company opens additional offices and branches in Ukraine and foreign countries. Qualitative legal service deprives an entrepreneur of the need to spend time and effort on visiting tax services, clarifying the list of documents necessary for a particular operation, and other procedures without which the legal activity of the organization becomes impossible.',
  subTitle: 'Subscriber service: legal services.',
  subDescription: ['Legal services offered to our companies are very diverse: they can be ordered on an individual basis (lawyer’s advice, preparation of one-time accounts), and complex legal services (long-term legal servicing of the firm, legal examination, etc.).'],
  subListTitle: 'The main legal services of the enterprises are presented in the list of services of the company:',
  subList: ['Legal maintenance of the company’s core business. This item includes company registration in the market, urgent action in the event of bankruptcy, as well as business restructuring or complete liquidation. Each of the listed processes is accompanied by the collection of necessary documentation.', 'Trade relations and partnership agreements. The item includes the provision of legal services to legal entities that are at a certain stage of drafting contracts. Our company, offering legal services to enterprises, develops contracts, contracts, financial and other documents containing the necessary items for the successful implementation of the agreement or the establishment of partnerships.', 'Settlement of court and peaceful disputes. Legal services for legal entities provide for the settlement of conflict situations on a legal basis: client protection in court, business support during tax and sanitary inspections, negotiation with conflicting parties and appeal of convictions.', 'Legal support of firms also provides for the settlement of tax and customs control problems.', 'Legal maintenance of companies is also in the decision of issues related to real estate.', 'Professional legal customer service will help to avoid virtually any troubles in the enterprise. “ATOR CONSULTING” company offers favorable conditions for legal support of legal entities, which will be useful for customers at all stages of business development.', 'Professional legal customer service will help to avoid virtually any troubles in the enterprise. “ATOR CONSULTING” company offers favorable conditions for legal support of legal entities, which will be useful for customers at all stages of business development.', 'Tax audit'],
  subDescription2: ['An audit of tax accounting is in high demand by large well-known companies, whose business is not limited to one specialization, but is developing in adjacent or completely different directions. Among owners of small and medium-sized businesses, an audit of tax declarations is more needed to optimize the system of regular tax deductions.'],
  subListTitle2: 'Our organization offers a tax audit of an enterprise with any specificity – the list of basic services includes the following:',
  subList2: ['Diagnosis of the financial system of the organization.', 'Consultations on issues related to tax deductions. Usually such consultations are conducted before the beginning of cooperation.', 'General overview of accounting and tax reporting.', 'Conducting separate audit procedures.', 'Restructuring of business according to international standards.'],
  subTitle2: 'Also, ATOR CONSULTING company also provides a number of additional aspects that are discussed with the customer individually.',
  subTitle3: 'Customs of Ukraine. Customs clearance.',
  subDescription3: ['If you want to cross borders without difficulty, and to calculate customs payments is the first thing to do.'],
  subListTitle3: 'Our company offers the following services:',
  subList3: ['Legal advice. The firm provides oral and written advice on the Ukrainian legislation on tax and customs matters. The issue of calculating customs duties is also included in the consulting services of the company.', 'Registration of foreign investments. We help with registration in Ukraine, we collect and process all necessary papers.', 'Accompanying registration of loans.', 'The customs value is not always pockety carriers, so many have to issue loans in banks. We help to carry out this procedure legally and with minimal difficulty.', 'Outsourcing of accounting.'],
  subDescription4: ['Our company offers to clients the services of outsourcing accounting. All the work of the team in our organization is focused on ensuring the perfect coherent operation of the customer’s business and expert accounting, outsourcing'],
  subListTitle4: 'Accounting outsourcing services include the following stages of work:',
  subList4: ['Preparation of accounting documentation. All reporting by the client organization is based on the data provided by the chief accountant.', 'Maintain accounting accounting. Outsourcing of the company’s accounting department is based on the primary documentation provided by the company, or based on the data developed by our organization.', 'Services of the customs broker – utility and warranty.'],
  subTitle4: 'Customs brokerage services – a full range of customs, brokerage, forwarding and other necessary cargo and insurance services',
  subDescription5: ['To date, the legal services market provides legal assistance to large companies, which implies the conclusion of a permanent contract, and one-time consultations for small firms or individuals. A customs broker provides services that are clearly useful to most companies or citizens. Having accumulated experience, our firm will take responsibility for solving any client problem, whether it is obtaining certificates for goods or drawing up cargo transportation. We will solve all problems at the highest level of quality and with maximum efficiency. The extensive experience of working with state agencies of our agents and constant awareness of all innovations and events at the customs office, allows us to confidently offer our services, the quality of which we can guarantee without any doubt.', 'We will professionally prepare the necessary documents, excluding the smallest possibility of problems with customs from our client. Specialists of our company will quickly and qualitatively complete all customs documents, and full support of the cargo, guarantee of its preservation and timely delivery will be provided by our agents. Services of a customs broker will be your confidence in solving problem situations at all stages of cargo handling!']
}

 

  

]

export default function ServicePage({params}: Props) {
  const [readMore, setReadMore] = useState(false);
  const currentService = allServiceData.filter((item, i) => +params.id === i)[0];
  const {
    src,
    title, 
    description, 
    subTitle, 
    subDescription, 
    subListTitle,
    subList, 
    subTitle2, 
    subDescription2,
    subList2,
    subListTitle2,
    subListTitle3,
    subList3,
    subTitle3,
    subDescription3,
    subList4,
    subDescription4,
    subTitle4,
    subDescription5,
    subListTitle4
  } = currentService;
  

  const renderList = (subListTitle?: string, subList?: string[]) => {
    const renderItem = (subList: string[]) => {
      return subList.map((item, i) => {
        return <li className='service__subInfo-subList-item' key={i}>{item}</li>
      })
    }
    return (
      <>
        {
          subListTitle ? 
          <h3 className='service__subInfo-subListTitle'>{subListTitle}</h3>
          : null
        }

        {
          subList && subList?.length > 0  ? 
            <ul className='service__subInfo-subList'>
              {renderItem(subList)}
            </ul>
          
          :
          null
        }

      </>
    )
  }

  const renderSubDescription = (subDesription?: string[]) => {
    return subDesription && subDesription.length > 0 ? 
    subDesription.map((item, i) => {
      return <p className='service__subInfo-subDescription' key={i}>{item}</p>
    })
    :
    null
  }

  const renderInfoItem = () => {
    switch(+params.id) {
      case 0:
        return (
          <>
            <h2 className='service__subInfo-subtitle'>{subTitle}</h2>
            {renderSubDescription(subDescription)}
            {renderList(subListTitle, subList)}
            <h2 className='service__subInfo-subtitle'>{subTitle2}</h2>
            {renderList(subListTitle2, subList2)}
            {renderList(subListTitle3, subList3)}
            <h2 className='service__subInfo-subtitle'>{subTitle3}</h2>
            {renderSubDescription(subDescription3)}
            {renderList('', subList4)}
          </>
        );
      case 1:
        return (
          <>
            {subTitle ? <h2 className='service__subInfo-subtitle'>{subTitle}</h2> : null}
            {renderSubDescription(subDescription)}
            {renderList(subListTitle, subList)}
            {renderList(subListTitle2, subList2)}
            {renderList('', subList)}
          </>
        );
      case 2:
        return (
          <>
            {renderSubDescription(subDescription)}
            {renderList('', subList)}
          </>
        );
      case 3:
        return (
          <>
            <h2 className='service__subInfo-subtitle'>{subListTitle}</h2>
            {renderList("", subList)}
            {renderSubDescription(subDescription)}
            {renderList('', subList2)}
            {renderSubDescription(subDescription2)}
            <h2 className='service__subInfo-subtitle'>{subTitle2}</h2>
            {renderSubDescription(subDescription3)}
          </>
        );
      case 4:
        return (
          <>
            {renderList("", subList)}
            {renderList(subListTitle, subList2)}
            {renderSubDescription(subDescription)}
          </>
        );
      case 5:
        return (
          <>
            {renderList(subListTitle, subList)}
            <h2 className='service__subInfo-subtitle'>{subTitle}</h2>
            {renderSubDescription(subDescription)}
            <h2 className='service__subInfo-subtitle'>{subTitle2}</h2>
            {renderSubDescription(subDescription2)}
            <h2 className='service__subInfo-subtitle'>{subTitle3}</h2>
            {renderSubDescription(subDescription3)}
            <h2 className='service__subInfo-subtitle'>{subTitle4}</h2>
            {renderSubDescription(subDescription4)}
          </>
        );
      case 6:
        return (
          <>
            <h2 className='service__subInfo-subtitle'>{subTitle}</h2>
            {renderSubDescription(subDescription)}
          </>
        );
      case 7:
        return (
          <>
            {renderSubDescription(subDescription)}
            {renderList(subListTitle, subList)}
            {renderSubDescription(subDescription2)}
          </>
          
        )
      case 8:
        return;
      case 9:
        return (
          <>
            {renderList('', subList)}
            {renderSubDescription(subDescription)}
          </>
        );
      case 10:
        return;
      case 11:
        return (
          <>
            <h2 className='service__subInfo-subtitle'>{subTitle}</h2>
            {renderSubDescription(subDescription)}
            {renderList(subListTitle, subList)}
            {renderSubDescription(subDescription2)}
            {renderList(subListTitle2, subList2)}
            <h2 className='service__subInfo-subtitle'>{subTitle2}</h2>
            <h2 className='service__subInfo-subtitle'>{subTitle3}</h2>
            {renderSubDescription(subDescription3)}
            {renderList(subListTitle3, subList3)}
            {renderSubDescription(subDescription4)}
            {renderList(subListTitle4, subList4)}
            <h2 className='service__subInfo-subtitle'>{subTitle4}</h2>
            {renderSubDescription(subDescription5)}
          </>
        )
    }
  }
    
  
  return (
    <>
      <div className="servicePage">
        <Image
          src={src}
          alt=''
          width={7000}
          height={1000}
          className='servicePage__img'
          loading='lazy'
        />

        <div className="servicePage__container">
          <span className='servicePage__container-title'>Services</span>

          <div className="servicePage__container-service">
            <h2 className="servicePage__container-service-title">{title}</h2>
            <div className="servicePage__container-service-text">
              <p className="servicePage__container-service-text-description">
                {description}
              </p>

              { 
                subTitle || subDescription || subListTitle || subList ?

                  <button 
                    className='servicePage__container-service-text-read'
                    onClick={() => setReadMore(!readMore)}
                  >
                    <span>
                      {readMore ? 
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <mask id="mask0_215_4316" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                            <rect width="20" height="20" fill="#D9D9D9"/>
                          </mask>
                          <g mask="url(#mask0_215_4316)">
                            <path d="M4.1665 10.7241V9.32299H15.8332V10.7241H4.1665Z" fill="#232323"/>
                          </g>
                        </svg> : 
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M4.45817 5.54165H0.416504V4.45835H4.45817V0.416687H5.54146V4.45835H9.58313V5.54165H5.54146V9.58331H4.45817V5.54165Z" fill="#232323"/>
                        </svg>
                      }
                    </span> 
                    Read More</button>
                  :
                  null
              }
              

                {  readMore ?
                  <div className="service__subInfo">
                    {renderInfoItem()}
                  </div>
                  : null
                }
            </div>
          </div>
        </div>

        <ServiceProductSlider status={false}/>
      </div>
    </>
  )
}
