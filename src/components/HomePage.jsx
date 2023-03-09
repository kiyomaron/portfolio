import React from 'react';
import { FaEnvelope, FaGithub } from "react-icons/fa";
import Tilt from 'react-vanilla-tilt';

const HomePage = () => {

  return (
    <section>
        <div className='top-image'>
            <div className='top-container'>
                <Tilt id='card' options={{scale: 2, glare: 1, max: 35 }}>
                    <div className='content'>
                        <div className='content-inner'>
                            <div className='name-info'>
                                <h1>Frontend Engineer</h1>
                                <h2>大野 紀代菜</h2>
                                <p>Kiyona Ono</p>
                            </div>
                            <div className='image-box'>
                                <img src={`${process.env.PUBLIC_URL}/myPicture.png`} alt="プロフィール写真" className='profile-image' />
                                
                            </div>
                            
                        </div>
                        <div className='contact-info'>
                            <div className='sns-icon'><FaEnvelope /></div>
                            <p>kyn.maron947@gmail.com</p>
                        </div>
                        <div className='contact-info with-link'>
                            <a href="https://github.com/kiyomaron" className='sns-icon' target='_blank'><FaGithub /></a>
                            <p>https://github.com/kiyomaron</p>
                        </div>
                    </div>
                    <div className='hover-text'>
                        <h3>My Favorite Things: </h3>
                        <p>music, travel, design and coding etc.</p>
                    </div>
                    
                    
                </Tilt>
                
            </div>
        </div>
        {/* <div className='container'> */}
            {/* <div className='pt-100'>
                <h2 className='text-center section-title'>About this site</h2>
                <p>ここはエンジニアKiyona Onoのポートフォリオサイトです。少しでも私について興味を持っていただけたら嬉しいです。</p> 
            </div> */}
            {/* <div className='pt-100'>
                <h2 className='text-center section-title'>Works</h2>
                <p>今までに作成したものの紹介です。</p>
                <div className='works-list'>
                    <Work 
                        workImageSource={`${process.env.PUBLIC_URL}/images/bucket-list-img.png`}
                        workTitle="バケットリスト" 
                        description="死ぬまでにしたいことを登録して振り返ることができるWebアプリを作成中です。" 
                        skills="HTML/CSS/React/Bootstrap5/ Laravel/Docker"
                    />
                    <Work 
                        workImageSource={`${process.env.PUBLIC_URL}/images/portfolio-img.png`}
                        workTitle="専修大学吹奏楽研究会公式WEBサイト" 
                        description="死ぬまでにしたいことを登録して振り返ることができるWebアプリを作成中です。" 
                        skills="HTML/CSS/Bootstrap5/jQuery"
                    />
                    <Work 
                        workImageSource={`${process.env.PUBLIC_URL}/images/portfolio-img.png`}
                        workTitle="ポートフォリオサイト" 
                        description="死ぬまでにしたいことを登録して振り返ることができるWebアプリを作成中です。" 
                        skills="HTML/CSS/React/Bootstrap5/JavaScript"
                    />
                    
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
                        <p>HTML/CSS/React/Bootstrap5/JavaScript</p>
                    </div>
                </div>
                <p>View more</p>
            </div> */}
            {/* <div className='pt-100'>
                <h2 className='text-center section-title'>Skills</h2>
                <p>私のスキルをまとめました。</p>
                <p>View more</p>
            </div>
            <div className='pt-100'>
                <h2 className='text-center section-title'>Contact</h2>
                <p>ご連絡はこちらへお願いいたします。</p>
            </div> */}
        {/* </div> */}
        
    </section>
  );
};

export default HomePage;