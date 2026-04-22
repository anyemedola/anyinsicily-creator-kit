import { styled } from '@mui/material/styles';
import { palette } from '@/lib/theme';
import { playfair, dmMono } from '@/lib/fonts';

export const Grid = styled('div')({
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: 16,
    marginBottom: 48,
    '@media (max-width: 600px)': {
        gridTemplateColumns: '1fr',
    },
});

export const Card = styled('div')<{ gradient: string }>(({ gradient }) => ({
    height: 480,
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
    '& .video': {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
},
}));

export const Content = styled('div')({
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: '18px 16px',
    zIndex: 2,
});

export const Badge = styled('div')({
    display: 'inline-block',
    background: palette.lemon,
    color: palette.white,
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
    fontSize: 13,
    fontWeight: 600,
    color: 'rgba(255,255,255,0.9)',
    marginTop: 6,
    lineHeight: 1.4,
});

export const Detail = styled('p')({
    fontSize: 11,
    color: 'rgba(255,255,255,0.76)',
    marginTop: 8,
    lineHeight: 1.45,
    '& strong': {
        color: 'white',
        fontWeight: 600,
    },
});
