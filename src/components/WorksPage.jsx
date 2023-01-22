import React from 'react';

const WorksPage = () => {
  const popupDetail = () => {
    console.log("Hello");
  }
  return (
    <section className='pt-100'>
        <h2 className='text-center section-title'>Works</h2>
        <div className='works-list'>
          <div className='work-container'>
            <a onClick={popupDetail} href="#"><img className='work-image' src={`${process.env.PUBLIC_URL}/images/portfolio-img.png`} alt="" /></a>
            <h3>バケットリスト</h3>
            <p>死ぬまでにしたいことを登録して振り返ることができるWebアプリを作成中です。</p>
            <p>HTML/CSS/React/Bootstrap5/ Laravel/Docker</p>
          </div>
          <div className='work-container'>
            <img className='work-image' src={`${process.env.PUBLIC_URL}/images/portfolio-img.png`} alt="" />
            <h3>専修大学吹奏楽研究会公式WEBサイト</h3>
            <p>学生時代に所属していたサークルのWEBサイトを、OGとして作成しました。（現在はコロナ禍の影響で無料サービスに移行しています。）</p>
            <p>HTML/CSS/Bootstrap5/jQuery</p>
          </div>
          <div className='work-container'>
            <img className='work-image' src={`${process.env.PUBLIC_URL}/images/portfolio-img.png`} alt="" />
            <h3>ポートフォリオサイト</h3>
            <p>自分自身のこちらのポートフォリオサイトです。</p>
            <p>HTML/CSS/React/Bootstrap5</p>
          </div>
        </div>
        
    </section>
    
  );
};

export default WorksPage;