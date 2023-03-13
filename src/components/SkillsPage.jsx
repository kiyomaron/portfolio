import React from 'react';
import "./SkillsPage.css";
import { FaDatabase, FaPalette, FaLaptopCode, FaLaptop, FaServer } from "react-icons/fa";

const SkillsPage = () => {
  return (
    <>
      <section className='pt-100 pb-100'>
        <h2 className='text-center section-title'>Skills</h2>
        <dl className='skills'>
          <div className='skill'>
            <h3>コーディング</h3>
            <FaLaptopCode  className='icon' />
            <div className='skill-detail'>
              <dt>HTML</dt>
              <dd>3年6ヶ月</dd>
              <p>ホームページを作成できます</p>
              <dt>CSS</dt>
              <dd>3年6ヶ月</dd>
              <p>ホームページを作成できます</p>
            </div>
          </div>
          
          <div className='skill'>
            <h3>フロントエンド</h3>
            <FaLaptopCode  className='icon' />
            <div className='skill-detail'>
              <dt>React</dt>
              <dd>6ヶ月</dd>
              <p>SPAを作成できます</p>
            </div>
          </div>
          
          <div className='skill'>
            <h3>バックエンド</h3>
            <FaLaptopCode  className='icon' />
            <div className='skill-detail'>
              <dt>Node.js</dt>
              <dd>6ヶ月</dd>
              <dt>PHP(Laravel)</dt>
              <dd>6ヶ月</dd>
            </div>
          </div>

          <div className='skill'>
            <h3>データベース</h3>
            <FaDatabase className='icon' />
            <div className='skill-detail'>
              <dt>MSSQL</dt>
              <dd>1年</dd>
              <dt>MongoDB</dt>
              <dd>3ヶ月</dd>
            </div>
          </div>
          
          <div className='skill'>
            <h3>インフラ・サーバー</h3>
            <FaServer className='icon' />
            <div className='skill-detail'>
              <dt>Docker</dt>
              <dd>6ヶ月</dd>
              <dt>Tomcat</dt>
              <dd>1年</dd>
            </div>
          </div>
          
          <div className='skill'>
            <h3>デザイン・動画編集</h3>
            <FaPalette className='icon' />
            <div className='skill-detail'>
              <dt>Illustrator</dt>
              <dd>1年6ヶ月</dd>
              <dt>Photoshop</dt>
              <dd>1年6ヶ月</dd>
              <dt>PremirePro</dt>
              <dd>1年6ヶ月</dd>
              <dt>AfterEffects</dt>
              <dd>1年6ヶ月</dd>
              <dt>Blender</dt>
              <dd>1年6ヶ月</dd>
            </div>
          </div>
          <div className='skill'>
            <h3>その他</h3>
            <FaLaptop className='icon' />
            <div className='skill-detail'>
              <dt>GitHub</dt>
              <dd>1年</dd>
              <dt>Slack</dt>
              <dd>6ヶ月</dd>
              <dt>Chatwork</dt>
              <dd>1年2ヶ月</dd>
              <dt>ThingWorx</dt>
              <dd>1年3ヶ月</dd>
            </div>
          </div>
          <div className='skill'>
              <h3>資格</h3>
              <div className='skill-detail'>
                <dt>2018年6月</dt>
                <dd>TOEIC 850点</dd>
                <dt>2019年6月</dt>
                <dd>基本情報技術者合格</dd>
              </div>
              
          </div>

        </dl>
       
      </section>
    </>
    
    
  );
};

export default SkillsPage;