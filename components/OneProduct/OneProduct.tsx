"use client";

import { useState } from "react";
import CustomSlider from "@/components/Slider/Slider";

import ServiceProductSlider from "@/components/ServiceProductSlider/ServiceProductSlider";
import { AllProductInfo } from "@/types/type";
import { useTranslation } from "react-i18next";

type Props = {
  params: {
    id: string;
  };
  translate: string[];
  data: AllProductInfo;
  jsxIndo: JSX.Element | undefined;
  jsxDescription: JSX.Element | undefined;
};

const OneProduct = ({ data, translate, jsxIndo, jsxDescription }: Props) => {
  const { t } = useTranslation([...translate]);
  const [readMore, setReadMore] = useState(false);
  
  const {
    slider,
    title,
    titleCard,
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
  } = data;  

  return (
    <>
    
      <div className="product">
        <CustomSlider data={slider} />

        <div className="product__container">
          <span className="product__container-title">{t("products")}</span>

          <div className="product__container-info">
            <h2 className="product__container-info-title">
              {titleCard && t(titleCard)}
            </h2>
            <div className="product__container-info-container">
              <div className="product__container-info-container-text">
                {/* {t(description)} */}
                {jsxDescription}
              </div>
              {subTitle || subDescription || subListTitle || subList ? (
                <button
                  className="product__container-info-container-button"
                  onClick={() => setReadMore(!readMore)}
                >
                  <span>
                    {readMore ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <mask
                          id="mask0_215_4316"
                          style={{ maskType: "alpha" }}
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="20"
                          height="20"
                        >
                          <rect width="20" height="20" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_215_4316)">
                          <path
                            d="M4.1665 10.7241V9.32299H15.8332V10.7241H4.1665Z"
                            fill="#232323"
                          />
                        </g>
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                      >
                        <path
                          d="M4.45817 5.54165H0.416504V4.45835H4.45817V0.416687H5.54146V4.45835H9.58313V5.54165H5.54146V9.58331H4.45817V5.54165Z"
                          fill="#232323"
                        />
                      </svg>
                    )}
                  </span>
                  {t(readMore ? "read-more-close" : "read-more-open")}
                </button>
              ) : null}
              <div
                className={`${readMore ? "max-h-[10000px] transition-all duration-300" : "max-h-0 transition-all duration-300"} overflow-hidden`}
              >
                {jsxIndo}
              </div>
            </div>
          </div>
        </div>

        <ServiceProductSlider status={true} />
      </div>
    </>
  );
};

export default OneProduct;
