import { styled } from '@mui/material/styles';
import { palette } from '@/lib/theme';
import { dmMono } from '@/lib/fonts';

export const Root = styled('div')({
    fontFamily: dmMono.style.fontFamily,
    fontSize: 10,
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    color: palette.textLight,
    marginBottom: 14,
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    '&::before': {
        content: '""',
        width: 20,
        height: 1,
        background: palette.border,
        display: 'block',
        flexShrink: 0,
    },
    '&::after': {
        content: '""',
        flex: 1,
        height: 1,
        background: palette.border,
        display: 'block',
    },
});