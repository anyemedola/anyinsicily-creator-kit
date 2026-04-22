'use client';

import * as S from './styles';
import { useTranslation } from 'react-i18next';
import Translator from '@/components/translator-i18n';

export default function TipsBox() {
  const { t } = useTranslation();
  const items = t('emails.tips.items', { returnObjects: true }) as string[];

  return (
    <S.Box>
      <S.Title><Translator path="emails.tips.title" /></S.Title>
      <S.List>
        {items.map((tip) => (
          <S.Item key={tip}>{tip}</S.Item>
        ))}
      </S.List>
    </S.Box>
  );
}
