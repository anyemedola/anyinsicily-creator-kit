'use client';

import * as S from './styles';
import { useLang } from '@/lib/i18n/LangContext';

export default function Hero() {
  const { dict } = useLang();
  const { hero } = dict.home;

  return (
    <S.HeroGrid>
      <div>
        <S.H1>
          Any<br /><em>in Sicily.</em>
        </S.H1>
        <S.Lead>{hero.lead}</S.Lead>
      </div>

      <S.StatsCard>
        <S.CardTitle>{hero.statsTitle}</S.CardTitle>
        {hero.stats.map(({ label, value, sup, small }) => (
          <S.StatItem key={label}>
            <S.StatLabel>{label}</S.StatLabel>
            <S.StatValue small={small}>
              {value}
              {sup && <sup>{sup}</sup>}
            </S.StatValue>
          </S.StatItem>
        ))}
      </S.StatsCard>
    </S.HeroGrid>
  );
}
