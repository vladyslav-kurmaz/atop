export type Service = {
  src: string;
  title: string;
  description: string;
};

export type Product = {
  slider: string[];
  title: string;
  description: string;
  options?: string[];
  scopeOfDelivery?: string[];
};

export type AllProductInfo = {
  title: string;
  titleCard?: string
  description: ProductDescription;
  slider: string[];
  subTitle?: string;
  subDescription?: string[];
  subListTitle?: string;
  subListTitle3?: string;
  subListTitle4?: string;
  subListTitle5?: string;
  subList?: string[];
  subTitle2?: string;
  subDescription2?: string[];
  subList2?: string[];
  subListTitle2?: string;
  subList3?: string[];
  subTitle3?: string;
  subDescription3?: string[];
  subList4?: string[];
  subTitle4?: string;
  subDescription4?: string[];
  subTitle5?: string;
  subDescription5?: string[];
  subList5?: string[];
  subTitle6?: string;
  subDescription6?: string[];
  subList6?: string[];
  subTitle7?: string;
  subDescription7?: string[];
  subList7?: string[];
  subList8?: string[];
  subList9?: string[];

  subListWithDesc?: string[][];
};

export type DescriptionBolt = {bolt: string, normal: string}

export type ProductDescription = {
  listTitle?: string;
  list?: string[];
  description?: string[];
  description2?: string[];
  description3?: string[];
  title?: string;
  title2?: string;
  title3?: string;

};
