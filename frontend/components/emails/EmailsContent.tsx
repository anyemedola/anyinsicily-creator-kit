'use client';

import { useLang } from '@/lib/i18n/LangContext';
import Eyebrow from '@/components/ui/Eyebrow';
import PageContainer from '@/components/portfolio/PortfolioContainer/PortfolioContainer';
import EmailsHeader from '@/components/emails/EmailsHeader/EmailsHeader';
import EmailCard from '@/components/emails/EmailCard/EmailCard';
import TipsBox from '@/components/emails/TipsBox/TipsBox';

export default function EmailsContent() {
  const { dict } = useLang();

  return (
    <PageContainer>
      <Eyebrow>{dict.emails.eyebrow}</Eyebrow>
      <EmailsHeader />
      {dict.emails.templates.map((email) => (
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
