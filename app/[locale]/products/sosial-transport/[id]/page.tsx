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
import { sosialTransport } from "@/data/data";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.id;

  const product = sosialTransport.filter((item, i) => i === +id)[0];

  return {
    title: product.title,
    description: `You can read about ${product.title}`,
  };
}

export default async function ProductPage({ params }: Props) {
  const { t, resources } = await initTranslations(params.locale, [
    "sosial-transport",
  ]);

  const currentProduct = sosialTransport.filter(
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
        return <>{renderSubDescription(t, subDescription)}</>;
      case 1:
        return (
          <>
            {renderSubDescription(t, subDescription)}
            {renderList(t, "", subList)}
            {renderSubDescription(t, subDescription2)}
          </>
        );
      case 2:
        return <></>;
      case 3:
        return <>{renderSubDescription(t, subDescription)}</>;
      case 4:
        return <>{renderSubDescription(t, subDescription)}</>;
      case 5:
        return <>{renderSubDescription(t, subDescription)}</>;
      case 6:
        return <></>;
    }
  };

  const renderDescription = () => {
    switch (+params.id) {
      case 0:
        return (
          <>
            {renderSubDescription(t, description.description)}
            {renderList(t, "", description.list)}
          </>
        );
      case 1:
        return (
          <>
            <>
              {renderSubDescription(t, description.description)}
              {renderList(t, "", description.list)}
            </>
          </>
        );
      case 2:
        return (
          <>
            {renderSubDescription(t, description.description)}
            {description.list && renderList(t, "", description.list)}
          </>
        );
      case 3:
        return (
          <>
            {renderSubDescription(t, description.description)}
            {description.list && renderList(t, "", description.list)}
          </>
        );
      case 4:
        return (
          <>
            {renderSubDescription(t, description.description)}
            {description.list && renderList(t, "", description.list)}
          </>
        );
      case 5:
        return (
          <>
            {renderSubDescription(t, description.description)}
            {description.list && renderList(t, "", description.list)}
          </>
        );
      case 6:
        return (
          <>
            {renderSubDescription(t, description.description)}
          </>
        );
    }
  };

  const getJsxInfo = renderInfoItem();
  const getJsxDescription = renderDescription();

  return (
    <TranslationsProvider
      namespaces={["sosial-transport"]}
      locale={params?.locale}
      resources={resources}
    >
      <OneProduct
        params={params}
        data={currentProduct}
        jsxIndo={getJsxInfo}
        jsxDescription={getJsxDescription}
        translate={["sosial-transport"]}
      />
    </TranslationsProvider>
  );
}
