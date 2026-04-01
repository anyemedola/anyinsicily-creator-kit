'use client';

import * as S from './styles';
import { useLang } from '@/lib/i18n/LangContext';

const viralContent = [
  { video: '/videos/video1.mp4', badge: '🔥 Top reel', views: '2M+', topic: '"In Italy we say..." — culture & humor', gradient: 'linear-gradient(160deg, #3d1a1a 0%, #1a0d0d 100%)' },
  { video: '/videos/video2.mp4', badge: 'Viral', views: '600K+', topic: '"In Italy we say..." — culture & humor', gradient: 'linear-gradient(160deg, #1a2a3a 0%, #0d1a25 100%)' },
  { video: '/videos/video3.mp4', badge: 'Growing', views: '19k+', topic: '"In Germany they say..." — culture & humor', gradient: 'linear-gradient(160deg, #1a2a1a 0%, #0d1a0d 100%)' },
  { video: '/videos/video4.mp4', badge: 'Growing', views: '16k+', topic: '"In Italy we say..." — culture & humor', gradient: 'linear-gradient(160deg, #2a1a2a 0%, #1a0d1a 100%)' },
];

export default function ViralGrid() {
  const { dict } = useLang();

  return (
    <S.Grid>
      {viralContent.map(({ video, badge, views, topic, gradient }) => (
        <S.Card key={views} gradient={gradient}>
          <video src={video} autoPlay muted loop playsInline className="video" width={'100%'} />
          <S.Content>
            <S.Badge>{badge}</S.Badge>
            <S.Views>{views}</S.Views>
            <S.ViewsLabel>{dict.home.viral.viewsLabel}</S.ViewsLabel>
            <S.Topic>{topic}</S.Topic>
          </S.Content>
        </S.Card>
      ))}
    </S.Grid>
  );
}
