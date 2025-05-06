import React from 'react';
import { Actions } from '../components/Actions';
import { HighLevelStatus } from '../components/HighLevelStatus';
import { Status } from '../components/Status';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '../components/LanguageSwitcher';

export const Home = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-4">
      <LanguageSwitcher />
      <h1 className="text-4xl font-bold">{t('title')}</h1>
      <Actions />
      <HighLevelStatus />
      <Status />
    </div>
  );
};
