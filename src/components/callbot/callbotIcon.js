import React, { useState } from 'react';
import { RiRobot2Line } from 'react-icons/ri';
import { IoCall } from 'react-icons/io5';
import CallbotModal from './modal/Callbot';
import './CallbotIcon.css';

const CallbotIcon = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {/* 우측 하단에 고정된 아이콘 */}
      <div className="callbot-icon" onClick={openModal}>
        <RiRobot2Line size={40} color="#fff" />
        <IoCall size={30} color="#fff" className="call-icon" />
      </div>

      {/* 모달 창 */}
      {isModalOpen && <CallbotModal onClose={closeModal} />}
    </div>
  );
};

export default CallbotIcon;
