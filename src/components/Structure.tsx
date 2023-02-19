import React from 'react'
import Header from './Header'
import { WrapperProps } from '../@types/type'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

export default function Structure({ children }: WrapperProps) {
    return (
        <>
            <Header />
            <Outlet /> {/* 공통 컴포넌트 안으로 들어갈 내용입니다! */}
            <Footer />
        </>
    )
}
