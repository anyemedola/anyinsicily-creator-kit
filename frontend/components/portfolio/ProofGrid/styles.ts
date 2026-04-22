import { styled } from '@mui/material/styles';
import { palette } from '@/lib/theme';
import { dmMono, playfair } from '@/lib/fonts';

export const Section = styled('section')({
    marginBottom: 48,
});

export const Intro = styled('div')({
    maxWidth: 640,
    marginBottom: 18,
});

export const Kicker = styled('div')({
    fontFamily: dmMono.style.fontFamily,
    fontSize: 10,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: palette.lemon,
    marginBottom: 8,
});

export const Title = styled('h2')({
    fontFamily: playfair.style.fontFamily,
    fontSize: 'clamp(28px, 4vw, 42px)',
    fontWeight: 400,
    lineHeight: 1.1,
    color: palette.charcoal,
    marginBottom: 10,
});

export const Lead = styled('p')({
    fontSize: 13,
    color: palette.textMid,
    lineHeight: 1.7,
});

export const Grid = styled('div')({
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: 12,
    '@media (max-width: 760px)': { gridTemplateColumns: 'repeat(2, 1fr)' },
    '@media (max-width: 480px)': { gridTemplateColumns: '1fr' },
});

export const Card = styled('article')({
    background: palette.white,
    border: `1px solid ${palette.border}`,
    borderRadius: 12,
    padding: 18,
    minHeight: 172,
    transition: 'transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease',
    '&:hover': {
        transform: 'translateY(-2px)',
        borderColor: palette.lemonLight,
        boxShadow: '0 8px 24px rgba(196,53,96,0.10)',
    },
});

export const Label = styled('div')({
    fontFamily: dmMono.style.fontFamily,
    fontSize: 9,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: palette.seaDark,
    marginBottom: 10,
});

export const CardTitle = styled('h3')({
    fontSize: 14,
    color: palette.charcoal,
    marginBottom: 8,
});

export const Desc = styled('p')({
    fontSize: 12,
    color: palette.textMid,
    lineHeight: 1.6,
});
