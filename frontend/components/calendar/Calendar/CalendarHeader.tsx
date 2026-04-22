'use client';

import * as S from './styles';
import Translator from '@/components/translator-i18n';

export default function CalendarHeader() {
  return (
    <S.Root>
      <S.H2>
        <Translator path="calendar.header.title" /><br /><em><Translator path="calendar.header.titleEm" /></em>
      </S.H2>
      <S.Lead><Translator path="calendar.header.lead" /></S.Lead>
    </S.Root>
  );
}
