import React from 'react';
import { Facebook, Instagram, Telegram } from 'react-bootstrap-icons';

function SocialLinks() {
  return (
    <>
      <div className='social-links'>
        <a href='https://www.facebook.com/'>
          <Facebook color='white' size={20} />
        </a>
        <a href='https://www.instagram.com/'>
          <Instagram color='white' size={20} />
        </a>
        <a href='https://web.telegram.org/#/login'>
          <Telegram color='white' size={20} />
        </a>
      </div>
    </>
  );
}

export default SocialLinks;
