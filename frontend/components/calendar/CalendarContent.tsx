'use client';

import { useTranslation } from 'react-i18next';
import Translator from '@/components/translator-i18n';
import Eyebrow from '@/components/ui/Eyebrow';
import SectionDivider from '@/components/ui/SectionDivider';
import PageContainer from '@/components/portfolio/PortfolioContainer/PortfolioContainer';
import CalendarHeader from '@/components/calendar/Calendar/CalendarHeader';
import WeekLabel from '@/components/calendar/WeekLab/WeekLabel';
import WeekGrid from '@/components/calendar/WeekGrid/WeekGrid';
import StrategyGrid from '@/components/calendar/StrategyGrid/StrategyGrid';
import dynamic from 'next/dynamic';
import type { DayCard } from '@/lib/calendarData';

const PasswordGate = dynamic(() => import('@/components/calendar/PasswordGate'), { ssr: false });

export default function CalendarContent() {
  const { t } = useTranslation();
  const week1 = t('calendar.week1', { returnObjects: true }) as DayCard[];
  const week2 = t('calendar.week2', { returnObjects: true }) as DayCard[];

  return (
    <PasswordGate>
      <PageContainer>
        <Eyebrow><Translator path="calendar.eyebrow" /></Eyebrow>
        <CalendarHeader />
        <WeekLabel><Translator path="calendar.week1Label" /></WeekLabel>
        <WeekGrid days={week1} />
        <WeekLabel><Translator path="calendar.week2Label" /></WeekLabel>
        <WeekGrid days={week2} />
        <SectionDivider><Translator path="calendar.strategy" /></SectionDivider>
        <StrategyGrid />
      </PageContainer>
    </PasswordGate>
  );
}
