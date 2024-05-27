"use client";

import { MouseEvent, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import logo from "../../image/logo.webp";

import "./Footer.scss";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation(["footer", "header"]);
  const pathname = usePathname();
  const [openProductsMobile, setOpenProductsMobile] = useState(false);
  const [openQualitySystemMobile, setOpenQualitySystemMobile] = useState(false);

  const showCloseMenu = (e: MouseEvent) => {
    const target = e.target as HTMLElement;

    if (target.classList.contains("footer__company-title")) {
      const span = target.parentElement?.children[1] as HTMLElement;
      const parentnextSibling = target.parentElement
        ?.nextElementSibling as HTMLElement;
      const parentParent = target.parentElement?.parentElement as HTMLElement;

      if (!parentParent.classList.contains("show")) {
        parentParent.classList.add("show");
        parentnextSibling.classList.add("show");
        span.textContent = "-";
      } else {
        parentnextSibling.classList.remove("show");
        parentParent.classList.remove("show");
        span.textContent = "+";
      }
    } else {
      const parentNextElement = target.parentElement
        ?.nextElementSibling as HTMLElement;
      const parentParent = target.parentElement?.parentElement as HTMLElement;

      if (
        parentNextElement.classList.contains("show") &&
        parentParent.classList.contains("show")
      ) {
        parentNextElement.classList.remove("show");
        parentParent.classList.remove("show");
        target.textContent = "+";
      } else {
        parentNextElement.classList.add("show");
        parentParent.classList.add("show");
        target.textContent = "-";
      }
    }
  };

  const arrowIcon = (text: string, status: boolean) => (
    <span className="header__list-item with-arrow flex items-center">
      {t(text)}{" "}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        className={`${status ? "rotate-180" : ""}`}
      >
        <mask
          id="mask0_3070_9999"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_3070_9999)">
          <path
            d="M9.75024 9.25016L5.91691 13.0835L4.75024 11.9168L9.75024 6.91683L14.7502 11.9168L13.5836 13.0835L9.75024 9.25016Z"
            fill="#232323"
          />
        </g>
      </svg>
    </span>
  );

  const rightIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <mask
        id="mask0_760_4954"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24"
      >
        <rect width="24" height="24" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_760_4954)">
        <path
          d="M10.5001 10L6.66675 6.16667L7.83341 5L12.8334 10L7.83341 15L6.66675 13.8333L10.5001 10Z"
          fill="#232323"
        />
      </g>
    </svg>
  );

  return pathname === "/writeUs" || pathname === "/en/writeUs" ? null : (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__info">
          <Image src={logo} alt="logo" className="footer__info-img" />
          <p className="footer__info-text">{t("title")}</p>
          <Link
            href={"/writeUs"}
            // onClick={open}
            className="footer__info-contact flex flex-nowrap"
          >
            {t("write-us")}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <mask
                id="mask0_385_95"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="20"
                height="20"
              >
                <rect width="20" height="20" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_385_95)">
                <path
                  d="M5.0625 15L4 13.9375L12.4375 5.5H5V4H15V14H13.5V6.5625L5.0625 15Z"
                  fill="#232323"
                />
              </g>
            </svg>
          </Link>
        </div>

        <div className="footer__container-company">
          <div className="footer__container-title">
            <span
              className="footer__company-title"
              onClick={(e) => showCloseMenu(e)}
            >
              {t("company")}
            </span>
            <span onClick={(e) => showCloseMenu(e)}>+</span>
          </div>

          <ul className="footer__company">
            <li className="footer__company-item">
              <Link href="/servicesPage" className="footer__company-item-link">
                {t("services")}
              </Link>
            </li>
            <li
              className="footer__company-item"
              onClick={() => setOpenProductsMobile((state) => !state)}
            >
              <div
                className={`flex ${openProductsMobile ? "mb-2" : ""} cursor-pointer`}
              >
                {arrowIcon("products", openProductsMobile)}
              </div>
              <ul
                className={` w-full pl-2 bg-transparent rounded-[12px] shadow-[#232323] overflow-hidden transition-all duration-300 ${openProductsMobile ? "max-h-[1000px] transition-all duration-300" : "max-h-[0] transition-all duration-300"}`}
              >
                <li>
                  <Link
                    className="flex w-full justify-between text-white pt-4"
                    href={"/products/passenger"}
                  >
                    {t("passenger")} {rightIcon}
                  </Link>
                </li>
                <li className="py-4 ">
                  <Link
                    href={"/products/system"}
                    className="flex w-full justify-between text-white"
                  >
                    {t("system")} {rightIcon}
                  </Link>
                </li>
                <li className="py-4">
                  <Link
                    href={"/products/vacuum-toilets"}
                    className="flex w-full justify-between text-white"
                  >
                    {t("vacuum-toilets")} {rightIcon}
                  </Link>
                </li>
                <li className="py-4 ">
                  <Link
                    href={"/products/sosial-transport"}
                    className="flex w-full justify-between text-white"
                  >
                    {t("sosial-transport")} {rightIcon}
                  </Link>
                </li>
                <li className="py-4 ">
                  <Link
                    href={"/products/special-wagons"}
                    className="flex w-full justify-between text-white"
                  >
                    {t("spacial-wagons")} {rightIcon}
                  </Link>
                </li>
              </ul>
            </li>
            <li
              className="footer__company-item"
              onClick={() => setOpenQualitySystemMobile((state) => !state)}
            >
              {/* <Link
                href="/qualitySystem/certificate"
                className="footer__company-item-link"
              >
                {t("quality-system")}
              </Link> */}
              <div className="flex cursor-pointer">
                {arrowIcon("quality-system", openQualitySystemMobile)}
              </div>

              <ul
                className={`pl-2 w-full bg-transparent rounded-[12px] shadow-[#232323] overflow-hidden  transition-all duration-300 ${openQualitySystemMobile ? "max-h-[1000px]" : "max-h-[0] "}`}
              >
                <li className="py-4 ">
                  <Link
                    href={"/qualitySystem/certificate"}
                    className="flex w-full justify-between text-white "
                  >
                    {t("certyficates")}
                    {rightIcon}
                  </Link>
                </li>
                <li className="py-4 ">
                  <Link
                    href={"/qualitySystem/patents"}
                    className="flex w-full justify-between text-white "
                  >
                    {t("patents")} {rightIcon}
                  </Link>
                </li>
                <li className="py-4 ">
                  <Link
                    href={"/qualitySystem/system-manage-quality"}
                    className="flex w-full justify-between text-white "
                  >
                    {t("system-manage-quality")}
                    {rightIcon}
                  </Link>
                </li>
              </ul>
            </li>
            <li className="footer__company-item">
              <Link href="/about" className="footer__company-item-link">
                {t("about")}
              </Link>
            </li>
            <li className="footer__company-item">
              <Link href="/#contacts" className="footer__company-item-link">
                {t("contacts")}
              </Link>
            </li>
          </ul>
        </div>

        <ul className="footer__social">
          <li className="footer__social-item">{t("social-network")}</li>
          <li className="footer__social-item">
            <a href="https://www.facebook.com/profile.php?id=100066403879972" target="_blank" className="footer__social-item-link">
              Facebook
            </a>
          </li>
          <li className="footer__social-item">
            <a
              href="https://www.linkedin.com/company/ator-llc/"
              target="_blank"
              className="footer__social-item-link"
            >
              LinkedIn
            </a>
          </li>
          {/* <li className="footer__social-item"><a href="#" className="footer__social-item-link">Instagram</a></li>
          <li className="footer__social-item"><a href="#" className="footer__social-item-link">Youtube</a></li> */}
          <li className="footer__social-item">
            <a href="#" className="footer__social-item-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <mask
                  id="mask0_385_117"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                >
                  <rect width="20" height="20" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_385_117)">
                  <path
                    d="M9.16671 16.6667V6.52083L4.50004 11.1875L3.33337 10L10 3.33333L16.6667 10L15.5 11.1875L10.8334 6.52083V16.6667H9.16671Z"
                    fill="white"
                  />
                </g>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
