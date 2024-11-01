import React, { useEffect } from 'react';
import './CarInfo.css';
import Eximg from '../../images/genesis.png';

const CarInfo = () => {
  // 페이지 로드 시 스크롤을 최상단으로 이동
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Main Content */}
      <div className="car-info-container">
        <div className="car-info-title">
          <h2>모델명: 포르쉐 마칸 40</h2>
        </div>

        <div className="car-info-content">
          <img src={Eximg} alt="포르쉐 마칸 40" className="car-image" />

          <div className="car-specifications">
            <p className="car-info-p">차량 정보</p>
            <ul className="car-info-ul">
              <li>엔진 종류</li>
              <li>배기량</li>
              <li>최대 출력</li>
              <li>최대 토크</li>
              <li>구동 방식</li>
              <li>공인 연비</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarInfo;
