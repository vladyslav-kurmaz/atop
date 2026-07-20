import Image from "next/image";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import initTranslations from "@/app/i18n";

const HIDE_AFTER = new Date("2026-08-22T00:00:00+03:00").getTime();

const paragraphKeys = [
  "memorial.p1",
  "memorial.p2",
  "memorial.p3",
  "memorial.p4",
  "memorial.p5",
  "memorial.p6",
  "memorial.p7",
  "memorial.p8",
  "memorial.p9",
];

const Memorial = async ({ params }: { params: Params }) => {
  if (Date.now() >= HIDE_AFTER) {
    return null;
  }

  const { t } = await initTranslations(params.locale, ["main"]);

  return (
    <div className="mainPage__memorial">
      <div className="mainPage__memorial-container">
        <span className="mainPage__memorial-eyebrow">
          {t("memorial.eyebrow")}
        </span>

        <h2 className="mainPage__memorial-title">{t("memorial.title")}</h2>

        <p className="mainPage__memorial-subtitle">
          {t("memorial.subtitle")}
        </p>
        <p className="mainPage__memorial-date">{t("memorial.date")}</p>

        <div className="mainPage__memorial-photo">
          <Image
            src="/memorial/morozov.webp"
            alt={t("memorial.title")}
            fill
            sizes="400px"
          />
        </div>

        <div className="mainPage__memorial-body">
          {paragraphKeys.map((key) => (
            <p key={key}>{t(key)}</p>
          ))}

          <p className="mainPage__memorial-body-final">
            {t("memorial.final")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Memorial;
