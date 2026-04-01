'use client';

import * as S from './styles';
import { usePathname } from 'next/navigation';
import { useLang } from '@/lib/i18n/LangContext';

export default function Nav() {
  const pathname = usePathname();
  const { dict, toggleLang } = useLang();

  const navItems = [
    { label: dict.nav.portfolio, href: '/' },
    { label: dict.nav.pitchEmails, href: '/emails' },
    { label: dict.nav.calendar, href: '/calendar' },
  ];

  return (
    <S.NavRoot>
      <S.NavLogo>Any in Sicily ✦</S.NavLogo>
      {navItems.map(({ label, href }) => (
        <S.NavLink key={href} href={href} active={pathname === href}>
          {label}
        </S.NavLink>
      ))}
      <S.LangBtn onClick={toggleLang}>{dict.nav.switchLang}</S.LangBtn>
    </S.NavRoot>
  );
}
