import React from 'react';
import "./SkillsPage.css";

const SkillsPage = () => {
  return (
    <>
      <section className='pt-100 pb-100'>
        <h2 className='text-center section-title'>Skills</h2>
        <dl className='skills'>
          <div className='skill'>
              <dt>コーディング</dt>
              <dd>HTML/CSS/</dd>
          </div>
          
          <div className='skill'>
              <dt>フロントエンド</dt>
              <dd>React</dd>
          </div>
          
          <div className='skill'>
              <dt>バックエンド</dt>
              <dd>node.js/PHP(Laravel)</dd>
          </div>

          <div className='skill'>
              <dt>データベース</dt>
              <dd>MSSQL/MongoDB</dd>
          </div>
          
          <div className='skill'>
              <dt>インフラ・サーバー</dt>
              <dd>Docker/Tomcat</dd>
          </div>
          
          <div className='skill'>
              <dt>デザイン・動画編集</dt>
              <dd>Illustrator/Photoshop/<br></br>PremirePro/AfterEffects</dd>
          </div>
        </dl>
      </section>

      <section className='pb-100'>
        <h2 className='text-center section-title'>Certifications</h2>
        <dl className='skills'>
          <div className='skill'>
              <dt>2018年6月</dt>
              <dd>TOEIC 850点</dd>
          </div>
          
          <div className='skill'>
              <dt>2019年6月</dt>
              <dd>基本情報技術者合格</dd>
          </div>
        </dl>
      </section>
    </>
    
    
  );
};

export default SkillsPage;