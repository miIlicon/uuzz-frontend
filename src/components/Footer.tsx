/** @jsxImportSource @emotion/react */
import React from 'react';
import Logo from '../images/logo.png';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import { WrapperProps } from '../@types/type';

export default function Footer() {
    return (
        <footer css={css`
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: #F9FAFB;
            font-size: 0.9rem;
            font-family: 'Nanum Myeongjo';
            letter-spacing: -0.03em;
            margin-top: 2rem;
            padding-top: 4rem;
            padding-bottom: 4rem;
            row-gap: 1rem;
            color: #333d4b;
        `}>
            <span>기록으로 우리의 자산인 시간을 더 아름답게 이야기해봐요,</span>
            <span>사용자에게 편안한 서비스를 제공하는 유유자적입니다.</span>
        </footer>
    )
}
