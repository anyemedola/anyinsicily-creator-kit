'use client';

import '@/components/translator-i18n/i18n';
import * as S from './styles';
import { useTranslation } from 'react-i18next';

interface ProofItem {
  label: string;
  title: string;
  desc: string;
}

export default function ProofGrid() {
  const { t } = useTranslation();
  const items = t('home.proof.items', { returnObjects: true }) as ProofItem[];

  return (
    <S.Section aria-label={t('home.proof.label')}>
      <S.Intro>
        <S.Kicker>{t('home.proof.kicker')}</S.Kicker>
        <S.Title>{t('home.proof.title')}</S.Title>
        <S.Lead>{t('home.proof.lead')}</S.Lead>
      </S.Intro>
      <S.Grid>
        {items.map(({ label, title, desc }) => (
          <S.Card key={title}>
            <S.Label>{label}</S.Label>
            <S.CardTitle>{title}</S.CardTitle>
            <S.Desc>{desc}</S.Desc>
          </S.Card>
        ))}
      </S.Grid>
    </S.Section>
  );
}
