import React, { useState } from 'react';
import { RiRobot2Line } from 'react-icons/ri';
import CallbotModal from '../callbot/modal/callbot';
import './callbotIcon.css';

const ChatbotIcon = () => {
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
      <div className="chatbot-icon" onClick={openModal}>
        <RiRobot2Line size={40} color="#fff" />
      </div>

      {/* 모달 창 */}
      {isModalOpen && <CallbotModal onClose={closeModal} />}
    </div>
  );
};

export default ChatbotIcon;
