"use client";

import * as S from './styles';
import { useEffect, useState } from "react";

export default function LemonCursor() {
    const [pos, setPos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const move = (e) => {
            setPos({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", move);
        return () => window.removeEventListener("mousemove", move);
    }, []);

    return (
        <S.CursorWrapper style={{ left: pos.x, top: pos.y }}>
            <S.Lemon>
                <S.Stem />
                <S.Shine />
            </S.Lemon>
        </S.CursorWrapper>
    );
}