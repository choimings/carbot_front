import React from 'react';
import './join.css';
import { Link } from 'react-router-dom';

const Join = () => {
  return (
    <div className='join-container'>
      <div className='join-box'>
        <h1>회원가입</h1>
        <form className='join-form'>
          {/* 입력창 박스 */}
          <div className='input-fields-box'>
            <div className='input-group'>
              <input type='email' placeholder='이메일 입력' />
              <button type='button' className='verify-button'>
                인증
              </button>
            </div>

            <div className='input-group'>
              <input type='text' placeholder='아이디 입력' />
              <button type='button' className='check-button'>
                중복 체크
              </button>
            </div>

            <input type='text' placeholder='전화번호 입력' />
            <input type='text' placeholder='이름 입력' />
            <input type='password' placeholder='비밀번호 입력' />
            <input type='password' placeholder='비밀번호 확인' />
          </div>

          {/* 출생년도/거주지 박스 */}
          <div className='birth-residence-box'>
            <select>
              <option>출생년도</option>
              {/* 필요한 옵션 추가 */}
            </select>
            <select>
              <option>거주지</option>
              {/* 필요한 옵션 추가 */}
            </select>
          </div>

          {/* 성별/차량 보유 여부 박스 */}
          <div className='gender-car-ownership-box'>
            <div className='checkbox-group'>
              <label>성별:</label>
              <label>
                <input type='checkbox' /> 남자
              </label>
              <label>
                <input type='checkbox' /> 여자
              </label>
            </div>

            <div className='checkbox-group'>
              <label>차량 보유 여부:</label>
              <label>
                <input type='checkbox' /> 보유
              </label>
              <label>
                <input type='checkbox' /> 미보유
              </label>
            </div>
          </div>

          {/* 이용 동의 박스 */}
          <div className='terms-box'>
            <label>
              <input type='checkbox' /> 이용약관에 동의합니다.
            </label>
            <label>
              <input type='checkbox' /> 개인정보 수집, 이용 동의에 동의합니다.
            </label>
            <label>
              <input type='checkbox' /> 개인정보 제3자 제공 동의에 동의합니다.
            </label>
            <label>
              <input type='checkbox' /> 저는 만 18세 이상입니다.
            </label>
          </div>

          <button type='submit' className='submit-button'>
            확인
          </button>

          <div className='footer-links'>
            <Link to='/login'>이미 회원이신가요? 로그인</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Join;
