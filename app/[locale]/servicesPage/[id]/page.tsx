import "./servicePage.scss";
import { Service } from "@/types/type";

type Props = {
  params: {
    id: string;
    locale: string;
  };
};

const dataServices: Service[] = [
  {
    src: "/servicesPage/1.webp",
    title: "preview.1.title",
    description: "preview.1.description",
  },
  {
    src: "/servicesPage/2.webp",
    title: "preview.2.title",
    description: "preview.2.description",
  },
  {
    src: "/servicesPage/3.webp",
    title: "preview.3.title",
    description: "preview.3.description",
  },
  {
    src: "/servicesPage/4.webp",
    title: "preview.4.title",
    description: "preview.4.description",
  },
  {
    src: "/servicesPage/5.webp",
    title: "preview.5.title",
    description: "preview.5.description",
  },
  {
    src: "/servicesPage/6.webp",
    title: "preview.6.title",
    description: "preview.6.description",
  },
  {
    src: "/servicesPage/7.webp",
    title: "preview.7.title",
    description: "preview.7.description",
  },
  {
    src: "/servicesPage/8.webp",
    title: "preview.8.title",
    description: "preview.8.description",
  },
  {
    src: "/servicesPage/9.webp",
    title: "preview.9.title",
    description: "preview.9.description",
  },
  {
    src: "/servicesPage/10.webp",
    title: "preview.10.title",
    description: "preview.10.description",
  },
  {
    src: "/servicesPage/11.webp",
    title: "preview.11.title",
    description: "preview.11.description",
  },
];

import type { Metadata } from "next";
import initTranslations from "@/app/i18n";
import OneService from "@/components/OneService/OneService";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import TranslationsProvider from "@/components/TranslationProvider/TranslationProvider";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { t, resources } = await initTranslations(params.locale, ["services"]);

  const id = params.id;

  const product = dataServices.filter((item, i) => i === +id)[0];

  return {
    title: product.title,
    description: `You read about ${t(product.title)}`,
  };
}

export default async function ServicePage({ params }: Props) {
  const { t, resources } = await initTranslations(params.locale, ["services"]);

  return (
    //  <OneServicePage params={params}/>
    <TranslationsProvider
      namespaces={["main"]}
      locale={params?.locale}
      resources={resources}
    >
      <OneService params={params} />
    </TranslationsProvider>
  );
}
