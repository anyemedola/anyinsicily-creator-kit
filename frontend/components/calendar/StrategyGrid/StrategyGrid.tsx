'use client';

import '@/components/translator-i18n/i18n';
import * as S from './styles';
import { useTranslation } from 'react-i18next';

interface Strategy {
  icon: string;
  title: string;
  desc: string;
}

const strategyVisuals = [
  { gradient: 'linear-gradient(145deg, #E56B8C, #C43560)', shadow: '0 6px 24px rgba(196,53,96,0.22)' },
  { gradient: 'linear-gradient(145deg, #6ECFB8, #2E8E79)', shadow: '0 6px 24px rgba(110,207,184,0.24)' },
  { gradient: 'linear-gradient(145deg, #C43560, #6ECFB8)', shadow: '0 6px 24px rgba(196,53,96,0.18)' },
];

export default function StrategyGrid() {
  const { t } = useTranslation();
  const strategies = t('calendar.strategies', { returnObjects: true }) as Strategy[];

  return (
    <S.Grid>
      {strategies.map(({ icon, title, desc }, i) => (
        <S.Card key={title} gradient={strategyVisuals[i].gradient} shadow={strategyVisuals[i].shadow}>
          <S.Icon>{icon}</S.Icon>
          <S.Title>{title}</S.Title>
          <S.Desc>{desc}</S.Desc>
        </S.Card>
      ))}
    </S.Grid>
  );
}
