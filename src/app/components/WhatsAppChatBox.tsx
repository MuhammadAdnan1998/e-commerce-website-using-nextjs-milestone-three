"use client";
import React, { useEffect, useState } from "react";
import { FaSmile } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import Image from "next/image";
import styles from "./../../../styles/WhatsAppButton.module.css";
import { Montserrat } from "next/font/google";
import AOS from "aos";
import "aos/dist/aos.css";

const montserrat = Montserrat({ subsets: ['latin'], weight: ["500"] })

interface WhatsAppChatBoxProps {
  toggleChatBox: () => void;
}

const WhatsAppChatBox: React.FC<WhatsAppChatBoxProps> = ({ toggleChatBox }) => {
  const [message, setMessage] = useState<string>("");

  const handleSendMessage = () => {
    if (message.trim()) {
      const whatsappUrl = `https://wa.me/03464365890?text=${encodeURIComponent(
        message
      )}`;
      window.open(whatsappUrl, "_blank");
    }
  };

  useEffect(() => {
    AOS.init({
        once: true,
        offset: 4,
    });
}, []);


  return (
    <div data-aos="fade-up"
    data-aos-duration="600" className={`${montserrat.className} bg-[#FbFbFA] rounded-2xl shadow-xl sm:h-[410px] h-[385px] sm:w-[350px] w-[85vw]`}>
      <div>
       
        <div  className={styles.body}>
          <h1 className="text-[45px] font-extrabold mb-2 sm:pl-2">Robiz</h1>
          <p className="text-[18px] font-semibold text-[#161616] sm:pl-2">How can we help?</p>

          <div className="divider my-2"></div>
          <p className="text-xs sm:pl-2">We typically reply within a few minutes</p>
        </div>

        <button
          className={`text-black absolute top-3 right-3`}
          onClick={toggleChatBox}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="sm:h-[190px] pb-[5vw]">
        <div className="flex gap-2 sm:m-5 m-4 mt-6 mb-20 items-center">
          <div className=" ">
            <Image
              src="/images/shafiq.jpeg"
              alt="Support Team"
              className="rounded-full w-full h-full object-cover"
              width={40}
              height={40}
            />
          </div>
          <div className="rounded-xl bg-gray-200 sm:p-3 p-2 flex items-center justify-center">
            <p className="text-[14px] font-base">Hello! I&apos;m from Robiz Support team.</p>
          </div>
        </div>
      </div>
      <hr />
      <div className={styles.footer}>
        <input
          type="text"
          placeholder="Send a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={styles.messageInput}
        />
        <FaSmile className={styles.emojiIcon} />
        <button className={styles.sendButton} onClick={handleSendMessage}>
          <IoSend />
        </button>
      </div>
    </div>
  );
};

export default WhatsAppChatBox;
