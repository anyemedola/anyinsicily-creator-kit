'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { styled } from '@mui/material/styles';
import { palette } from '@/lib/theme';
import { playfair, dmMono } from '@/lib/fonts';
import { useLang } from '@/lib/i18n/LangContext';

const NavRoot = styled('nav')({
  position: 'sticky',
  top: 0,
  zIndex: 200,
  background: 'rgba(253,240,239,0.92)',
  backdropFilter: 'blur(12px)',
  borderBottom: `1px solid ${palette.border}`,
  display: 'flex',
  alignItems: 'center',
  padding: '0 20px',
  '@media (max-width: 600px)': {
    padding: '0 10px',
  },
});

const NavLogo = styled('div')({
  fontFamily: playfair.style.fontFamily,
  fontStyle: 'italic',
  fontSize: 15,
  color: palette.rose,
  marginRight: 'auto',
  whiteSpace: 'nowrap',
  padding: '16px 0',
  '@media (max-width: 600px)': {
    fontSize: 12,
  },
});

const NavLink = styled(Link, {
  shouldForwardProp: (prop) => prop !== 'active',
})<{ active?: boolean }>(({ active }) => ({
  background: 'none',
  border: 'none',
  borderBottom: active ? `2px solid ${palette.rose}` : '2px solid transparent',
  color: active ? palette.rose : palette.textLight,
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
    color: palette.rose,
  },
  '@media (max-width: 600px)': {
    fontSize: 9,
    padding: '14px 8px',
  },
}));

const LangBtn = styled('button')({
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
    borderColor: palette.rose,
    color: palette.rose,
  },
  '@media (max-width: 600px)': {
    marginLeft: 6,
    padding: '4px 7px',
  },
});

export default function Nav() {
  const pathname = usePathname();
  const { dict, toggleLang } = useLang();

  const navItems = [
    { label: dict.nav.portfolio, href: '/' },
    { label: dict.nav.pitchEmails, href: '/emails' },
    { label: dict.nav.calendar, href: '/calendar' },
  ];

  return (
    <NavRoot>
      <NavLogo>Any in Sicily ✦</NavLogo>
      {navItems.map(({ label, href }) => (
        <NavLink key={href} href={href} active={pathname === href}>
          {label}
        </NavLink>
      ))}
      <LangBtn onClick={toggleLang}>{dict.nav.switchLang}</LangBtn>
    </NavRoot>
  );
}
