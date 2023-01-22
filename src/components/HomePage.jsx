import React from 'react';
import { FaGithub } from "react-icons/fa";

const HomePage = () => {
  return (
    <section className='pb-100'>
        <div className='top-image'>
            <div className='top-container'>
                <h1>Kiyona Ono</h1>
                <p>Frontend Engineer</p>
            </div>
            
        </div>
        <div className='container'>
            <div className='pt-100'>
                <h2 className='text-center section-title'>About this site</h2>
                <p>ここはエンジニアKiyona Onoのポートフォリオサイトです。少しでも私について興味を持っていただけたら嬉しいです。</p> 
            </div>
            <div className='pt-100'>
                <h2 className='text-center section-title'>About me</h2>
                <div className='section-inner'>
                    <img src={`${process.env.PUBLIC_URL}/myPicture.png`} alt="プロフィール写真" className='profile-image' />
                    <div>
                        <p>大学では社会学専攻でしたが、新卒でエンジニアになりました。360°動画制作やIoT機器可視化システムのカスタマイズ開発をおこなってきました。社会人歴はまもなく丸3年になります。現在はReact×Laravelでバケットリストを作成するアプリを自己開発中です。</p>
                        <a href="https://github.com/kiyomaron" className='sns-icon' target='_blank'><FaGithub /></a>
                        <p>詳しいプロフィールへ</p>
                    </div>
                </div>
                
            </div>
            <div className='pt-100'>
                <h2 className='text-center section-title'>Works</h2>
                <p>今までに作成したものの紹介です。</p>
                <div className='works-list'>
                    <div className='work-container'>
                        <img className='work-image' src={`${process.env.PUBLIC_URL}/images/portfolio-img.png`} alt="" />
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
                <p>View more</p>
                
            </div>
            <div className='pt-100'>
                <h2 className='text-center section-title'>Skills</h2>
                <p>私のスキルをまとめました。</p>
                <p>View more</p>
            </div>
            <div className='pt-100'>
                <h2 className='text-center section-title'>Contact</h2>
                <p>ご連絡はこちらへお願いいたします。</p>
            </div>
        </div>
        
    </section>
  );
};

export default HomePage;