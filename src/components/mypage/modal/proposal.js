import React, { useState } from 'react';
import './proposal.css';
import { MdOutlineClose } from 'react-icons/md';

function Proposal({ onClose }) {
  const [selectedDealer, setSelectedDealer] = useState('');
  const [customerRequest, setCustomerRequest] = useState('');

  const handleDealerSelect = (dealer) => {
    setSelectedDealer(dealer);
  };

  const handleSubmit = () => {
    alert(
      '감사합니다! 곧 딜러 배정 후 상담 전화 드리겠습니다. *상담 신청은 다른 딜러에게도 가능합니다'
    );
    onClose(); // alert 확인을 누르면 모달이 닫히도록 onClose 호출
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <div className="modal-logo">LOGO</div>
          <button className="modal-close" onClick={onClose}>
            <MdOutlineClose />
          </button>
        </div>

        <div className="modal-body">
          <div className="section">
            <p>1. 딜러 선택</p>
            <div className="dealer-options">
              {['딜러1', '딜러2', '딜러3', '딜러4', '딜러5'].map(
                (dealer, index) => (
                  <label key={index} className="dealer-option">
                    <input
                      type="radio"
                      name="dealer"
                      value={dealer}
                      checked={selectedDealer === dealer}
                      onChange={() => handleDealerSelect(dealer)}
                    />
                    {dealer}
                  </label>
                )
              )}
            </div>
          </div>

          <div className="section">
            <p>2. 고객 요청 사항</p>
            <textarea
              placeholder="요청 사항을 입력해 주세요."
              value={customerRequest}
              onChange={(e) => setCustomerRequest(e.target.value)}
            />
          </div>

          <button className="submit-button" onClick={handleSubmit}>
            구매 상담 신청
          </button>
        </div>
      </div>
    </div>
  );
}

export default Proposal;
