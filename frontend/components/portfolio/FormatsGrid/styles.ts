import { styled } from '@mui/material/styles';
import { palette } from '@/lib/theme';
import { playfair, dmSans } from '@/lib/fonts';

export const Grid = styled('div')({
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: 12,
    '@media (max-width: 600px)': { gridTemplateColumns: '1fr' },
});

export const Card = styled('div')({
    background: palette.white,
    border: `1px solid ${palette.border}`,
    borderRadius: 12,
    padding: '18px 20px',
    display: 'flex',
    gap: 16,
    alignItems: 'flex-start',
    transition: 'box-shadow 0.2s',
    '&:hover': {
        boxShadow: '0 4px 16px rgba(196,120,74,0.1)',
    },
});

export const Number = styled('div')({
    fontFamily: playfair.style.fontFamily,
    fontSize: 28,
    fontStyle: 'italic',
    color: palette.pinkLight,
    lineHeight: 1,
    flexShrink: 0,
    width: 32,
});

export const Info = styled('div')({});

export const FormatTitle = styled('h4')({
    fontSize: 13,
    fontWeight: 500,
    color: palette.charcoal,
    marginBottom: 4,
    fontFamily: dmSans.style.fontFamily,
});

export const FormatDesc = styled('p')({
    fontSize: 11,
    color: palette.textMid,
    lineHeight: 1.6,
});