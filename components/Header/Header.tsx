"use client";

import Link from "next/link";
import Image from "next/image";
import {
  useState,
  MouseEvent,
  useEffect,
  useRef,
  MutableRefObject,
} from "react";
import { usePathname } from "next/navigation";
import { Spiral as Hamburger, Spiral } from "hamburger-react";

import logoSmall from "../../image/logo.webp";

import "./Header.scss";
import { useTranslation } from "react-i18next";
import Select from "@/components/Select/Select";

export default function Header() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [animationMobileMenu, setAnimationMobileMenu] = useState(false);
  const [openProducts, setOpenProducts] = useState(false);
  const [openQualitySystem, setOpenQualitySystem] = useState(false);
  const { t } = useTranslation(["header"]);
  const pathname = usePathname();

  // console.log(t("header:test"));

  useEffect(() => {
    if (openMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [openMobileMenu]);

  const productRef = useRef<any>(null);
  const qualityRef = useRef<any>(null);

  useEffect(() => {
    const handleClickOutside = (
      e: any,
      productRef: MutableRefObject<any>,
      qualityRef: MutableRefObject<any>
    ) => {


      if (productRef.current && !productRef.current.contains(e.target)) {
        setOpenProducts(false);
        
      }

      if (qualityRef.current && !qualityRef.current.contains(e.target)) {
        setOpenQualitySystem(false);
      }
    };

    document.addEventListener("mousedown", (e) =>
      handleClickOutside(e, productRef, qualityRef)
    );

    return () => {
      document.removeEventListener("mousedown", (e) =>
        handleClickOutside(e, productRef, qualityRef)
      );
    };
  }, [productRef, qualityRef]);

  const arrowIcon = (text: string, status: boolean) => (
    <span className="header__list-item with-arrow">
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

  const activeLink = (path: string) => {
    let id: string = "";

    if (pathname !== null) {
      const arr = pathname.split("");
      arr.map((item) => (+item >= 0 ? (id += item) : null));

      return pathname === path || pathname === `${path}/${id}`
        ? { color: "#2044A1" }
        : {};
    }
  };

  const closeModileMenu = (e?: MouseEvent) => {
    const target = e?.target as HTMLElement;

    if (target && target.tagName === "IMG") {
      if (openMobileMenu) {
        setAnimationMobileMenu(true);
        setTimeout(() => setOpenMobileMenu(false), 300);
      }
      return;
    }

    if (openMobileMenu) {
      setAnimationMobileMenu(true);
      setTimeout(() => setOpenMobileMenu(false), 300);
    } else {
      setAnimationMobileMenu(false);
      setOpenMobileMenu(true);
    }
  };

  return pathname === "/writeUs" || pathname === "/en/writeUs" ? null : (
    <header
      className="header"
      // style={openMobileMenu ? {'position': 'fixed'} : {'position': 'static'}}
    >
      <div className="header__desctop">
        <Link href={"/"}>
          <Image src={logoSmall} alt="logo" className="header__desctop-logo" />
        </Link>

        <div className="header__container">
          <nav className="header__navigation desctop">
            <ul className="header__list ">
              <li className="header__list-item">
                <Link
                  className="header__list-item-link"
                  href={"/"}
                  style={activeLink("/")}
                >
                  {t("main")}
                </Link>
              </li>
              <li className="header__list-item">
                <Link
                  className="header__list-item-link"
                  href={"/servicesPage"}
                  style={activeLink("/servicesPage")}
                >
                  {t("service")}
                </Link>
              </li>
              <li
                className=" relative"
                ref={productRef}
                onClick={() => setOpenProducts(!openProducts)}
                // onBlur={() => setOpenProducts(true)}
              >
                {/* <Link href={"/products"} style={activeLink("/products")}> */}
                {arrowIcon("product", openProducts)}

                <ul
                  className={`absolute top-14 left-0  bg-white w-[352px] rounded-[12px] shadow-[#232323] overflow-hidden  ${openProducts ? "max-h-[1000px] p-4" : "max-w-[0] p-0"}`}
                >
                  <li className="py-4 border-b-[1px] border-solid border-b-[#EAEAEA]">
                    <Link
                      className="flex w-full justify-between text-[#000] hover:text-[#2044A1]"
                      href={"/products/passenger"}
                    >
                      {t("passenger")} {rightIcon}
                    </Link>
                  </li>
                  <li className="py-4 border-b-[1px] border-solid border-b-[#EAEAEA]">
                    <Link
                      href={"/products/system"}
                      className="flex w-full justify-between text-[#000] hover:text-[#2044A1]"
                    >
                      {t("system")} {rightIcon}
                    </Link>
                  </li>
                  <li className="py-4 border-b-[1px] border-solid border-b-[#EAEAEA]">
                    <Link
                      href={"/products/vacuum-toilets"}
                      className="flex w-full justify-between text-[#000] hover:text-[#2044A1]"
                    >
                      {t("vacuum-toilets")} {rightIcon}
                    </Link>
                  </li>
                  <li className="py-4 border-b-[1px] border-solid border-b-[#EAEAEA]">
                    <Link
                      href={"/products/sosial-transport"}
                      className="flex w-full justify-between text-[#000] hover:text-[#2044A1]"
                    >
                      {t("sosial-transport")} {rightIcon}
                    </Link>
                  </li>
                  <li className="py-4 ">
                    <Link
                      href={"/products/special-wagons"}
                      className="flex w-full justify-between text-[#000] hover:text-[#2044A1]"
                    >
                      {t("spacial-wagons")} {rightIcon}
                    </Link>
                  </li>
                </ul>
              </li>
              <li
                className="header__list-item relative"
                onClick={() => setOpenQualitySystem(!openQualitySystem)}
                // onBlur={() => setOpenQualitySystem(true)}
                ref={qualityRef}
              >
                {arrowIcon("qualitySystem", openQualitySystem)}
                <ul
                  className={`absolute top-14 left-0  bg-white w-[352px] rounded-[12px] shadow-[#232323] overflow-hidden  ${openQualitySystem ? "max-h-[1000px] p-4" : "max-w-[0] p-0"}`}
                >
                  <li className="py-4 border-b-[1px] border-solid border-b-[#EAEAEA]">
                    <Link
                      href={"/qualitySystem/certyficates"}
                      className="flex w-full justify-between text-[#000] hover:text-[#2044A1]"
                    >
                      {t("certyficates")}
                      {rightIcon}
                    </Link>
                  </li>
                  <li className="py-4 border-b-[1px] border-solid border-b-[#EAEAEA]">
                    <Link
                      href={"/qualitySystem/patents"}
                      className="flex w-full justify-between text-[#000] hover:text-[#2044A1]"
                    >
                      {t("patents")} {rightIcon}
                    </Link>
                  </li>
                  <li className="py-4 ">
                    <Link
                      href={"/qualitySystem/system-manage-quality"}
                      className="flex w-full justify-between text-[#000] hover:text-[#2044A1]"
                    >
                      {t("system-manage-quality")}
                      {rightIcon}
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="header__list-item">
                <Link href={"/about"} style={activeLink("/about")}>
                  {t("about")}
                </Link>
              </li>
              <li className="header__list-item">
                <Link href={"/#contacts"} style={activeLink("/#contacts")}>
                  {t("contacts")}
                </Link>
              </li>
              <li className="header__list-item">
                <Select
                  data={[
                    { value: "UA", text: "UA" },
                    { value: "EN", text: "EN" },
                  ]}
                />

                
              </li>
            </ul>
          </nav>

          <Link href={"/writeUs"} className="header__button button">
            {t("writeUs")}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <mask
                id="mask0_346_285"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="20"
                height="20"
              >
                <rect width="20" height="20" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_346_285)">
                <path
                  d="M5.24517 14.7035L4.375 13.8333L12.5753 5.62496H5.12019V4.375H14.7035V13.9583H13.4535V6.50315L5.24517 14.7035Z"
                  fill="white"
                />
              </g>
            </svg>
          </Link>
        </div>
      </div>

      <div className="header__mobile">
        <div className="header__container flex justify-between items-center">
          <nav className="header__navigation mobile">
            <span className="header__navigation-icon">
              <Spiral
                label="Show menu"
                toggled={openMobileMenu}
                // toggle={setOpenMobileMenu}
                onToggle={() => closeModileMenu()}
              />
            </span>
            <Link
              href={"/"}
              className="header__mobile-logo"
              onClick={(e) => closeModileMenu(e)}
            >
              <Image
                src={logoSmall}
                alt="logo"
                className="header__desctop-logo"
              />
            </Link>
          </nav>
          <Link
            href={"/writeUs"}
            // onClick={() => setshowModal(true)}
            className="header__button button"
          >
            {t("writeUs")}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <mask
                id="mask0_346_285"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="20"
                height="20"
              >
                <rect width="20" height="20" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_346_285)">
                <path
                  d="M5.24517 14.7035L4.375 13.8333L12.5753 5.62496H5.12019V4.375H14.7035V13.9583H13.4535V6.50315L5.24517 14.7035Z"
                  fill="white"
                />
              </g>
            </svg>
          </Link>
        </div>

        {openMobileMenu ? (
          <ul
            className="header__list-mobile"
            style={
              animationMobileMenu
                ? {
                    animationName: "closeMenu",
                    animationDuration: ".3s",
                    animationTimingFunction: "linear",
                  }
                : {}
            }
          >
            <li className="header__list-item">
              <Link
                className="header__list-item-link"
                onClick={() => setOpenMobileMenu(false)}
                href={"/"}
              >
                {t("main")}
              </Link>
            </li>
            <li className="header__list-item">
              <Link
                className="header__list-item-link"
                onClick={() => setOpenMobileMenu(false)}
                href={"/servicesPage"}
              >
                {t("service")}
              </Link>
            </li>
            <li className="header__list-item">
              <Link href={"/products"} onClick={() => setOpenMobileMenu(false)}>
                {t("product")}
              </Link>
            </li>
            <li className="header__list-item">
              <Link
                href={"/qualitySystem"}
                onClick={() => setOpenMobileMenu(false)}
              >
                {t("qualitySystem")}
              </Link>
            </li>
            <li className="header__list-item">
              <Link href={"/about"} onClick={() => setOpenMobileMenu(false)}>
                {t("about")}
              </Link>
            </li>
            <li className="header__list-item">
              <Link
                href={"/#contacts"}
                onClick={() => setOpenMobileMenu(false)}
              >
                {t("contacts")}
              </Link>
            </li>
            <li className="header__list-item border-t-2 border-[#EAEAEA] border-solid">
              <Select
                data={[
                  { value: "UA", text: "UA" },
                  { value: "EN", text: "EN" },
                ]}
              />
              
            </li>
            <li className="header__list-item   mt-auto">
              <ul>
                <li className="mb-8 "><Link className="text-[14px]" href={''}>info@ator.com.ua</Link></li>
                <li><Link className="text-[14px]" href={''}>+38 095-303-2313</Link></li>
                <li className="text-[14px]">м. Харків, Україна</li>
              </ul>
            </li>
          </ul>
        ) : null}
      </div>
    </header>
  );
}
