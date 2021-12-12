import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

export const supportedLocales = [
  {
    label: 'English',
    value: 'en-US',
  },
  {
    label: '中文(繁體)',
    value: 'zh-TW',
  },
];

export const supportedLocaleMap = supportedLocales.reduce((acc, cur) => {
  acc[cur.value] = cur.label;
  return acc;
}, {});

const resources = supportedLocales.reduce((acc, cur) => {
  acc[cur.value] = {
    translation: require(`./langs/${cur.value}.json`),
  };
  return acc;
}, {});

const configI18n = (props = {}) => {
  i18n.use(initReactI18next).init({
    fallbackLng: 'en-US',
    resources,
    interpolation: {
      escapeValue: false,
    },
    ...props,
  });
};

export default configI18n;
