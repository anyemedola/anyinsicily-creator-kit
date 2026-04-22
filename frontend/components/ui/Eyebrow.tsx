'use client';

import { styled } from '@mui/material/styles';
import { palette } from '@/lib/theme';
import { dmMono } from '@/lib/fonts';

const Eyebrow = styled('div')({
  fontFamily: dmMono.style.fontFamily,
  fontSize: 10,
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
  color: palette.lemon,
  marginBottom: 10,
  display: 'flex',
  alignItems: 'center',
  gap: 10,
  '&::before': {
    content: '""',
    width: 20,
    height: 1,
    background: palette.lemon,
    display: 'block',
    flexShrink: 0,
  },
});

export default Eyebrow;
