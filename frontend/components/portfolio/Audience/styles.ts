import { styled } from '@mui/material/styles';
import { playfair } from '@/lib/fonts';

export const Strip = styled('div')({
    background: 'linear-gradient(120deg, #F2C4C4 0%, #E8A0A0 40%, #D4717B 100%)',
    borderRadius: 16,
    padding: '32px 36px',
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    gap: 32,
    alignItems: 'center',
    marginBottom: 40,
    boxShadow: '0 8px 32px rgba(212,113,123,0.22)',
    '@media (max-width: 600px)': {
        gridTemplateColumns: '1fr',
        gap: 20,
        padding: 24,
    },
});

export const Heading = styled('div')({
    fontFamily: playfair.style.fontFamily,
    fontSize: 'clamp(28px, 5vw, 42px)',
    fontWeight: 400,
    color: 'white',
    lineHeight: 1.1,
    whiteSpace: 'nowrap',
    '& em': { fontStyle: 'italic' },
});

export const Pills = styled('div')({
    display: 'flex',
    flexWrap: 'wrap',
    gap: 8,
});

export const Pill = styled('span')({
    background: 'rgba(255,252,250,0.25)',
    border: '1px solid rgba(255,252,250,0.4)',
    color: 'white',
    fontSize: 11,
    padding: '6px 13px',
    borderRadius: 100,
});