import WriteUsComponent from '@/pages/WriteUs';

import './writeUs.scss';
import initTranslations from '@/app/i18n';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import TranslationsProvider from '@/components/TranslationProvider/TranslationProvider';

export default async function WriteUs({ params }: { params: Params }) {
  const { t, resources } = await initTranslations(params.locale, [
    "form"
  ]);

  return (
    <TranslationsProvider
        namespaces={["form"]}
        locale={params?.locale}
        resources={resources}
      >
        <WriteUsComponent/>
      </TranslationsProvider>
    
  )
} 