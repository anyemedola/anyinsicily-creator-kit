'use client';

import * as S from './styles';
import { useLang } from '@/lib/i18n/LangContext';

export default function StrategyGrid() {
  const { dict } = useLang();

  return (
    <S.Grid>
      {dict.calendar.strategies.map(({ icon, title, desc, gradient, shadow }) => (
        <S.Card key={title} gradient={gradient} shadow={shadow}>
          <S.Icon>{icon}</S.Icon>
          <S.Title>{title}</S.Title>
          <S.Desc>{desc}</S.Desc>
        </S.Card>
      ))}
    </S.Grid>
  );
}
