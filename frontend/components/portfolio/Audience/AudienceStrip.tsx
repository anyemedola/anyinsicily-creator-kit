'use client';

import * as S from './styles';
import { useLang } from '@/lib/i18n/LangContext';

export default function AudienceStrip() {
  const { dict } = useLang();
  const { audience } = dict.home;

  return (
    <S.Strip>
      <S.Heading>
        {audience.heading}<br />{audience.headingLine2}<br /><em>{audience.headingEm}</em>
      </S.Heading>
      <S.Pills>
        {audience.labels.map((label) => (
          <S.Pill key={label}>{label}</S.Pill>
        ))}
      </S.Pills>
    </S.Strip>
  );
}
