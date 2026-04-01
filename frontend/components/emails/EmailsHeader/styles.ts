import { styled } from '@mui/material/styles';
import { palette } from '@/lib/theme';
import { playfair, dmMono } from '@/lib/fonts';

export const Root = styled('div')({
    marginBottom: 40,
});

export const H2 = styled('h2')({
    fontFamily: playfair.style.fontFamily,
    fontSize: 'clamp(36px, 6vw, 56px)',
    fontWeight: 400,
    lineHeight: 1.1,
    color: palette.charcoal,
    marginBottom: 12,
    '& em': {
        fontStyle: 'italic',
        color: palette.rose,
    },
});

export const Lead = styled('p')({
    fontSize: 14,
    color: palette.textMid,
    lineHeight: 1.7,
    maxWidth: 560,
});

export const Highlight = styled('span')({
    background: 'rgba(212,113,123,0.12)',
    color: palette.rose,
    padding: '1px 6px',
    borderRadius: 4,
    fontFamily: dmMono.style.fontFamily,
    fontSize: 11,
});