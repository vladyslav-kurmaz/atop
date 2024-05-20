"use client";

// import i18nConfig from "@/i18nConfig";
// import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

// // функція зміни мови та сетинг її в кукі
// export default function LanguageChanger(
//   router: AppRouterInstance,
//   currentPathname: string,
//   value: string,
//   currentLocale: string
// ) {

//   const days = 30;
//   const date = new Date();
//   date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
//   const expires = "; expires=" + date.toUTCString();
//   document.cookie = `NEXT_LOCALE=${value};expires=${expires};path=/`;

//   if (
//     currentLocale === i18nConfig.defaultLocale
//   ) {
//     router.push("/" + value + currentPathname);
//   } else {
//     router.push(currentPathname.replace(`/${currentLocale}`, `/${value}`));
//   }

//   // router.refresh();
// }
import i18nConfig from "@/i18nConfig";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export default function LanguageChanger(
  router: AppRouterInstance,
  currentPathname: string,
  value: string,
  currentLocale: string
) {

  const newLocale = value;

  // set cookie for next-i18n-router
  const days = 30;
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = date.toUTCString();
  document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

  // redirect to the new locale path
  if (currentLocale === i18nConfig.defaultLocale) {
    router.push("/" + newLocale + currentPathname);
  } else {
    currentPathname &&
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
  }

  router.refresh();
}
