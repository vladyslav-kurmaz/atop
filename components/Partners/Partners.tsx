"use client";

import Slider from "react-slick";
import Image from "next/image";

import aps from "../../image/mainPage/aps.webp";
import donetck from "../../image/mainPage/donetck.webp";
import lviv from "../../image/mainPage/lviv1.webp";
import odesa from "../../image/mainPage/odesa.webp";
import ukr from "../../image/mainPage/ukr.webp";
import { useRef } from "react";
import alstom from "@/image/partner/alstom.png";
import bode from "@/image/partner/bode.png";
import dniproMetro from "@/image/partner/dnipro-metro.png";
import engeeniring from "@/image/partner/engeeniring.png";
import kharkivMetro from "@/image/partner/kharkir-metro.png";
import knorrBreme from "@/image/partner/knorr-breme.png";
import kyivMetro from "@/image/partner/kyiv-metro.png";
import kyivpass from "@/image/partner/kyivpas.png";
import skoda from "@/image/partner/skoda.png";
import tram from "@/image/partner/tram.png";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import initTranslations from "@/app/i18n";
import { useTranslation } from "react-i18next";

const Partners =  () => {
  const { t } = useTranslation(["main"]);
  const settings = {
    arrows: true,
    centerPadding: "0px",
    dots: false,
    centerMode: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          speed: 2000,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          speed: 2000,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          speed: 2000,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          speed: 2000,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
    ],
  };

  const sliderRef = useRef<any>(null);

  const prevSlide = () => {
    sliderRef.current !== null && sliderRef.current?.slickPrev();
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div className="mainPage__partners">
      <h3 className="mainPage__partners-title">{t("partners-title")}</h3>
      {/* <div className="flex gap">
        <button
          className="mainPage__grow-container-slider-switchers-prev"
          name="button for change previous slide"
          onClick={() => prevSlide()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <mask
              id="mask0_215_4424"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="24"
            >
              <rect width="24" height="24" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_215_4424)">
              <path
                d="M14 18L8 12L14 6L15.4 7.4L10.8 12L15.4 16.6L14 18Z"
                fill="#232323"
              />
            </g>
          </svg>
        </button>
        <button
          className="mainPage__grow-container-slider-switchers-next"
          name="button for change next slide"
          onClick={() => nextSlide()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <mask
              id="mask0_215_4436"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="24"
            >
              <rect width="24" height="24" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_215_4436)">
              <path
                d="M12.6 12L8 7.4L9.4 6L15.4 12L9.4 18L8 16.6L12.6 12Z"
                fill="#232323"
              />
            </g>
          </svg>
        </button>
      </div> */}

      <div className="mainPage__partners-container">
        <Slider {...settings}>
          <div className="mainPage__partners-container-list-item">
            <Image
              src={alstom}
              alt="aps"
              className="mainPage__partners-container-list-item-img"
            />
          </div>
          <div className="mainPage__partners-container-list-item">
            <Image
              src={bode}
              alt="aps"
              className="mainPage__partners-container-list-item-img"
            />
          </div>
          <div className="mainPage__partners-container-list-item">
            <Image
              src={dniproMetro}
              alt="aps"
              className="mainPage__partners-container-list-item-img"
            />
          </div>
          <div className="mainPage__partners-container-list-item">
            <Image
              src={engeeniring}
              alt="aps"
              className="mainPage__partners-container-list-item-img"
            />
          </div>
          <div className="mainPage__partners-container-list-item">
            <Image
              src={kharkivMetro}
              alt="aps"
              className="mainPage__partners-container-list-item-img"
            />
          </div>
          <div className="mainPage__partners-container-list-item">
            <Image
              src={knorrBreme}
              alt="aps"
              className="mainPage__partners-container-list-item-img"
            />
          </div>
          <div className="mainPage__partners-container-list-item">
            <Image
              src={kyivMetro}
              alt="aps"
              className="mainPage__partners-container-list-item-img"
            />
          </div>
          <div className="mainPage__partners-container-list-item">
            <Image
              src={kyivpass}
              alt="aps"
              className="mainPage__partners-container-list-item-img"
            />
          </div>
          <div className="mainPage__partners-container-list-item">
            <Image
              src={skoda}
              alt="aps"
              className="mainPage__partners-container-list-item-img"
            />
          </div>
          <div className="mainPage__partners-container-list-item">
            <Image
              src={tram}
              alt="aps"
              className="mainPage__partners-container-list-item-img"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Partners;
