import { styled } from '@mui/material/styles';
import { palette } from '@/lib/theme';
import { dmMono } from '@/lib/fonts';
import { type ContentType } from '@/lib/calendarData';

export const Grid = styled('div')({
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    gap: 8,
    marginBottom: 40,
    '@media (max-width: 720px)': { gridTemplateColumns: 'repeat(3, 1fr)' },
    '@media (max-width: 400px)': { gridTemplateColumns: 'repeat(2, 1fr)' },
});

export const Card = styled('div')({
    background: palette.white,
    border: `1px solid ${palette.border}`,
    borderRadius: 12,
    padding: '14px 12px',
    minHeight: 148,
    position: 'relative',
    transition: 'box-shadow 0.2s',
    '&:hover': { boxShadow: '0 4px 16px rgba(196,53,96,0.12)' },
});

export const RestCard = styled('div')({
    background: 'transparent',
    border: `1px dashed ${palette.border}`,
    borderRadius: 12,
    minHeight: 148,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '@media (max-width: 720px)': { display: 'none' },
});

export const RestLabel = styled('div')({
    fontFamily: dmMono.style.fontFamily,
    fontSize: 9,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: palette.textLight,
    writingMode: 'vertical-rl',
});

export const DayName = styled('div')({
    fontFamily: dmMono.style.fontFamily,
    fontSize: 9,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: palette.textLight,
    marginBottom: 10,
});

export const typeColors: Record<ContentType, { bg: string; color: string }> = {
    reel: { bg: 'rgba(196,53,96,0.14)', color: palette.lemonDeep },
    stories: { bg: 'rgba(110,207,184,0.18)', color: palette.seaDark },
    carousel: { bg: 'rgba(110,207,184,0.15)', color: palette.olive },
    ugc: { bg: 'rgba(196,53,96,0.15)', color: palette.terra },
    rest: { bg: 'transparent', color: 'transparent' },
};

export const typeLabels: Record<ContentType, string> = {
    reel: 'Reel',
    stories: 'Stories',
    carousel: 'Carousel',
    ugc: 'UGC Collab',
    rest: '',
};

export const Badge = styled('span')<{ ctype: ContentType }>(({ ctype }) => ({
    display: 'inline-block',
    background: typeColors[ctype].bg,
    color: typeColors[ctype].color,
    fontFamily: dmMono.style.fontFamily,
    fontSize: 8,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    padding: '3px 8px',
    borderRadius: 100,
    marginBottom: 8,
}));

export const Title = styled('div')({
    fontSize: 12,
    fontWeight: 500,
    color: palette.charcoal,
    marginBottom: 5,
    lineHeight: 1.35,
});

export const Hook = styled('div')({
    fontSize: 11,
    color: palette.textMid,
    lineHeight: 1.45,
    fontStyle: 'italic',
});

export const Cta = styled('div')({
    position: 'absolute',
    bottom: 10,
    right: 12,
    fontFamily: dmMono.style.fontFamily,
    fontSize: 8,
    color: palette.lemon,
});
