import Image from "next/image";
import contact from "../../image/mainPage/contact.webp";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import initTranslations from "@/app/i18n";

const Contacts = async ({ params }: { params: Params }) => {
  const { t } = await initTranslations(params.locale, ["main"]);
  return (
    <div className="mainPage__contacts" id="contacts">
      <div className="mainPage__contacts-container">
        <h3 className="mainPage__contacts-container-title">
          {t("contacts.title")}
        </h3>
        <ul className="mainPage__contacts-container-list">
          <li className="mainPage__contacts-container-list-item ">
            <span className="mainPage__contacts-container-list-item-title ">
              {t("contacts.adress")}
            </span>
            <p className="mainPage__contacts-container-list-item-text">
              {t("contacts.adress-info-city")}
            </p>
            <p className="mainPage__contacts-container-list-item-text">
              {t("contacts.adress-info-street")}
            </p>
          </li>
          <li className="mainPage__contacts-container-list-item">
            <span className="mainPage__contacts-container-list-item-title">
              {t("contacts.post")}
            </span>
            <p className="mainPage__contacts-container-list-item-text">
              info@ator.com.ua
            </p>
          </li>
          <li className="mainPage__contacts-container-list-item">
            <span className="mainPage__contacts-container-list-item-title">
              {t("contacts.phone")}
            </span>
            <p className="mainPage__contacts-container-list-item-text">
              +38 095-303-2313
            </p>
          </li>
        </ul>
      </div>
      <Image className="mainPage__contacts-img" src={contact} alt="" />
    </div>
  );
};

export default Contacts;
