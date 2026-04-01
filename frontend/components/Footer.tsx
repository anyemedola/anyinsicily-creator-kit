'use client';

import { styled } from '@mui/material/styles';
import { palette } from '@/lib/theme';
import { dmMono } from '@/lib/fonts';

const FooterRoot = styled('footer')({
  textAlign: 'center',
  padding: 16,
  fontFamily: dmMono.style.fontFamily,
  fontSize: 10,
  color: palette.textLight,
  letterSpacing: '0.1em',
  borderTop: `1px solid ${palette.border}`,
  position: 'relative',
  zIndex: 1,
});

const Accent = styled('span')({
  color: palette.rose,
});

export default function Footer() {
  return (
    <FooterRoot>
      <Accent>@anyinsicily</Accent> · Any in Sicily · Creator Kit 2025
    </FooterRoot>
  );
}
