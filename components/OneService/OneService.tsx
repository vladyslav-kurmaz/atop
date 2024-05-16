"use client";
import ServiceProductSlider from "@/components/ServiceProductSlider/ServiceProductSlider";
import Image from "next/image";
import { useState } from "react";
import { useTranslation } from "react-i18next";

type AllServiceInfo = {
  src: string;
  src2?: string;
  title: string;
  description: string[];
  subTitle?: string;
  subDescription?: string[];
  subListTitle?: string;
  subListTitle3?: string;
  subListTitle4?: string;
  subListTitle5?: string;
  subList?: string[];
  subTitle2?: string;
  subDescription2?: string[];
  subList2?: string[];
  subListTitle2?: string;
  subList3?: string[];
  subTitle3?: string;
  subDescription3?: string[];
  subList4?: string[];
  subTitle4?: string;
  subTitle5?: string;
  subDescription4?: string[];
  subDescription5?: string[];
};

const allServiceData: AllServiceInfo[] = [
  {
    src: "/servicesPage/1-1.webp",
    src2: "/servicesPage/1-2.webp",
    title: "0.title",
    description: ["0.description.0", "0.description.1"],

    subListTitle: "0.subListTitle",
    subList: ["0.subList.0", "0.subList.1", "0.subList.2"],
    subTitle2: "0.subTitle2",

    subDescription: ["0.subDescription.0"],
  },
  {
    src: "/servicesPage/2-1.webp",
    src2: "/servicesPage/2-2.webp",
    title: "1.title",
    description: ["1.description.0", "1.description.1"],
    subListTitle: "1.subListTitle",
    subList: [
      "1.subList.0",
      "1.subList.1",
      "1.subList.2",
      "1.subList.3",
      "1.subList.4",
    ],
  },
  {
    src: "/servicesPage/3-1.webp",
    src2: "/servicesPage/3-2.webp",
    title: "2.title",
    description: ["2.description.0"],
    subListTitle: "2.subListTitle",
    subList: ["2.subList.0", "2.subList.1", "2.subList.2", "2.subList.3"],
    subDescription: ["2.subDescription.0"],
  },
  {
    src: "/servicesPage/4-1.webp",
    title: "3.title",
    description: ["3.description.0"],
    subListTitle: "3.subListTitle",
    subList: [
      "3.subList.0",
      "3.subList.1",
      "3.subList.2",
      "3.subList.3",
      "3.subList.4",
      "3.subList.5",
      "3.subList.6",
      "3.subList.7",
    ],
    subDescription: ["3.subDescription.0"],

    subListTitle2: "3.subListTitle2",
    subList2: ["3.subList2.0", "3.subList2.1", "3.subList2.2"],
    subTitle: "3.subTitle",

    subDescription2: ["3.subDescription2.0"],
    subTitle2: "3.subTitle2",
    subDescription3: ["3.subDescription3.0"],
    subTitle3: "3.subTitle3",
    subDescription4: ["3.subDescription4.0"],
    subListTitle3: "3.subListTitle3",
    subList3: ["3.subList3.0", "3.subList3.1", "3.subList3.2"],
    subListTitle4: "3.subListTitle4",
    subList4: [
      "3.subList4.0",
      "3.subList4.1",
      "3.subList4.2",
      "3.subList4.3",
      "3.subList4.4",
      "3.subList4.5",
      "3.subList4.6",
    ],
    subTitle4: "3.subTitle4",
  },
  {
    src: "/servicesPage/5-1.webp",
    src2: "/servicesPage/5-2.webp",
    title: "4.title",
    description: [
      "4.description.0",
      "4.description.1",
      "4.description.2",
      "4.description.3",
      "4.description.4",
      "4.description.5",
    ],
    subTitle: "4.subTitle",
    subDescription: ["4.subDescription.0"],

    subList: ["4.subList.0", "4.subList.1"],
    subDescription2: ["4.subDescription2.0"],
  },
  {
    src: "/servicesPage/6-1.webp",
    title: "5.title",
    description: ["5.description.0"],
  },
  {
    src: "/servicesPage/7-1.webp",
    title: "6.title",
    description: ["6.description.0"],

    subDescription: [
      "6.subDescription.0",
      "6.subDescription.1",
      "6.subDescription.2",
      "6.subDescription.3",
      "6.subDescription.4",
    ],
    subListTitle: "6.subListTitle",
    subList: ["6.subList.0", "6.subList.1", "6.subList.2", "6.subList.3"],
    subListTitle2: "6.subListTitle2",
    subList2: ["6.subList2.0", "6.subList2.1", "6.subList2.2", "6.subList2.3"],
  },
  {
    src: "/servicesPage/8-1.webp",
    title: "7.title",
    description: ["7.description.0", "7.description.1", "7.description.2"],
  },
  {
    src: "/servicesPage/9-1.webp",
    title: "8.title",
    description: ["8.description.0"],
     
  },
  {
    src: "/servicesPage/10-1.webp",
    title: "9.title",
    description: ['9.description.0'],
    subListTitle: "9.subListTitle",
    subList: ["9.subList.0", "9.subList.1", "9.subList.2", "9.subList.3", "9.subList.4"],
    subDescription: [
      "9.subDescription.0"
    ],
    subList2: ["9.subList2.0", "9.subList2.1", "9.subList2.2", "9.subList2.3", "9.subList2.4","9.subList2.5","9.subList2.6","9.subList2.7","9.subList2.8","9.subList2.9"],
    subDescription2: [
      "9.subDescription2.0"
    ],
    subTitle: '9.subTitle',
    subDescription3: [
      "9.subDescription3.0"
    ],
  },
  {
    src: "/servicesPage/11-1.webp",
    title: "10.title",
    description: ['10.description.0', '10.description.1', '10.description.2'],
  },
];

type Props = {
  params: {
    id: string;
    locale: string;
  };
};
const OneService = ({ params }: Props) => {
  const [readMore, setReadMore] = useState(false);
  const { t } = useTranslation(["services"]);
  const currentService = allServiceData.filter(
    (item, i) => +params.id === i
  )[0];
  const {
    src,
    src2,
    title,
    description,
    subTitle,
    subDescription,
    subListTitle,
    subList,
    subTitle2,
    subDescription2,
    subList2,
    subListTitle2,
    subListTitle3,
    subList3,
    subTitle3,
    subDescription3,
    subList4,
    subDescription4,
    subTitle4,
    subDescription5,
    subListTitle4,
  } = currentService;

  const renderList = (subListTitle?: string, subList?: string[]) => {
    const renderItem = (subList: string[]) => {
      return subList.map((item, i) => {
        return (
          <li className="service__subInfo-subList-item" key={i}>
            {t(item)}
          </li>
        );
      });
    };
    return (
      <>
        {subListTitle && (
          <h3 className="service__subInfo-subListTitle">{t(subListTitle)}</h3>
        )}

        {subList && subList?.length > 0 && (
          <ul className="service__subInfo-subList">{renderItem(subList)}</ul>
        )}
      </>
    );
  };

  const renderSubDescription = (subDesription?: string[]) => {
    return (
      subDesription &&
      subDesription.length > 0 &&
      subDesription.map((item, i) => {
        return (
          <p className="service__subInfo-subDescription" key={i}>
            {t(item)}
          </p>
        );
      })
    );
  };

  const renderInfoItem = () => {
    switch (+params.id) {
      case 0:
        return (
          <>
            {renderList(subListTitle, subList)}
            <h2 className="service__subInfo-subtitle">
              {subTitle2 && t(subTitle2)}
            </h2>
            {renderSubDescription(subDescription)}
          </>
        );
      case 1:
        return <>{renderList(subListTitle, subList)}</>;
      case 2:
        return (
          <>
            {renderList(subListTitle, subList)}
            {renderSubDescription(subDescription)}
          </>
        );
      case 3:
        return (
          <>
            {renderList(subListTitle, subList)}
            {renderSubDescription(subDescription)}

            {renderList(subListTitle2, subList2)}
            <h2 className="service__subInfo-subtitle">
              {subTitle && t(subTitle)}
            </h2>
            {renderSubDescription(subDescription2)}
            <h2 className="service__subInfo-subtitle">
              {subTitle2 && t(subTitle2)}
            </h2>
            {renderSubDescription(subDescription3)}
            <h2 className="service__subInfo-subtitle">
              {subTitle3 && t(subTitle3)}
            </h2>
            {renderSubDescription(subDescription4)}
            {renderList(subListTitle3, subList3)}
            {renderList(subListTitle4, subList4)}
            <h2 className="service__subInfo-subtitle">
              {subTitle4 && t(subTitle4)}
            </h2>
          </>
        );
      case 4:
        return (
          <>
            <h2 className="service__subInfo-subtitle">
              {subTitle && t(subTitle)}
            </h2>

            {renderSubDescription(subDescription)}
            {renderList("", subList)}
            {renderSubDescription(subDescription2)}
          </>
        );
      case 5:
        return <></>;
      case 6:
        return (
          <>
            {renderSubDescription(subDescription)}
            {renderList(subListTitle, subList)}
            {renderList(subListTitle2, subList2)}
          </>
        );
      case 7:
        return (
          <>
          </>
        );
      case 8:
        return;
      case 9:
        return (
          <>
            {renderList(subListTitle, subList)}
            {renderSubDescription(subDescription)}
            {renderList('', subList2)}
            {renderSubDescription(subDescription2)}
            <h2 className="service__subInfo-subtitle">{subTitle && t(subTitle)}</h2>
            {renderSubDescription(subDescription3)}
          </>
        );
      case 10:
        return (
          <></>
        )
    }
  };

  return (
    <>
      <div className="servicePage">
        <Image
          src={src}
          alt=""
          width={7000}
          height={1000}
          className="servicePage__img"
          loading="lazy"
        />

        <div className="servicePage__container">
          <span className="servicePage__container-title">{t("services")}</span>

          <div className="servicePage__container-service">
            <h2 className="servicePage__container-service-title">{t(title)}</h2>
            <div className="servicePage__container-service-text">
              {description.map((item, i) => (
                <p
                  key={item + i}
                  className="servicePage__container-service-text-description"
                >
                  {t(item)}
                </p>
              ))}

              {subTitle || subDescription || subListTitle || subList ? (
                <button
                  className="servicePage__container-service-text-read transition-all duration-500"
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
                  {readMore ? t("read-more-close") : t("read-more-open")}
                </button>
              ) : null}

              {/* {readMore ? ( */}
              <div
                className={`service__subInfo ${readMore ? "max-h-[10000px]" : "max-h-0"} transition-all duration-500 overflow-hidden`}
              >
                {renderInfoItem()}
              </div>
              {/* ) : null} */}
            </div>
          </div>

          {src2 && (
            <Image
              src={src2}
              alt=""
              width={7000}
              height={1000}
              className="servicePage__img"
              loading="lazy"
            />
          )}
        </div>

        <ServiceProductSlider status={false} />
      </div>
    </>
  );
};

export default OneService;
