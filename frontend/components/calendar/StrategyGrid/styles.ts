
import { styled } from '@mui/material/styles';
import { playfair } from '@/lib/fonts';

export const Grid = styled('div')({
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 12,
    marginTop: 8,
    '@media (max-width: 720px)': { gridTemplateColumns: '1fr' },
});

export const Card = styled('div')<{ gradient: string; shadow: string }>(({ gradient, shadow }) => ({
    borderRadius: 14,
    padding: 24,
    background: gradient,
    boxShadow: shadow,
}));

export const Icon = styled('div')({
    fontSize: 22,
    marginBottom: 12,
});

export const Title = styled('h4')({
    fontFamily: playfair.style.fontFamily,
    fontSize: 18,
    fontWeight: 400,
    color: 'white',
    marginBottom: 10,
    lineHeight: 1.2,
});

export const Desc = styled('p')({
    fontSize: 12,
    color: 'rgba(255,255,255,0.82)',
    lineHeight: 1.7,
});