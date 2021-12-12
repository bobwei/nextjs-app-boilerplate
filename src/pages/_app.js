import React, { useRef } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import SSRProvider from 'react-bootstrap/SSRProvider';

import '../styles/index.scss';
import i18n from '../i18n';

const Comp = ({ Component, pageProps }) => {
  const { locale } = useRouter();
  i18n({ lng: locale });
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t('og title')}</title>
        <meta property="og:title" content={t('og title')} key="title" />
        <meta property="og:description" content={t('og description')} key="description" />
        <meta property="og:image" content="" key="image" />
        <meta property="og:url" content="" key="url" />
        <meta property="og:type" content="website" key="type" />
        <meta property="og:locale" content={locale} key="locale" />
        <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content={t('og title')}></meta>
        <meta name="apple-mobile-web-app-capable" content="yes"></meta>
      </Head>
      <SSRProvider>
        <Component {...pageProps} />
      </SSRProvider>
    </>
  );
};

export default Comp;
