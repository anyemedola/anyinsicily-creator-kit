'use client';

import * as S from './styles';

const INSTAGRAM_URL = 'https://www.instagram.com/anyinsicily/';

export default function Footer() {
  return (
    <S.FooterRoot>
      <S.Accent href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
        @anyinsicily
      </S.Accent>
      {' · '}
      <S.Link href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
        Any in Sicily
      </S.Link>
      {' · Creator Kit 2026'}
    </S.FooterRoot>
  );
}
