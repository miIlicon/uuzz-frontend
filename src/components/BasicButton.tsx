/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { BasicButtonProps } from '../@types/type';

export default function BasicButton({ text }: BasicButtonProps) {
  return (
    <div>
      <button
        css={css`
          color: #464444;
          border-color: #464444;
          border-width: 1px;
          border-radius: 20px;
          background-color: transparent;
          padding: 2px 13px;
          margin-left: 10px;
          cursor: pointer;
          &:hover {
            background-color: #464444;
            color: white;
          }
        `}
        type="button"
      >
        {text}
      </button>
    </div>
  );
}
