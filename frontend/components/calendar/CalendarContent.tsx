'use client';

import { useLang } from '@/lib/i18n/LangContext';
import Eyebrow from '@/components/ui/Eyebrow';
import SectionDivider from '@/components/ui/SectionDivider';
import PageContainer from '@/components/portfolio/PortfolioContainer/PortfolioContainer';
import CalendarHeader from '@/components/calendar/Calendar/CalendarHeader';
import WeekLabel from '@/components/calendar/WeekLab/WeekLabel';
import WeekGrid from '@/components/calendar/WeekGrid/WeekGrid';
import StrategyGrid from '@/components/calendar/StrategyGrid/StrategyGrid';
import dynamic from 'next/dynamic';

const PasswordGate = dynamic(() => import('@/components/calendar/PasswordGate'), { ssr: false });

export default function CalendarContent() {
  const { dict } = useLang();
  const { calendar } = dict;

  return (
    <PasswordGate>
      <PageContainer>
        <Eyebrow>{calendar.eyebrow}</Eyebrow>
        <CalendarHeader />
        <WeekLabel>{calendar.week1Label}</WeekLabel>
        <WeekGrid days={calendar.week1} />
        <WeekLabel>{calendar.week2Label}</WeekLabel>
        <WeekGrid days={calendar.week2} />
        <SectionDivider>{calendar.strategy}</SectionDivider>
        <StrategyGrid />
      </PageContainer>
    </PasswordGate>
  );
}
