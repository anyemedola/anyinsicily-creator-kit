'use client';

import '@/components/translator-i18n/i18n';
import * as S from './styles';
import { useTranslation } from 'react-i18next';

interface Format {
  n: string;
  title: string;
  desc: string;
}

export default function FormatsGrid() {
  const { t } = useTranslation();
  const formats = t('home.formats', { returnObjects: true }) as Format[];

  return (
    <S.Grid>
      {formats.map(({ n, title, desc }) => (
        <S.Card key={n}>
          <S.Number>{n}</S.Number>
          <S.Info>
            <S.FormatTitle>{title}</S.FormatTitle>
            <S.FormatDesc>{desc}</S.FormatDesc>
          </S.Info>
        </S.Card>
      ))}
    </S.Grid>
  );
}
