"use client";

import initTranslations from "@/app/i18n";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";

const data = [
  {
    year: "grow.2012.year",
    items: [
      "grow.2012.item1",
      "grow.2012.item2",
      "grow.2012.item3",
      "grow.2012.item4",
      "grow.2012.item5",
      "grow.2012.item6",
    ],
  }, 
  {
    year: "grow.2013.year",
    items: [
      "grow.2013.item1",
      "grow.2013.item2",
      "grow.2013.item3",
      "grow.2013.item4",
    ],
  },
  {
    year: "grow.2014.year",
    items: [
      "grow.2014.item1",
      "grow.2014.item2",
      "grow.2014.item3",
      "grow.2014.item4",
      "grow.2014.item5",
    ],
  },
  {
    year: "grow.2015.year",
    items: [
      "grow.2015.item1",
      "grow.2015.item2",
      "grow.2015.item3",
      "grow.2015.item4",
    ],
  },
  {
    year: "grow.2017.year",
    items: [
      "grow.2017.item1",
      "grow.2017.item2",
      "grow.2017.item3",
    ],
  },
  {
    year: "grow.2018.year",
    items: [
      "grow.2018.item1",
      "grow.2018.item2",
      "grow.2018.item3",
    ],
  },
  {
    year: "grow.2019.year",
    items: [
      "grow.2019.item1",
      "grow.2019.item2",
    ],
  },
  {
    year: "grow.2020.year",
    items: [
      "grow.2020.item1",
      "grow.2020.item2",
      "grow.2020.item3",
    ],
  },
  {
    year: "grow.2021.year",
    items: [
      "grow.2021.item1",
      "grow.2021.item2",
      "grow.2021.item3",
      "grow.2021.item4",
      "grow.2021.item5",
    ],
  },
  {
    year: "grow.2022.year",
    items: [
      "grow.2022.item1",
      "grow.2022.item2",
      "grow.2022.item3",
      "grow.2022.item4",
      "grow.2022.item5",
      "grow.2022.item6",
    ],
  },
  {
    year: "grow.2023.year",
    items: [
      "grow.2023.item1",
      "grow.2023.item2",
      "grow.2023.item3",
      "grow.2023.item4",
      "grow.2023.item5",
      "grow.2023.item6",
    ],
  },
  
  
  
  
  
  
  
  
  
  
  
  
  
];

const settings = {
  dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    // autoplay: true,
    // autoplaySpeed: 1000,
    pauseOnDotsHover: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    // rtl: true,
  responsive: [
    {
      breakpoint: 1395, // Змінити налаштування для планшетів і більших екранів
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 950, // Змінити налаштування для планшетів і більших екранів
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const Grow = () => {  
  const { t } = useTranslation(["main"]);

  const sliderRef = useRef<any>(null);

  const prevSlide = () => {
    sliderRef.current !== null && sliderRef.current?.slickPrev();
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div className="mainPage__grow">
      <div className="mainPage__grow-container">
        <h2 className="mainPage__grow-container-title">{t("grow.title")}</h2>

        <div className="main__grow-container-slider">
          {/* <div className="mainPage__grow-container-slider-switchers"> */}
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
          {/* </div> */}

          <ul className="mainPage__grow-container-slider-list">
            {/* <SwiperSlider slidesPerView={3}  > */}
            <Slider {...settings} ref={sliderRef}>
              {data.map((item) => {
                return (
                  <li
                    key={item.year}
                    className="mainPage__grow-container-slider-list-item"
                  >
                    <h4 className="mainPage__grow-container-slider-list-item-title">
                      {t(item.year)}
                    </h4>
                    <ul className="">
                      {item.items.map((itemsIns) => (
                        <li
                          key={itemsIns}
                          className="mainPage__grow-container-slider-list-item-text"
                        >
                          {t(itemsIns)}
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              })}
              </Slider>
            {/* </SwiperSlider> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Grow;
