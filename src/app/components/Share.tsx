"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaTwitter, FaLinkedin, FaWhatsapp, FaFacebookF } from "react-icons/fa";

function generateShareLinks(url: string) {
  const encodedUrl = encodeURIComponent(url);

  return {
    whatsapp: `https://wa.me/?text=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
  };
}

const ShareButton: React.FC = () => {
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
  }, []);

  if (!currentUrl) return null;

  const shareLinks = generateShareLinks(currentUrl);

  return (
    <div className="flex sm:gap-4 gap-2">
      <Link
        href={shareLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Facebook"
        className="bg-black text-white p-2 rounded-full hover:bg-gray-200 dark:bg-gray-100 dark:text-gray-800 hover:dark:bg-gray-700 hover:dark:text-gray-200 hover:text-black transition-all duration-300"
      >
        <FaFacebookF className="sm:text-[16px] text-[12px]" />
      </Link>
      <Link
        href={shareLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Twitter"
        className="bg-black text-white p-2 rounded-full hover:bg-gray-200 dark:bg-gray-100 dark:text-gray-800 hover:dark:bg-gray-700 hover:dark:text-gray-200 hover:text-black transition-all duration-300"
      >
        <FaTwitter className="sm:text-[16px] text-[12px]" />
      </Link>
      <Link
        href={shareLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on LinkedIn"
        className="bg-black text-white p-2 rounded-full hover:bg-gray-200 dark:bg-gray-100 dark:text-gray-800 hover:dark:bg-gray-700 hover:dark:text-gray-200 hover:text-black transition-all duration-300"
      >
        <FaLinkedin className="sm:text-[16px] text-[12px]" />
      </Link>
      <Link
        href={shareLinks.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on WhatsApp"
        className="bg-black text-white p-2 rounded-full hover:bg-gray-200 dark:bg-gray-100 dark:text-gray-800 hover:dark:bg-gray-700 hover:dark:text-gray-200 hover:text-black transition-all duration-300"
      >
        <FaWhatsapp className="sm:text-[16px] text-[12px]" />
      </Link>
    </div>
  );
};

export default ShareButton;
