'use client';

import { useTranslation } from 'react-i18next';
import Translator from '@/components/translator-i18n';
import Eyebrow from '@/components/ui/Eyebrow';
import PageContainer from '@/components/portfolio/PortfolioContainer/PortfolioContainer';
import EmailsHeader from '@/components/emails/EmailsHeader/EmailsHeader';
import EmailCard from '@/components/emails/EmailCard/EmailCard';
import TipsBox from '@/components/emails/TipsBox/TipsBox';

interface Segment {
  type: 'text' | 'strong' | 'placeholder';
  content: string;
}

interface EmailTemplate {
  tag: string;
  subject: string;
  segments: Segment[];
  signature: string;
}

export default function EmailsContent() {
  const { t } = useTranslation();
  const templates = t('emails.templates', { returnObjects: true }) as EmailTemplate[];

  return (
    <PageContainer>
      <Eyebrow><Translator path="emails.eyebrow" /></Eyebrow>
      <EmailsHeader />
      {templates.map((email) => (
        <EmailCard
          key={email.tag}
          tag={email.tag}
          subject={email.subject}
          segments={email.segments}
          signature={email.signature}
        />
      ))}
      <TipsBox />
    </PageContainer>
  );
}
