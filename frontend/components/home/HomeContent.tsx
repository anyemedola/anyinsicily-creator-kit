'use client';

import Translator from '@/components/translator-i18n';
import Eyebrow from '@/components/ui/Eyebrow';
import SectionDivider from '@/components/ui/SectionDivider';
import Hero from '@/components/portfolio/Hero/Hero';
import ProofGrid from '@/components/portfolio/ProofGrid/ProofGrid';
import ViralGrid from '@/components/portfolio/ViralGrid/ViralGrid';
import NicheGrid from '@/components/portfolio/NicheGrid/NicheGrid';
import AudienceStrip from '@/components/portfolio/Audience/AudienceStrip';
import FormatsGrid from '@/components/portfolio/FormatsGrid/FormatsGrid';
import PortfolioContainer from '@/components/portfolio/PortfolioContainer/PortfolioContainer';

export default function HomeContent() {
  return (
    <PortfolioContainer>
      <Eyebrow><Translator path="home.eyebrow" /></Eyebrow>
      <Hero />
      <ProofGrid />
      <SectionDivider><Translator path="home.viralContent" /></SectionDivider>
      <ViralGrid />
      <SectionDivider><Translator path="home.contentNiches" /></SectionDivider>
      <NicheGrid />
      <AudienceStrip />
      <SectionDivider><Translator path="home.availableFormats" /></SectionDivider>
      <FormatsGrid />
    </PortfolioContainer>
  );
}
