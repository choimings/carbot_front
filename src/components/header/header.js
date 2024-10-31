import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.png';
import { MdOutlineLogin } from 'react-icons/md';
import { GoHomeFill } from 'react-icons/go';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <Link to="/notification" className="header-link">
          공지사항
        </Link>
      </div>

      <div className="header-logo">
        <Link to="/">
          <img src={Logo} alt="Carbot Logo" className="logo" />
        </Link>
      </div>

      <div className="header-right">
        <Link to="/mypage" className="header-link">
          <GoHomeFill className="small-icon" />
        </Link>
      </div>

      <div className="header-right">
        <Link to="/login" className="header-link">
          <MdOutlineLogin className="small-icon" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
