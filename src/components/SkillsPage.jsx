import React from 'react';
import "./SkillsPage.css";

const SkillsPage = () => {
  return (
    <>
      <section className='pt-100 pb-100'>
        <h2 className='text-center section-title'>Skills</h2>
        <dl className='skills'>
          <div className='skill'>
              <dt>デザイン・コーディング</dt>
              <dd>Illustrator/Photoshop</dd>
          </div>
          
          <div className='skill'>
              <dt>フロントエンド</dt>
              <dd>キャンプ/バーベキュー/<br></br>シュノーケル/ダイビング</dd>
          </div>
          
          <div className='skill'>
              <dt>バックエンド</dt>
              <dd>ワンピース（好きなキャラはジンベエ）</dd>
          </div>

          <div className='skill'>
              <dt>データベース</dt>
              <dd>特に短足なダックス/マンチカン</dd>
          </div>
          
          <div className='skill'>
              <dt>インフラ・サーバー</dt>
              <dd>海外旅行も国内旅行も好きです</dd>
          </div>
          
          <div className='skill'>
              <dt>その他</dt>
              <dd>ユニバも映画も小説も舞台も全部好きです</dd>
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