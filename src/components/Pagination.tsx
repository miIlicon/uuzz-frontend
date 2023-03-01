/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { PageProps, PaginationProps } from '../@types/type';

const PageButton = ({ page, isCurrentPage }: PageProps) => {
  return (
    <button
      css={css`
        font-family: 'Nanum Myeongjo';
        background-color: ${isCurrentPage ? 'gray' : 'white'};
        color: ${isCurrentPage ? 'white' : 'gray'};
        border: 1px solid gray;
        border-radius: 50%;
        border-width: 1px;
        box-shadow: 0 0 0 0;
        margin: 0 2px;
        cursor: pointer;
      `}
    >
      {page}
    </button>
  );
};

export default function Pagination({ pageCount }: PaginationProps) {
  const currentPage = 1;

  function createPageButton(page: number) {
    let buttons = [];
    for (let i = 1; i < page + 1; i++) {
      buttons.push(<PageButton page={i} isCurrentPage={i === currentPage} />);
    }
    return buttons;
  }

  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 10px 0;
      `}
    >
      {createPageButton(pageCount)}
    </div>
  );
}
