import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Structure() {
  return (
    <>
      <Header />
      <Outlet /> {/* 공통 컴포넌트 안으로 들어갈 내용입니다! */}
      <Footer />
    </>
  );
}
