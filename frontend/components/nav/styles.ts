import { styled } from '@mui/material/styles';
import { palette } from '@/lib/theme';
import { playfair, dmMono } from '@/lib/fonts';
import Link from 'next/link';

export const NavRoot = styled('nav')({
    position: 'sticky',
    top: 0,
    zIndex: 200,
    background: 'rgba(255,247,250,0.92)',
    backdropFilter: 'blur(12px)',
    borderBottom: `1px solid ${palette.border}`,
    display: 'flex',
    alignItems: 'center',
    padding: '0 20px',
    '@media (max-width: 600px)': {
        padding: '0 10px',
    },
});

export const NavLogo = styled('a')({
    fontFamily: playfair.style.fontFamily,
    fontStyle: 'italic',
    fontSize: 15,
    color: palette.lemon,
    marginRight: 'auto',
    whiteSpace: 'nowrap',
    padding: '16px 0',
    textDecoration: 'none',
    '@media (max-width: 600px)': {
        fontSize: 12,
    },
});

export const InstagramBtn = styled('a')({
    background: palette.lemon,
    border: `1px solid ${palette.lemon}`,
    borderRadius: 6,
    color: palette.white,
    fontFamily: dmMono.style.fontFamily,
    fontSize: 9,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    textDecoration: 'none',
    padding: '5px 10px',
    marginLeft: 12,
    cursor: 'pointer',
    transition: 'all 0.2s',
    '&:hover': {
        background: palette.sea,
        borderColor: palette.sea,
        color: palette.charcoal,
    },
    '@media (max-width: 600px)': {
        marginLeft: 6,
        padding: '4px 7px',
        fontSize: 8,
    },
});

export const NavLink = styled(Link, {
    shouldForwardProp: (prop) => prop !== 'active',
})<{ active?: boolean }>(({ active }) => ({
    background: 'none',
    border: 'none',
    borderBottom: active ? `2px solid ${palette.lemon}` : '2px solid transparent',
    color: active ? palette.lemon : palette.textLight,
    fontFamily: dmMono.style.fontFamily,
    fontSize: 10,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    textDecoration: 'none',
    padding: '18px 16px',
    cursor: 'pointer',
    transition: 'all 0.2s',
    whiteSpace: 'nowrap',
    display: 'inline-block',
    '&:hover': {
        color: palette.lemon,
    },
    '@media (max-width: 600px)': {
        fontSize: 9,
        padding: '14px 8px',
    },
}));

export const LangBtn = styled('button')({
    background: 'none',
    border: `1px solid ${palette.border}`,
    borderRadius: 6,
    color: palette.textLight,
    fontFamily: dmMono.style.fontFamily,
    fontSize: 9,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    padding: '5px 10px',
    marginLeft: 12,
    cursor: 'pointer',
    transition: 'all 0.2s',
    '&:hover': {
        borderColor: palette.lemon,
        color: palette.lemon,
    },
    '@media (max-width: 600px)': {
        marginLeft: 6,
        padding: '4px 7px',
    },
});
