'use client';

import * as S from './styles';
import { useLang } from '@/lib/i18n/LangContext';

export default function EmailsHeader() {
  const { dict } = useLang();
  const { header } = dict.emails;

  return (
    <S.Root>
      <S.H2>
        {header.title}<br /><em>{header.titleEm}</em>
      </S.H2>
      <S.Lead>
        {header.lead}{' '}
        <S.Highlight>{header.highlight}</S.Highlight>{' '}
        {header.leadEnd}
      </S.Lead>
    </S.Root>
  );
}
