import React from 'react';

const WorksPage = () => {
  return (
    <section className='pt-100'>
        <h2 className='text-center section-title'>Works</h2>
        <div>
          <img className='work-image' src={`${process.env.PUBLIC_URL}/myPicture.png`} alt="" />
          <h3>ポートフォリオ</h3>
          <p>自分自身のポートフォリオサイトです。</p>
          <p>HTML/CSS/React/Bootstrap5</p>
        </div>
    </section>
    
  );
};

export default WorksPage;