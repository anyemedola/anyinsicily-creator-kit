'use client';

import { styled } from '@mui/material/styles';
import { palette } from '@/lib/theme';
import { dmMono } from '@/lib/fonts';

const Root = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: 14,
  margin: '40px 0 22px',
  '&::after': {
    content: '""',
    flex: 1,
    height: 1,
    background: palette.border,
    display: 'block',
  },
});

const Label = styled('span')({
  fontFamily: dmMono.style.fontFamily,
  fontSize: 10,
  letterSpacing: '0.18em',
  textTransform: 'uppercase',
  color: palette.textLight,
  whiteSpace: 'nowrap',
});

export default function SectionDivider({ children }: { children: React.ReactNode }) {
  return (
    <Root>
      <Label>{children}</Label>
    </Root>
  );
}
