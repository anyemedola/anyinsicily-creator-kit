'use client';

import '@/components/translator-i18n/i18n';
import * as S from './styles';
import { useTranslation } from 'react-i18next';

interface Niche {
  icon: string;
  title: string;
  desc: string;
}

export default function NicheGrid() {
  const { t } = useTranslation();
  const niches = t('home.niches', { returnObjects: true }) as Niche[];

  return (
    <S.Grid>
      {niches.map(({ icon, title, desc }) => (
        <S.Card key={title}>
          <S.Icon>{icon}</S.Icon>
          <S.Title>{title}</S.Title>
          <S.Desc>{desc}</S.Desc>
        </S.Card>
      ))}
    </S.Grid>
  );
}
