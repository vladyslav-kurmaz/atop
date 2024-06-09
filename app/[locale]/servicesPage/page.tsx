export async function generateMetadata({ params }: { params: any }) {
  return {
    title: params.locale === "en" ? "Services - A.T.O.R" : "Послуги – А.Т.О.Р",
    description:
      params.locale === "en"
        ? "On this page you have saw our services"
        : "На цій сторінці ви побачили наші послуги",
  };
}

import "./servicesPage.scss";
import ServicesList from "@/components/ServicesList/ServicesList";
import { Service } from "@/types/type";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import initTranslations from "@/app/i18n";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

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
    src: "/servicesPage/5-2.webp",
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

export default async function MainServicesPage({ params }: { params: Params }) {
  const { t, resources } = await initTranslations(params.locale, ["services"]);

  const renderService = (data: Service[]) => {
    return data.map((item, i) => {
      return (
        <li className="service__list-item" key={i}>
          <Link
            href={`/servicesPage/${i}`}
            className="service__list-item-overLink absolute z-50"
          ></Link>
          <Image
            src={item.src}
            alt={item.title}
            width={1000}
            height={1000}
            className="service__list-item-img"
          />

          <div className="service__list-item-container">
            <h3 className="service__list-item-title leading-none mb-2">
              {t(item.title)}
            </h3>
            <p className="service__list-item-text ">{t(item.description)}</p>
            <Link
              href={`/servicesPage/${i}`}
              className="service__list-item-link"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <mask
                  id="mask0_450_672"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                >
                  <rect width="20" height="20" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_450_672)">
                  <path
                    d="M5.0625 15L4 13.9375L12.4375 5.5H5V4H15V14H13.5V6.5625L5.0625 15Z"
                    fill="white"
                  />
                </g>
              </svg>
            </Link>
          </div>
        </li>
      );
    });
  };

  return (
    <div className="service">
      <h1 className="service__title">{t("title")}</h1>
      <p className="service__description">{t("description")}</p>

      <ul className="service__list">{renderService(dataServices)}</ul>
    </div>
  );
}
