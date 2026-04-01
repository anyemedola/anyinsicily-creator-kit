'use client';

import * as S from './styles';
import { useLang } from '@/lib/i18n/LangContext';

export default function TipsBox() {
  const { dict } = useLang();
  const { tips } = dict.emails;

  return (
    <S.Box>
      <S.Title>{tips.title}</S.Title>
      <S.List>
        {tips.items.map((tip) => (
          <S.Item key={tip}>{tip}</S.Item>
        ))}
      </S.List>
    </S.Box>
  );
}
