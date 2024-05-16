import Image from "next/image"
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import tarmpel from '../../image/mainPage/train1.webp';
import chair from '../../image/mainPage/train2.webp';
import initTranslations from "@/app/i18n";

const Experience = async ({params}: {params: Params}) => {
  const { t } = await initTranslations(params.locale, ["main"]);
  return (
    <div className="mainPage__experience">
        <div className="mainPage__experience-text">

          <div className="mainPage__experience-text-left">
            <h2 className="mainPage__experience-text-left-title">{t("experience.title")}</h2>
            <p className="mainPage__experience-text-left-description">
              {t("experience.left-description")}
               </p>
          </div>

          <div className="mainPage__experience-text-right">
            <h3 className="mainPage__experience-text-right-title">{t("experience.right-title")}</h3>
            <ul className="mainPage__experience-text-right-list">
              <li className="mainPage__experience-text-right-list-item">
                <span>1.</span>
                <p>{t("experience.list1")}</p>
              </li>
              <li className="mainPage__experience-text-right-list-item">
                <span>2.</span>
                <p>{t("experience.list2")}</p>
              </li>
              <li className="mainPage__experience-text-right-list-item">
                <span>3.</span>
                <p>{t("experience.list3")}</p>
              </li>
              <li className="mainPage__experience-text-right-list-item">
                <span>4.</span>
                <p>{t("experience.list4")}</p>
              </li>
            </ul>
          </div>
          
        </div>
        <div className="mainPage__experience-image">
          
          <div className="mainPage__experience-image-img">
            <Image
              src={tarmpel}  
              alt='trampel'
              // layout='fill'
              // style={{maxWidth: '656px', maxHeight: '437px', objectFit: 'contain'}}
            />
          </div>

          <div className="mainPage__experience-image-img">
            <Image
              src={chair}  
              alt='chair'
              // className="w-full h-full"
              // style={{maxWidth: '656px', maxHeight: '437px', objectFit: 'contain'}}

            />
          </div>
        </div>
      </div>
  )
}

export default Experience;