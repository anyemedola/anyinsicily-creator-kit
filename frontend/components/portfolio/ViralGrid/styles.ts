import { styled } from '@mui/material/styles';
import { palette } from '@/lib/theme';
import { playfair, dmMono } from '@/lib/fonts';

export const Grid = styled('div')({
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: 12,
    marginBottom: 48,
    '@media (max-width: 600px)': {
        gridTemplateColumns: 'repeat(2, 1fr)',
    },
});

export const Card = styled('div')<{ gradient: string }>(({ gradient }) => ({
    aspectRatio: '9/14',
    borderRadius: 14,
    background: gradient,
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'transform 0.2s',
    '&::after': {
        content: '""',
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to top, rgba(28,14,14,0.82) 0%, rgba(28,14,14,0.08) 55%, transparent 100%)',
    },
    '&:hover': {
        transform: 'scale(1.025)',
    },
}));

export const Content = styled('div')({
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: '14px 12px',
    zIndex: 2,
});

export const Badge = styled('div')({
    display: 'inline-block',
    background: palette.pink,
    color: palette.charcoal,
    fontFamily: dmMono.style.fontFamily,
    fontSize: 8,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    padding: '3px 8px',
    borderRadius: 100,
    marginBottom: 8,
});

export const Views = styled('div')({
    fontFamily: playfair.style.fontFamily,
    fontSize: 22,
    fontStyle: 'italic',
    color: 'white',
    lineHeight: 1,
});

export const ViewsLabel = styled('div')({
    fontSize: 10,
    color: 'rgba(255,255,255,0.5)',
    fontFamily: dmMono.style.fontFamily,
    letterSpacing: '0.08em',
    marginTop: 2,
});

export const Topic = styled('div')({
    fontSize: 11,
    color: 'rgba(255,255,255,0.75)',
    marginTop: 6,
    lineHeight: 1.4,
});