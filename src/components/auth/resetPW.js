import React from 'react';
import './resetPW.css';

const resetPW = () => {
  return (
    <div className='resetPW-container'>
      <div className='resetPW-box'>
        <h1>비밀번호 재설정</h1>
        <p>새 비밀번호</p>
        <input type='password' placeholder='새 비밀번호 입력'></input>
        <p>새 비밀번호 확인</p>
        <input type='password' placeholder='새 비밀번호 확인'></input>
      </div>
      {/* <div className='resetPW-button'>
        <button type='submit'>확인</button>
      </div> */}
    </div>
  );
};

export default resetPW;
