'use client';

import '@/components/translator-i18n/i18n';
import * as S from './styles';
import { useTranslation } from 'react-i18next';

export default function AudienceStrip() {
  const { t } = useTranslation();
  const heading = t('home.audience.heading');
  const headingLine2 = t('home.audience.headingLine2');
  const headingEm = t('home.audience.headingEm');
  const labels = t('home.audience.labels', { returnObjects: true }) as string[];

  return (
    <S.Strip>
      <S.Heading>
        {heading}<br />{headingLine2}<br /><em>{headingEm}</em>
      </S.Heading>
      <S.Pills>
        {labels.map((label) => (
          <S.Pill key={label}>{label}</S.Pill>
        ))}
      </S.Pills>
    </S.Strip>
  );
}
