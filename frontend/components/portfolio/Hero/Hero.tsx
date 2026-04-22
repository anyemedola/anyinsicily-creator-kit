'use client';

import * as S from './styles';
import { useTranslation } from 'react-i18next';
import Translator from '@/components/translator-i18n';

const INSTAGRAM_URL = 'https://www.instagram.com/anyinsicily/';

interface StatItem {
  label: string;
  value: string;
  sup?: string;
  small?: boolean;
}

export default function Hero() {
  const { t } = useTranslation();
  const stats = t('home.hero.stats', { returnObjects: true }) as StatItem[];
  const statsTitle = t('home.hero.statsTitle');
  const [beforeHandle, afterHandle] = statsTitle.split('@anyinsicily');

  return (
    <S.HeroGrid>
      <div>
        <S.H1>
          <S.InstagramLink href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
            Any<br /><em>in Sicily.</em>
          </S.InstagramLink>
        </S.H1>
        <S.Lead><Translator path="home.hero.lead" /></S.Lead>
      </div>

      <S.StatsCard>
        <S.CardTitle>
          {beforeHandle}
          <S.CardTitleLink href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
            @anyinsicily
          </S.CardTitleLink>
          {afterHandle}
        </S.CardTitle>
        {stats.map(({ label, value, sup, small }) => (
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
