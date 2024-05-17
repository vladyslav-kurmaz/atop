import "./About.scss";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Image from "next/image";
import aboutUs from "../../../image/aboutus.webp";
import type { Metadata } from "next";
import initTranslations from "@/app/i18n";

export const metadata: Metadata = {
  title: "About A.E.T.D.",
  description: "About A.E.T.D.",
};

export default async function About({ params }: { params: Params }) {
  const { t, resources } = await initTranslations(params.locale, ["about-us"]);

  const arrow = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
    >
      <mask
        id="mask0_765_11381"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="44"
        height="44"
      >
        <rect width="44" height="44" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_765_11381)">
        <path
          d="M17.5086 33.0002L7.05859 22.5502L9.67109 19.9377L17.5086 27.7752L34.3294 10.9543L36.9419 13.5668L17.5086 33.0002Z"
          fill="#B9C3DE"
        />
      </g>
    </svg>
  );

  return (
    <div className="about">
      {/* {preloader ? <Preloader close={setPreloader}/> : null} */}
      <h1 className="about__title">{t("title")}</h1>

      <div className="about__container ">
        <div className="about__container-info mb-3" >
          <div className="about__container-text">
            <p className="about__container-info-text">{t("desc1")}</p>
            <p className="about__container-info-text">{t("desc2")}</p>
          </div>
          <div className="about__container-img">
            <Image
              src={aboutUs}
              alt=""
              className="about__container-img-picture"
            />
          </div>
        </div>
        <ul className="about__container-info-list">
          <li className="about__container-info-list-item">
            {arrow}
            <p className="about__container-info-list-item-text">{t("text1")}</p>
          </li>
          <li className="about__container-info-list-item">
            {arrow}
            <p className="about__container-info-list-item-text">{t("text2")}</p>
          </li>
          <li className="about__container-info-list-item">
            {arrow}
            <p className="about__container-info-list-item-text">{t("text3")}</p>
          </li>
          <li className="about__container-info-list-item">
            {arrow}
            <p className="about__container-info-list-item-text">{t("text4")}</p>
          </li>
        </ul>
        <div className="about__container-bottom ">
          <div className="about__container-bottom-item">{t("desc3")}</div>
          <div className="about__container-bottom-item">{t("desc4")}</div>
        </div>
      </div>
    </div>
  );
}
