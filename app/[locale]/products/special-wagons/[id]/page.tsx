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
import { specialWagon } from "@/data/data";
import ServiceProductSlider from "@/components/ServiceProductSlider/ServiceProductSlider";

export async function generateMetadata({ params }: { params: any }) {
  const { t, resources } = await initTranslations(params.locale, [
    "special-wagon",
    "service-product",
  ]);
  const id = params.id;
  const product = specialWagon.filter((item, i) => i === +id)[0];
  
  return {
    title: t(product.title),
    description: t(product.description)
  };
}

export default async function ProductPage({ params }: Props) {
  const { t, resources } = await initTranslations(params.locale, [
    "special-wagon",
    "service-product",
  ]);
  const currentProduct = specialWagon.filter((item, i) => i === +params.id)[0];
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
          </>
        );
      case 1:
        return <>{renderSubDescription(t, subDescription)}</>;
      case 2:
        return (
          <>
            {renderSubDescription(t, subDescription)}
            {renderList(t, "", subList)}
            {renderSubDescription(t, subDescription2)}
            {renderList(t, subListTitle, subList2)}
            {renderSubDescription(t, subDescription3)}
          </>
        );
    }
  };

  const renderDescription = () => {
    switch (+params.id) {
      case 0:
        return <>{renderList(t, description.listTitle, description.list)}</>;
      case 1:
        return <>{renderList(t, description.listTitle, description.list)}</>;
      case 2:
        return (
          <>
            {description.listTitle &&
              renderSubDescription(t, [description.listTitle])}
            {renderList(t, "", description.list)}
            {description.description &&
              renderSubDescription(t, description.description)}
          </>
        );
    }
  };

  const getJsxInfo = renderInfoItem();
  const getJsxDescription = renderDescription();

  return (
    <TranslationsProvider
      namespaces={["special-wagon"]}
      locale={params?.locale}
      resources={resources}
    >
      <OneProduct
        params={params}
        data={currentProduct}
        jsxIndo={getJsxInfo}
        jsxDescription={getJsxDescription}
        translate={["special-wagon"]}
      />
      <ServiceProductSlider status={true} />
    </TranslationsProvider>
  );
}
