'use client';

import * as S from './styles';
import Translator from '@/components/translator-i18n';

export default function EmailsHeader() {
  return (
    <S.Root>
      <S.H2>
        <Translator path="emails.header.title" /><br /><em><Translator path="emails.header.titleEm" /></em>
      </S.H2>
      <S.Lead>
        <Translator path="emails.header.lead" />
      </S.Lead>
    </S.Root>
  );
}
