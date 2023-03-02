import React from 'react';
import { FaEnvelope, FaGithub } from "react-icons/fa";

const ContactPage = () => {
  return (
    <section className='contact'>
      <p>お問い合わせはTwitterまたはLinkedInからお願いいたします。</p>
      <div>
          <div className='sns-icon'><FaEnvelope /></div>
          <p>kyn.maron947@gmail.com</p>
      </div>
      <div>
          <a href="https://github.com/kiyomaron" className='sns-icon' target='_blank'><FaGithub /></a>
          <p>https://github.com/kiyomaron</p>
      </div>
    </section>
  );
};

export default ContactPage;