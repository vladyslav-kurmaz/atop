import initTranslations from "@/app/i18n";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Direction = async ({ params }: { params: Params }) => {
  const { t } = await initTranslations(params.locale, ["main"]);

  return (
    <div className="mainPage__direction">
      <h2 className="mainPage__direction-title">{t("direction.title")}</h2>
      <ul className="mainPage__direction-list">
        <li className="mainPage__direction-list-item">
          <h3 className="mainPage__direction-list-item-title">
            {t("direction.title1")}
          </h3>
          <p className="mainPage__direction-list-item-text">
            {t("direction.description1")}
          </p>
          <Link
            href="/servicesPage/6"
            className="mainPage__direction-list-item-readme"
          >
            {t("direction.read-me")}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <mask
                id="mask0_385_7"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="20"
                height="20"
              >
                <rect width="20" height="20" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_385_7)">
                <path
                  d="M5.24517 14.7035L4.375 13.8333L12.5753 5.62496H5.12019V4.375H14.7035V13.9583H13.4535V6.50315L5.24517 14.7035Z"
                  fill="#232323"
                />
              </g>
            </svg>
          </Link>
        </li>
        <li className="mainPage__direction-list-item">
          <h3 className="mainPage__direction-list-item-title">
            {t("direction.title2")}
          </h3>
          <p className="mainPage__direction-list-item-text">
            {t("direction.description2")}
          </p>
          <Link
            href="/products/passenger/1"
            className="mainPage__direction-list-item-readme"
          >
            {t("direction.read-me")}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <mask
                id="mask0_385_7"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="20"
                height="20"
              >
                <rect width="20" height="20" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_385_7)">
                <path
                  d="M5.24517 14.7035L4.375 13.8333L12.5753 5.62496H5.12019V4.375H14.7035V13.9583H13.4535V6.50315L5.24517 14.7035Z"
                  fill="#232323"
                />
              </g>
            </svg>
          </Link>
        </li>
        <li className="mainPage__direction-list-item">
          <h3 className="mainPage__direction-list-item-title">
            {t("direction.title3")}
          </h3>
          <p className="mainPage__direction-list-item-text">
            {t("direction.description3")}
          </p>
          <Link
            href="/products/system"
            className="mainPage__direction-list-item-readme"
          >
            {t("direction.read-me")}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <mask
                id="mask0_385_7"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="20"
                height="20"
              >
                <rect width="20" height="20" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_385_7)">
                <path
                  d="M5.24517 14.7035L4.375 13.8333L12.5753 5.62496H5.12019V4.375H14.7035V13.9583H13.4535V6.50315L5.24517 14.7035Z"
                  fill="#232323"
                />
              </g>
            </svg>
          </Link>
        </li>
        <li className="mainPage__direction-list-item">
          <h3 className="mainPage__direction-list-item-title">
            {t("direction.title4")}
          </h3>
          <p className="mainPage__direction-list-item-text">
            {t("direction.description4")}
          </p>
          <Link
            href="/products/vacuum-toilets"
            className="mainPage__direction-list-item-readme"
          >
            {t("direction.read-me")}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <mask
                id="mask0_385_7"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="20"
                height="20"
              >
                <rect width="20" height="20" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_385_7)">
                <path
                  d="M5.24517 14.7035L4.375 13.8333L12.5753 5.62496H5.12019V4.375H14.7035V13.9583H13.4535V6.50315L5.24517 14.7035Z"
                  fill="#232323"
                />
              </g>
            </svg>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Direction;
