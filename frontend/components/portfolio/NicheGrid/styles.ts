import { styled } from '@mui/material/styles';
import { palette } from '@/lib/theme';
import { playfair } from '@/lib/fonts';

export const Grid = styled('div')({
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 12,
    marginBottom: 40,
    '@media (max-width: 720px)': { gridTemplateColumns: 'repeat(2, 1fr)' },
    '@media (max-width: 420px)': { gridTemplateColumns: '1fr' },
});

export const Card = styled('div')({
    background: palette.white,
    border: `1px solid ${palette.border}`,
    borderRadius: 12,
    padding: 20,
    transition: 'box-shadow 0.2s, transform 0.2s',
    '&:hover': {
        boxShadow: '0 4px 20px rgba(196,53,96,0.15)',
        transform: 'translateY(-2px)',
    },
});

export const Icon = styled('div')({
    fontSize: 24,
    marginBottom: 10,
});

export const Title = styled('h3')({
    fontFamily: playfair.style.fontFamily,
    fontSize: 16,
    fontWeight: 400,
    color: palette.charcoal,
    marginBottom: 6,
});

export const Desc = styled('p')({
    fontSize: 12,
    color: palette.textMid,
    lineHeight: 1.65,
});
