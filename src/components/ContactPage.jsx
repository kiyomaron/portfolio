import React from 'react';
import { FaEnvelope, FaGithub } from "react-icons/fa";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <section className='contact'>
      <p>お問い合わせはTwitterまたはLinkedInからお願いいたします。</p>
      <div className='contact-container'>
          <div className='sns-icon'><FaEnvelope /></div>
          <p>kyn.maron947@gmail.com</p>
      </div>
      <div className='contact-container'>
          <a href="https://github.com/kiyomaron" className='sns-icon' target='_blank'>
            <FaGithub className='git-hub'/>
            <p>https://github.com/kiyomaron</p>
          </a>
      </div>
    </section>
  );
};

export default ContactPage;