'use client';

import * as S from './styles';
import { useLang } from '@/lib/i18n/LangContext';

export default function FormatsGrid() {
  const { dict } = useLang();

  return (
    <S.Grid>
      {dict.home.formats.map(({ n, title, desc }) => (
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
