/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { iconProps } from '../@types/type';
import kakao from '../images/kakao.png';
import facebook from '../images/facebook.png';
import twitter from '../images/twitter.png';
import kakaostory from '../images/kakaostory.png';

const Icon = ({ url }: iconProps) => {
  return (
    <img
      css={css`
        width: 25px;
        height: 25px;
        cursor: pointer;
      `}
      src={url}
      alt=""
    />
  );
};

export default function ShareButton() {
  // const icons = ['../images/kakao.png', '../images/facebook.png', '../images/kakaostory.png', '../images/twitter.png'];
  const icons = [kakao, facebook, kakaostory, twitter];

  return (
    <div
      css={css`
        width: 121px;
        display: flex;
        justify-content: space-between;
      `}
    >
      {icons.map((icon) => (
        <Icon url={icon} />
      ))}
    </div>
  );
}
