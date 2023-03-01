/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import { WrapperProps } from '../@types/type';
import Logo from '../images/logo.png';

const NavTabRight = ({ children }: WrapperProps) => {
  return (
    <div
      css={css`
        display: flex;
        column-gap: 4em;
        margin-right: auto;
        margin-left: 6em;
      `}
    >
      {children}
    </div>
  );
};

const NavTabLeft = ({ children }: WrapperProps) => {
  return (
    <div
      css={css`
        display: flex;
        column-gap: 4em;
        margin-left: auto;
        margin-right: 8em;
      `}
    >
      {children}
    </div>
  );
};

export default function Header() {
  return (
    <header
      css={css`
        width: 100%;
        height: 6em;
        // background-color: gray;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.9rem;
        font-family: 'Nanum Myeongjo';

        a {
          text-decoration: none;
          letter-spacing: -0.03em;
          color: #333d4b;
          transition: 0.4s all;

          &:hover {
            opacity: 70%;
          }
        }
      `}
    >
      <NavTabRight>
        <Link to="#!">독립서점 홈</Link>
        <Link to="#!">주인장의 일상</Link>
        <Link to="#!">우리 동네 독립서점</Link>
      </NavTabRight>
      <img
        src={Logo}
        alt="로고 이미지"
        css={css`
          position: absolute;
          width: 11rem;
        `}
      />
      <NavTabLeft>
        <Link to="#!">마이 페이지</Link>
        <Link to="#!">글쓰기</Link>
      </NavTabLeft>
    </header>
  );
}
