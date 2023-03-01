import { Emotion } from "@emotion/css/types/create-instance";
import React from "react";

export interface WrapperProps {
    children: React.ReactNode;
}

export interface MainTitleProps {
    firstLine: string;
    secondLine: string;
}

export interface BookProps {
    title: string;
    img: string;
}

export interface PageProps {
    page: number;
    isCurrentPage: Boolean;
}

export interface PaginationProps {
    pageCount: number;
}