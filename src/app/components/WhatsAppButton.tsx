"use client"
import React, { useState } from 'react';
import WhatsAppChatBox from './WhatsAppChatBox';
import styles from '../../../styles/WhatsAppButton.module.css';
import { IoChatbubbleEllipsesSharp } from 'react-icons/io5';

const WhatsAppButton = () => {
  const [isChatBoxVisible, setChatBoxVisible] = useState(false);
  const [isLogoVisible, setLogoVisible] = useState(true);

  const toggleChatBox = () => {
    setChatBoxVisible(!isChatBoxVisible);
    setLogoVisible(isChatBoxVisible);
  };

  return (
    <div className={styles.whatsAppContainer}>
      {isLogoVisible && (
        <div className={`${styles.whatsAppButton} ${styles.logoAnimation}`} onClick={toggleChatBox}>
          <IoChatbubbleEllipsesSharp className='transform scale-x-[-1]' />
        </div>
      )}
      {isChatBoxVisible && <WhatsAppChatBox toggleChatBox={toggleChatBox} />}
    </div>
  );
};

export default WhatsAppButton;
