import initTranslations from "@/app/i18n";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Link from "next/link";

const MainComponent = async ({params}: {params: Params}) => {
  const { t } = await initTranslations(params.locale, ["main"]);
  return (
    <div className="mainPage__first">
        <img 
          src="/mainImage.webp" 
          alt="main image" 
          property="true" 
          className='mainPage__first-backgroung-img' 
          style={{ position: 'absolute', top: 0, left: 0, objectFit: 'cover', width: '100%', height: '100%'}}
          loading="eager"
        
        />

        <div className="mainPage__first-container">
          <h1 className='mainPage__first-title'>{t("main.title")}</h1>

          <p className='mainPage__first-description'>{t("main.description")}</p>

          <Link href={'/about'} className='mainPage__first-button'>{t("main.read-me")}</Link>
        </div>
      </div>
  )
}

export default MainComponent;