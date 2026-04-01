import { styled } from '@mui/material/styles';
import { palette } from '@/lib/theme';
import { playfair, dmMono, dmSans } from '@/lib/fonts';

export const HeroGrid = styled('div')({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 32,
    alignItems: 'center',
    marginBottom: 52,
    '@media (max-width: 720px)': {
        gridTemplateColumns: '1fr',
        gap: 24,
    },
});

export const H1 = styled('h1')({
    fontFamily: playfair.style.fontFamily,
    fontSize: 'clamp(44px, 7vw, 72px)',
    fontWeight: 400,
    lineHeight: 1.05,
    color: palette.charcoal,
    marginBottom: 16,
    '& em': {
        fontStyle: 'italic',
        color: palette.rose,
    },
});

export const Lead = styled('p')({
    fontSize: 14,
    color: palette.textMid,
    lineHeight: 1.7,
    maxWidth: 360,
});

export const StatsCard = styled('div')({
    background: 'linear-gradient(145deg, #C97A7A 0%, #D4717B 50%, #C4784A 100%)',
    borderRadius: 16,
    padding: 28,
    color: 'white',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '0 12px 40px rgba(196,120,74,0.28)',
    '&::before': {
        content: '"🌊"',
        position: 'absolute',
        right: 20,
        top: 16,
        fontSize: 52,
        opacity: 0.12,
    },
});

export const CardTitle = styled('div')({
    fontFamily: dmMono.style.fontFamily,
    fontSize: 9,
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.55)',
    marginBottom: 20,
});

export const StatItem = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    padding: '11px 0',
    borderBottom: '1px solid rgba(255,255,255,0.12)',
    '&:last-child': { borderBottom: 'none' },
});

export const StatLabel = styled('span')({
    fontSize: 12,
    color: 'rgba(255,255,255,0.7)',
});

export const StatValue = styled('span')<{ small?: boolean }>(({ small }) => ({
    fontFamily: small ? dmSans.style.fontFamily : playfair.style.fontFamily,
    fontSize: small ? 16 : 26,
    fontWeight: 400,
    color: '#fff',
    lineHeight: 1,
    '& sup': { fontSize: 13, verticalAlign: 'super' },
}));