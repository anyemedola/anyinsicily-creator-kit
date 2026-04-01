'use client';

import { useLang } from '@/lib/i18n/LangContext';
import Eyebrow from '@/components/ui/Eyebrow';
import SectionDivider from '@/components/ui/SectionDivider';
import Hero from '@/components/portfolio/Hero/Hero';
import ViralGrid from '@/components/portfolio/ViralGrid/ViralGrid';
import NicheGrid from '@/components/portfolio/NicheGrid/NicheGrid';
import AudienceStrip from '@/components/portfolio/Audience/AudienceStrip';
import FormatsGrid from '@/components/portfolio/FormatsGrid/FormatsGrid';
import PortfolioContainer from '@/components/portfolio/PortfolioContainer/PortfolioContainer';

export default function HomeContent() {
  const { dict } = useLang();
  const { home } = dict;

  return (
    <PortfolioContainer>
      <Eyebrow>{home.eyebrow}</Eyebrow>
      <Hero />
      <SectionDivider>{home.viralContent}</SectionDivider>
      <ViralGrid />
      <SectionDivider>{home.contentNiches}</SectionDivider>
      <NicheGrid />
      <AudienceStrip />
      <SectionDivider>{home.availableFormats}</SectionDivider>
      <FormatsGrid />
    </PortfolioContainer>
  );
}
