import initTranslations from "@/app/i18n";
import { Metadata } from "next";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Link from "next/link";
import Image from "next/image";

import "../Products.scss";

export async function generateMetadata({ params }: { params: any }) {
  return {
    title:
      params.locale === "en"
        ? "Vacuum toilet systems"
        : "Вакуумні туалетні системи",
  };
}

// import './Products.scss';
// export const metadata: Metadata = {
//   title: 'AETD Products',
// }

type PreviewData = {
  title: string;
  src: string;
};

const data: PreviewData[] = [
  { title: "1.title", src: "/product/vacuum/preview/vacuum-1.webp" },
  { title: "2.title", src: "/product/vacuum/preview/vacuum-2.webp" },
  { title: "3.title", src: "/product/vacuum/preview/vacuum-3.webp" },
];

export default async function Products({ params }: { params: Params }) {
  const { t } = await initTranslations(params.locale, ["vacuum-toilet"]);

  const renderProduct = () => {
    return data.map((item, i) => {
      const { title, src } = item;

      const number = () => {
        if (i < 9) {
          return `0${i + 1}`;
        } else {
          return i + 1;
        }
      };

      return (
        <li className="products__list-item h-[459px] lg:h-[427px]" key={i}>
          <Link
            href={`/products/vacuum-toilets/${i}`}
            className="products__list-item-overLink"
          ></Link>
          <Image src={src} alt={title} width={1000} height={240} className="mb-6 rounded-t-[12px]"/>
          <p className="products__list-item-text px-6 ">{t(title)}</p>
          <div className="products__list-item-container px-6 pb-6 mt-auto">
            <span className="products__list-item-container-num">
              {number()}
            </span>
            <Link
              href={`/products/${i}`}
              className="products__list-item-container-link"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <mask
                  id="mask0_385_1187"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                >
                  <rect width="20" height="20" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_385_1187)">
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
    <div className="products">
      <h1 className="products__title">{t("title")}</h1>
      <p className="products__text">{t("description")}</p>

      <ul className="products__list">{renderProduct()}</ul>
    </div>
  );
}
