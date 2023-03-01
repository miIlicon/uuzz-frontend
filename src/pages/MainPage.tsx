/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { BookProps } from '../@types/type';
import MainTitle from '../components/MainTitle';
import Pagination from '../components/Pagination';

const Book = ({ title, img }: BookProps) => {
  return (
    <div
      css={css`
        display: block;
        text-align: left;
        margin: 10px 15px;
      `}
    >
      <img
        src={img}
        alt={title}
        css={css`
          height: 220px;
          width: 150px;
        `}
      />
      <p
        css={css`
          width: 150px;
          font-size: 12px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          color: gray;
        `}
      >
        {title}
      </p>
    </div>
  );
};

export default function MainPage() {
  const pageCount = 6;
  const bookListTest = [
    {
      title: '일간 이슬아 수필집',
      cover:
        'https://search.pstatic.net/common/?src=https%3A%2F%2Fshopping-phinf.pstatic.net%2Fmain_3248716%2F32487161330.20230218110531.jpg&type=w276',
    },
    {
      title: '내 마음을 돌보는 시간',
      cover:
        'https://search.pstatic.net/common/?src=https%3A%2F%2Fshopping-phinf.pstatic.net%2Fmain_3244392%2F32443920864.20221229074731.jpg&type=w216',
    },
    {
      title: '어느 날 대표님이 우리도 브랜딩 좀 해보자고 말했다',
      cover:
        'https://search.pstatic.net/common/?src=https%3A%2F%2Fshopping-phinf.pstatic.net%2Fmain_3245496%2F32454962522.20230216071255.jpg&type=w216',
    },
    {
      title: '내 방의 작은 식물은 언제나 나보다 큽니다',
      cover:
        'https://search.pstatic.net/common/?src=https%3A%2F%2Fshopping-phinf.pstatic.net%2Fmain_3244095%2F32440953327.20221019115933.jpg&type=w216',
    },
    {
      title: '세상에서 가장 먼 여행',
      cover:
        'https://search.pstatic.net/common/?src=https%3A%2F%2Fshopping-phinf.pstatic.net%2Fmain_3249717%2F32497172645.20221019101451.jpg&type=w216',
    },
    {
      title: '천문학이 밥 먹여 주니',
      cover:
        'https://search.pstatic.net/common/?src=https%3A%2F%2Fshopping-phinf.pstatic.net%2Fmain_3244103%2F32441032067.20221019124420.jpg&type=w216',
    },
    {
      title: '지루한 여행을 떠났으면 해',
      cover:
        'https://search.pstatic.net/common/?src=https%3A%2F%2Fshopping-phinf.pstatic.net%2Fmain_3243628%2F32436281420.20221231084045.jpg&type=w216',
    },
    {
      title: '나는 대한민국 상사맨이다',
      cover:
        'https://search.pstatic.net/common/?src=https%3A%2F%2Fshopping-phinf.pstatic.net%2Fmain_3243643%2F32436431667.20230131163117.jpg&type=w216',
    },
  ];

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        margin: 30px 300px;
      `}
    >
      <MainTitle
        firstLine="제가 읽고 감명깊었던 책들을,"
        secondLine="여기에 소개시켜드리고 있어요."
      />
      <div
        css={css`
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          padding: 0 50px;
          margin: 20px 0;
        `}
      >
        {bookListTest.map((book) => (
          <Book title={book.title} img={book.cover} />
        ))}
      </div>
      <Pagination pageCount={pageCount} />
    </div>
  );
}
