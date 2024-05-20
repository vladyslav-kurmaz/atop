
import "./product.scss";

type Props = {
  params: {
    id: string;
    locale: string;
  };
};

import type { Metadata } from "next";
import TranslationsProvider from "@/components/TranslationProvider/TranslationProvider";
import initTranslations from "@/app/i18n";
import OneProduct from "@/components/OneProduct/OneProduct";
import { AllProductInfo } from "@/types/type";
import { renderList } from "@/helpers/renderList";
import { renderSubDescription } from "@/helpers/renderSubDescripton";
import { passengerData } from "@/data/data";
import ServiceProductSlider from "@/components/ServiceProductSlider/ServiceProductSlider";

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const id = params.id;

//   const product = passengerData.filter((item, i) => i === +id)[0];

//   return {
//     title: product.title,
//     description: `You read about ${product.title}`,
//   };
// }

export async function generateMetadata({ params }: { params: any }) {
  const { t, resources } = await initTranslations(params.locale, [
    "passengers",
    "service-product",
  ]);
  const id = params.id;
  const product = passengerData.filter((item, i) => i === +id)[0];
  
  return {
    title: t(product.title),
    description: t(product.description)
  };
}

export default async function ProductPage({ params }: Props) {
  const { t, resources } = await initTranslations(params.locale, [
    "passengers",
    "service-product",
  ]);
  const currentProduct = passengerData.filter((item, i) => i === +params.id)[0];
  const {
    slider,
    title,
    titleCard,
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
    subDescription6,
    subList6,
    subDescription7,
    subListWithDesc,
  } = currentProduct;

  const renderInfoItem = () => {
  
    

    switch (+params.id) {
      case 0:
        return (
          <>
            {renderSubDescription(t, subDescription)}
            {renderList(t, "", subList)}
            {renderSubDescription(t, subDescription2)}
            {renderList(t, "", subList2)}
            {renderSubDescription(t, subDescription3)}
            {renderList(t, "", subList3)}
            {renderSubDescription(t, subDescription4)}
            {renderList(t, "", subList4)}
            {renderSubDescription(t, subDescription5)}
            {renderList(t, "", subList5)}
            {renderSubDescription(t, subDescription6)}
            {renderList(t, "", subList6)}
            {renderSubDescription(t, subDescription7)}
          </>
        );
      case 1:
        return <>{renderSubDescription(t, subDescription)}</>;
      case 2:
        return <></>;
      case 3:
        return (
          <>
            {renderSubDescription(t, subDescription)}
            {renderList(t, "", subList)}
            {renderSubDescription(t, subDescription2)}
            {renderList(t, "", subList2)}
            {renderSubDescription(t, subDescription3)}
            {renderList(t, "", subList3)}
            {renderSubDescription(t, subDescription4)}
            {renderList(t, "", subList4)}
            {renderSubDescription(t, subDescription5)}
            {renderList(t, "", subList5)}
            {renderSubDescription(t, subDescription6)}
            {renderList(t, "", subList6)}
            {renderSubDescription(t, subDescription7)}
          </>
        );
      case 4:
        return (
          <>
            {renderSubDescription(t, subDescription)}
            {renderList(t, subListTitle, subList)}
            {renderSubDescription(t, subDescription2)}
            {renderList(t, subListTitle2, subList2)}
            {renderSubDescription(t, subDescription3)}
            {renderList(t, subListTitle3, subList3)}
            {renderList(t, subListTitle4, subList4)}
            {renderSubDescription(t, subDescription4)}
          </>
        );
      case 5:
        return <>{renderSubDescription(t, subDescription)}</>;
      case 6:
        return (
          <>
            {renderSubDescription(t, subDescription)}
            {renderList(t, subListTitle, subList)}
            {renderSubDescription(t, subDescription2)}
          </>
        );
    }
  };

  const renderDescription = () => {

    switch (+params.id) {
      case 0:
        return (
          <>
            <h2 className="product__container-info-container-subListTitle">
              {description.description && t(description.description[0])}
            </h2>
            {description.list && renderList(t, "", description.list)}
          </>
        );
      case 1:
        return (
          <>
            <h2 className="product__container-info-container-subListTitle">
              {description.description && t(description.description[0])}
            </h2>
            {description.list && renderList(t, "", description.list)}
          </>
        );
      case 2:
        return (
          <>
            <h2 className="product__container-info-container-subListTitle font-bold">
              {description.title && t(description.title)}
            </h2>
            {renderSubDescription(t, description.description)}
            <h2 className="product__container-info-container-subListTitle font-bold">
              {description.title2 && t(description.title2)}
            </h2>
            {renderSubDescription(t, description.description2)}
            <h2 className="product__container-info-container-subListTitle font-bold">
              {description.title3 && t(description.title3)}
            </h2>
            {renderSubDescription(t, description.description3)}
          </>
        );
      case 3:
        return (
          <>
            <h2 className="product__container-info-container-subListTitle">
              {description.description && t(description.description[0])}
            </h2>
            {description.list && renderList(t, "", description.list)}
          </>
        );
      case 4:
        return (
          <>
            <h2 className="product__container-info-container-subListTitle">
              {description.description && t(description.description[0])}
            </h2>
            {description.list && renderList(t, "", description.list)}
          </>
        );
      case 5:
        return <>{description.list && renderList(t, "", description.list)}</>;
      case 6:
        return (
          <>
            <h2 className="product__container-info-container-subListTitle">
              {description.description && t(description.description[0])}
            </h2>
            {description.list && renderList(t, "", description.list)}
          </>
        );
    }
  };

  const getJsxInfo = renderInfoItem();
  const getJsxDescription = renderDescription();

  return (
    <TranslationsProvider
      namespaces={["passengers"]}
      locale={params?.locale}
      resources={resources}
    >
      <OneProduct
        params={params}
        data={currentProduct}
        jsxIndo={getJsxInfo}
        jsxDescription={getJsxDescription}
        translate={["passengers"]}
      />
      <ServiceProductSlider status={true} />
    </TranslationsProvider>
  );
}
