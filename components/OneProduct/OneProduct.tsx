import {useState} from 'react';
import CustomSlider from '@/components/Slider/Slider';

import ServiceProductSlider from '@/components/ServiceProductSlider/ServiceProductSlider';

type Props = {
  params: {
    id: string
  }
}

type Product = {
  slider: string[],
  title: string,
  description: string,
  options?: string[],
  scopeOfDelivery?: string[]
}

type AllProductInfo = {
  title: string, 
  description: string, 
  slider: string[],
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
  subList5?: string[],

  subListWithDesc?: string[][]
}

const data: AllProductInfo[] = [
  
  {
    slider: ['/product/set_of_toilet_elements_for_diesel_trains_and_electric_trains/1.webp', '/product/set_of_toilet_elements_for_diesel_trains_and_electric_trains/2.webp','/product/set_of_toilet_elements_for_diesel_trains_and_electric_trains/3.webp','/product/set_of_toilet_elements_for_diesel_trains_and_electric_trains/4.webp','/product/set_of_toilet_elements_for_diesel_trains_and_electric_trains/5.webp','/product/set_of_toilet_elements_for_diesel_trains_and_electric_trains/6.webp','/product/set_of_toilet_elements_for_diesel_trains_and_electric_trains/7.webp'],
    title: 'Set of toilet elements for diesel trains and electric trains.',
    description: 'The facing of the side walls is made of thermoformed plastic. Window protection is made with one side wall product and secured to an existing power framework. The floor is made of fiberglass with a molded linoleum with anti-slip effect. The drain pipe is installed in the center. Near the window thereis stainless steel handrail. Under the window there are holders of toilet paper that have anti-vandal construction.',
    subDescription: [' The toilet has hooks with anti-vandal construction. Entrance doors to the dressing room are turning inside the toilet. The box and plates of the door are powder coated steel, the door leaf is made of plywood, lined with plastic. The metalic lock is built into the door (inside the room is a T-shaped handle, from the outside it is under the triangular key) with a sign of employment. Electric space heaters have protective housings made of stainless steel.', 'Washbasin is made of fiberglass. Vertical top rack is made of stainless steel. On the vertical washbasin a vandal proof faucet is installed. Water supply from the faucet of the wash basin is provided with the help of an electric button, which feeds the water in the metered dose. An anti-vandal mirror with mirror made of stainless steel is installed next to the sink. The drain from the washbasin is brought into the fan tube with electric heating.', 'The ceiling of the room is made of non-combustible material, painted with powder coating. The ceiling embedded LED lights with two lighting (under 110 V and 220 V).', 'Stainless steel floor toilet. The drain of water in the toilet is provided with the help of an electric button (located on the vertical rack of the wash basin), which dosed water supplies. Fixing the toilet is made to the side wall.', 'Stainless steel tank in which the heating is installed, with additional external thermal insulation. Technological hatch from the side of the passenger cabin is made for maintenance of heating system.'],
  },

  {
    slider: ['/product/set_of_toilet_elements_for_diesel_trains_and_electric_trains/1.webp', '/product/set_of_toilet_elements_for_diesel_trains_and_electric_trains/2.webp','/product/set_of_toilet_elements_for_diesel_trains_and_electric_trains/3.webp','/product/set_of_toilet_elements_for_diesel_trains_and_electric_trains/4.webp','/product/set_of_toilet_elements_for_diesel_trains_and_electric_trains/5.webp','/product/set_of_toilet_elements_for_diesel_trains_and_electric_trains/6.webp','/product/set_of_toilet_elements_for_diesel_trains_and_electric_trains/7.webp'],
    title: 'Set of environmentally friendly toilet for passenger cars models 61-779, 47K (D)',
    description: ' Eco-friendly toilet complex (EFT) is designed to replace conventional toilets and to improve the quality and comfort of using toilets in trains.',
    subDescription: ['The complex is intended for satisfaction of physiological and hygienic needs of personnel and passengers, as well as for hygienic storage of waste until they are removed.', 'The toilet is equipped with an automated cleaning and emptying system. Undoubted advantage of the device is a well thought design and application in the product  modern materials order to provide long-term uninterrupted work. EFT is intended for installation on the passenger carriages of locomotive traction of a new structure and on wagons subject to major repairs.', 'Set of the complex:ü  vacuum toilet;ü  tank for accumulation;ü  equipment of the drainage line;ü  vacuum system and tank heating system.', 'The vacuum toilet is designed for collecting, removing and transporting fecal matter from the toilet bowl to the drainage line.', 'The storage tank is designed to collect fecal matter from vacuum containers and transport them to the point of delivery. Capacity of a tank is 300 letres. The drainage line ensures the transportation of the contents of vacuum toilets into a tank-drive.', 'Vacuum system with built-in equipment provides the necessary dilution. The tank’s heating system prevents the freezing of waste in the cold season.', 'The toilet complex provides collection of waste when the car is used and the waste from the tank is stored at an ambient temperature from minus 50 C to plus 45 C; remains operational after the car remains in the deposit at a lower limit value of the ambient temperature minus 50 C.']
  },
  {
    slider: ['/product/for_rail_transport/1.webp'],
    title: 'For rail transport',
    description: 'LLC “ATOR” offers a wide range of accessories for railway cars and subway cars.',
    subListTitle: 'Main activities:',
    subList: ['Completion of passenger cars, diesel trains, electric trains during the construction of new wagons and modernization', 'Completion of cabins for locomotive drivers and locomotives;', 'Completion of subway cars during modernization;', 'Completion of specially equipped body-vans;', 'Software development.'],
    subDescription: ['Production and supply', 'We manufacture and supply components for equipping and capital repair of passenger cars, diesel trains, electric trains.'],
    subListTitle2: 'For the railway:',
    subList2: ['Lightweight wall and ceiling structures;', 'Windows with folding and sliding windows;', 'Heating pipe fencing;', 'Furniture for office and passenger wagons;', 'Panels for various purposes;', 'Elements of toilets and corridors;', 'Internal and external doors of wagons.'],
    subListTitle3: 'For metro:',
    subList3: ['Double-leaf swivel-sliding doors with electric drive;', 'Side, end hinged hinged doors with electrical equipment, windows and without;', 'Control panels for the doors of subway cars;', 'Windows with a sliding window;', 'Elements of the interior of the car and driver’s cab.'],
    subTitle: 'Developments and technologies',
    subDescription2: ['Properly organized production, quality control at all stages and continuous product development allowed the company to gain a reputation as a reliable partner and supplier for large enterprises and government departments. Our company has been cooperating with the Ministry of Defense of Ukraine for a number of years (fashionable clients need to be remembered).', 'In the production process we use high-quality materials and proven technologies. We do not stop working on the modernization of the existing range.'],
    subListTitle4: 'Among the patented developments of LLC “ATOR”:',
    subList4: ['Interior of the passenger car;', 'Ceiling panel of the passenger compartment of the passenger car;', 'Rack for a passenger car;', 'Table top of the folding table of the railway car;', 'Sandwich panel;', 'Wall-mounted cabinet for the railway car compartment;', 'Wall panel for head restraint cabinets of railway car;', 'Shelf-backrest for railway car;', 'A sleeping shelf for a railway car;', 'Bracket for the sleeping rail of the railway car;', 'Folding ladder;', 'Wall hanger.'],
    subDescription3: ['We invite to cooperation', 'We invite companies of various sizes to cooperate.'],
    subListTitle5: 'For our part, we guarantee:',
    subList5: ['Unprecedented quality;', 'Flexible pricing;', 'Transparent terms of cooperation.'],
    subTitle2: 'Contact us using the numbers on the website.',
  },
  {
    slider: ['/product/for_underground_transport/1.webp'],
    title: 'Fittings for Building New Cars Series 779',
    description: 'LLC “ATOR” offers a wide range of accessories for railway cars and subway cars.',
    subListTitle: 'Main activities:',
    subList: ['Completion of passenger cars, diesel trains, electric trains during the construction of new wagons and modernization', 'Completion of cabins for locomotive drivers and locomotives;', 'Completion of subway cars during modernization;', 'Completion of specially equipped body-vans;', 'Software development.'],
    subDescription: ['Production and supply', 'We manufacture and supply components for equipping and capital repair of passenger cars, diesel trains, electric trains.'],
    subListTitle2: 'For the railway:',
    subList2: ['Lightweight wall and ceiling structures;', 'Windows with folding and sliding windows;', 'Heating pipe fencing;', 'Furniture for office and passenger wagons;', 'Panels for various purposes;', 'Elements of toilets and corridors;', 'Internal and external doors of wagons.'],
    subListTitle3: 'For metro:',
    subList3: ['Double-leaf swivel-sliding doors with electric drive;', 'Side, end hinged hinged doors with electrical equipment, windows and without;', 'Control panels for the doors of subway cars;', 'Windows with a sliding window;', 'Elements of the interior of the car and driver’s cab.'],
    subTitle: 'Developments and technologies',
    subDescription2: ['Properly organized production, quality control at all stages and continuous product development allowed the company to gain a reputation as a reliable partner and supplier for large enterprises and government departments. Our company has been cooperating with the Ministry of Defense of Ukraine for a number of years (fashionable clients need to be remembered).', 'In the production process we use high-quality materials and proven technologies. We do not stop working on the modernization of the existing range.'],
    subListTitle4: 'Among the patented developments of LLC “ATOR”:',
    subList4: ['Interior of the passenger car;', 'Ceiling panel of the passenger compartment of the passenger car;', 'Rack for a passenger car;', 'Table top of the folding table of the railway car;', 'Sandwich panel;', 'Wall-mounted cabinet for the railway car compartment;', 'Wall panel for head restraint cabinets of railway car;', 'Shelf-backrest for railway car;', 'A sleeping shelf for a railway car;', 'Bracket for the sleeping rail of the railway car;', 'Folding ladder;', 'Wall hanger.'],
    subDescription3: ['We invite to cooperation', 'We invite companies of various sizes to cooperate.'],
    subListTitle5: 'For our part, we guarantee:',
    subList5: ['Unprecedented quality;', 'Flexible pricing;', 'Transparent terms of cooperation.'],
    subTitle2: 'Contact us using the numbers on the website.',
  },
  {
    slider: ['/product/training_complex_for_train_driver/1.webp', '/product/training_complex_for_train_driver/2.webp','/product/training_complex_for_train_driver/3.webp','/product/training_complex_for_train_driver/4.webp','/product/training_complex_for_train_driver/5.webp','/product/training_complex_for_train_driver/6.webp','/product/training_complex_for_train_driver/7.webp'],
    title: 'Training complex for train driver',
    description: 'A full-scale simulator, as close as possible to a real car, designed for training and checking the driver during emergency and emergency situations. The cockpit layout is mounted on a dynamic platform for cornering, acceleration and emergency braking perception.',
    subDescription: ['The simulator can also be performed on the basis of a stationary classroom without a dynamic platform with a driver console and monitor.']
  },
  {
    slider: ['/product/sanitary_module/1.webp', '/product/sanitary_module/2.webp','/product/sanitary_module/3.webp','/product/sanitary_module/4.webp','/product/sanitary_module/5.webp'],
    title: 'Sanitary module',
    description: 'An important component of improving the comfort level of the Passenger Car is to improve the sanitary and personal services for passengers. The solution of this task is the project of developing a sanitary-hygienic module for the car. The module is installed in passenger carriages of trains of locomotive traction, diesel and electric trains in order to ensure the sanitary and hygienic conditions of the stay of passengers and train crews during the trip, as well as environmental protection of the environment.',
    subDescription: ['The module is designed to receive and remove by means of intensive dosed flushing with water the waste of human life in the storage tank and create the necessary comfort conditions. The module is supplied with electricity and water from the sources of the car.', 'The equipment of the module provides automatic control of the flush preparation system, lighting, module ventilation and heating of the storage tank and pipes, as well as the issuance of light signals about the functional state of the electrical equipment. Using the diagnostic module installed in the control panel, it is possible to perform diagnostics in various operating modes of the toilet system equipment.', 'Modern interior design of the sanitary module, color solutions, lighting solutions, quality sanitary fittings create the most comfortable conditions for passengers.', 'The module is able to take up to 20 people for one hour of the trip. The service life of the sanitary module is 40 years.', 'Description of the sanitary module design. Structurally the module body consists of fiberglass panels, floor, metal ceiling and aluminum sliding door.'],
    subListTitle: 'The module is completed with:',
    subList: ['vacuum toilet unit;', 'drain tank;', 'power supply unit;', 'the compressed air supply unit;', 'indicating devices;', 'toilet fittings.'],
    subListTitle2: 'The main parameters of the electrical equipment of the module:',
    subList2: ['power supply voltage of equipment, V', 'electric network of direct current 24 V – from 18 to 30;', '110 kV DC electric network – from 85 to 150;', 'power consumption at a nominal supply voltage of 110 V, kW, not more than', 'heating of storage tank and pipes (at -40 ° C) – 2.0;', 'sockets for electric shavers – 0.035;', 'compressor installation -1,5;', 'power consumption at a nominal supply voltage of 24 V, kW, not more than', 'control circuits of the toilet, alarm and lighting module – 0,15.'],
    subListTitle3: 'The electrical equipment of the module:',
    subList3: ['electrical equipment installed in the module;', 'electrical equipment installed in the car;', 'electric equipment under the car.'],
    subListTitle4: 'List of electrical equipment installed in the module:',
    subList4: ['Switchboard;', 'The toilet module;', 'Console call;', 'Volume control electronic;', 'Flush unit;', 'Presence detector;', 'The device of scoring;', 'Temperature sensor;', 'Electrically ventilated air heaters;', 'LED spotlights;', 'LED lines', 'Ceiling fan;', 'Converter for razors;', 'Toilet service limit switch;', 'Connector for connection to the wagon electrical equipment.'],
    subListTitle5: 'List of electrical equipment installed in the car:',
    subList5: ['Console of the conductor;', 'Indicator of toilet occupancy;', 'Compressor plant with a voltage converter.'],
    subTitle: 'The list of electrical equipment undercarriage:',
    subDescription2: ['Storage tank with level and temperature sensors and a heating element;', 'Heating system of pipes;', 'tank filling indicators 80%.']

  },
  {
    slider: ['/product/accessories_for_major_repairs_of_cars/1.webp', '/product/accessories_for_major_repairs_of_cars/2.webp','/product/accessories_for_major_repairs_of_cars/3.webp','/product/accessories_for_major_repairs_of_cars/4.webp','/product/accessories_for_major_repairs_of_cars/5.webp','/product/accessories_for_major_repairs_of_cars/6.webp','/product/accessories_for_major_repairs_of_cars/7.webp'],
    title: 'Accessories for major repairs of cars (open-air cart-cars)',
    description: 'The key direction of LLC “ATO.R.” development, manufacture and supply of components for passenger rail cars. In the company’s arsenal as a classic option, as well as its own development of enhanced functionality.',
    subDescription: ['We offer to use the services of delivery of components for major repairs of cars of the series 47K. There are two possible options – standard and a car with furniture, which is transformed at night.', 'The standard equipment is different in terms of completeness and high quality, for cars with transformed furniture, we have developed and implemented a number of innovative solutions that can significantly improve the comfort of passengers and drivers.'],
    subListTitle: 'Options:',
    subList: ['47K – compartment wagon;', '47K – compartment carriage with furniture, which transforms at night'],
    subDescription2: ['Package Contents:', 'The kit for the capital repairs of the carriages of the 47K series includes:', 'Set of fire protection for heating pipes:', 'Enclosures are made of stainless steel, equipped with chrome locks and fastening elements. Differ from aesthetic attractiveness and long lifetime;'],
    subDescription3: ['Wagon Wall Set:', 'The kit includes lightweight internal partitions, lining with hard-plastics with the use of cellular aluminum filler. The color of materials is selected in agreement with the customer;', 'Wagon ceiling set:', 'The set includes lightweight frameless non-flammable ceilings made of sheet material, painted with powder paint. It is possible to manufacture ceiling panels of fiberglass. The color of materials is selected in agreement with the customer;', 'The complete set of furniture for the service compartment of a wagon:', 'The kit includes everything necessary for the service compartment: a refrigerator cabinet, a dishwasher, a wardrobe with a stainless steel sink, a comfortable armchair for the conductor.', 'Set of toilet elements:', 'The set includes: washbasins with fiberglass with mirrors and fittings, stainless steel sinks, fiberglass floors.', 'Set of elements of the corridor:', 'The set includes a set of handrails made of durable stainless steel, coated with powder paint;'],
    subListTitle2: 'A set of interior and exterior doors, which includes:',
    subList2: ['12 doors for a passenger compartment and a pavilion for the rest of the drivers, equipped with a special mechanism that provides smooth, silent opening and closing, reliable fixing in extreme positions and complete locking;', '2 doors of the toilet equipped with an electromobiling lock;', '1 fireproof door of passenger compartment with the possibility of fixing in an open position;', '2 doors from the vestibule to the carriage (left and right);'],
    subDescription4: ['Side wall facing kit:', 'The facade of the side walls is made of high quality fiberglass, the color is selected in agreement with the customer;'],
    subListTitle3: 'A set of furniture for passenger compartments, which includes:',
    subList3: ['lower and upper sleeping shelves with mounting elements for fixing in extreme positions, covered with heavyweight fabrics, the color of which is selected in agreement with the customer.', 'The upper shelves are equipped with a mechanism that facilitates lifting, supplemented by mattresses, pillows, belts for fixing sleeping accessories.', 'In the daytime, the lower shelf is easily transformed into three comfortable armchairs with armrests and headrests.', 'Each of the headrests is equipped with an individual light fixtures with the ability to adjust the direction of light and the bridge case for details.'],
    subListTitle4: 'We also produce:',
    subList4: ['Tables with the possibility of automatic fixing in extreme positions;', 'Stairs for upper shelves;', 'luggage racks;', 'accessories: handrails, trouser holders, newspapers, hooks, etc.']

  },
  {
    slider: ['/product/accessories_for_major_repairs_of_subway_cars_of_models/1.webp', '/product/accessories_for_major_repairs_of_subway_cars_of_models/2.webp','/product/accessories_for_major_repairs_of_subway_cars_of_models/3.webp','/product/accessories_for_major_repairs_of_subway_cars_of_models/4.webp','/product/accessories_for_major_repairs_of_subway_cars_of_models/5.webp','/product/accessories_for_major_repairs_of_subway_cars_of_models/6.webp','/product/accessories_for_major_repairs_of_subway_cars_of_models/7.webp','/product/accessories_for_major_repairs_of_subway_cars_of_models/8.webp','/product/accessories_for_major_repairs_of_subway_cars_of_models/9.webp'],
    title: 'Accessories for major repairs of subway cars of models 81-7021, 81-7022, 81-7036, 81-7037',
    description: 'LLC “ATO.R.” offers a wide range of quality components for major repairs of underground cars of models 81-7021, 81-7022, 81-7036, 81-7037. Given the complex conditions of operation of subway cars, we are particularly responsible for the selection of raw materials and materials used for the production of components. For cars of models 81-7021, 81-7022, 81-7036, 81-7037 we offer a solid lining of the sidewalls of fiberglass, lightweight metal ceiling panels, strong handrails, doors, windows and other elements of the interior. In the production process, we use modern materials, advanced technologies and our own design developments.',
    subListTitle: 'Options:',
    subList: ['Main car;', 'Intermediate carriage;', 'Package Contents;', 'Two-stroke false-sliding doors, equipped with electric drive;', 'Side and end hinged doors on hinges with function elektroblokirovaniya, with windows and without;', 'Door control panel;', 'Windows with sliding gates;', 'Elements of the interior of the cabin and driver’s cab.'],
    subTitle: 'We guarantee high quality products and transparent conditions for mutually beneficial cooperation!'
  },
  {
    slider: ['/product/accessories_for_major_repairs_of_subway_cars_of_models/2.webp', '/product/accessories_for_major_repairs_of_subway_cars_of_models/1.webp','/product/accessories_for_major_repairs_of_subway_cars_of_models/3.webp','/product/accessories_for_major_repairs_of_subway_cars_of_models/4.webp','/product/accessories_for_major_repairs_of_subway_cars_of_models/5.webp','/product/accessories_for_major_repairs_of_subway_cars_of_models/6.webp','/product/accessories_for_major_repairs_of_subway_cars_of_models/7.webp','/product/accessories_for_major_repairs_of_subway_cars_of_models/8.webp','/product/accessories_for_major_repairs_of_subway_cars_of_models/9.webp'],
    title: 'Fittings for capital and recovery repair of underground (metro) vehicles&cars series 714/717',
    description: 'LLC “ATO.R.” offers a wide range of quality components for major repairs of underground cars of models 81-7021, 81-7022, 81-7036, 81-7037. Given the complex conditions of operation of subway cars, we are particularly responsible for the selection of raw materials and materials used for the production of components. For cars of models 81-7021, 81-7022, 81-7036, 81-7037 we offer a solid lining of the sidewalls of fiberglass, lightweight metal ceiling panels, strong handrails, doors, windows and other elements of the interior. In the production process, we use modern materials, advanced technologies and our own design developments.',
    subListTitle: 'Options:',
    subList: ['Main car;', 'Intermediate carriage;', 'Package Contents;', 'Two-stroke false-sliding doors, equipped with electric drive;', 'Side and end hinged doors on hinges with function elektroblokirovaniya, with windows and without;', 'Door control panel;', 'Windows with sliding gates;', 'Elements of the interior of the cabin and driver’s cab.'],
    subTitle: 'We guarantee high quality products and transparent conditions for mutually beneficial cooperation!'
  },
  {
    slider: ['/product/fittings_for_capital_and_restored_repair_cars_series_47k/1.webp', '/product/fittings_for_capital_and_restored_repair_cars_series_47k/2.webp','/product/fittings_for_capital_and_restored_repair_cars_series_47k/3.webp','/product/fittings_for_capital_and_restored_repair_cars_series_47k/4.webp','/product/fittings_for_capital_and_restored_repair_cars_series_47k/5.webp','/product/fittings_for_capital_and_restored_repair_cars_series_47k/6.webp','/product/fittings_for_capital_and_restored_repair_cars_series_47k/7.webp','/product/fittings_for_capital_and_restored_repair_cars_series_47k/8.webp','/product/fittings_for_capital_and_restored_repair_cars_series_47k/9.webp','/product/fittings_for_capital_and_restored_repair_cars_series_47k/10.webp'],
    title: 'Fittings for capital and restored repair cars series 47k',
    description: 'The key direction of LLC “A.T.O.R.” development is a manufacture and supply of components for passenger rail cars. In the company’s arsenal as a classic option, as well as its own development of enhanced functionality. We offer to use the services of delivery of components for major repairs of cars of the series 47K. There are two possible options – standard and a car with furniture, which transforms at night. The standard equipment is different in terms of completeness and high quality, for cars with transformed furniture, we have developed and implemented a number of innovative solutions that can significantly improve the comfort of passengers and drivers.',
    subListTitle: 'Options:',
    subList: ['47K – compartment wagon;', '47K – compartment wagon with furniture, which transforms at night'],
    subTitle: 'Scope of delivery',
    subListTitle2: 'The delivery package for the construction of new 779 series cars includes:',
    subList2: ['61-779 – compartment car', '61-779А – sleeping car', '61-779I – a car whith a coupe for transportation of a disabled person', '61-779P – couchette car', '61-779R – car from the compartment of the brigade', '61-779 – car-restaurant', '61-7014 – car garage'],
    subListWithDesc:[['Set of fire protection of heating pipes', 'Enclosures are made of stainless steel, equipped with chrome locks and fastening elements. Differ from aesthetic attractiveness and long lifetime;'], ['The set of walls of the car', 'The kit includes lightweight internal partitions, facing hard-plastics with the use of cellular aluminum filler. The color of materials is selected in agreement with the customer;'], ['A set of carriage ceilings', 'The set includes lightweight frameless non-flammable ceilings made of sheet material, painted with powder paint. It is possible to manufacture ceiling panels of fiberglass. The color of materials is selected in agreement with the customer;'], ['A set of furniture for the service compartment of a wagon', 'The kit includes everything necessary for the service compartment: a refrigerator cabinet, a dishwasher, a wardrobe with a stainless steel sink, a comfortable armchair for the conductor.'], ['Set of toilet elements', 'The set includes: sinks made of fiberglass with mirrors and fittings, stainless steel sinks, fiberglass floors'], ['Set of elements of the corridor', 'The set includes a set of handrails made of durable stainless steel, coated with powder paint;']],
    subListTitle3: 'A set of interior and exterior doors, which includes:',
    subList3: ['12 doors for a passenger compartment and a pavilion for the rest of the drivers, equipped with a special mechanism that provides smooth, silent opening and closing, reliable fixing in extreme positions and complete locking;', '2 doors of the toilet equipped with an electromobiling lock;', '1 fireproof door of passenger compartment with the possibility of fixing in an open position;', '2 doors from the vestibule to the carriage (left and right);'],
    subListTitle4: 'Set of facing of side walls',
    subList4: ['The facade of the side walls is made of high quality fiberglass, the color is selected in agreement with the customer;'],
    subListTitle5: 'A set of furniture for passenger compartments, which includes:',
    subList5: ['lower and upper sleeping shelves with fixing elements for fixing in extreme positions, covered with heavier fabrics, the color of which is selected in agreement with the customer;', 'Tables with the possibility of automatic fixing in extreme positions;', 'Stairs for upper shelves;', 'Luggage racks;', 'Accessories: handrails, holders for trousers, newspapers, hooks, etc.']

  },
  {
    slider: ['/product/fittings_for_building_new_cars_series_779/1.webp', '/product/fittings_for_building_new_cars_series_779/2.webp','/product/fittings_for_building_new_cars_series_779/3.webp','/product/fittings_for_building_new_cars_series_779/4.webp','/product/fittings_for_building_new_cars_series_779/5.webp','/product/fittings_for_building_new_cars_series_779/6.webp','/product/fittings_for_building_new_cars_series_779/7.webp','/product/fittings_for_building_new_cars_series_779/8.webp','/product/fittings_for_building_new_cars_series_779/9.webp','/product/fittings_for_building_new_cars_series_779/10.webp'],
    title: 'Fittings for Building New Cars Series 779',
    description: 'LCC “A.T.O.R.” offers to use services in the field of supply of components for the construction of new cars series 779. In the production process, we use only quality certified materials and the latest technologies. The capabilities of the company allow us to fit new cars in accordance with the standards of comfort and safety.',
    subTitle: 'Scope of delivery',
    subListTitle: 'The delivery package for the construction of new 779 series cars includes:',
    subList: ['61-779 – compartment car', '61-779А – sleeping car', '61-779I – a car whith a coupe for transportation of a disabled person', '61-779P – couchette car', '61-779R – car from the compartment of the brigade', '61-779 – car-restaurant', '61-7014 – car garage'],
    subListWithDesc: [['Set of fire protection of heating pipes', 'Enclosures are made of stainless steel, equipped with chrome locks and fastening elements. Differ from aesthetic attractiveness and long lifetime;'], ['The set of walls of the car', 'The kit includes lightweight internal partitions, facing hard-plastics with the use of cellular aluminum filler. The color of materials is selected in agreement with the customer;'], ['A set of carriage ceilings', 'The set includes lightweight frameless non-flammable ceilings made of sheet material, painted with powder paint. It is possible to manufacture ceiling panels of fiberglass. The color of materials is selected in agreement with the customer;'], ['A set of furniture for the service compartment of a wagon', 'The kit includes everything necessary for the service compartment: a refrigerator cabinet, a dishwasher, a wardrobe with a stainless steel sink, a comfortable armchair for the conductor.'], ['Set of toilet elements', 'The set includes: sinks made of fiberglass with mirrors and fittings, stainless steel sinks, fiberglass floors'], ['Set of elements of the corridor', 'The set includes a set of handrails made of durable stainless steel, coated with powder paint;']],
    subListTitle2: 'A set of interior and exterior doors, which includes:',
    subList2: ['12 doors for a passenger compartment and a pavilion for the rest of the drivers, equipped with a special mechanism that provides smooth, silent opening and closing, reliable fixing in extreme positions and complete locking;', '2 doors of the toilet equipped with an electromobiling lock;', '1 fireproof door of passenger compartment with the possibility of fixing in an open position;', '2 doors from the vestibule to the carriage (left and right);'],
    subListTitle3: 'Set of facing of side walls',
    subList3: ['The facade of the side walls is made of high quality fiberglass, the color is selected in agreement with the customer;'],
    subListTitle4: 'A set of furniture for passenger compartments, which includes:',
    subList4: ['Lower and upper sleeping shelves with fixing elements for fixing in extreme positions, covered with heavier fabrics, the color of which is selected in agreement with the customer;', 'Tables with the possibility of automatic fixing in extreme positions;', 'Stairs for upper shelves;', 'Luggage racks;', 'Accessories: handrails, holders for trousers, newspapers, hooks, etc.']
  },
  // {
  //   slider: ['/product/fittings_for_building_new_cars_series_779/1.webp', '/product/fittings_for_building_new_cars_series_779/2.webp','/product/fittings_for_building_new_cars_series_779/3.webp','/product/fittings_for_building_new_cars_series_779/4.webp','/product/fittings_for_building_new_cars_series_779/5.webp','/product/fittings_for_building_new_cars_series_779/6.webp','/product/fittings_for_building_new_cars_series_779/7.webp','/product/fittings_for_building_new_cars_series_779/8.webp','/product/fittings_for_building_new_cars_series_779/9.webp','/product/fittings_for_building_new_cars_series_779/10.webp'],
  //   title: 'Fittings for Building New Cars Series 779',
  //   description: 'LCC “A.T.O.R.” offers to use services in the field of supply of components for the construction of new cars series 779. In the production process, we use only quality certified materials and the latest technologies. The capabilities of the company allow us to fit new cars in accordance with the standards of comfort and safety. Set of fire protection of heating pipes Enclosures are made of stainless steel, equipped with chrome locks and fastening elements. Differ from aesthetic attractiveness and long lifetime; The set of walls of the car The kit includes lightweight internal partitions, facing hard-plastics with the use of cellular aluminum filler. The color of materials is selected in agreement with the customer; A set of carriage ceilings The set includes lightweight frameless non-flammable ceilings made of sheet material, painted with powder paint. It is possible to manufacture ceiling panels of fiberglass. The color of materials is selected in agreement with the customer; A set of furniture for the service compartment of a wagon The kit includes everything necessary for the service compartment: a refrigerator cabinet, a dishwasher, a wardrobe with a stainless steel sink, a comfortable armchair for the conductor. Set of toilet elements The set includes: sinks made of fiberglass with mirrors and fittings, stainless steel sinks, fiberglass floors Set of elements of the corridor The set includes a set of handrails made of durable stainless steel, coated with powder paint; A set of interior and exterior doors, which includes: 12 doors for a passenger compartment and a pavilion for the rest of the drivers, equipped with a special mechanism that provides smooth, silent opening and closing, reliable fixing in extreme positions and complete locking; 2 doors of the toilet equipped with an electromobiling lock; 1 fireproof door of passenger compartment with the possibility of fixing in an open position; 2 doors from the vestibule to the carriage (left and right); Set of facing of side walls The facade of the side walls is made of high quality fiberglass, the color is selected in agreement with the customer; A set of furniture for passenger compartments, which includes: lower and upper sleeping shelves with fixing elements for fixing in extreme positions, covered with heavier fabrics, the color of which is selected in agreement with the customer; tables with the possibility of automatic fixing in extreme positions; stairs for upper shelves; luggage racks; accessories: handrails, holders for trousers, newspapers, hooks, etc.',
  //   options: ['61-779 — compartment wagon', '47K — compartment wagon with furniture, which transforms at night'],
  //   scopeOfDelivery: ['Set of fire protection of heating pipes', 'Wagon wall set', 'A set of wagon ceilings', 'A set of furniture for the service compartment of a wagon', 'Set toilet elements', 'Wagon wall set', 'A set of furniture for the service compartment of a wagon']
  // },
  // {
  //   slider: ['/product/fittings_for_building_new_cars_series_779/1.webp', '/product/fittings_for_building_new_cars_series_779/2.webp','/product/fittings_for_building_new_cars_series_779/3.webp','/product/fittings_for_building_new_cars_series_779/4.webp','/product/fittings_for_building_new_cars_series_779/5.webp','/product/fittings_for_building_new_cars_series_779/6.webp','/product/fittings_for_building_new_cars_series_779/7.webp','/product/fittings_for_building_new_cars_series_779/8.webp','/product/fittings_for_building_new_cars_series_779/9.webp','/product/fittings_for_building_new_cars_series_779/10.webp'],
  //   title: 'Fittings for Building New Cars Series 779',
  //   description: 'LCC “A.T.O.R.” offers to use services in the field of supply of components for the construction of new cars series 779. In the production process, we use only quality certified materials and the latest technologies. The capabilities of the company allow us to fit new cars in accordance with the standards of comfort and safety. Set of fire protection of heating pipes Enclosures are made of stainless steel, equipped with chrome locks and fastening elements. Differ from aesthetic attractiveness and long lifetime; The set of walls of the car The kit includes lightweight internal partitions, facing hard-plastics with the use of cellular aluminum filler. The color of materials is selected in agreement with the customer; A set of carriage ceilings The set includes lightweight frameless non-flammable ceilings made of sheet material, painted with powder paint. It is possible to manufacture ceiling panels of fiberglass. The color of materials is selected in agreement with the customer; A set of furniture for the service compartment of a wagon The kit includes everything necessary for the service compartment: a refrigerator cabinet, a dishwasher, a wardrobe with a stainless steel sink, a comfortable armchair for the conductor. Set of toilet elements The set includes: sinks made of fiberglass with mirrors and fittings, stainless steel sinks, fiberglass floors Set of elements of the corridor The set includes a set of handrails made of durable stainless steel, coated with powder paint; A set of interior and exterior doors, which includes: 12 doors for a passenger compartment and a pavilion for the rest of the drivers, equipped with a special mechanism that provides smooth, silent opening and closing, reliable fixing in extreme positions and complete locking; 2 doors of the toilet equipped with an electromobiling lock; 1 fireproof door of passenger compartment with the possibility of fixing in an open position; 2 doors from the vestibule to the carriage (left and right); Set of facing of side walls The facade of the side walls is made of high quality fiberglass, the color is selected in agreement with the customer; A set of furniture for passenger compartments, which includes: lower and upper sleeping shelves with fixing elements for fixing in extreme positions, covered with heavier fabrics, the color of which is selected in agreement with the customer; tables with the possibility of automatic fixing in extreme positions; stairs for upper shelves; luggage racks; accessories: handrails, holders for trousers, newspapers, hooks, etc.',
  //   // options: ['61-779 — compartment wagon', '47K — compartment wagon with furniture, which transforms at night'],
  //   // scopeOfDelivery: ['Set of fire protection of heating pipes', 'Wagon wall set', 'A set of wagon ceilings', 'A set of furniture for the service compartment of a wagon', 'Set toilet elements', 'Wagon wall set', 'A set of furniture for the service compartment of a wagon']
  // },
];

const OneProduct = ({params}: Props) => {
  const [readMore, setReadMore] = useState(false);
  const currentProduct = data.filter((item, i) => i === +params.id)[0]
  const {
    slider, 
    title, 
    description,
    subTitle, 
    subDescription, 
    subListTitle,
    subListTitle3,
    subListTitle4,
    subListTitle5,
    subList,
    subTitle2, 
    subDescription2,
    subList2,
    subListTitle2,
    subList3,
    subTitle3,
    subDescription3,
    subList4,
    subTitle4,
    subTitle5,
    subDescription4, 
    subDescription5, 
    subList5,
    subListWithDesc
  } = currentProduct;


  const renderList = (subListTitle?: string, subList?: string[]) => {
    const renderItem = (subList: string[]) => {
      return subList.map((item, i) => {
        return <li className='product__container-info-container-subList-item' key={i}>{item}</li>
      })
    }
    return (
      <>
        {
          subListTitle ? 
          <h3 className='product__container-info-container-subListTitle'>{subListTitle}</h3>
          : null
        }
        {
          subList && subList?.length > 0  ? 
            <ul className='product__container-info-container-subList'>
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
      return <p className='product__container-info-container-subDescription' key={i}>{item}</p>
    })
    :
    null
  }

  const renderListWithDescription = (subListTitle?: string, subList?: string[][]) => {
    const renderItem = (subList: string[][]) => {
      return subList.map((item, i) => {
        console.log(item);
        
        return <li className='product__container-info-container-subListWithDesc-item' key={i}>
            <h3 className='product__container-info-container-subListWithDesc-item-title'>{item[0]}</h3>
            <p className='product__container-info-container-subListWithDesc-item-description'>{item[1]}</p>
          </li>
      })
    }
    return (
      <>
        {
          subListTitle ? 
          <h3 className='product__container-info-container-subListTitle'>{subListTitle}</h3>
          : null
        }
        {
          subList && subList?.length > 0  ? 
            <ul className='product__container-info-container-subListWithDesc'>
              {renderItem(subList)}
            </ul>
          :
          null
        }
      </>
    )
  }

  const renderInfoItem = () => {
    switch(+params.id) {
      case 0:
        return (
          <>
            {renderSubDescription(subDescription)}
          </>
        );
      case 1:
      return (
        <>
          {renderSubDescription(subDescription)}
        </>
      );
      case 2:
        return (
          <>
            {renderList(subListTitle, subList)}
            {renderSubDescription(subDescription)}
            {renderList(subListTitle2, subList2)}
            {renderList(subListTitle3, subList3)}
            <h2 className='product__container-info-container-subListTitle'>{subTitle}</h2>
            {renderSubDescription(subDescription2)}
            {renderList(subListTitle4, subList4)}
            {renderSubDescription(subDescription3)}
            {renderList(subListTitle5, subList5)}
            <h2 className='product__container-info-container-subListTitle'>{subTitle2}</h2>
          </>
        )
      case 3:
        return (
          <>
            {renderList(subListTitle, subList)}
            {renderSubDescription(subDescription)}
            {renderList(subListTitle2, subList2)}
            {renderList(subListTitle3, subList3)}
            <h2 className='product__container-info-container-subListTitle'>{subTitle}</h2>
            {renderSubDescription(subDescription2)}
            {renderList(subListTitle4, subList4)}
            {renderSubDescription(subDescription3)}
            {renderList(subListTitle5, subList5)}
            <h2 className='product__container-info-container-subListTitle'>{subTitle2}</h2>
          </>
        )
      case 4:
        return (
          <>
            {renderSubDescription(subDescription)}
          </>
        )
      case 5:
        return (
          <>
            {renderSubDescription(subDescription)}
            {renderList(subListTitle, subList)}
            {renderList(subListTitle2, subList2)}
            {renderList(subListTitle3, subList3)}
            {renderList(subListTitle4, subList4)}
            {renderList(subListTitle5, subList5)}
            {renderList(subTitle, subDescription2)}
          </>
        )
      case 6:
        return (
          <>
            {renderSubDescription(subDescription)}
            {renderList(subListTitle, subList)}
            {renderSubDescription(subDescription2)}
            {renderSubDescription(subDescription3)}
            {renderList(subListTitle2, subList2)}
            {renderSubDescription(subDescription4)}
            {renderList(subListTitle3, subList3)}
            {renderList(subListTitle4, subList4)}
          </>
        )
      case 7:
        return (
          <>
            {renderList(subListTitle, subList)}
            <h2 className='product__container-info-container-subListTitle'>{subTitle}</h2>
          </>
        )
      case 8:
        return (
          <>
            {renderList(subListTitle, subList)}
            <h2 className='product__container-info-container-subListTitle'>{subTitle}</h2>
          </>
        )
      case 9:
        return (
          <>
            {renderList(subListTitle, subList)}
            <h2 className='product__container-info-container-subListTitle'>{subTitle}</h2>
            {renderList(subListTitle2, subList2)}
            {renderListWithDescription('', subListWithDesc)}
            {renderList(subListTitle3, subList3)}
            {renderList(subListTitle4, subList4)}
            {renderList(subListTitle5, subList5)}
          </>
        )
      case 10:
        return (
          <>
            <h2 className='product__container-info-container-subListTitle'>{subTitle}</h2>
            {renderList(subListTitle, subList)}
            {renderListWithDescription('', subListWithDesc)}
            {renderList(subListTitle2, subList2)}
            {renderList(subListTitle3, subList3)}
            {renderList(subListTitle4, subList4)}
          </>
        )
    }
  }

  return (
    <>
      {/* <Head>
        <title>test</title>
        
      </Head> */}
      <div className="product">
        <CustomSlider data={slider}/>
    
        <div className="product__container">
          <span className='product__container-title'>Products</span>

          <div className="product__container-info">
            <h2 className="product__container-info-title">{title}</h2>
            <div className="product__container-info-container">
              <p className="product__container-info-container-text">
                {description}
              </p>
              <button 
                className="product__container-info-container-button" 
                onClick={() => setReadMore(!readMore)}>
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

              {readMore ? renderInfoItem() : null}


            </div>
          </div>
        </div>

        <ServiceProductSlider status={true}/>

      </div>
    </>
  )
}

export default OneProduct;