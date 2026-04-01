'use client';

import * as S from './styles';
import { type DayCard } from '@/lib/calendarData';
import { typeLabels } from './styles';

export default function WeekGrid({ days }: { days: DayCard[] }) {
  return (
    <S.Grid>
      {days.map((day) =>
        day.isRest ? (
          <S.RestCard key={day.day}>
            <S.RestLabel>rest</S.RestLabel>
          </S.RestCard>
        ) : (
          <S.Card key={day.day}>
            <S.DayName>{day.day}</S.DayName>
            <S.Badge ctype={day.type}>{typeLabels[day.type]}</S.Badge>
            <S.Title>{day.title}</S.Title>
            <S.Hook>{day.hook}</S.Hook>
            {day.cta && <S.Cta>{day.cta}</S.Cta>}
          </S.Card>
        )
      )}
    </S.Grid>
  );
}
