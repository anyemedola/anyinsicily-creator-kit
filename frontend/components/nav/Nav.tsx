'use client';

import * as S from './styles';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import Translator from '@/components/translator-i18n';

const INSTAGRAM_URL = 'https://www.instagram.com/anyinsicily/';

export default function Nav() {
  const pathname = usePathname();
  const { i18n } = useTranslation();

  useEffect(() => {
    const saved = localStorage.getItem('locale');
    if (saved && saved !== i18n.language) i18n.changeLanguage(saved);
  }, [i18n]);

  const navItems = [
    { labelKey: 'nav.portfolio', href: '/' },
    { labelKey: 'nav.pitchEmails', href: '/emails' },
    { labelKey: 'nav.calendar', href: '/calendar' },
  ];

  const switchLabel = i18n.language === 'en' ? 'PT' : 'EN';
  const toggleLang = () => {
    const next = i18n.language === 'en' ? 'pt' : 'en';
    i18n.changeLanguage(next);
    localStorage.setItem('locale', next);
  };

  return (
    <S.NavRoot>
      <S.NavLogo href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
        Any in Sicily
      </S.NavLogo>
      {navItems.map(({ labelKey, href }) => (
        <S.NavLink key={href} href={href} active={pathname === href}>
          <Translator path={labelKey} />
        </S.NavLink>
      ))}
      <S.InstagramBtn href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
        Instagram
      </S.InstagramBtn>
      <S.LangBtn onClick={toggleLang}>{switchLabel}</S.LangBtn>
    </S.NavRoot>
  );
}
