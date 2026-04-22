'use client';

import { createTheme } from '@mui/material/styles';
import { dmSans } from './fonts';

export const palette = {
  // Brand pink — primary accent
  lemon:      '#C43560',
  lemonLight: '#E56B8C',
  lemonPale:  '#F8E4EA',
  lemonDeep:  '#8F2444',

  // Brand mint — secondary
  sea:        '#6ECFB8',
  seaLight:   '#9FE0D1',
  seaPale:    '#E5F8F4',
  seaDark:    '#2E8E79',

  // Accent aliases kept for existing components
  terra:      '#C43560',
  terraLight: '#E56B8C',

  // Backgrounds
  warmBg:     '#FFF7FA',
  warmMid:    '#F8E4EA',

  // Text
  charcoal:   '#32131F',
  textMid:    '#704858',
  textLight:  '#9A7181',

  // Utility
  white:      '#FFFFFF',
  border:     '#E9C6D1',

  // Success state
  olive:      '#2E8E79',
};

const theme = createTheme({
  palette: {
    background: { default: palette.warmBg },
    text: { primary: palette.charcoal, secondary: palette.textMid },
    primary: { main: palette.lemon },
    secondary: { main: palette.sea },
  },
  typography: {
    fontFamily: dmSans.style.fontFamily,
  },
  breakpoints: {
    values: { xs: 0, sm: 400, md: 600, lg: 720, xl: 960 },
  },
});

export default theme;
