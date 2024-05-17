"use client";

// import { dataSelect } from "@/types/types";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageChanger from "@/utils/LanguageChanger";
import { useRouter, useSearchParams } from "next/navigation";
import { usePathname } from "next/navigation";
export type dataSelect = {
  // flag: StaticImageData;
  value: string;
  text?: string;
};
// комопонет для зміни мови
const Select = ({
  data,
  arrowIcon,
  style,
  classes,
}: {
  data: dataSelect[];
  arrowIcon?: StaticImageData;
  style?: object;
  classes?: string;
}) => {
  const { i18n } = useTranslation();
  // статус списку мов
  const [openList, setOpenList] = useState(false);
  // вибрана мова
  const [currentLanguge, setCurrentLanguage] = useState(i18n.language);
  const router = useRouter();
  const currentPathname = usePathname();
  const searchParams = useSearchParams();
  // const searchTags = searchParams.get("tag");
  // const searchPage = searchParams.get("page");

  const ref = useRef(null);
  const changeLanguage = (value: string) => {

    const currentPathnameWithParams = `${currentPathname}`;
    LanguageChanger(router, currentPathnameWithParams, value, currentLanguge);

    setOpenList(false);
  };

  const renderItem = (data: dataSelect[]) => {
    return data.map((item, i) => {
      const { value, text } = item;
      return (
        <div
          key={i}
          className="flex text-[#000] relative items-center cursor-pointer py-1"
          onClick={() => changeLanguage(value.toLowerCase())}
        >
          <span>{text}</span>
        </div>
      );
    });
  };

  // виділення вибраної мови
  const curentItem = (data: dataSelect[]) => {
    return data.map((item, i) => {
      const { value, text } = item;
      if (value.toLowerCase() === currentLanguge) {
        return (
          <div key={i} className="flex cursor-pointer">
            <span className="text-sm">{text}</span>
          </div>
        );
      }
    });
  };

  return (
    <div
      className={`relative flex justify-between items-center ${classes} lg:w-3 w-full flex-col`}
      style={style}
    >
      <div
        className="text-[#929292] lg:w-3 w-full"
        onClick={() => setOpenList((state) => !state)}
      >
        {curentItem(data)}
      </div>
      <div
        className={`flex z-50 lg:absolute lg:right-0 top-full  rounded  transition-all duration-300  box-border lg:bg-slate-50 bg-white bottom-0 flex-col lg:w-auto w-full overflow-hidden ${openList ? "lg:py-3 lg:px-3 pl-3 max-h-[1000] lg:min-h-max lg:border" : "max-h-[0]"}`}
      >
        {renderItem(data)}
      </div>
    </div>
  );
};

export default Select;
