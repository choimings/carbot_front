import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';

const Login = () => {
  const [isDealerLogin, setIsDealerLogin] = useState(false);

  const toggleLoginMode = () => {
    setIsDealerLogin(!isDealerLogin);
  };

  return (
    <div className='page-container'>
      <section className='login-container'>
        <div className='login-box'>
          <div className='login-box-text'>
            <h1>{isDealerLogin ? '딜러 로그인' : '로그인'}</h1>
            <a href='#' className='corporate-login' onClick={toggleLoginMode}>
              {isDealerLogin ? '개인 로그인' : '딜러 로그인'}
            </a>
          </div>

          <div className='login-inputs'>
            {isDealerLogin ? (
              <>
                <input type='text' placeholder='사원번호 입력' />
                <input type='password' placeholder='비밀번호 입력' />
              </>
            ) : (
              <>
                <input type='text' placeholder='아이디 입력' />
                <input type='password' placeholder='비밀번호 입력' />
              </>
            )}
            <button className='login-button'>
              {isDealerLogin ? '딜러 로그인' : '로그인'}
            </button>
          </div>

          <div className='help-links'>
            <Link to='/findID'>아이디 찾기</Link> |{' '}
            <Link to='/findPW'>비밀번호 찾기</Link>
            <p>
              회원이 아니신가요?{' '}
              <Link to='/join' className='signup-link'>
                회원가입
              </Link>
            </p>
          </div>
        </div>
      </section>
      //{' '}
    </div>
  );
};

export default Login;
