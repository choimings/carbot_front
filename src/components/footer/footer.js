import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">CARBOT</div>
      <div className="footer-copyright">
        ©2024 <span className="logo-colored">Carbot</span>. All Rights Reserved.
      </div>
      <div className="footer-text">
        개인정보 처리방침 | 이용약관 | 저작권 안내
      </div>
    </footer>
  );
};

export default Footer;
