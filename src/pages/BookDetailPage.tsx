/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { BookProps } from '../@types/type';
import ShareButton from '../components/ShareButton';
import BasicButton from '../components/BasicButton';

const BookInfo = ({ title, author, store }: BookProps) => {
  return (
    <div>
      <h1
        css={css`
          margin-top: 0px;
        `}
      >
        {title}
      </h1>
      <div
        css={css`
          font-size: 15px;
          line-height: 10px;
        `}
      >
        <p>저자 : {author}</p>
        <p>책 구매처 : {store}</p>
      </div>
    </div>
  );
};

const BookCover = ({ title, img }: BookProps) => {
  return (
    <img
      css={css`
        height: 440px;
        width: 300px;
        margin-left: 100px;
      `}
      src={img}
      alt={title}
    />
  );
};

export default function BookDetailPage() {
  const book = {
    title: '일간 이슬아 수필집',
    author: '이슬아',
    store: '소수책방',
    content:
      '이슬아의 책을 구입했다. \n그렇게 많은 사람들이 추천하고 살 때 애써 외면했는데,\n결국 집어들었다. 뭐가 잘나서 이 책을 외면했을까.\n이 책은 뭐가 잘나서 그렇게 많은 이들이 열광하는 걸까?\n600 페이지에 다다르는 압도적인 분량으로 압축된 누군가의 인생을 읽어나간다는 게,\n낯을 가리는 나로서는 쉽게 엄두가 나지 않는 일이기도 했다.\n피하려고 해도 피해지지 않는 사람이 있다.\n이슬아 작가는 자꾸 눈에 밟혔다.\n그는 매일 글을 연재하는 연재 노동자로 자신의 글을 구독한 구독자들에게 주말을 제외한\n평일 동안 메일로 글을 보냈다. 그 글을 모은 게 바로 <일간 이슬아 수필집>이다.어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구',
  };

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 50px 0;
      `}
    >
      <div>
        <div
          css={css`
            display: flex;
          `}
        >
          <div
            css={css`
              font-family: 'Nanum Myeongjo';
              text-align: left;
              height: 440px;
              width: 390px;
              font-weight: 500;
              color: #464444;
            `}
          >
            <BookInfo title={book.title} author={book.author} store={book.store} />
            <div
              css={css`
                height: 300px;
                font-size: 15px;
                line-height: 25px;
                overflow-y: scroll;
                padding-right: 50px;
                &::-webkit-scrollbar {
                  width: 5px;
                }
                &::-webkit-scrollbar-thumb {
                  background-color: #464444;
                }
              `}
            >
              <p>{book.content}</p>
            </div>
          </div>
          <BookCover img="https://search.pstatic.net/common/?src=https%3A%2F%2Fshopping-phinf.pstatic.net%2Fmain_3248716%2F32487161330.20230218110531.jpg&type=w276" />
        </div>
        <div
          css={css`
            display: flex;
            margin-top: 20px;
          `}
        >
          <ShareButton />
          <div
            css={css`
              display: flex;
              margin-left: 30px;
            `}
          >
            <BasicButton text="수정" />
            <BasicButton text="삭제" />
          </div>
        </div>
      </div>
    </div>
  );
}
