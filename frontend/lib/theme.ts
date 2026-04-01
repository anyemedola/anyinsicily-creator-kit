'use client';

import { createTheme } from '@mui/material/styles';
import { dmSans } from './fonts';

export const palette = {
  pink:       '#E8A0A0',
  pinkLight:  '#F2C4C4',
  pinkPale:   '#FDF0EF',
  pinkDeep:   '#C97A7A',
  rose:       '#D4717B',
  warmBg:     '#FBF5F0',
  warmMid:    '#F5E8E0',
  terra:      '#C4784A',
  gold:       '#C9A96E',
  sage:       '#8FAF8A',
  charcoal:   '#2C2420',
  textMid:    '#6A5550',
  textLight:  '#A08880',
  white:      '#FFFCFA',
  border:     '#EDD8CC',
};

const theme = createTheme({
  palette: {
    background: { default: palette.warmBg },
    text: { primary: palette.charcoal, secondary: palette.textMid },
    primary: { main: palette.rose },
    secondary: { main: palette.gold },
  },
  typography: {
    fontFamily: dmSans.style.fontFamily,
  },
  breakpoints: {
    values: { xs: 0, sm: 400, md: 600, lg: 720, xl: 960 },
  },
});

export default theme;
