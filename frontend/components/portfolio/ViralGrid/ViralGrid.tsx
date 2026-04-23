'use client';

import '@/components/translator-i18n/i18n';
import * as S from './styles';
import Translator from '@/components/translator-i18n';
import { useTranslation } from 'react-i18next';

interface ViralCase {
  badge: string;
  topic: string;
  hook: string;
  insight: string;
  brandFit: string;
}

const viralContent = [
  {
    video: '/videos/video2.mp4',
    views: '760K+',
    link: 'https://www.instagram.com/p/DV5qnEjN2QJ/',
    gradient: 'linear-gradient(160deg, #0d1f2d 0%, #1a3a52 100%)',
  },
  {
    video: '/videos/video6.mp4',
    views: '2k+',
    link: 'https://www.instagram.com/p/DV0Z8xDDXgP/',
    gradient: 'linear-gradient(160deg, #1a1a0d 0%, #2d2800 100%)',
  },
  {
    video: '/videos/video5.mp4',
    views: '3k+',
    link: 'https://www.instagram.com/p/DV3D0d-DUPa/',
    gradient: 'linear-gradient(160deg, #1a0d06 0%, #2d1a0d 100%)',
  },
  {
    type: 'carousel',
    images: [
      '/imgs/1.png',
      '/imgs/2.png',
      '/imgs/3.png',
      '/imgs/4.png',
      '/imgs/5.png',
      '/imgs/6.png',
      '/imgs/7.png',
      '/imgs/8.png',
    ],
    views: '1k+',
    link: 'https://www.instagram.com/p/DXM3QWyAGyP/?img_index=1',
    gradient: 'linear-gradient(160deg, #0d1a0d 0%, #162616 100%)',
  },
];

export default function ViralGrid() {
  const { t } = useTranslation();
  const cases = t('home.viral.cases', { returnObjects: true }) as ViralCase[];

  return (
    <S.Grid>
      {viralContent.map((item, index) => {
        const caseItem = cases[index];
        if (!caseItem) return null;

        return (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <S.Card gradient={item.gradient}>
              {/* MEDIA */}
              {item.type === 'carousel' ? (
                <img
                  src={item.images[0]}
                  className="video"
                  width="100%"
                  alt="carousel preview"
                />
              ) : (
                <video
                  src={item.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="video"
                  width="100%"
                />
              )}

              <S.Content>
                <S.Badge>{caseItem.badge}</S.Badge>
                <S.Views>{item.views}</S.Views>
                <S.ViewsLabel>
                  <Translator path="home.viral.viewsLabel" />
                </S.ViewsLabel>
                <S.Topic>{caseItem.topic}</S.Topic>

                <S.Detail>
                  <strong><Translator path="home.viral.hookLabel" />:</strong> {caseItem.hook}
                </S.Detail>

                <S.Detail>
                  <strong><Translator path="home.viral.insightLabel" />:</strong> {caseItem.insight}
                </S.Detail>

                <S.Detail>
                  <strong><Translator path="home.viral.brandFitLabel" />:</strong> {caseItem.brandFit}
                </S.Detail>
              </S.Content>
            </S.Card>
          </a>
        );
      })}
    </S.Grid>
  );
}
