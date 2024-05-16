import { renderList } from "@/helpers/renderList";
import { renderSubDescription } from "@/helpers/renderSubDescripton";
import "./product.scss";

type Props = {
  params: {
    id: string;
    locale: string;
  };
};

import type { Metadata } from "next";
import OneProduct from "@/components/OneProduct/OneProduct";
import TranslationsProvider from "@/components/TranslationProvider/TranslationProvider";
import initTranslations from "@/app/i18n";
import { vacuumToiletsData } from "@/data/data";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.id;

  const product = vacuumToiletsData.filter((item, i) => i === +id)[0];

  return {
    title: product.title,
    description: `You can read about ${product.title}`,
  };
}

export default async function ProductPage({ params }: Props) {
  const { t, resources } = await initTranslations(params.locale, [
    "vacuum-toilet",
  ]);

  const currentProduct = vacuumToiletsData.filter(
    (item, i) => i === +params.id
  )[0];
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
    subList7,
    subList8,
    subList9,
    subDescription7,
    subListWithDesc,
  } = currentProduct;

  const renderInfoItem = () => {
    switch (+params.id) {
      case 0:
        return (
          <>
            {renderList(t, subListTitle, subList)}
            <h2 className="product__container-info-container-subListTitle">
              {subTitle && t(subTitle)}
            </h2>
            {renderSubDescription(t, subDescription)}
            {renderList(t, "", subList2)}
            {renderSubDescription(t, subDescription2)}
            {renderList(t, "", subList3)}
            {renderSubDescription(t, subDescription3)}
            {renderList(t, "", subList4)}
            {renderSubDescription(t, subDescription4)}
            {renderList(t, "", subList5)}
            {renderSubDescription(t, subDescription5)}
            {renderList(t, "", subList6)}
            {renderList(t, subListTitle2, subList7)}
            {renderList(t, subListTitle3, subList8)}
            {renderList(t, subListTitle4, subList9)}
          </>
        );
      case 1:
        return (
          <>
            {renderSubDescription(t, subDescription)}
            {renderList(t, subListTitle, subList)}
            {renderList(t, subListTitle2, subList2)}
            {renderList(t, subListTitle3, subList3)}
            {renderList(t, subListTitle4, subList4)}
          </>
        );
      case 2:
        return (
          <>
            {renderSubDescription(t, subDescription)}
            {renderList(t, "", subList)}
            {renderSubDescription(t, subDescription2)}
          </>
        );
    }
  };

  const renderDescription = () => {
    switch (+params.id) {
      case 0:
        return <>{renderSubDescription(t, description.description)}</>;
      case 1:
        return (
          <>
            <>{renderSubDescription(t, description.description)}</>
          </>
        );
      case 2:
        return (
          <>
            {renderSubDescription(t, description.description)}
            {description.list && renderList(t, "", description.list)}
          </>
        );
    }
  };

  const getJsxInfo = renderInfoItem();
  const getJsxDescription = renderDescription();

  return (
    <TranslationsProvider
      namespaces={["vacuum-toilet"]}
      locale={params?.locale}
      resources={resources}
    >
      <OneProduct
        params={params}
        data={currentProduct}
        jsxIndo={getJsxInfo}
        jsxDescription={getJsxDescription}
        translate={["vacuum-toilet"]}
      />
    </TranslationsProvider>
  );
}
