'use client';

import * as S from './styles';
import { useLang } from '@/lib/i18n/LangContext';

export default function NicheGrid() {
  const { dict } = useLang();

  return (
    <S.Grid>
      {dict.home.niches.map(({ icon, title, desc }) => (
        <S.Card key={title}>
          <S.Icon>{icon}</S.Icon>
          <S.Title>{title}</S.Title>
          <S.Desc>{desc}</S.Desc>
        </S.Card>
      ))}
    </S.Grid>
  );
}
