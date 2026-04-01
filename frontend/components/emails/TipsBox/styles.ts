import { styled } from '@mui/material/styles';
import { palette } from '@/lib/theme';
import { dmMono } from '@/lib/fonts';

export const Box = styled('div')({
    background: '#FFFAF5',
    border: `1px solid #F0DCC8`,
    borderLeft: `3px solid ${palette.gold}`,
    borderRadius: 12,
    padding: '22px 24px',
});

export const Title = styled('h4')({
    fontFamily: dmMono.style.fontFamily,
    fontSize: 10,
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    color: palette.gold,
    marginBottom: 14,
});

export const List = styled('ul')({
    listStyle: 'none',
    padding: 0,
    margin: 0,
});

export const Item = styled('li')({
    fontSize: 13,
    color: palette.textMid,
    padding: '5px 0 5px 18px',
    position: 'relative',
    lineHeight: 1.55,
    '&::before': {
        content: '"→"',
        position: 'absolute',
        left: 0,
        color: palette.gold,
    },
});