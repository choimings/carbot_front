// Layout.js
import React from 'react';
import Header from '../components/header/header'; // Header 컴포넌트 import
import Footer from '../components/footer/footer'; // Footer 컴포넌트 import
import { Outlet } from 'react-router-dom';
import './Layout.css';

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
