import { useTranslation } from 'react-i18next';

import { Languages } from '../languages';

export const useCustomTranlation = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language: Languages) => {
    i18n.changeLanguage(language);
  };

  return {
    t,
    i18n,
    changeLanguage,
  };
};
