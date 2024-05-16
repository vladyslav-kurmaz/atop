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
import { systemData } from "@/data/data";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.id;

  const product = systemData.filter((item, i) => i === +id)[0];

  return {
    title: product.title,
    description: `You read about ${product.title}`,
  };
}

export default async function ProductPage({ params }: Props) {
  const { t, resources } = await initTranslations(params.locale, ["system"]);
  const currentProduct = systemData.filter((item, i) => i === +params.id)[0];
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
            <h2 className="product__container-info-container-subListTitle">
              {subTitle && t(subTitle)}
            </h2>
            {renderSubDescription(t, subDescription)}
            {renderList(t, "", subList)}
            <h2 className="product__container-info-container-subListTitle">
              {subTitle2 && t(subTitle2)}
            </h2>
            {renderSubDescription(t, subDescription2)}
            {renderList(t, "", subList2)}
            {renderSubDescription(t, subDescription3)}
            {renderList(t, "", subList3)}
            <h2 className="product__container-info-container-subListTitle">
              {subTitle2 && t(subTitle3)}
            </h2>
            {renderSubDescription(t, subDescription4)}
            {renderList(t, "", subList4)}
          </>
        );
      case 1:
        return <>{renderList(t, subListTitle, subList)}</>;
      case 2:
        return <>{renderList(t, subListTitle, subList)}</>;
      case 3:
        return (
          <>
            {renderList(t, subListTitle, subList)}
            {renderSubDescription(t, subDescription)}
            {renderList(t, "", subList2)}
            {renderSubDescription(t, subDescription2)}
            {renderList(t, "", subList3)}
          </>
        );
    }
  };

  const renderDescription = () => {
    switch (+params.id) {
      case 0:
        return (
          <>
            <h2 className="font-[400] text-[16px] ">
              {description.description && t(description.description[0])}
            </h2>
            {description.list && renderList(t, "", description.list)}
          </>
        );
      case 1:
        return (
          <>
            <h2 className="font-[400] text-[16px]">
              {description.description && t(description.description[0])}
            </h2>
            {description.list && renderList(t, "", description.list)}
          </>
        );
      case 2:
        return <>{renderSubDescription(t, description.description)}</>;
      case 3:
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
      namespaces={["system"]}
      locale={params?.locale}
      resources={resources}
    >
      <OneProduct
        params={params}
        data={currentProduct}
        jsxIndo={getJsxInfo}
        jsxDescription={getJsxDescription}
        translate={["system"]}
      />
    </TranslationsProvider>
  );
}
