'use client'
import Slider from "react-slick";
import Link from "next/link";

import "./ServiceProductSlider.scss";
import initTranslations from "@/app/i18n";
import { useTranslation } from "react-i18next";
import { TFunction } from "i18next";

type Title = {
  title: string;
  src: string;
};
const dataProduct: Title[] = [
  { title: "pass1", src: "/products/passenger/0" },
  { title: "pass2", src: "/products/passenger/1" },
  { title: "pass2", src: "/products/passenger/2" },
  { title: "pass3", src: "/products/passenger/3" },
  { title: "pass4", src: "/products/passenger/4" },
  { title: "pass5", src: "/products/passenger/5" },
  { title: "pass6", src: "/products/passenger/6" },
  { title: "pass7", src: "/products/passenger/7" },
  { title: "system1", src: "/products/system/0" },
  { title: "system2", src: "/products/system/1" },
  { title: "system3", src: "/products/system/2" },
  { title: "system4", src: "/products/system/3" },
  { title: "vacuum-toilet1", src: "/products/vacuum-toilets/0" },
  { title: "vacuum-toilet2", src: "/products/vacuum-toilets/1" },
  { title: "vacuum-toilet3", src: "/products/vacuum-toilets/2" },
  { title: "social1", src: "/products/sosial-transport/0" },
  { title: "social2", src: "/products/sosial-transport/1" },
  { title: "social3", src: "/products/sosial-transport/2" },
  { title: "social4", src: "/products/sosial-transport/3" },
  { title: "social5", src: "/products/sosial-transport/4" },
  { title: "social6", src: "/products/sosial-transport/5" },
  { title: "social7", src: "/products/sosial-transport/6" },
  { title: "special1", src: "/products/special-wagons/0" },
  { title: "special2", src: "/products/special-wagons/1" },
  { title: "special3", src: "/products/special-wagons/2" },
];

const dataService: Title[] = [
  { title: "service1", src: "/servicesPage/0" },
  { title: "service2", src: "/servicesPage/1" },
  { title: "service3", src: "/servicesPage/2" },
  { title: "service4", src: "/servicesPage/3" },
  { title: "service5", src: "/servicesPage/4" },
  { title: "service6", src: "/servicesPage/5" },
  { title: "service7", src: "/servicesPage/6" },
  { title: "service8", src: "/servicesPage/7" },
  { title: "service9", src: "/servicesPage/8" },
  { title: "service10", src: "/servicesPage/9" },
  { title: "service11", src: "/servicesPage/10" },
];

const ServiceProductSlider = ({
  status,
}: {
  status: boolean;
}) => {
  const { t } = useTranslation(["service-product"]);
  const settings = {
    arrows: true,
    centerPadding: "0px",
    // customPaging: 'padding-right: 50px',
    dots: false, // Показувати точки для навігації
    centerMode: true,
    infinite: true, // Безкінечний слайдер
    speed: 500, // Швидкість переміщення слайдів
    slidesToShow: 2, // Кількість видимих слайдів одночасно
    slidesToScroll: 1, // Кількість слайдів, що переміщуються при натисканні кнопок "Наступний" і "Попередній"
    // variableWidth: true,
    responsive: [
      {
        breakpoint: 600, // Змінити налаштування для планшетів і більших екранів
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const renderProductsOrService = (data: Title[]) => {
    return data.map((item, i) => {
      const { title, src } = item;
      return (
        <div className="other-item" key={i}>
          <Link href={src} className="other-item-overLink"></Link>
          <span className="other-item-span">
            {status ? t("product") : t("service")}
          </span>
          <h3 className="other-item-title">{t(`${title}`)}</h3>
          <Link href={src} className="other-item-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <mask
                id="mask0_450_1520"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="20"
                height="20"
              >
                <rect width="20" height="20" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_450_1520)">
                <path
                  d="M5.0625 15L4 13.9375L12.4375 5.5H5V4H15V14H13.5V6.5625L5.0625 15Z"
                  fill="white"
                />
              </g>
            </svg>
          </Link>
        </div>
      );
    });
  };

  return (
    <div className="other">
      <div className="other-container">
        <h3 className="other-container-title">
          {status ? t('more-product') : t("more-service")}
        </h3>

        <div className="other-slider">
          <Slider {...settings}>
            {renderProductsOrService(status ? dataProduct : dataService)}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ServiceProductSlider;
