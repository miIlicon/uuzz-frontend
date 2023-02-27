/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { MainTitleProps } from '../@types/type';

export default function MainTitle({firstLine, secondLine} : MainTitleProps) {
    return (
        <div css={css`
            font-size: 20px;
            font-weight: 700;
            font-family: 'Nanum Myeongjo';
            text-align: left;
        `}>
            <p css={css`
                color: black;
            `}>
                {firstLine}
            </p>
            <p css={css`
                color: gray;
                margin-top: -10px;
            `}>
                {secondLine}
            </p>
        </div>
    )
}